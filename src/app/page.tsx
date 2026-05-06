"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Cpu,
  Factory,
  Leaf,
  MapPin,
  Package,
  Recycle,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";

const ecosystemCards = [
  {
    name: "Yayasan Tana Nyiur Lestari",
    href: "/tananyiurlestari",
    image: "/tnl-transparent.png",
    description:
      "Lembaga edukasi lingkungan dengan program Bank Sampah, BLANTE Sampah, dan DropBox.",
    icon: Leaf,
  },
  {
    name: "Trash Recycle Center",
    href: "/trashrecyclecenter",
    image: "/trc.png",
    description:
      "Unit usaha daur ulang plastik, kertas, dan logam sebagai offtaker bahan baku industri kreatif.",
    icon: Recycle,
  },
  {
    name: "ELMAST Greenovasi",
    href: "/elmast",
    image: "/elmast.jpeg",
    description:
      "Pengolahan sampah organik menjadi gas dan pupuk organik, termasuk solusi eceng gondok.",
    icon: Sprout,
  },
  {
    name: "ORDERS",
    href: "/orders",
    image: "/Orders.png",
    description:
      "Komunitas pengembang teknologi yang membangun platform digital pengelolaan sampah.",
    icon: Cpu,
  },
];

const flowSteps = ["Sampah", "Edukasi", "Pengumpulan", "Daur Ulang", "Produk", "Digital Tracking"];

const impactMetrics = [
  { value: "1.200+ ton", label: "Sampah terkelola", icon: Package },
  { value: "80+ komunitas", label: "Jejaring aktif", icon: Users },
  { value: "25+ proyek", label: "Inisiatif digital", icon: BarChart3 },
];

