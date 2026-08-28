import { readdirSync, renameSync, mkdirSync, existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const DL = join(homedir(), "Downloads");

// Target folders (existing "dialog budaya" folder is reused)
const folders = [
  "Baciraro",
  "ORDERS",
  "Lamaran & CV",
  "Dokumen Pribadi",
  "Foto Tim",
  "3D Print",
  "Media Pribadi",
  "KREDENSIAL",
  "Installer",
  "Lainnya",
];
for (const f of folders) {
  const p = join(DL, f);
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

// Ordered rules: first match wins
const rules = [
  { re: /github-recovery-codes/i, dir: "KREDENSIAL" },
  { re: /orders-app/i, dir: "KREDENSIAL" },
  { re: /dialog budaya/i, dir: "dialog budaya" },
  { re: /pegangan_khusus/i, dir: "dialog budaya" },
  { re: /rencana_persiapan_dialog/i, dir: "dialog budaya" },
  { re: /production treatment/i, dir: "dialog budaya" },
  { re: /pembagian_tugas_hari-h/i, dir: "dialog budaya" },
  { re: /application letter/i, dir: "Lamaran & CV" },
  { re: /\bcv\b/i, dir: "Lamaran & CV" },
  { re: /transkrip_2110/i, dir: "Lamaran & CV" },
  { re: /tes rekrutmen/i, dir: "Lamaran & CV" },
  { re: /materi_belajar_live_coding/i, dir: "Lamaran & CV" },
  { re: /ijazah/i, dir: "Lamaran & CV" },
  { re: /ktp/i, dir: "Dokumen Pribadi" },
  { re: /kk\.pdf/i, dir: "Dokumen Pribadi" },
  { re: /sertifikat/i, dir: "Dokumen Pribadi" },
  { re: /putih emas merah/i, dir: "Dokumen Pribadi" },
  { re: /daftar_penerima_honor/i, dir: "Dokumen Pribadi" },
  { re: /pengumuman-rekrutmen-pjlp/i, dir: "Dokumen Pribadi" },
  { re: /aldy/i, dir: "Foto Tim" },
  { re: /clay/i, dir: "Foto Tim" },
  { re: /daniel kamagi/i, dir: "Foto Tim" },
  { re: /faith alexander/i, dir: "Foto Tim" },
  { re: /friestha/i, dir: "Foto Tim" },
  { re: /giordyano/i, dir: "Foto Tim" },
  { re: /given/i, dir: "Foto Tim" },
  { re: /hizkia/i, dir: "Foto Tim" },
  { re: /jazel/i, dir: "Foto Tim" },
  { re: /jemsi/i, dir: "Foto Tim" },
  { re: /kevin pesik/i, dir: "Foto Tim" },
  { re: /natasya/i, dir: "Foto Tim" },
  { re: /nobel/i, dir: "Foto Tim" },
  { re: /owen/i, dir: "Foto Tim" },
  { re: /rizky mema/i, dir: "Foto Tim" },
  { re: /\.stl$/i, dir: "3D Print" },
  { re: /\.3mf$/i, dir: "3D Print" },
  { re: /spider-man\+flexi\.zip/i, dir: "3D Print" },
  { re: /spiderman flexi/i, dir: "3D Print" },
  { re: /\.dmg$/i, dir: "Installer" },
  { re: /\.app$/i, dir: "Installer" },
  { re: /orders/i, dir: "ORDERS" },
  { re: /pks/i, dir: "ORDERS" },
  { re: /invoice/i, dir: "ORDERS" },
  { re: /rab/i, dir: "ORDERS" },
  { re: /penawaran_jasa/i, dir: "ORDERS" },
  { re: /desa tumaluntung/i, dir: "ORDERS" },
  { re: /naskah akademik/i, dir: "ORDERS" },
  { re: /notulensi_meeting_pd_pasar/i, dir: "ORDERS" },
  { re: /team orders/i, dir: "ORDERS" },
  { re: /\.(mp4|mov|m4v)$/i, dir: "Media Pribadi" },
  { re: /\.(mp3|m4a|wav)$/i, dir: "Media Pribadi" },
  { re: /whatsapp image/i, dir: "Media Pribadi" },
  { re: /img_2018/i, dir: "Media Pribadi" },
  { re: /fb_img/i, dir: "Media Pribadi" },
  { re: /downloadgram/i, dir: "Media Pribadi" },
  { re: /photo-2026/i, dir: "Media Pribadi" },
  { re: /videoframe/i, dir: "Media Pribadi" },
  { re: /ov_81qx5zI4/i, dir: "Media Pribadi" },
  { re: /saveclip/i, dir: "Media Pribadi" },
  { re: /fileshot/i, dir: "Media Pribadi" },
  { re: /vid_20\d\d/i, dir: "Media Pribadi" },
  { re: /happy birthday nnu/i, dir: "Media Pribadi" },
  { re: /a3 menu fest/i, dir: "Media Pribadi" },
  { re: /baciraro/i, dir: "Baciraro" },
  { re: /circular/i, dir: "Baciraro" },
  { re: /lokawaya/i, dir: "Baciraro" },
  { re: /planner/i, dir: "Baciraro" },
  { re: /rencana_terpadu/i, dir: "Baciraro" },
  { re: /solusi circular/i, dir: "Baciraro" },
  { re: /\bqr\b/i, dir: "Baciraro" },
  { re: /timeline_harian/i, dir: "Baciraro" },
  { re: /kalender konten/i, dir: "Baciraro" },
  { re: /jrbm/i, dir: "Baciraro" },
  { re: /permohonan kerjasama ke pimpinan baciraro/i, dir: "Baciraro" },
  { re: /profit untuk misi sosial/i, dir: "Baciraro" },
  { re: /header\.png/i, dir: "Baciraro" },
  { re: /backdrop/i, dir: "Baciraro" },
  { re: /presentasi\.png/i, dir: "Baciraro" },
  { re: /vertikal logo/i, dir: "Baciraro" },
  { re: /lokatana/i, dir: "Baciraro" },
  { re: /templet story kabasaran/i, dir: "Baciraro" },
];

const skip = new Set([
  ...folders,
  "dialog budaya",
  "Team ORDERS",
  "Team ORDERS (1)",
  "Team ORDERS (1) 2",
  "Team ORDERS (2)",
  "Data Web",
  "drive-download-20260805T085335Z-1-001",
  "Juknis, Format Proposal dan Lampiran FPK Tahap II",
]);

function moveTo(name, dir) {
  const src = join(DL, name);
  let dest = join(DL, dir, name);
  if (existsSync(dest)) {
    const dot = name.lastIndexOf(".");
    const base = dot > 0 ? name.slice(0, dot) : name;
    const ext = dot > 0 ? name.slice(dot) : "";
    let n = 2;
    while (existsSync(join(DL, dir, `${base} (${n})${ext}`))) n++;
    dest = join(DL, dir, `${base} (${n})${ext}`);
  }
  renameSync(src, dest);
  console.log(`${dir}/  ${name}`);
}

const items = readdirSync(DL);
let moved = 0;
let unmoved = [];
for (const item of items) {
  if (skip.has(item)) continue;
  const rule = rules.find((r) => r.re.test(item));
  if (rule) {
    moveTo(item, rule.dir);
    moved++;
  } else {
    unmoved.push(item);
  }
}

console.log(`\nMOVED: ${moved}`);
console.log(`UNMOVED (-> Lainnya): ${unmoved.length}`);
for (const u of unmoved) {
  moveTo(u, "Lainnya");
}
console.log("DONE");
