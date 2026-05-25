"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
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

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
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
    <div className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-normal text-white">{title}</h3>
      </div>
      <div className="mt-5 text-sm leading-relaxed text-zinc-400">{children}</div>
    </div>
  );
}

export default function CBDBaciraroPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background and grain overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="mx-auto max-w-7xl rounded-full border border-white/5 bg-[#0c0f0c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
          {/* Subtle green ambient glow behind the navbar */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.06),_transparent_75%)] pointer-events-none" />
          <div className="bg-noise absolute inset-0 opacity-[0.03] pointer-events-none" />
          
          <div className="flex items-center justify-between px-6 py-3.5 relative z-10">
            <Link href="/" className="transition-colors hover:text-white">
              <div className="flex items-center gap-3.5">
                <Image
                  src="/Baciraro cap.png"
                  alt="Baciraro logo"
                  width={52}
                  height={52}
                  className="object-contain transition-transform hover:scale-105 duration-300"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400 flex items-center gap-1.5">
                    Baciraro
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f87171] animate-pulse" />
                  </p>
                  <p className="text-[11px] text-zinc-500 font-medium">CBD Profile</p>
                </div>
              </div>
            </Link>
            <Link
              href="/#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white shadow-lg backdrop-blur-md transition-all hover:scale-102 hover:bg-white/10 hover:border-white/20 duration-300"
            >
              <ArrowLeft className="h-3 w-3 mr-1" />
              Kembali
            </Link>
          </div>
        </div>
      </header>

      {/* CBD Hero Section */}
      <section className="relative z-10 overflow-hidden pt-20 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />
        
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: springEase }}
            className="max-w-3xl"
          >
            <SectionLabel>CBD Baciraro</SectionLabel>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Chief Business Development & Financial
            </p>
            <h1 className="mt-4 text-5xl font-normal leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-serif text-3xl italic tracking-tight text-emerald-300/85">{profile.title}</p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-300">{profile.bio}</p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{profile.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: springEase }}
            className="flex items-end"
          >
            <div className="w-full rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
              <div className="aspect-[4/5] rounded-[2rem] border border-white/5 bg-zinc-950/60 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-zinc-500">Baciraro</p>
                  <p className="mt-3 text-4xl font-normal tracking-[-0.03em] text-white">CBD</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">Business development, financial control, and risk visibility.</p>
                </div>
                <div className="space-y-3 text-xs text-zinc-300">
                  <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
                    <p className="font-semibold text-white">Independent analysis</p>
                    <p className="mt-1 text-zinc-400">Sistem bisnis, biaya, arus kas, dan dampak secara objektif.</p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
                    <p className="font-semibold text-white">Objective control</p>
                    <p className="mt-1 text-zinc-400">Membantu memperjelas arah keputusan dan efisiensi sistem.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoCard title="Pengalaman Kerja" icon={Briefcase}>
            <div className="space-y-4">
              {workExperience.map((item) => (
                <div key={`${item.company}-${item.role}`} className="rounded-[1.75rem] border border-white/5 bg-zinc-950/40 p-5 shadow-lg">
                  <p className="text-sm font-semibold text-emerald-400">{item.role}</p>
                  <p className="mt-1 text-sm text-white font-medium">{item.company}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">{item.period}</p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </InfoCard>

          <InfoCard title="Pendidikan" icon={GraduationCap}>
            <ul className="space-y-3">
              {education.map((item) => (
                <li key={item} className="flex gap-3 rounded-[1.75rem] border border-white/5 bg-zinc-950/40 p-5 shadow-lg items-center">
                  <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
                    <Building2 className="h-5 w-5 shrink-0" />
                  </div>
                  <span className="text-sm text-zinc-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Technical and Non Technical Skills */}
      <section className="relative z-10 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Keahlian</SectionLabel>
            <h2 className="mt-6 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Kompetensi teknis dan non-teknis
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <InfoCard title="Teknis" icon={Calculator}>
              <ul className="space-y-3">
                {skills.technical.map((item) => (
                  <li key={item} className="flex gap-3 items-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title="Non Teknis" icon={Users}>
              <ul className="space-y-3">
                {skills.nonTechnical.map((item) => (
                  <li key={item} className="flex gap-3 items-center">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Environmental Experience */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mb-12">
          <SectionLabel>Pengalaman Lingkungan</SectionLabel>
          <h2 className="mt-6 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
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
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400 w-fit">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-normal text-white">{item.title}</h3>
              <ul className="mt-6 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-zinc-950/40 border border-white/5 p-4 text-xs leading-relaxed text-zinc-400 shadow-md">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 text-center lg:p-12 shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-normal leading-[1.1] tracking-tight text-white">
            CBD Baciraro untuk analisa yang lebih jelas dan terukur
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Profil ini ditempatkan di ekosistem Baciraro sebagai penguat area business development, financial control, dan risk assessment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#ecosystem"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg"
            >
              Lihat Ekosistem
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ArrowLeft className="h-3 w-3 text-white rotate-180" />
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}