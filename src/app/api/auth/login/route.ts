import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDb } from "@/lib/db";

const SECRET = process.env.JWT_SECRET || "baciraro-secret-dev";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const db = getDb();

  const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as { id: number; username: string; password: string; name: string } | undefined;

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id, username: user.username, name: user.name }, SECRET, { expiresIn: "7d" });

  const res = NextResponse.json({ user: { id: user.id, username: user.username, name: user.name } });
  res.cookies.set("token", token, { httpOnly: true, secure: false, sameSite: "lax", path: "/", maxAge: 7 * 24 * 60 * 60 });

  return res;
}
