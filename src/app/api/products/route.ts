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

export async function GET() {
  const db = getDb();
  const products = db.prepare("SELECT * FROM products WHERE is_active = 1 ORDER BY id DESC").all();
  return NextResponse.json({ products });
}

export async function POST(req: NextRequest) {
  const user = getUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug, title, description, category, story, materials, total_plastic_kg, image_url, gallery } = await req.json();
  const db = getDb();

  try {
    const stmt = db.prepare(`
      INSERT INTO products (slug, title, description, category, story, materials, total_plastic_kg, image_url, gallery)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      slug, title, description, category, story || "",
      JSON.stringify(materials || []), total_plastic_kg || 0, image_url || "",
      JSON.stringify(gallery || [])
    );
    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
