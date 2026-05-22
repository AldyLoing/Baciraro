"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  BriefcaseBusiness,
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
  {
    name: "CBD Baciraro",
    href: "/cbd-baciraro",
    description:
      "Chief Business Development and Financial yang fokus pada analisis bisnis, kontrol risiko, dan penguatan ekosistem Baciraro.",
    icon: BriefcaseBusiness,
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

function EcosystemCardImage({
  card,
}: {
  card: (typeof ecosystemCards)[number];
}) {
  if (card.image) {
    return (
      <Image
        src={card.image}
        alt={card.name}
        fill
        sizes="(max-width: 768px) 100vw, 28vw"
        className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_55%),linear-gradient(135deg,_#ecfdf5,_#ffffff)] p-6 text-center">
      <div className="max-w-xs">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-600 text-2xl font-black text-white shadow-lg shadow-emerald-600/20">
          CBD
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Baciraro</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">{card.name}</p>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Analisis bisnis, visibilitas finansial, dan penguatan keputusan berbasis data.
        </p>
      </div>
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
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-emerald-200 bg-white shadow-sm">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro logo"
                fill
                sizes="44px"
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">Baciraro</p>
              <p className="mt-1 text-sm text-slate-500">Sustainability Platform</p>
            </div>
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
            <Link href="/ceo" className="transition-colors hover:text-emerald-700">
              CEO
            </Link>
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

      <section className="relative z-10 min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.16),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.12),_transparent_50%)]" />
        <div className="pointer-events-none absolute -left-28 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-28 bottom-10 h-[24rem] w-[24rem] rounded-full bg-amber-300/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Ekosistem Pengelolaan Sampah Terintegrasi
            </div>

            <div className="relative mb-10 h-80 w-64 overflow-hidden rounded-[2.5rem] sm:h-[23rem] sm:w-72">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro logo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-contain p-4"
              />
            </div>

            <div className="relative max-w-6xl">
              <p className="font-serif text-4xl italic tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
                Our Company
              </p>
              <h1 className="mt-2 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-[7.5rem]">
                BACIRARO
              </h1>
              <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
                Baciraro adalah perusahaan yang membangun sistem pengelolaan sampah terintegrasi dari
                edukasi, pengumpulan, daur ulang, hingga produk dan pelacakan digital.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5"
              >
                Jelajahi Ekosistem
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#ceo"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                Lihat CEO
              </a>
            </div>

            <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
              {[
                "Circular economy end-to-end",
                "Digital monitoring system",
                "CSR dan kemitraan lintas sektor",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ceo" className="relative z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-24 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.16),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.12),_transparent_50%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col items-center"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Our CEO
            </p>

            <div className="relative mt-10 h-80 w-64 overflow-hidden rounded-[2.5rem] shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:h-[23rem] sm:w-72">
              <Image
                src="/Marlon.png"
                alt="Marlon Kamagi"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
            </div>

            <div className="mt-10 max-w-4xl">
              <p className="font-serif text-4xl italic tracking-tight text-white/90 sm:text-5xl lg:text-6xl">
                Hello, I&apos;m
              </p>
              <h2 className="mt-2 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-[6.5rem]">
                Marlon Kamagi
              </h2>
              <p className="mt-5 text-2xl font-semibold text-emerald-300 sm:text-3xl">
                Chief Executive Officer
              </p>
              <p className="mt-3 text-lg text-slate-300 sm:text-xl">
                Community Development Worker
              </p>
              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                Pemimpin Baciraro yang membawa pengalaman di community development, riset sosial-lingkungan,
                dan aksi iklim untuk membangun ekosistem yang berdampak.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/ceo"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5"
              >
                Lihat Halaman CEO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://marlonkamagi.wixsite.com/marlonkamagi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                Sumber Profil
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
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
              title="Lima entitas yang saling terhubung untuk menciptakan nilai dari sampah."
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
                  <EcosystemCardImage card={card} />
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