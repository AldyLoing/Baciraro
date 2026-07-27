import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const { review_text, review_rating } = await req.json();
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("qr_codes")
    .update({
      review_text: review_text || "",
      review_rating: review_rating || 0,
      reviewed_at: new Date().toISOString(),
    })
    .eq("code", code);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
