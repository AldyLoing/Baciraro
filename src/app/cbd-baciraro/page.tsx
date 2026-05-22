"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  GraduationCap,
  Leaf,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const profile = {
  name: "Nobel Andrew Andries",
  title: "Independent Financial & Business Analyst",
  subtitle: "CBD Baciraro",
  bio:
    "Analis keuangan yang berfokus pada pembangunan visibilitas dalam sistem bisnis yang kompleks, khususnya ketika data tidak lengkap atau tidak terstruktur.",
  description:
    "Berpengalaman dalam merekonstruksi laporan keuangan, analisa cost, analisa bisnis, memetakan alur biaya dan arus kas, serta mengidentifikasi potensi inefisiensi dan risiko yang tidak terlihat langsung. Saya juga dapat melakukan analisa dampak pada kategori keuangan, sosial, dan ekonomi dengan pendekatan yang objektif dan independen.",
};

const workExperience = [
  {
    role: "General Manager",
    company: "PT Kawanua Internetindo",
    period: "2016 - sekarang",
    description: "Project leader dan sales management, termasuk analisa, penyusunan, dan kontrol anggaran.",
  },
  {
    role: "Chief Business Development and Financial",
    company: "PT Baciraro Kreatif Minahasa",
    period: "2021 - sekarang",
    description:
      "Project financial control dan risk assessment, analisa konsep bisnis, serta evaluasi peluang bisnis.",
  },
  {
    role: "Financial Controller",
    company: "Group Korin Manado",
    period: "Sebelumnya",
    description: "Pengawasan keuangan dan penguatan kontrol pelaporan.",
  },
  {
    role: "Kepala Jurusan Akuntansi",
    company: "Universitas Nusantara Manado",
    period: "Sebelumnya",
    description: "Memimpin pengelolaan akademik jurusan akuntansi.",
  },
  {
    role: "Dosen Fakultas Akuntansi",
    company: "Universitas Atma Jaya Yogyakarta",
    period: "Sebelumnya",
    description: "Pengajaran dan pembinaan bidang akuntansi.",
  },
  {
    role: "Staf Keuangan",
    company: "PT Mahakarya Daerah Sulawesi",
    period: "2025 - sekarang",
    description: "Dukungan operasional keuangan dan pelaporan.",
  },
];

const education = [
  "Universitas Gadjah Mada - Magister Akuntansi Terapan (thesis: neraca arus dana)",
  "Universitas Klabat - Fakultas Ekonomi, Jurusan Akuntansi",
  "Universitas Klabat - Tutor akuntansi dasar",
  "SMA Negeri 1 Manado - Ketua siswa-siswi Katolik SMAN 1 Manado",
  "SMP Eben Haesar 01",
  "SD Negeri 1 Bebonuk, Timor Timur",
];

const skills = {
  technical: [
    "Analisis laporan keuangan",
    "Rekonstruksi data keuangan",
    "Analisis dampak, biaya, dan efisiensi",
    "Pemodelan arus kas",
  ],
  nonTechnical: [
    "Berpikir sistem dan terstruktur",
    "Objektivitas dan independensi analisa",
    "Penyederhanaan informasi kompleks",
    "Ketelitian dan perhatian terhadap detail",
  ],
};

const environmentalExperience = [
  {
    title: "Bank Sampah",
    icon: Leaf,
    points: [
      "Pengembangan bank sampah di Pinabetengan, Agape, Serawet, dan Likupang.",
      "Pembuatan konsep bank sampah berkelanjutan dengan tata kelola keuangan, administrasi, dan koneksi ekosistem ke Baciraro Recycle.",
      "Pembuatan konsep dagang komoditas produksi bank sampah sebagai basis untuk Baciraro Trading Ecosystem.",
      "Kerja sama program pengembangan bank sampah digital dengan Pemerintah Kabupaten Minahasa.",
    ],
  },
  {
    title: "SROI",
    icon: BarChart3,
    points: ["Analisa SROI untuk kolaborasi Likupang dan Zero Waste Warriors PLN Suluttengo."],
  },
  {
    title: "Perubahan Iklim",
    icon: ShieldCheck,
    points: ["GCOM South East Asia 2023 sebagai anggota tim pembuatan kebijakan untuk adaptasi dan mitigasi perubahan iklim."],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      {children}
    </p>
  );
}

function InfoCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="mt-5 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

export default function CBDBaciraroPage() {
  return (
    <main className="relative overflow-hidden bg-[#f5faf5] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.12),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,250,245,1))]" />

      <header className="relative z-10 border-b border-emerald-100/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="transition-colors hover:text-emerald-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">Baciraro</p>
              <p className="mt-1 text-sm text-slate-500">CBD Profile</p>
            </div>
          </Link>
          <Link
            href="/#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Ekosistem
          </Link>
        </div>
      </header>

      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.16),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.12),_transparent_50%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <SectionLabel>CBD Baciraro</SectionLabel>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Chief Business Development & Financial
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-emerald-200">{profile.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{profile.bio}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{profile.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex items-end"
          >
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.26),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.12),_rgba(255,255,255,0.02))] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/10 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Baciraro</p>
                    <p className="mt-3 text-3xl font-black leading-tight text-white">CBD</p>
                    <p className="mt-2 text-sm text-emerald-200">Business development, financial control, and risk visibility.</p>
                  </div>
                  <div className="space-y-3 text-sm text-slate-200">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">Independent analysis</p>
                      <p className="mt-1">Sistem bisnis, biaya, arus kas, dan dampak.</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="font-semibold text-white">Objective control</p>
                      <p className="mt-1">Membantu keputusan yang lebih jelas dan terukur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Pengalaman Kerja" icon={Briefcase}>
            <div className="space-y-4">
              {workExperience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
                  <p className="text-sm font-semibold text-emerald-800">{item.role}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.company}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Pendidikan" icon={GraduationCap}>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-4">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="relative z-10 bg-emerald-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Keahlian</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Kompetensi teknis dan non-teknis
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <InfoCard title="Teknis" icon={Calculator}>
              <ul className="space-y-2">
                {skills.technical.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Scale className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Non Teknis" icon={Users}>
              <ul className="space-y-2">
                {skills.nonTechnical.map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <SectionLabel>Pengalaman Lingkungan</SectionLabel>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Konteks kerja yang mendukung ekosistem Baciraro
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {environmentalExperience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <item.icon className="h-8 w-8 text-emerald-700" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {item.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-emerald-50/60 p-4">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 text-center lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            CBD Baciraro untuk analisa yang lebih jelas dan terukur
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Profil ini ditempatkan di ekosistem Baciraro sebagai penguat area business development, financial control, dan risk assessment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#ecosystem"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Lihat Ekosistem
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}