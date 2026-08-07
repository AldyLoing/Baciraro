#!/usr/bin/env python3.11
"""Convert STL files (public/produk/3d/*.stl) to web-ready GLB (public/models/).

Dependency: /opt/homebrew/bin/python3.11 with trimesh + fast-simplification.

Filename convention: nama file STL (tanpa ekstensi) dipetakan ke slug produk via
SLUG_MAP; fallback: slugify(nama). Untuk pengurangan segitiga (STL slicer bisa
juta-an segitiga), tambahkan slug ke MAX_FACES.
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
}

MAX_FACES = {
    "3d-dragon": 150000,
}

CYAN = (0x22, 0xD3, 0xEE, 255)


def slugify(name):
    s = "".join(c if c.isalnum() else "-" for c in name.lower()).strip("-")
    return f"3d-{s}"


def build(input_path, slug):
    t0 = time.time()
    mesh = trimesh.load(input_path)
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
    stls = sorted(f for f in os.listdir(STL_DIR) if f.lower().endswith(".stl"))
    if not stls:
        print(f"No .stl files found in {STL_DIR}")
        sys.exit(0)
    for f in stls:
        base = os.path.splitext(f)[0]
        slug = SLUG_MAP.get(base, slugify(base))
        build(os.path.join(STL_DIR, f), slug)
    print(f"\nDone. {len(stls)} model(s) converted.")


if __name__ == "__main__":
    main()
