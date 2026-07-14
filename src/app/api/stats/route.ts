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
  const stats = db.prepare("SELECT * FROM waste_stats ORDER BY id DESC LIMIT 1").get();
  return NextResponse.json({ stats: stats || { organic_kg: 0, inorganic_kg: 0, products_count: 0 } });
}

export async function PUT(req: NextRequest) {
  const user = getUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { organic_kg, inorganic_kg, products_count } = await req.json();
  const db = getDb();

  const existing = db.prepare("SELECT id FROM waste_stats ORDER BY id DESC LIMIT 1").get() as { id: number } | undefined;

  if (existing) {
    db.prepare("UPDATE waste_stats SET organic_kg=?, inorganic_kg=?, products_count=?, updated_at=datetime('now') WHERE id=?").run(organic_kg, inorganic_kg, products_count, existing.id);
  } else {
    db.prepare("INSERT INTO waste_stats (organic_kg, inorganic_kg, products_count) VALUES (?, ?, ?)").run(organic_kg, inorganic_kg, products_count);
  }

  return NextResponse.json({ ok: true });
}
