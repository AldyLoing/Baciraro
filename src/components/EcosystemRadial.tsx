"use client";

import { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Recycle, Sprout, Cpu } from "lucide-react";

const TERRACOTTA = "#D4785C";
const GOLD = "#C9B48A";

const ENTITIES = [
  {
    id: "tnl",
    name: "Tana Nyiur Lestari",
    tagline: "Edukasi Lingkungan dan Pemberdayaan Masyarakat",
    description:
      "Berperan pada tahap awal ekosistem melalui edukasi lingkungan, peningkatan kesadaran, dan pemberdayaan masyarakat.",
    href: "/tananyiurlestari",
    image: "/tnl-transparent.png",
    icon: Leaf,
    labels: ["Edukasi", "Pemberdayaan", "Inovasi Sosial"],
    svgX: 22, svgY: 22,
    cssSide: "left", cssVertical: "top",
  },
  {
    id: "trc",
    name: "Trash Recycle Center",
    tagline: "Pengumpulan, Pemilahan, dan Pengolahan Material",
    description:
      "Unit operasional yang berperan sebagai offtaker dan pengolah sampah menjadi bahan baku berkualitas.",
    href: "/trashrecyclecenter",
    image: "/trc.png",
    icon: Recycle,
    labels: ["Pengumpulan", "Pemilahan", "Pengolahan", "Bahan Baku"],
    svgX: 78, svgY: 22,
    cssSide: "right", cssVertical: "top",
  },
  {
    id: "elmast",
    name: "ELMAST Greenovasi",
    tagline: "Teknologi Pengolahan Sampah Organik",
    description:
      "Mengembangkan teknologi untuk mengolah sampah organik menjadi biogas, kompos, dan pupuk organik cair.",
    href: "/elmast",
    image: "/elmast.png",
    icon: Sprout,
    labels: ["Biogas", "Kompos", "Pupuk Organik", "Energi Bersih"],
    svgX: 22, svgY: 78,
    cssSide: "left", cssVertical: "bottom",
    needsWhiteBg: true,
  },
  {
    id: "orders",
    name: "ORDERS",
    tagline: "Teknologi Digital dan Pengukuran Dampak",
    description:
      "Mendukung digitalisasi ekosistem melalui website, aplikasi, dashboard, dan pelacakan dampak.",
    href: "/orders",
    image: "/Orders.png",
    icon: Cpu,
    labels: ["Digitalisasi", "Data", "Monitoring", "EcoDigital"],
    svgX: 78, svgY: 78,
    cssSide: "right", cssVertical: "bottom",
    needsWhiteBg: true,
  },
];

const FLOW_STEPS = [
  { label: "Edukasi Masyarakat", desc: "Kesadaran & pemilahan dari sumber" },
  { label: "Pengumpulan & Pemilahan", desc: "Logistik terpadu & sortasi material" },
  { label: "Pengolahan", desc: "Plastik → material, Organik → energi" },
  { label: "Produk & Energi", desc: "Nilai tambah untuk industri & komunitas" },
  { label: "Digital Monitoring", desc: "Data transparan & dampak terukur" },
];

function pathD(entity: (typeof ENTITIES)[number]) {
  const cx = 50, cy = 50;
  const ex = entity.svgX, ey = entity.svgY;
  const mx = (cx + ex) / 2;
  const my = (cy + ey) / 2;
  return `M ${cx} ${cy} C ${cx} ${my}, ${mx} ${ey}, ${ex} ${ey}`;
}

