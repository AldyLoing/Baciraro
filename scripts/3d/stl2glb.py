#!/usr/bin/env python3.11
"""Convert STL/3MF files (public/produk/3d/*.stl, *.3mf) to web-ready GLB (public/models/).

Dependency: /opt/homebrew/bin/python3.11 with trimesh + fast-simplification + networkx + lxml.

Filename convention: nama file (tanpa ekstensi) dipetakan ke slug produk via
SLUG_MAP; fallback: slugify(nama). Untuk .3mf multi-object, semua objek digabung
menjadi satu mesh. Untuk pengurangan segitiga (slicer bisa juta-an segitiga),
tambahkan slug ke MAX_FACES.
"""

import os
import sys
import time

import fast_simplification
import numpy as np
import trimesh

STL_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "public", "produk", "3d")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "public", "models")

SLUG_MAP = {
    "Jimothy_Raccoon": "3d-jimothy-raccoon",
    "DRAGON_001": "3d-dragon",
    # @MKONAPELSKY free-to-sell batch
    "DUCK+low+QUALITY+3MF": "3d-duck",
    "articulated+fox+3mf": "3d-flexi-fox",
    "articulated+frog+three+colors+3mf": "3d-frog",
    "articulated+worm+3mf": "3d-flexi-worm",
    "carrot+articulated+v2+bigger+3mf": "3d-carrot",
    "catch+all": "3d-spiral-tray",
    "flexi+christmas+tree+ornament+3mf": "3d-flexi-christmas-tree",
    "heart+fidget+spinner+3mf": "3d-valentine-gear",
    "hexagon+drip+plate+3mf": "3d-hex-drip",
    "infinity+cube+WITH+AMS+3mf": "3d-valentine-cube",
    "large+catch+all": "3d-wave-tray",
    "lizard+articulated+3mf": "3d-lizard",
    "mesh+catchall+bowl+3mf": "3d-mesh-bowl",
    "monster+v6+one+color+3mf": "3d-flexi-monster",
    "panda+single+color+3mf": "3d-flexi-bear",
    "small+daisy+magnet": "3d-daisy-magnets",
    "spiral+cut+bowl": "3d-spiral-bowl",
    "standing+dinosaur+3mf": "3d-mini-dino",
    "tiger+pendant+3mf": "3d-tiger-necklace",
    "unicorn+flexi+single+color+small+3mf": "3d-flexi-unicorn",
}

MAX_FACES = {
    "3d-dragon": 150000,
    "3d-mesh-bowl": 150000,
    "3d-flexi-monster": 150000,
    "3d-valentine-gear": 150000,
    "3d-tiger-necklace": 130000,
    "3d-spiral-tray": 130000,
    "3d-wave-tray": 130000,
    "3d-valentine-cube": 150000,
    "3d-duck": 150000,
    "3d-flexi-worm": 150000,
    "3d-flexi-bear": 120000,
    "3d-mini-dino": 120000,
    "3d-daisy-magnets": 120000,
}

CYAN = (0x22, 0xD3, 0xEE, 255)


def slugify(name):
    s = "".join(c if c.isalnum() else "-" for c in name.lower()).strip("-")
    return f"3d-{s}"


def load_mesh(path):
    m = trimesh.load(path, force="scene")
    geoms = [g for g in m.geometry.values() if hasattr(g, "faces") and len(g.faces)]
    if not geoms:
        raise ValueError("no mesh geometry in scene")
    if len(geoms) == 1:
        return geoms[0]
    return trimesh.util.concatenate(geoms)


def build(input_path, slug):
    t0 = time.time()
    mesh = load_mesh(input_path)
    n0 = len(mesh.faces)
    print(f"== {os.path.basename(input_path)} -> {slug}.glb", flush=True)
    print(f"  loaded {len(mesh.vertices)}v/{n0}f in {time.time()-t0:.1f}s", flush=True)

    target = MAX_FACES.get(slug)
    if target and n0 > target:
        pts, faces = fast_simplification.simplify(
            mesh.vertices, mesh.faces, target_count=target, agg=7.0
        )
        mesh = trimesh.Trimesh(vertices=pts, faces=faces, process=False)
        print(
            f"  simplified to {len(mesh.vertices)}v/{len(mesh.faces)}f in {time.time()-t0:.1f}s",
            flush=True,
        )

    span = mesh.extents
    if max(span) > 500:
        mesh.apply_scale(100.0 / max(span))
        print(
            f"  rescaled extents to {mesh.extents.round(1)} mm (was {span.round(1)})",
            flush=True,
        )

    b = mesh.bounds
    mesh.apply_translation([-(b[0][0] + b[1][0]) / 2, -(b[0][1] + b[1][1]) / 2, -b[0][2]])
    mesh.visual = trimesh.visual.ColorVisuals(
        mesh, vertex_colors=np.array([CYAN] * len(mesh.vertices), dtype=np.uint8)
    )

    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, f"{slug}.glb")
    mesh.export(out)
    print(
        f"  extents {mesh.extents.round(1)} mm, {os.path.getsize(out)//1024} KB, {time.time()-t0:.1f}s",
        flush=True,
    )


def main():
    os.makedirs(STL_DIR, exist_ok=True)
    files = sorted(
        f
        for f in os.listdir(STL_DIR)
        if f.lower().endswith(".stl") or f.lower().endswith(".3mf")
    )
    if not files:
        print(f"No .stl/.3mf files found in {STL_DIR}")
        sys.exit(0)
    for f in files:
        base = os.path.splitext(f)[0]
        slug = SLUG_MAP.get(base, slugify(base))
        build(os.path.join(STL_DIR, f), slug)
    print(f"\nDone. {len(files)} model(s) converted.")


if __name__ == "__main__":
    main()