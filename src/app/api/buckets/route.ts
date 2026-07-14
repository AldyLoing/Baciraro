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
  const buckets = db.prepare("SELECT * FROM compost_buckets ORDER BY id DESC").all();
  return NextResponse.json({ buckets });
}

export async function POST(req: NextRequest) {
  const user = getUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { code, start_date, estimated_harvest, status, type, material, notes } = await req.json();
  const db = getDb();

  try {
    const stmt = db.prepare(`
      INSERT INTO compost_buckets (code, start_date, estimated_harvest, status, type, material, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(code, start_date, estimated_harvest, status || "fermenting", type || "both", material || "", notes || "");
    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
