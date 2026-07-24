import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("qr_codes")
    .select("*")
    .eq("code", code)
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

  const { error } = await supabase
    .from("qr_codes")
    .update({
      buyer_name: buyer_name || "",
      buyer_phone: buyer_phone || "",
      claimed_at: new Date().toISOString(),
    })
    .eq("code", code);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