function DesktopCard({ entity }: { entity: (typeof ENTITIES)[number] }) {
  const [hovered, setHovered] = useState(false);
  const isTop = entity.cssVertical === "top";
  const isLeft = entity.cssSide === "left";

  return (
    <Link
      href={entity.href}
      className="group absolute z-10 w-[230px] lg:w-[260px]"
      style={{
        [entity.cssVertical]: "5%",
        [entity.cssSide]: "3%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300
          ${hovered ? "border-[#D4785C]/40 bg-white/5 shadow-lg shadow-[#D4785C]/5" : "border-white/5 bg-black/30"}`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
              entity.needsWhiteBg
                ? "bg-white border-white/10"
                : "bg-black/40 border-white/5"
            } ${hovered ? "scale-110" : ""}`}
          >
            <Image
              src={entity.image}
              alt={entity.name}
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
                hovered ? "text-[#D4785C]" : "text-white"
              }`}
            >
              {entity.name}
            </h3>
            <p className="mt-1 text-[10px] leading-relaxed text-zinc-500 line-clamp-2">
              {entity.tagline}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-2">
          {entity.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {entity.labels.map((label) => (
            <span
              key={label}
              className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                hovered
                  ? "bg-[#D4785C]/10 text-[#D4785C]"
                  : "bg-white/5 text-zinc-500"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <div
          className={`mt-3 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
            hovered ? "text-[#D4785C] opacity-100" : "text-zinc-600 opacity-0"
          }`}
        >
          Pelajari Lebih Lanjut
          <ArrowRight className="h-3 w-3" />
        </div>
      </motion.div>
    </Link>
  );
}

function MobileCard({ entity, index }: { entity: (typeof ENTITIES)[number]; index: number }) {
  const needsWhiteBg = entity.needsWhiteBg;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={entity.href}
        className="group relative flex gap-4 rounded-2xl border border-white/5 bg-black/30 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#D4785C]/30 hover:bg-white/5"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40">
            <Image
              src={entity.image}
              alt={entity.name}
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="h-full w-px bg-gradient-to-b from-[#D4785C]/30 to-transparent" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white group-hover:text-[#D4785C] transition-colors">
            {entity.name}
          </h3>
          <p className="text-[10px] text-zinc-500 mt-0.5">{entity.tagline}</p>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {entity.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {entity.labels.map((label) => (
              <span
                key={label}
                className="rounded-full bg-white/5 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-zinc-500"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-zinc-600 group-hover:text-[#D4785C] transition-colors">
            Pelajari Lebih Lanjut
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function EntityIcon({ entity }: { entity: (typeof ENTITIES)[number] }) {
  const Icon = entity.icon;
  return <Icon className="h-4 w-4" />;
}

export default function EcosystemRadial() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const uid = useId();

  return (
    <section id="ecosystem" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(212,120,92,0.04),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400 backdrop-blur shadow-lg"
          >
            <span className="h-2 w-2 rounded-full bg-[#D4785C] animate-pulse" />
            LIMA ENTITAS YANG TERINTEGRASI
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Ekosistem{" "}
            <span className="font-serif italic text-[#D4785C]">Baciraro</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Baciraro membangun ekosistem{" "}
            <em className="text-zinc-200">circular economy</em> yang
            menghubungkan edukasi masyarakat, pengumpulan dan pengolahan sampah,
            teknologi lingkungan, produk kreatif, serta sistem digital dalam
            satu rangkaian yang terintegrasi.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-sm leading-relaxed text-zinc-500"
          >
            Setiap entitas memiliki fungsi khusus, tetapi bergerak menuju tujuan
            yang sama: mengubah sampah menjadi sumber daya, peluang ekonomi,
            energi, pengetahuan, dan dampak berkelanjutan.
          </motion.p>
        </div>

        {/* Radial Diagram — Desktop */}
        <div className="relative mt-16 hidden md:block">
          <div
            className="relative mx-auto aspect-square max-w-[820px]"
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Connection Lines */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              style={{ filter: "drop-shadow(0 0 4px rgba(212,120,92,0.15))" }}
            >
              <defs>
                <linearGradient id={`${uid}-line-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={TERRACOTTA} stopOpacity="0.05" />
                  <stop offset="50%" stopColor={GOLD} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={TERRACOTTA} stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {ENTITIES.map((entity) => (
                <motion.path
                  key={entity.id}
                  d={pathD(entity)}
                  fill="none"
                  stroke={`url(#${uid}-line-gradient)`}
                  strokeWidth={hoveredId === entity.id ? 2 : 1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  animate={{
                    stroke:
                      hoveredId === entity.id
                        ? TERRACOTTA
                        : `url(#${uid}-line-gradient)`,
                    strokeWidth: hoveredId === entity.id ? 2.5 : 1,
                    opacity: hoveredId === entity.id ? 1 : 0.7,
                  }}
                  style={{
                    filter:
                      hoveredId === entity.id
                        ? `drop-shadow(0 0 6px ${TERRACOTTA})`
                        : "none",
                  }}
                />
              ))}
            </svg>

            {/* Center Baciraro Circle */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex h-56 w-56 items-center justify-center lg:h-64 lg:w-64">
                {/* Outer static ring */}
                <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

                {/* Rotating ring with node dots */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke={TERRACOTTA}
                      strokeWidth="0.8"
                      strokeDasharray="4 8"
                      opacity="0.5"
                    />
                    <circle
                      cx="19"
                      cy="19"
                      r="3.5"
                      fill={TERRACOTTA}
                      opacity="0.7"
                    />
                    <circle
                      cx="81"
                      cy="19"
                      r="3.5"
                      fill={TERRACOTTA}
                      opacity="0.7"
                    />
                    <circle
                      cx="19"
                      cy="81"
                      r="3.5"
                      fill={TERRACOTTA}
                      opacity="0.7"
                    />
                    <circle
                      cx="81"
                      cy="81"
                      r="3.5"
                      fill={TERRACOTTA}
                      opacity="0.7"
                    />
                  </svg>
                </motion.div>

                {/* Inner ring */}
                <div className="absolute inset-3 rounded-full border border-white/[0.04] bg-black/60 backdrop-blur-md" />

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,120,92,0.08),transparent_70%)]" />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center px-6">
                  <div className="flex h-14 w-14 items-center justify-center">
                    <Image
                      src="/Baciraro cap.png"
                      alt="Baciraro"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
                    BACIRARO
                  </h4>
                  <p className="mt-1 text-[9px] leading-tight text-zinc-500 uppercase tracking-wider max-w-[140px]">
                    Pusat Ekosistem Circular Economy
                  </p>
                </div>
              </div>
            </div>

            {/* Entity Cards */}
            {ENTITIES.map((entity) => (
              <div
                key={entity.id}
                className="absolute z-10"
                style={{
                  [entity.cssVertical]: "5%",
                  [entity.cssSide]: "3%",
                  width: "230px",
                }}
                onMouseEnter={() => setHoveredId(entity.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link href={entity.href}>
                  <motion.div
                    animate={{ y: hoveredId === entity.id ? -5 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300
                      ${
                        hoveredId === entity.id
                          ? "border-[#D4785C]/40 bg-white/5 shadow-lg shadow-[#D4785C]/5"
                          : "border-white/5 bg-black/30"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          entity.needsWhiteBg
                            ? "bg-white border-white/10"
                            : "bg-black/40 border-white/5"
                        } ${hoveredId === entity.id ? "scale-110" : ""}`}
                      >
                        <Image
                          src={entity.image}
                          alt={entity.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`text-sm font-semibold leading-tight transition-colors duration-300 ${
                            hoveredId === entity.id
                              ? "text-[#D4785C]"
                              : "text-white"
                          }`}
                        >
                          {entity.name}
                        </h3>
                        <p className="mt-1 text-[10px] leading-relaxed text-zinc-500 line-clamp-2">
                          {entity.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-zinc-400 line-clamp-2">
                      {entity.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {entity.labels.map((label) => (
                        <span
                          key={label}
                          className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                            hoveredId === entity.id
                              ? "bg-[#D4785C]/10 text-[#D4785C]"
                              : "bg-white/5 text-zinc-500"
                          }`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      animate={{
                        opacity: hoveredId === entity.id ? 1 : 0,
                        y: hoveredId === entity.id ? 0 : 4,
                      }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#D4785C]"
                    >
                      Pelajari Lebih Lanjut
                      <ArrowRight className="h-3 w-3" />
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
            ))}

            {/* Closing statement in center area */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[2%] text-center">
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-semibold">
                Terintegrasi dari Hulu ke Hilir. Berdampak untuk Semua.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mt-12 space-y-4 md:hidden">
          {/* Mobile Baciraro Center Card */}
          <div className="rounded-2xl border border-white/5 bg-black/30 p-5 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h4 className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
              BACIRARO
            </h4>
            <p className="mt-1 text-[10px] text-zinc-500 uppercase tracking-wider">
              Pusat Ekosistem Circular Economy
            </p>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto">
              Baciraro membangun sistem pengelolaan sampah terintegrasi yang
              menghubungkan edukasi, pengumpulan, pengolahan, produk kreatif,
              pemberdayaan masyarakat, dan pelacakan digital.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center">
            <div className="h-8 w-px bg-gradient-to-b from-[#D4785C]/30 to-transparent" />
          </div>

          {/* Mobile Entity Cards */}
          {ENTITIES.map((entity, i) => (
            <MobileCard key={entity.id} entity={entity} index={i} />
          ))}

          {/* Closing statement mobile */}
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-semibold pt-4">
            Terintegrasi dari Hulu ke Hilir. Berdampak untuk Semua.
          </p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="#flow"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-[#D4785C]/30 hover:text-white"
          >
            Jelajahi Ekosistem Baciraro
            <ArrowRight className="h-4 w-4 text-[#D4785C] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* Horizontal Flow Diagram */}
      <div className="mx-auto mt-20 max-w-6xl border-t border-white/5 px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400 backdrop-blur shadow-lg"
          >
            <span className="h-2 w-2 rounded-full bg-[#D4785C] animate-pulse" />
            ALUR EKOSISTEM
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-sm leading-relaxed text-zinc-500 max-w-xl mx-auto"
          >
            Setiap tahap saling terhubung untuk memastikan sampah dikelola
            secara bertanggung jawab dan menghasilkan manfaat yang dapat
            dirasakan oleh masyarakat, lingkungan, serta mitra kolaborasi.
          </motion.p>
        </div>

        {/* Desktop Flow */}
        <div className="mt-12 hidden md:flex items-center justify-center gap-0">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-3 max-w-[150px]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4785C]/20 bg-[#D4785C]/5 text-[#D4785C]">
                  <span className="text-xs font-bold">{i + 1}</span>
                </div>
                <h4 className="mt-2 text-[11px] font-semibold text-white leading-tight">
                  {step.label}
                </h4>
                <p className="mt-1 text-[9px] text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
              {i < FLOW_STEPS.length - 1 && (
                <div className="flex items-center justify-center px-1">
                  <div className="h-px w-8 bg-gradient-to-r from-[#D4785C]/30 via-[#C9B48A]/20 to-transparent" />
                  <ArrowRight className="h-3 w-3 text-zinc-600 -ml-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Flow */}
        <div className="mt-10 space-y-6 md:hidden">
          {FLOW_STEPS.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4785C]/20 bg-[#D4785C]/5 text-[#D4785C]">
                  <span className="text-[10px] font-bold">{i + 1}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="mt-1 h-8 w-px bg-gradient-to-b from-[#D4785C]/20 to-transparent" />
                )}
              </div>
              <div className="pb-6">
                <h4 className="text-sm font-semibold text-white">{step.label}</h4>
                <p className="mt-0.5 text-xs text-zinc-500">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
