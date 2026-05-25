"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
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
  Menu,
  X,
} from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

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
    image: "/elmast.png",
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
      <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
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
        className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.1),_transparent_55%),linear-gradient(135deg,_#090d09,_#000000)] p-6 text-center">
      <div className="max-w-xs">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] border border-emerald-500/20 bg-emerald-950/40 text-2xl font-black text-emerald-400 shadow-xl backdrop-blur-sm">
          CBD
        </div>
        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400">Baciraro</p>
        <p className="mt-2 text-lg font-normal text-white">{card.name}</p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-400">
          Analisis bisnis, visibilitas finansial, dan penguatan keputusan berbasis data.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background and grain overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="mx-auto max-w-7xl rounded-3xl md:rounded-full border border-white/5 bg-[#0c0f0c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300">
          {/* Subtle green ambient glow behind the navbar */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.06),_transparent_75%)] pointer-events-none" />
          <div className="bg-noise absolute inset-0 opacity-[0.03] pointer-events-none" />

          <div className="flex items-center justify-between px-6 py-3.5 relative z-10">
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

            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="#ecosystem"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Ekosistem
              </a>
              <a
                href="#flow"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Alur Sistem
              </a>
              <a
                href="#impact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Dampak
              </a>
              <Link
                href="/ceo"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                CEO
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Proyek
              </Link>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Kontak
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/creative"
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#f87171] shadow-[0_0_15px_rgba(248,113,113,0.1)] transition-all hover:scale-102 hover:bg-[#f87171]/10 hover:border-[#f87171]/40 duration-300"
              >
                Baciraro Creative
                <ArrowRight className="h-3 w-3" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-all focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: springEase }}
                className="md:hidden border-t border-white/5 bg-[#0c0f0c]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-2 relative z-10"
              >
                {[
                  { name: "Ekosistem", href: "#ecosystem" },
                  { name: "Alur Sistem", href: "#flow" },
                  { name: "Dampak", href: "#impact" },
                  { name: "CEO", href: "/ceo" },
                  { name: "Proyek", href: "/projects" },
                  { name: "Kontak", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 text-center text-sm font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-xl transition-all border border-transparent hover:bg-white/5"
                  >
                    {link.name}
                  </a>
                ))}
                <Link
                  href="/creative"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex sm:hidden items-center justify-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#f87171] shadow-[0_0_15px_rgba(248,113,113,0.1)] transition-all mt-2"
                >
                  Baciraro Creative
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center pt-16 pb-12 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg.png')" }}
        />
        {/* Dark overlay to keep premium dark aesthetic and ensure text legibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />
        {/* Subtle emerald tint overlay */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,_rgba(16,185,129,0.12),_transparent_60%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: springEase }}
            className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          >
            <div className="relative mb-10 h-64 w-64 md:h-72 md:w-72 overflow-hidden rounded-[3rem] border border-white/10 bg-black/30 p-8 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.2),_transparent_70%)]" />
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro logo"
                fill
                priority
                sizes="288px"
                className="object-contain p-6 drop-shadow-[0_20px_50px_rgba(16,185,129,0.35)]"
              />
            </div>

            <div className="relative max-w-5xl">
              <p className="font-serif text-3xl md:text-4xl italic tracking-tight text-emerald-300">
                Our Company
              </p>
              <h1 className="mt-2 text-5xl font-normal leading-[0.85] tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                BACIRARO
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-zinc-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Baciraro adalah perusahaan yang membangun sistem pengelolaan sampah terintegrasi dari edukasi, pengumpulan, daur ulang, hingga produk turunan kreatif dan pelacakan digital.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#ecosystem"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-zinc-100"
              >
                Jelajahi Ekosistem
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <a
                href="#ceo"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-black/50 hover:border-white/30"
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
                  className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm font-medium text-zinc-200 backdrop-blur-md shadow-lg"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Profile Preview */}
      <section id="ceo" className="relative z-10 overflow-hidden py-24 text-white lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col items-center"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Our CEO
            </p>

            <div className="relative mt-10 h-80 w-64 overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] sm:h-[23rem] sm:w-72">
              <Image
                src="/Marlon.png"
                alt="Marlon Kamagi"
                fill
                sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            </div>

            <div className="mt-10 max-w-4xl">
              <p className="font-serif text-3xl md:text-4xl italic tracking-tight text-emerald-300/80">
                Hello, I&apos;m
              </p>
              <h2 className="mt-2 text-5xl font-normal leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.5rem]">
                Marlon Kamagi
              </h2>
              <p className="mt-4 text-xl font-medium text-emerald-400 sm:text-2xl">
                Chief Executive Officer
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Community Development Worker
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
                Pemimpin Baciraro yang membawa pengalaman luas di bidang pengembangan komunitas, riset aksi sosial-lingkungan, dan fasilitasi perubahan iklim untuk memperkuat ekosistem keberlanjutan.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/ceo"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3"
              >
                Lihat Halaman CEO
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </Link>
              <a
                href="https://marlonkamagi.wixsite.com/marlonkamagi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
              >
                Sumber Profil
                <ArrowRight className="h-4 w-4 text-zinc-500" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex items-center justify-center p-6">
            <div className="relative h-72 w-72 md:h-80 md:w-80">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro cap"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-contain p-2 drop-shadow-[0_20px_50px_rgba(16,185,129,0.25)]"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Tentang Baciraro"
              title="Satu ekosistem terpadu untuk menghubungkan edukasi, pengolahan, inovasi, dan digitalisasi."
              description="Baciraro dirancang untuk menyelesaikan problem lingkungan dengan pendekatan sirkular yang inklusif, menghubungkan program komunitas secara langsung ke offtaker industri."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Menghubungkan pengelolaan sampah dari komunitas ke industri.",
                "Mendorong circular economy dengan pendekatan yang terukur.",
                "Menyediakan dashboard dan jejak dampak yang transparan.",
                "Mendukung kolaborasi CSR, pemerintah, dan desa.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/5 bg-zinc-900/20 p-5 text-sm leading-relaxed text-zinc-400 shadow-lg backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Baciraro Ecosystem"
          title="Lima entitas yang saling terhubung untuk menciptakan nilai dari sampah."
          description="Setiap unit menjalankan fungsi berbeda, tetapi terhubung dalam satu sistem terintegrasi yang mendorong dampak sosial, ekonomi, dan lingkungan."
        />

        <div className="mt-10 grid gap-6">
          <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/5">
              <Image
                src="/baciraro ecosystem.jpeg"
                alt="Baciraro ecosystem overview"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {ecosystemCards.map((card, index) => (
              <motion.article
                key={card.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/20 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/30"
              >
                <div className={`relative aspect-[4/3] overflow-hidden p-6 border-b border-white/5 ${card.name === "ORDERS"
                    ? "bg-white"
                    : "bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20"
                  }`}>
                  <EcosystemCardImage card={card} />
                  <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/60 p-2.5 text-emerald-400 shadow-lg backdrop-blur">
                    <card.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal text-white">{card.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white shadow-lg backdrop-blur hover:bg-white/10 transition-colors"
                  >
                    Buka Halaman
                    <ArrowRight className="h-3 w-3 text-emerald-400" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="relative z-10 py-20 text-white lg:py-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionLabel>Alur Sistem</SectionLabel>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              Dari sampah menjadi data, lalu kembali menjadi nilai.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Visualisasi ini menunjukkan bagaimana Baciraro menghubungkan edukasi, pengumpulan, daur ulang, produk turunan, dan pelacakan digital dalam satu rantai nilai.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {flowSteps.map((step, index) => (
              <div key={step} className="relative">
                <div className="rounded-[1.75rem] border border-white/5 bg-zinc-900/20 p-6 backdrop-blur-sm shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 font-bold text-emerald-400">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-lg font-medium text-white">{step}</p>
                </div>
                {index < flowSteps.length - 1 ? (
                  <ArrowRight className="absolute -right-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-emerald-500/40 xl:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Impact"
          title="Dampak yang terlihat, terukur, dan mudah dipresentasikan."
          description="Bagian ini menampilkan indikator utama agar Baciraro mudah dipakai sebagai materi presentasi, website resmi, dan laporan kelembagaan."
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
                className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <metric.icon className="h-5 w-5" />
                </div>
                <p className="mt-8 text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-zinc-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Dashboard dampak</p>
                <p className="text-xs text-zinc-500">Monitoring terpusat untuk stakeholder</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Pelaporan volume sampah yang dikelola per wilayah.",
                "Rekap partisipasi komunitas dan mitra aktif.",
                "Jejak proyek digital untuk bank sampah dan tracking.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-zinc-950/40 border border-white/5 px-4 py-4 text-sm leading-relaxed text-zinc-400">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Layanan / Kerja Sama"
          title="Dirancang untuk perusahaan, pemerintah, dan desa yang ingin membangun sistem terpadu."
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
              className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3.5 text-emerald-400">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-normal text-white">{card.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Creative CTA Section */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 px-8 py-12 text-white shadow-2xl backdrop-blur-sm sm:px-12 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel>Baciraro Creative</SectionLabel>
              <h2 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight">
                Unit produk kreatif dari hasil daur ulang.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                Jelajahi halaman khusus Baciraro Creative untuk melihat produk kreatif yang lahir dari material daur ulang dan rantai nilai circular economy.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link
                href="/creative"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3"
              >
                Lihat Produk Kreatif
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 border-t border-white/5 bg-black/60 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Hubungi Kami"
              title="Mari bangun sistem pengelolaan sampah yang lebih terhubung, terukur, dan berdampak."
              description="Hubungi Baciraro untuk diskusi kemitraan, implementasi CSR, program pemerintah daerah, atau pengembangan sistem digital pengelolaan sampah."
            />
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
              <a
                href="#ecosystem"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Lihat Ekosistem Lagi
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}