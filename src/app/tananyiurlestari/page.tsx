"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Leaf } from "lucide-react";

const programs = [
  {
    name: "Bank Sampah",
    description: "Program pemberdayaan masyarakat dengan sistem pengumpulan dan tukar sampah dengan insentif ekonomi.",
    icon: Leaf,
  },
  {
    name: "BLANTE Sampah",
    description: "Kegiatan edukasi sampah di tingkat komunitas dengan workshop dan training berkelanjutan.",
    icon: BookOpen,
  },
  {
    name: "DropBox",
    description: "Sistem drop-off terpusat untuk mempermudah masyarakat dalam menyerahkan sampah secara teratur.",
    icon: Leaf,
  },
];

const impactData = [
  { number: "20+", label: "Desa Terlibat" },
  { number: "2.500+", label: "Masyarakat Aktif" },
  { number: "12", label: "Program Berkelanjutan" },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-20 pb-16 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,147,69,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(0,122,54,0.05),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Yayasan Tana Nyiur Lestari</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              Membangun Kesadaran Lingkungan dari Masyarakat
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              Lembaga edukasi lingkungan yang berfokus pada pemberdayaan masyarakat melalui program pengelolaan sampah berkelanjutan dan inovasi sosial.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
              >
                Lihat Program
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-transform hover:-translate-y-0.5"
              >
                Lihat Dampak
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
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-2xl">
              <Image
                src="/tnl-transparent.png"
                alt="Yayasan Tana Nyiur Lestari"
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
          <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50 p-4">
            <Image
              src="/tnl-transparent.png"
              alt="Tentang Yayasan"
              fill
              className="object-contain p-8"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Tentang Yayasan</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Yayasan Tana Nyiur Lestari adalah lembaga non-profit yang berkomitmen untuk membangun kesadaran dan aksi lingkungan di tingkat masyarakat.
              </p>
              <p>
                Melalui program-program inovatif, kami memberdayakan komunitas lokal untuk mengelola sampah secara mandiri sambil menciptakan nilai ekonomi dan sosial.
              </p>
              <p>
                Visi kami adalah menciptakan ekosistem pengelolaan sampah yang berkelanjutan, inklusif, dan memberikan dampak positif jangka panjang bagi masyarakat dan lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Program Unggulan</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tiga program utama yang kami jalankan untuk memberdayakan masyarakat dalam pengelolaan sampah
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,147,69,0.08)] transition-all hover:shadow-[0_20px_60px_rgba(0,147,69,0.12)]"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 mb-4 text-emerald-700">
                <program.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{program.name}</h3>
              <p className="text-slate-600 leading-7">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section id="impact" className="relative py-20 px-6 lg:px-8 bg-emerald-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Dampak Sosial</h2>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {impactData.map((data, index) => (
            <motion.div
              key={data.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-amber-300 mb-2">{data.number}</p>
              <p className="text-lg text-emerald-50">{data.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {[
            "Meningkatkan kesadaran lingkungan",
            "Pemberdayaan ekonomi masyarakat",
            "Pengurangan volume sampah ke TPA",
            "Penciptaan lapangan kerja lokal",
          ].map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <Heart className="h-5 w-5 shrink-0 text-amber-300 mt-1" />
              <span className="text-emerald-50">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-gradient-to-r from-emerald-700 to-emerald-600 p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bergabung dan Berkolaborasi</h2>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto mb-8">
            Kami terbuka untuk kemitraan, kolaborasi, dan donasi untuk memperluas jangkauan program kami
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

export default function TanaNyiurPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <CTASection />
    </main>
  );
}
