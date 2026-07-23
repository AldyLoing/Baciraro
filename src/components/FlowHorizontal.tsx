"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Package, Recycle, Sprout, Cpu, ChevronLeft, ChevronRight } from "lucide-react";

const TERRACOTTA = "#D4785C";

const STEPS = [
  { number: "01", title: "Sampah", tagline: "Mengenali Setiap Sumber Dampak", desc: "Pemetaan jenis dan titik timbulan sampah secara presisi di wilayah urban dan rural.", metric: "18+ Titik", icon: MapPin },
  { number: "02", title: "Edukasi", tagline: "Membangun Kesadaran Kolektif", desc: "Pendampingan langsung di sekolah, komunitas, dan desa untuk integrasikan kebiasaan memilah.", metric: "1.200+ Warga", icon: Users },
  { number: "03", title: "Pengumpulan", tagline: "Menjemput Keberlanjutan", desc: "Sistem penjemputan sampah terpilah terjadwal dengan integrasi data logistik digital.", metric: "500+ Ton", icon: Package },
  { number: "04", title: "Daur Ulang", tagline: "Mentransformasi Material Sisa", desc: "Pengolahan organik → kompos, plastik → bahan baku premium untuk industri manufaktur.", metric: "85% Reduksi", icon: Recycle },
  { number: "05", title: "Produk", tagline: "Estetika yang Berkelanjutan", desc: "Kriya, furnitur ekologis, dan suvenir bernilai ekonomi tinggi dari bahan daur ulang.", metric: "40+ Karya", icon: Sprout },
  { number: "06", title: "Digital Tracking", tagline: "Menjaga Kepercayaan Publik", desc: "Pencatatan jejak sampah end-to-end oleh ORDERS untuk laporan sirkularitas transparan.", metric: "100% Data", icon: Cpu },
];

export default function FlowHorizontal() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateIndicators = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(idx);
    setCanScrollLeft(idx > 0);
    setCanScrollRight(idx < STEPS.length - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateIndicators);
    return () => el.removeEventListener("scroll", updateIndicators);
  }, []);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const target = dir === "left" ? activeIndex - 1 : activeIndex + 1;
    el.scrollTo({ left: target * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="flow" className="relative z-10 py-20 lg:py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(212,120,92,0.03),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400 backdrop-blur shadow-lg"
        >
          <span className="h-2 w-2 rounded-full bg-[#D4785C] animate-pulse" />
          ALUR PENGELOLAAN SAMPAH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl max-w-2xl"
        >
          Dari sampah menjadi data,{" "}
          <span className="font-serif italic text-[#D4785C]">lalu kembali menjadi nilai.</span>
        </motion.h2>
      </div>

      {/* Progress Bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <div className="flex gap-1.5">
          {STEPS.map((_, i) => (
            <div key={i} className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: TERRACOTTA }}
                animate={{ width: i <= activeIndex ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {STEPS.map((s, i) => (
            <span key={s.number} className={`text-[9px] font-semibold uppercase tracking-wider transition-colors ${i === activeIndex ? "text-[#D4785C]" : "text-zinc-600"}`}>
              {s.number}
            </span>
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {STEPS.map((step, i) => (
          <div key={step.number} className="snap-start shrink-0 w-screen px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-[2rem] border border-white/5 bg-black/30 p-8 md:p-10 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D4785C]/10 text-[#D4785C]">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4785C]">
                      {step.number} — {step.tagline}
                    </span>
                    <h3 className="mt-2 text-2xl md:text-3xl font-normal text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-lg">{step.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/5 bg-black/40 px-4 py-2">
                      <span className="text-xs font-semibold text-white">{step.metric}</span>
                      <span className="text-[9px] text-zinc-600 uppercase tracking-wider">Dampak Terukur</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scrollTo("left")}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-[#D4785C]" : "w-2 bg-white/20 hover:bg-white/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollTo("right")}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-400 hover:text-white hover:border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
