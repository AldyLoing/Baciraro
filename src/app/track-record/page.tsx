"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  innovationData, csrPrograms, partnerCategories, coreCompetencies,
  ecosystemRegionData, productServiceData,
} from "@/lib/site-sections-data";
import { trackRecordData } from "@/lib/track-record-data";
import { ArrowRight, Landmark, ShieldCheck, MapPin, LayoutList } from "lucide-react";
import { CinematicHero } from "@/components/track-record/CinematicHero";
import { PhotoWall } from "@/components/track-record/PhotoWall";
import { ArchiveIndex } from "@/components/track-record/ArchiveIndex";
import { FramesOfChange } from "@/components/track-record/FramesOfChange";
import { CaseStudyEditorial } from "@/components/track-record/CaseStudyEditorial";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
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

function InnovationSection() {
  return (
    <section id="inovasi" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="Inovasi" title="Inovasi dan Startup Pengelolaan Sampah" description="Pengembangan solusi berbasis teknologi dan inovasi produk daur ulang." />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {innovationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="group rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-normal text-white">{item.title}</h3>
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 shrink-0">{item.year}</span>
              </div>
              <ul className="space-y-2">
                {item.description.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-sm text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemRegionSection() {
  return (
    <section id="ekosistem" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="Ekosistem" title="Ekosistem Baciraro di Seluruh Wilayah" description="Baciraro Recycle sudah membangun ekosistem yang terhubung dari Hulu ke Hilir, fokus mengelola sampah plastik jenis HDPE, LDPE, dan PP untuk dijadikan produk kriya mendukung sirkular ekonomi lokal dan pariwisata berkelanjutan di DSP Likupang." />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemRegionData.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                  <region.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{region.region}</h3>
              </div>
              <ul className="space-y-3">
                {region.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                    <span className="text-sm text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSRProgramsSection() {
  return (
    <section id="csr" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="CSR & Kemitraan" title="Program CSR dan Kemitraan Strategis" description="Kolaborasi dengan berbagai lembaga dan perusahaan dalam pengelolaan sampah berkelanjutan." />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {csrPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{program.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">{program.period}</span>
                  {program.program && <p className="text-xs text-zinc-500 mt-1 font-medium italic">{program.program}</p>}
                </div>
              </div>
              <ul className="space-y-1.5">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-xs text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section id="mitra" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="Mitra" title="Mitra dan Lembaga yang Pernah Bekerja Sama" description="Jaringan kemitraan Baciraro dengan berbagai sektor pemerintah, korporasi, pendidikan, dan komunitas." />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                    <span className="text-xs text-zinc-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="produk" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="Produk & Layanan" title="Produk dan Layanan Baciraro" description="Dari produk kriya daur ulang hingga konsultansi dampak sosial." />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {productServiceData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 sm:p-8 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="inline-flex shrink-0 rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-normal text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetencySection() {
  return (
    <section id="kompetensi" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading eyebrow="Kompetensi" title="Kompetensi Utama Baciraro Recycle" description="Keahlian inti yang menjadi fondasi setiap program dan layanan Baciraro." />
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={competency}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: springEase }}
              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-zinc-950/40 p-4 shadow-md hover:border-emerald-500/20 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-sm text-zinc-300 font-medium leading-relaxed">{competency}</span>
            </motion.div>
          ))}
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
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Baciraro terbuka untuk kemitraan, kolaborasi program CSR, dan pengembangan sistem pengelolaan sampah berkelanjutan di wilayah Anda.
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
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrackRecordPage() {
  const [showArchive, setShowArchive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main className="relative overflow-hidden text-foreground min-h-screen bg-transparent">
      <div aria-hidden="true" className="page-bg" />
      <div className="relative z-[1]">

      <Header subtitle="Rekam Jejak" />

      <CinematicHero
        onExploreStory={() => setShowArchive(false)}
        onBrowseArchive={() => setShowArchive(true)}
      />

      {/* Simple toggle */}
      <div className="sticky top-16 z-30 flex justify-center py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <button
          onClick={() => setShowArchive(false)}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            !showArchive ? "bg-emerald-400 text-black shadow-lg" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <span className="h-2 w-2 rounded-full" />
          Dinding Foto
        </button>
        <span className="w-2" />
        <button
          onClick={() => setShowArchive(true)}
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            showArchive ? "bg-emerald-400 text-black shadow-lg" : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <LayoutList className="h-3.5 w-3.5" />
          Indeks Arsip
        </button>
      </div>

      {showArchive || isMobile ? <ArchiveIndex /> : <PhotoWall />}

      <FramesOfChange />
      <CaseStudyEditorial />
      <InnovationSection />
      <EcosystemRegionSection />
      <CSRProgramsSection />
      <PartnerSection />
      <ProductSection />
      <CompetencySection />
      <CTASection />

      <Footer />
      </div>
    </main>
  );
}
