"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, BarChart3, Zap } from "lucide-react";

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

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-20 pb-16 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(0,147,69,0.06),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">ORDERS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              Membangun Teknologi untuk Keberlanjutan
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              Komunitas pengembang teknologi yang mendukung digitalisasi pengelolaan sampah dalam ekosistem Baciraro dengan inovasi, kolaborasi, dan keahlian.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
              >
                Lihat Solusi
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#vision"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-transform hover:-translate-y-0.5"
              >
                Lihat Visi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-indigo-300/20 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-2xl">
              <Image
                src="/orders.png"
                alt="ORDERS"
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

function AboutSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-indigo-50 p-4">
            <Image
              src="/orders.png"
              alt="Tentang ORDERS"
              fill
              className="object-contain p-8"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Tentang ORDERS</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                ORDERS adalah komunitas pengembang teknologi yang didedikasikan untuk menciptakan solusi digital inovatif dalam pengelolaan sampah.
              </p>
              <p>
                Kami berkomitmen untuk mentransformasi cara ekosistem Baciraro beroperasi melalui teknologi yang scalable, user-friendly, dan berdampak sosial.
              </p>
              <p>
                Dengan tim developer berpengalaman dan passion untuk sustainability, kami membangun platform yang menghubungkan semua stakeholder dalam satu ekosistem digital yang terintegrasi.
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
    <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Produk & Karya</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Platform digital yang telah kami kembangkan untuk mendukung operasional ekosistem Baciraro
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[1.75rem] border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-6 shadow-[0_10px_40px_rgba(0,147,69,0.08)]"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 mb-4 text-emerald-700">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{product.name}</h3>
              <p className="text-slate-600 leading-7">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Solusi Digital Kami</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{solution.name}</h3>
              <p className="text-slate-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-indigo-950 to-emerald-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Visi: Digitalisasi Berkelanjutan</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl leading-8 text-emerald-50 mb-8">
            Kami percaya bahwa teknologi adalah kunci untuk mentransformasi pengelolaan sampah menjadi ekosistem yang efisien, transparan, dan sustainable.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {visionPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 rounded-full border border-white/10 bg-white/5 p-4"
              >
                <Zap className="h-5 w-5 shrink-0 text-amber-300 mt-0.5" />
                <span className="text-emerald-50">{point}</span>
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
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-gradient-to-r from-indigo-700 to-emerald-700 p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Kolaborasi Teknologi</h2>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto mb-8">
            Kami membuka peluang kolaborasi untuk developer, designer, dan entrepreneur yang tertarik berkontribusi dalam ekosistem teknologi Baciraro
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:halo@baciraro.id"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition"
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

export default function OrdersPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SolutionsSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}
