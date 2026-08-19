import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/utils/admin";
import { createAdminClient } from "@/utils/supabase/admin";

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { project_id, member_id, name, contribution_percent, amount } = await req.json();
  if (!project_id) {
    return NextResponse.json({ error: "Project wajib dipilih." }, { status: 400 });
  }
  const memberId = member_id || null;
  const memberName = String(name ?? "").trim();
  if (!memberId && !memberName) {
    return NextResponse.json(
      { error: "Pilih anggota atau isi nama kontributor." },
      { status: 400 }
    );
  }
  const percent = Number(contribution_percent);
  if (!percent || percent <= 0) {
    return NextResponse.json({ error: "Persentase kontribusi harus lebih dari 0." }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data: members } = await supabase
    .from("project_members")
    .select("contribution_percent")
    .eq("project_id", project_id);

  const currentTotal = (members ?? []).reduce((s: number, m: any) => s + Number(m.contribution_percent), 0);
  if (currentTotal + percent > 100) {
    return NextResponse.json(
      { error: `Total kontribusi melebihi 100% (sekarang ${currentTotal}% + ${percent}%).` },
      { status: 400 }
    );
  }

  let resolvedName = memberName;
  if (memberId && !resolvedName) {
    const { data: tm } = await supabase.from("team_members").select("name").eq("id", memberId).single();
    resolvedName = tm?.name ?? "";
  }

  const { error } = await supabase.from("project_members").insert({
    project_id,
    member_id: memberId,
    name: resolvedName || null,
    contribution_percent: percent,
    amount: amount === "" || amount == null ? null : Number(amount),
  });

  if (error) return NextResponse.json({ error: "Gagal menambahkan anggota: " + error.message }, { status: 400 });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "ID wajib diisi." }, { status: 400 });

  const supabase = createAdminClient();
  const { error } = await supabase.from("project_members").delete().eq("id", id);
  if (error) return NextResponse.json({ error: "Gagal menghapus: " + error.message }, { status: 400 });

  return NextResponse.json({ ok: true });
}
