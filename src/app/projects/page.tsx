"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectTimeline = [
  {
    year: 2020,
    title: "Kompetisi 1000 Startup Digital",
    description:
      "Baciraro Recycle memperkenalkan diri sebagai startup digital inovasi pengelolaan sampah di sumber, termasuk bank sampah berbasis digital dan ekosistem circular economy.",
    highlights: [
      "Inovasi teknologi untuk pengelolaan sampah",
      "Bank Sampah berbasis digital",
      "Akselerasi pembangunan daerah",
    ],
    color: "from-blue-500/30 to-blue-600/30 border-blue-500/20 text-blue-400",
  },
  {
    year: 2021,
    title: "Project Batako dari Sampah Plastik",
    description:
      "Kolaborasi Baciraro Recycle dengan Trash Waste Solution (TWS) melalui pendanaan Ocean Hero untuk membuat batako dari sampah plastik.",
    highlights: [
      "Pengurangan sampah plastik di laut",
      "Inovasi batako dari plastik bekas",
      "Dukungan Ocean Hero",
    ],
    color: "from-emerald-500/30 to-emerald-600/30 border-emerald-500/20 text-emerald-400",
  },
  {
    year: 2022,
    title: "Program Bank Sampah Setor Jo & Eco-Enzyme",
    description:
      "Program kerja sama dengan Pertamina Geothermal Energy Lahendong mencakup edukasi pemilahan sampah plastik dan pelatihan eco-enzyme.",
    highlights: [
      "Bank Sampah Setor Jo di Desa Pinabetengan Utara",
      "Produk daur ulang: sofa ecobrick, gantungan kunci, tas",
      "Pelatihan eco-enzyme untuk perempuan",
      "Sabun, detergen, dan pupuk organik dari limbah organik",
    ],
    color: "from-amber-500/30 to-amber-600/30 border-amber-500/20 text-amber-400",
  },
  {
    year: 2023,
    title: "Program Bijak Berplastik Danone Aqua",
    description:
      "Kerja sama Danone Aqua dengan Baciraro Recycle untuk fasilitas penampungan sampah plastik, didukung Komunitas Pecinta Alam Likupang.",
    highlights: [
      "Fasilitas penampungan sampah plastik",
      "Bank Sampah Induk Likupang di Desa Serawet",
      "Kegiatan bersih-bersih pantai dan kampung",
      "Alur terintegrasi ke ekosistem pengelolaan sampah",
    ],
    color: "from-cyan-500/30 to-cyan-600/30 border-cyan-500/20 text-cyan-400",
  },
  {
    year: 2024,
    title: "Program Desa Pesisir & Kolaborasi BUMN",
    description:
      "Kolaborasi dengan Kementerian Kelautan, Perikanan, dan Kementerian Pariwisata untuk pemberdayaan nelayan dan desa wisata.",
    highlights: [
      "Program Desa Pesisir Bersih di Desa Serawet",
      "Pemberdayaan nelayan dan pengelolaan sampah terpilah",
      "Pelatihan Manajemen Bank Sampah (25 peserta, 5 desa wisata)",
      "Kolaborasi BUMN melalui program TJSL/CSR",
      "Dukungan ekonomi kreatif di destinasi wisata",
    ],
    color: "from-teal-500/30 to-teal-600/30 border-teal-500/20 text-teal-400",
  },
  {
    year: 2025,
    title: "Ekosistem Baciraro & Green Action",
    description:
      "Implementasi penuh ekosistem pengelolaan sampah dari hulu ke hilir dengan kegiatan green action dan ekspansi ELMAST Greenovasi.",
    highlights: [
      "Sinergi pengelolaan sampah hulu ke hilir",
      "Green Action: workshop daur ulang bersama PLN & Yayasan Tana Nyiur Lestari",
      "Program Zero Waste Warriors serentak nasional",
      "ELMAST Greenovasi: biogas & pupuk organik",
      "Solusi untuk Danau Tondano eceng gondok",
      "Ketahanan pangan & kemandirian energi",
    ],
    color: "from-green-500/30 to-green-600/30 border-green-500/20 text-emerald-400",
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

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-400">{description}</p>
    </div>
  );
}

export default function ProjectsPage() {
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
                  <p className="text-[11px] text-zinc-500 font-medium">Sustainability Platform</p>
                </div>
              </div>
            </Link>
            
            <nav className="hidden items-center gap-1 md:flex">
              <Link
                href="/"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Beranda
              </Link>
              <Link
                href="/#ecosystem"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Ekosistem
              </Link>
              <Link
                href="/#impact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Dampak
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Kontak
              </Link>
            </nav>
            
            <Link
              href="/creative"
              className="inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#f87171] shadow-[0_0_15px_rgba(248,113,113,0.1)] transition-all hover:scale-102 hover:bg-[#f87171]/10 hover:border-[#f87171]/40 duration-300"
            >
              Baciraro Creative
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-8 lg:pb-20 lg:pt-28">
        <SectionHeading
          eyebrow="Project Timeline"
          title="Perjalanan Baciraro 2020–2025"
          description="Evolusi ekosistem pengelolaan sampah dari startup digital lokal menjadi gerakan nasional pengelolaan sampah sirkular berkelanjutan."
        />
      </section>

      {/* Timeline List Section */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="relative space-y-12">
          {projectTimeline.map((project, index) => (
            <motion.div
              key={project.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: springEase }}
              className="relative"
            >
              <div className="grid gap-8 md:grid-cols-[120px_1fr]">
                <div className="md:sticky md:top-24 md:h-fit">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${project.color} border font-black text-white shadow-xl backdrop-blur`}>
                    {project.year}
                  </div>
                </div>

                <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/20 p-8 shadow-2xl backdrop-blur-sm">
                  <h3 className="text-2xl font-normal text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 rounded-2xl bg-zinc-950/40 border border-white/5 p-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-xs leading-relaxed text-zinc-300 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < projectTimeline.length - 1 && (
                <div className="absolute left-[3.5rem] top-32 hidden h-16 w-0.5 bg-gradient-to-b from-emerald-500/20 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 px-8 py-12 text-white shadow-2xl backdrop-blur-sm sm:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-normal leading-[1.1] tracking-tight">
                Masa Depan Baciraro
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Kami terus berinovasi dan berkolaborasi untuk membangun ekosistem pengelolaan sampah yang terintegrasi, digital, dan berjangkauan nasional.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#ecosystem"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg"
                >
                  Lihat Ekosistem
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </span>
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] border border-white/5 bg-zinc-950/40 p-8 backdrop-blur shadow-xl"
            >
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
                  <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">Total Tahun Operasi</p>
                  <p className="mt-2 text-3xl font-normal text-white">6+ Tahun</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
                  <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">Kemitraan Strategis</p>
                  <p className="mt-2 text-3xl font-normal text-white">20+</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
                  <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide">Wilayah Jangkauan</p>
                  <p className="mt-2 text-3xl font-normal text-white">Nasional</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Contact Section */}
      <section className="relative z-10 border-t border-white/5 bg-black/60 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-4xl font-normal leading-[1.1] tracking-tight text-white">
              Mari Bersama Membangun Masa Depan
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-xl">
              Hubungi Baciraro untuk diskusi kemitraan, implementasi CSR, atau pengembangan sistem digital pengelolaan sampah di wilayah Anda.
            </p>
          </div>

          <div className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Email", value: "halo@baciraro.id" },
                { title: "WhatsApp", value: "+62 8xx-xxxx-xxxx" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/5 bg-zinc-950/40 p-4 shadow-lg">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">{item.title}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:halo@baciraro.id"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/10"
              >
                Hubungi Tim Baciraro
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
