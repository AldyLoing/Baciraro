"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    color: "from-blue-500 to-blue-600",
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
    color: "from-emerald-500 to-emerald-600",
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
    color: "from-amber-500 to-amber-600",
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
    color: "from-cyan-500 to-cyan-600",
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
    color: "from-teal-500 to-teal-600",
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
    color: "from-green-500 to-green-600",
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
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden bg-[#f5faf5] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.12),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,250,245,1))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

      <header className="relative z-10 border-b border-emerald-100/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">Baciraro</p>
            <p className="mt-1 text-sm text-slate-500">Sustainability Platform</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition-colors hover:text-emerald-700">
              Beranda
            </Link>
            <Link href="/#ecosystem" className="transition-colors hover:text-emerald-700">
              Ekosistem
            </Link>
            <Link href="/#impact" className="transition-colors hover:text-emerald-700">
              Dampak
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-emerald-700">
              Kontak
            </Link>
          </nav>
          <Link
            href="/creative"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Baciraro Creative
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <SectionHeading
          eyebrow="Project Timeline"
          title="Perjalanan Baciraro 2020–2025"
          description="Evolusi ekosistem pengelolaan sampah dari startup digital menjadi gerakan nasional pengelolaan sampah berkelanjutan."
        />
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="space-y-12">
          {projectTimeline.map((project, index) => (
            <motion.div
              key={project.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid gap-8 md:grid-cols-[120px_1fr]">
                <div className="md:sticky md:top-20 md:h-fit">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${project.color} text-2xl font-bold text-white shadow-lg`}>
                    {project.year}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_70px_rgba(15,23,42,0.07)]">
                  <h3 className="text-2xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{project.description}</p>

                  <div className="mt-6 space-y-3">
                    {project.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                        <span className="text-sm leading-6 text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {index < projectTimeline.length - 1 && (
                <div className="absolute left-[3.5rem] top-32 hidden h-12 w-1 bg-gradient-to-b from-emerald-300 to-transparent md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[2.25rem] bg-emerald-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(4,120,87,0.28)] sm:px-10 sm:py-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Masa Depan Baciraro
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
                Kami terus berinovasi dan berkolaborasi untuk membangun ekosistem pengelolaan sampah yang terintegrasi, berkelanjutan, dan memberikan dampak positif bagi masyarakat dan lingkungan.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#ecosystem"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
                >
                  Lihat Ekosistem
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/20"
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
              className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">Total Tahun Operasi</p>
                  <p className="mt-2 text-3xl font-bold text-white">6+ Tahun</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">Kemitraan Strategis</p>
                  <p className="mt-2 text-3xl font-bold text-white">20+</p>
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-sm font-semibold text-emerald-300 uppercase tracking-wide">Wilayah Jangkauan</p>
                  <p className="mt-2 text-3xl font-bold text-white">Nasional</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-emerald-100 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Mari Bersama Membangun Masa Depan
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Hubungi Baciraro untuk diskusi kemitraan, implementasi CSR, atau pengembangan sistem digital pengelolaan sampah di wilayah Anda.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Email", value: "halo@baciraro.id" },
                { title: "WhatsApp", value: "+62 8xx-xxxx-xxxx" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.title}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:halo@baciraro.id"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20"
              >
                Hubungi Tim Baciraro
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