const serviceCards = [
  {
    title: "Untuk Perusahaan",
    icon: Factory,
    points: ["Program CSR pengelolaan sampah", "Pelaporan dampak dan dashboard digital"],
  },
  {
    title: "Untuk Pemerintah",
    icon: Building2,
    points: ["Penguatan layanan persampahan", "Edukasi dan pendampingan sistem"],
  },
  {
    title: "Untuk Desa",
    icon: MapPin,
    points: ["Model bank sampah terpadu", "Nilai tambah ekonomi lokal"],
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
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Home() {
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
            <a href="#ecosystem" className="transition-colors hover:text-emerald-700">
              Ekosistem
            </a>
            <a href="#flow" className="transition-colors hover:text-emerald-700">
              Alur Sistem
            </a>
            <a href="#impact" className="transition-colors hover:text-emerald-700">
              Dampak
            </a>
            <Link href="/projects" className="transition-colors hover:text-emerald-700">
              Proyek
            </Link>
            <a href="#contact" className="transition-colors hover:text-emerald-700">
              Kontak
            </a>
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

      <section className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <SectionLabel>Ekosistem Pengelolaan Sampah Terintegrasi</SectionLabel>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Membangun Ekosistem Pengelolaan Sampah Terintegrasi dari Hulu ke Hilir
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Baciraro menghadirkan solusi pengelolaan sampah berbasis circular economy melalui edukasi,
            daur ulang, inovasi teknologi, dan pemberdayaan masyarakat.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
            >
              Jelajahi Ekosistem
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              Kerja Sama
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Circular economy end-to-end",
              "Digital monitoring system",
              "CSR dan kemitraan lintas sektor",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-emerald-100 bg-white/80 p-4 text-sm text-slate-600 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-amber-300/30 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-emerald-300/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_30px_100px_rgba(15,23,42,0.12)] sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
              <div className="relative aspect-[4/4.5] w-full">
                <Image
                  src="/baciraro ecosystem.jpeg"
                  alt="Baciraro ecosystem"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-amber-300" />
                    Sustainability Intelligence
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Model integrasi", value: "Hulu ke hilir" },
                      { label: "Platform", value: "Sampah + digital" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur"
                      >
                        <p className="text-xs uppercase tracking-[0.25em] text-white/60">{item.label}</p>
                        <p className="mt-2 text-lg font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { icon: Leaf, label: "Edukasi", value: "Masyarakat" },
                { icon: Recycle, label: "Pengolahan", value: "Daur ulang" },
                { icon: Cpu, label: "Tracking", value: "Digital" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4">
                  <item.icon className="h-5 w-5 text-emerald-700" />
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-emerald-50">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro cap"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-8"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Tentang Baciraro"
              title="Satu ekosistem untuk menghubungkan edukasi, pengolahan, inovasi, dan digitalisasi."
              description="Baciraro dirancang sebagai ekosistem yang mengintegrasikan edukasi lingkungan, pengolahan sampah, inovasi teknologi, dan digitalisasi untuk menciptakan sistem yang berkelanjutan dan bernilai ekonomi."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Menghubungkan pengelolaan sampah dari komunitas ke industri.",
                "Mendorong circular economy dengan pendekatan yang terukur.",
                "Menyediakan dashboard dan jejak dampak yang transparan.",
                "Mendukung kolaborasi CSR, pemerintah, dan desa.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-emerald-100 bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Baciraro Ecosystem"
          title="Empat entitas yang saling terhubung untuk menciptakan nilai dari sampah."
          description="Setiap unit menjalankan fungsi berbeda, tetapi terhubung dalam satu sistem terintegrasi yang mendorong dampak sosial, ekonomi, dan lingkungan."
        />

        <div className="mt-10 grid gap-6">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src="/baciraro ecosystem.jpeg"
                alt="Baciraro ecosystem overview"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemCards.map((card, index) => (
              <motion.article
                key={card.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.07)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-50 to-white p-4 sm:p-5">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 p-2 text-emerald-700 shadow-sm backdrop-blur">
                    <card.icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{card.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-emerald-300"
                  >
                    Buka Halaman
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="relative z-10 bg-gradient-to-b from-emerald-950 to-emerald-900 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Alur Sistem</SectionLabel>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Dari sampah menjadi data, lalu kembali menjadi nilai.
            </h2>
            <p className="mt-4 text-base leading-8 text-emerald-50/80 sm:text-lg">
              Visualisasi ini menunjukkan bagaimana Baciraro menghubungkan edukasi, pengumpulan, daur ulang,
              produk turunan, dan pelacakan digital dalam satu rantai nilai.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {flowSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 font-bold text-emerald-950">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-lg font-semibold">{step}</p>
                </div>
                {index < flowSteps.length - 1 ? (
                  <ArrowRight className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-amber-300 xl:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Impact"
          title="Dampak yang terlihat, terukur, dan mudah dipresentasikan untuk CSR maupun publik."
          description="Bagian ini menampilkan indikator utama agar Baciraro mudah dipakai sebagai materi website resmi, proposal kerja sama, dan presentasi kelembagaan."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-emerald-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <metric.icon className="h-5 w-5 text-emerald-700" />
                <p className="mt-8 text-3xl font-semibold tracking-tight text-slate-900">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Dashboard dampak</p>
                <p className="text-sm text-slate-500">Monitoring terpusat untuk stakeholder</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Pelaporan volume sampah yang dikelola per wilayah.",
                "Rekap partisipasi komunitas dan mitra aktif.",
                "Jejak proyek digital untuk bank sampah dan tracking.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-emerald-50 px-4 py-4 text-sm leading-7 text-slate-700">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Layanan / Kerja Sama"
          title="Dirancang untuk perusahaan, pemerintah, dan desa yang ingin membangun sistem pengelolaan sampah terpadu."
          description="Baciraro dapat disesuaikan untuk kebutuhan operasional, pemberdayaan masyarakat, hingga transformasi digital di level organisasi."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[2.25rem] bg-emerald-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(4,120,87,0.28)] sm:px-10 sm:py-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel>Baciraro Creative</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Unit produk kreatif dari hasil daur ulang.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
                Jelajahi halaman khusus Baciraro Creative untuk melihat produk kreatif yang lahir dari material daur ulang dan rantai nilai circular economy.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/creative"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition-transform hover:-translate-y-0.5"
              >
                Lihat Produk Kreatif
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 border-t border-emerald-100 bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Call to Action"
              title="Mari bangun sistem pengelolaan sampah yang lebih terhubung, terukur, dan berdampak."
              description="Hubungi Baciraro untuk diskusi kemitraan, implementasi CSR, program pemerintah daerah, atau pengembangan sistem digital pengelolaan sampah."
            />
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
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800"
              >
                Lihat Ekosistem Lagi
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}