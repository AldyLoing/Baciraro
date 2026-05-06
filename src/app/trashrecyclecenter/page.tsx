"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Recycle, TrendingUp, Package, Zap } from "lucide-react";

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

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-16 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,147,69,0.06),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.08),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Trash Recycle Center</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              Mengubah Sampah Menjadi Sumber Daya Bernilai
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              Unit usaha daur ulang yang berperan sebagai offtaker dan pengolah sampah menjadi bahan baku berkualitas untuk industri kreatif dan manufaktur.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#process"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
              >
                Lihat Proses
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#output"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-transform hover:-translate-y-0.5"
              >
                Lihat Output
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-2xl">
              <Image
                src="/trc.png"
                alt="Trash Recycle Center"
                fill
                className="object-contain p-8"
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
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Jenis Sampah yang Kami Proses</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami menangani berbagai jenis sampah dengan teknologi dan proses yang terstandar
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {wasteTypes.map((waste, index) => (
            <motion.div
              key={waste.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-[0_10px_40px_rgba(0,147,69,0.08)]"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 mb-4 text-emerald-700">
                <waste.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{waste.name}</h3>
              <p className="text-slate-600 leading-7">{waste.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Alur Pengolahan Sampah</h2>

        <div className="grid gap-4 md:grid-cols-4">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[1.5rem] border border-emerald-100 bg-white p-5 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-bold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.step}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
              {index < processSteps.length - 1 && (
                <ArrowRight className="absolute -right-2 top-1/2 hidden md:block -translate-y-1/2 text-emerald-300 h-5 w-5" />
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
    <section id="output" className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Output & Dampak</h2>
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Package className="h-5 w-5 text-emerald-700" />
                  Bahan Baku Industri Kreatif
                </h3>
                <p className="text-slate-600">Plastic compound, kertas kraft, baja galvanised untuk kerajinan dan manufaktur</p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-emerald-700" />
                  Distribusi Marketplace & Wisata
                </h3>
                <p className="text-slate-600">Produk daur ulang dipasarkan melalui marketplace online dan desa wisata</p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-emerald-50 p-6">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-700" />
                  Nilai Ekonomi & Sosial
                </h3>
                <p className="text-slate-600">Pembukaan lapangan kerja lokal dan peningkatan pendapatan masyarakat</p>
              </div>
            </div>
          </div>

          <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-blue-50 p-4">
            <Image
              src="/trc.png"
              alt="Output TRC"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-950 to-emerald-900 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white/10 backdrop-blur border border-white/10 p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kerja Sama Pengelolaan Sampah</h2>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto mb-8">
            Kami membuka peluang kerjasama untuk industri, pemerintah, dan komunitas dalam pengelolaan sampah terintegrasi
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:halo@baciraro.id"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
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
    <main className="relative overflow-hidden">
      <HeroSection />
      <WasteTypesSection />
      <ProcessSection />
      <OutputSection />
      <CTASection />
    </main>
  );
}
