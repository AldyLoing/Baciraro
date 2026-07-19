import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/db";

const SECRET = process.env.JWT_SECRET || "baciraro-secret-dev";

function getUser(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET) as { id: number; username: string; name: string };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getDb();
  const product = db.prepare("SELECT * FROM products WHERE slug = ? AND is_active = 1").get(slug);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ product });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const user = getUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const { title, description, category, story, materials, total_plastic_kg, image_url, gallery, is_active } = await req.json();
  const db = getDb();

  try {
    const stmt = db.prepare(`
      UPDATE products SET title = ?, description = ?, category = ?, story = ?,
        materials = ?, total_plastic_kg = ?, image_url = ?, gallery = ?,
        is_active = ?, updated_at = datetime('now')
      WHERE slug = ?
    `);
    stmt.run(
      title, description, category, story,
      JSON.stringify(materials || []), total_plastic_kg || 0, image_url || "",
      JSON.stringify(gallery || []), is_active ?? 1, slug
    );
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const user = getUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const db = getDb();
  db.prepare("DELETE FROM products WHERE slug = ?").run(slug);
  return NextResponse.json({ ok: true });
}
