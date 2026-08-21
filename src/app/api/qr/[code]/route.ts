import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { createAdminClient } from "@/utils/supabase/admin";

const SECRET = process.env.JWT_SECRET || "baciraro-secret-dev";

function getCustomer(req: NextRequest) {
  const token = req.cookies.get("customer_token")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET) as { id: number; email: string; name: string; role: string };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("qr_codes")
    .select("*, products!inner(title, image_url, points_per_scan)")
    .eq("code", code)
    .eq("is_event", false)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: "QR code not found" }, { status: 404 });
  }

  return NextResponse.json({ qr: data });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const { buyer_name, buyer_phone } = await req.json();
  const supabase = createAdminClient();
  const customer = getCustomer(req);

  const { data: qr } = await supabase
    .from("qr_codes")
    .select("id, product_slug, buyer_name, claimed_at")
    .eq("code", code)
    .eq("is_event", false)
    .single();

  if (!qr) {
    return NextResponse.json({ error: "QR code not found" }, { status: 404 });
  }

  if (qr.claimed_at || qr.buyer_name) {
    return NextResponse.json({ error: "QR code sudah diklaim sebelumnya" }, { status: 409 });
  }

  const { error } = await supabase
    .from("qr_codes")
    .update({
      buyer_name: buyer_name || "",
      buyer_phone: buyer_phone || "",
      customer_id: customer?.id || null,
      claimed_at: new Date().toISOString(),
    })
    .eq("code", code);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (customer) {
    const { data: product } = await supabase
      .from("products")
      .select("points_per_scan")
      .eq("slug", qr.product_slug)
      .single();

    const points = product?.points_per_scan || 10;

    await supabase.from("points_transactions").insert({
      customer_id: customer.id,
      qr_code_id: qr.id,
      points,
      description: `Klaim produk ${qr.product_slug}`,
    });

    const { data: cust } = await supabase
      .from("customers")
      .select("total_points")
      .eq("id", customer.id)
      .single();

    if (cust) {
      await supabase
        .from("customers")
        .update({ total_points: (cust.total_points || 0) + points })
        .eq("id", customer.id);
    }
  }

  return NextResponse.json({ ok: true });
}
