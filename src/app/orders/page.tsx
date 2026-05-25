"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Code, Smartphone, BarChart3, Zap } from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const products = [
  {
    name: "Website Yayasan",
    description: "Platform digital untuk pengelolaan data yayasan dan komunikasi dengan mitra ekosistem Baciraro.",
    icon: Code,
  },
  {
    name: "Aplikasi Bank Sampah Desa Kolongan",
    description: "Sistem tracking sampah terintegrasi untuk masyarakat Desa Kolongan dengan interface user-friendly.",
    icon: Smartphone,
  },
  {
    name: "Aplikasi Bank Sampah StorJo Desa Pinabetengan",
    description: "Platform mobile untuk pengelolaan bank sampah dengan fitur monitoring dan pelaporan real-time.",
    icon: BarChart3,
  },
];

const solutions = [
  { name: "Platform Digital Waste Management", description: "Sistem terpadu untuk monitoring dan tracking sampah" },
  { name: "Dashboard Monitoring", description: "Visualisasi data real-time untuk pengambilan keputusan cepat" },
  { name: "Sistem Tracking Sampah", description: "Pelacakan end-to-end dari pengumpulan hingga pemrosesan" },
];

const visionPoints = [
  "Efisiensi operasional melalui digitalisasi",
  "Transparansi data pengelolaan sampah",
  "Keterlibatan masyarakat yang lebih aktif",
  "Pengambilan keputusan berbasis data",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: springEase }}>
            <div className="mb-6">
              <SectionLabel>ORDERS</SectionLabel>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.04em] text-white">
              Membangun Teknologi untuk Keberlanjutan
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
              Komunitas pengembang teknologi yang mendukung digitalisasi pengelolaan sampah dalam ekosistem Baciraro dengan inovasi, kolaborasi, dan keahlian tinggi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg"
              >
                Lihat Solusi
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <a
                href="#vision"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                Lihat Visi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-emerald-500/5 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)]" />
              <Image
                src="/orders.png"
                alt="ORDERS"
                fill
                className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(99,102,241,0.2)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square relative overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
            <Image
              src="/orders.png"
              alt="Tentang ORDERS"
              fill
              className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(99,102,241,0.15)]"
            />
          </div>

          <div>
            <h2 className="text-4xl font-normal leading-[1.15] tracking-tight text-white mb-6">Tentang ORDERS</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                ORDERS adalah komunitas pengembang teknologi yang didedikasikan untuk menciptakan solusi digital inovatif dalam pengelolaan sampah secara transparan.
              </p>
              <p>
                Kami berkomitmen untuk mentransformasi cara ekosistem Baciraro beroperasi melalui sistem berbasis data yang scalable, aman, dan berfokus pada kemudahan pengguna.
              </p>
              <p>
                Dengan tim pengembang berpengalaman dan visi keberlanjutan yang kuat, kami merancang platform untuk mempertemukan pemangku kepentingan dalam satu ruang digital terintegrasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Produk & Karya</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-4">Sistem yang Telah Dibangun</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Platform digital tangguh untuk memantau data operasional circular economy ekosistem Baciraro secara berkala.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="group rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="inline-flex rounded-2xl bg-indigo-500/10 p-3 mb-4 text-indigo-400">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">{product.name}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-normal tracking-tight text-white mb-12 text-center">Solusi Digital Kami</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 mb-4 animate-pulse">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-normal tracking-tight text-center text-white mb-12">Visi: Digitalisasi Berkelanjutan</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl leading-relaxed text-zinc-300 mb-8 text-center">
            Teknologi adalah sarana vital untuk melacak data dampak lingkungan secara transparan, mendorong circular economy yang efisien dan berkelanjutan.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 rounded-full border border-white/5 bg-zinc-950/40 p-4 shadow-md"
              >
                <Zap className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="text-sm text-zinc-300 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-white mb-4">Kolaborasi Inovasi Teknologi</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Kami menyambut kolaborasi dengan para pengembang, desainer, dan wirausahawan sosial yang bersemangat untuk memajukan transformasi teknologi hijau.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:halo@baciraro.id"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg"
            >
              Hubungi Kami
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ArrowRight className="h-3 w-3 text-white" />
              </span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
            >
              Kembali ke Ekosistem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function OrdersPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background and grain overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="transition-colors hover:text-white">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-inner">
                <Image
                  src="/Baciraro cap.png"
                  alt="Baciraro logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400">Baciraro</p>
                <p className="text-[11px] text-zinc-500">ORDERS Profile</p>
              </div>
            </div>
          </Link>
          <Link
            href="/#ecosystem"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white shadow-lg backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            <ArrowLeft className="h-3 w-3 mr-1" />
            Kembali
          </Link>
        </div>
      </header>

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}
