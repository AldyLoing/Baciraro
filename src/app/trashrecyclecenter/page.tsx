"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Recycle, TrendingUp, Package, Zap } from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const wasteTypes = [
  {
    name: "Plastik",
    description: "Pengumpulan dan pemrosesan plastik dari berbagai sumber menjadi bahan baku berkualitas.",
    icon: Package,
  },
  {
    name: "Kertas",
    description: "Daur ulang kertas bekas menjadi bahan baku untuk industri kreatif dan manufaktur.",
    icon: Recycle,
  },
  {
    name: "Logam",
    description: "Pemilahan dan pengolahan limbah logam untuk dijual kembali ke industri.",
    icon: TrendingUp,
  },
];

const processSteps = [
  { step: "Pengumpulan", description: "Kumpul dari berbagai sumber: rumah, industri, perdagangan" },
  { step: "Sorting", description: "Pemilahan manual dan mekanis berdasarkan jenis material" },
  { step: "Pengolahan", description: "Proses pencucian, pengeringan, dan pemadatan" },
  { step: "Bahan Baku", description: "Transformasi menjadi bahan baku siap industri" },
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: springEase }}>
            <div className="mb-6">
              <SectionLabel>Trash Recycle Center</SectionLabel>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.04em] text-white">
              Mengubah Sampah Menjadi Sumber Daya Bernilai
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
              Unit usaha daur ulang yang berperan sebagai offtaker dan pengolah sampah menjadi bahan baku berkualitas untuk industri kreatif dan manufaktur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#process"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg"
              >
                Lihat Proses
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <a
                href="#output"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                Lihat Output
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-amber-500/5 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)]" />
              <Image
                src="/trc.png"
                alt="Trash Recycle Center"
                fill
                className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WasteTypesSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Komoditas Pengolahan</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-4">
            Jenis Sampah yang Kami Proses
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Kami menangani berbagai jenis sampah dengan teknologi dan proses pemilahan yang terstandar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {wasteTypes.map((waste, index) => (
            <motion.div
              key={waste.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="group rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <waste.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">{waste.name}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{waste.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Alur Operasional</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-12">
            Proses Kerja Daur Ulang
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: springEase }}
                className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 backdrop-blur-sm shadow-xl"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 font-bold text-emerald-400 mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.step}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
              {index < processSteps.length - 1 && (
                <ArrowRight className="absolute -right-2 top-1/2 hidden md:block -translate-y-1/2 text-emerald-500/30 h-5 w-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutputSection() {
  return (
    <section id="output" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-normal leading-[1.15] tracking-tight text-white mb-6">Output & Dampak Keberlanjutan</h2>
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Package className="h-5 w-5 text-emerald-400" />
                  Bahan Baku Industri Kreatif
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Plastic compound, kertas kraft, baja galvanis untuk kerajinan dan manufaktur hijau.</p>
              </div>

              <div className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-emerald-400" />
                  Distribusi Marketplace & Wisata
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Produk daur ulang dipasarkan melalui marketplace online dan desa wisata terpadu.</p>
              </div>

              <div className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  Nilai Ekonomi & Sosial
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Pembukaan lapangan kerja lokal dan peningkatan pendapatan masyarakat di wilayah sekitar unit.</p>
              </div>
            </div>
          </div>

          <div className="aspect-square relative overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
            <Image
              src="/trc.png"
              alt="Output TRC"
              fill
              className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(16,185,129,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-white mb-4">Kerja Sama Pengelolaan Sampah</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Kami membuka peluang kerjasama untuk industri, pemerintah, dan komunitas dalam pengelolaan sampah secara profesional dan bernilai tambah.
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

export default function TrashRecycleCenterPage() {
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
                  <p className="text-[11px] text-zinc-500 font-medium">Recycle Center Profile</p>
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

      <HeroSection />
      <WasteTypesSection />
      <ProcessSection />
      <OutputSection />
      <CTASection />
      
      <Footer />
    </main>
  );
}
