import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;

  const supabase = createAdminClient();

  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === "customer-photos");
  if (!exists) {
    await supabase.storage.createBucket("customer-photos", { public: true });
  }

  const { data, error } = await supabase.storage
    .from("customer-photos")
    .upload(`photos/${filename}`, buffer, {
      contentType: "image/jpeg",
      upsert: false,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: urlData } = supabase.storage
    .from("customer-photos")
    .getPublicUrl(data.path);

  return NextResponse.json({ url: urlData.publicUrl });
}
