"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
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
  Plus,
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
];

const flowStepsDetailed = [
  {
    number: "01",
    title: "Sampah",
    tagline: "Mengenali Setiap Sumber Dampak",
    description: "Pemetaan jenis dan titik timbulan sampah secara presisi di wilayah urban dan rural sebagai langkah awal sirkularitas.",
    metric: "18+ Titik",
    metricLabel: "Pemetaan Aktif Wilayah",
    subdata: "Organik, Anorganik & Residu",
    icon: MapPin,
    color: "emerald",
  },
  {
    number: "02",
    title: "Edukasi",
    tagline: "Membangun Kesadaran Kolektif",
    description: "Pendampingan langsung di sekolah, komunitas, dan desa untuk mengintegrasikan kebiasaan memilah sejak dari rumah.",
    metric: "1.200+",
    metricLabel: "Siswa & Warga Terlibat",
    subdata: "15+ Desa & 5+ Modul Aktif",
    icon: Users,
    color: "coral",
  },
  {
    number: "03",
    title: "Pengumpulan",
    tagline: "Menjemput Keberlanjutan",
    description: "Sistem penjemputan sampah terpilah terjadwal dengan integrasi data logistik penimbangan digital.",
    metric: "500+ Ton",
    metricLabel: "Sampah Terkumpul",
    subdata: "Efisiensi Rute Logistik +24%",
    icon: Package,
    color: "emerald",
  },
  {
    number: "04",
    title: "Daur Ulang",
    tagline: "Mentransformasi Material Sisa",
    description: "Pengolahan sampah organik menjadi kompos berkualitas tinggi dan pemilahan bahan plastik premium untuk industri manufaktur.",
    metric: "85%",
    metricLabel: "Reduksi Sampah ke TPA",
    subdata: "Kemitraan Offtaker Industri",
    icon: Recycle,
    color: "coral",
  },
  {
    number: "05",
    title: "Produk",
    tagline: "Estetika yang Berkelanjutan",
    description: "Penciptaan produk kriya berkualitas tinggi, furnitur ekologis, dan suvenir bernilai ekonomi tinggi di bawah Baciraro Creative.",
    metric: "40+ Karya",
    metricLabel: "Produk Kreatif Tercipta",
    subdata: "100% Bahan Daur Ulang Terlacak",
    icon: Sprout,
    color: "emerald",
  },
  {
    number: "06",
    title: "Digital Tracking",
    tagline: "Menjaga Kepercayaan Publik",
    description: "Pencatatan jejak sampah secara end-to-end oleh platform digital ORDERS untuk menjamin kredibilitas laporan sirkularitas.",
    metric: "100%",
    metricLabel: "Transparansi Data",
    subdata: "Audit Dampak Real-time untuk CSR",
    icon: Cpu,
    color: "coral",
  },
];

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
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[2rem] border border-emerald-500/20 bg-emerald-950/40 text-xs font-black text-emerald-400 shadow-xl backdrop-blur-sm p-3 text-center">
          Chief Business
          <br />
          Development
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

const Integration = ({
  icon: Icon,
  name,
  description,
  href,
  image,
}: {
  icon: any;
  name: string;
  description: string;
  href: string;
  image?: string;
}) => {
  const needsWhiteBg = name === "ORDERS" || name === "ELMAST Greenovasi";

  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-[#0a0d0a]/60 p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0f140f]/60 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)] hover:scale-[1.01]"
    >
      <div className="space-y-4">
        {needsWhiteBg ? (
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-white/10 overflow-hidden relative p-2 shrink-0 transition-all duration-300 group-hover:scale-105">
            {image && (
              <Image
                src={image}
                alt={name}
                width={44}
                height={44}
                className="object-contain"
              />
            )}
          </div>
        ) : (
          <div className="flex h-14 w-14 items-center justify-start transition-all duration-300 group-hover:scale-105 shrink-0 relative">
            {image ? (
              <Image
                src={image}
                alt={name}
                width={56}
                height={56}
                className="object-contain h-full w-full object-left"
              />
            ) : (
              <div className="text-xs font-black tracking-wider text-emerald-400 bg-emerald-950/40 flex items-center justify-center h-full w-full rounded-xl border border-emerald-500/20 text-center px-2">
                Chief Business Development
              </div>
            )}
          </div>
        )}
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-emerald-400">
        Buka Detail
        <ArrowRight className="h-2.5 w-2.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background and grain overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

      <Header />

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
            className="mx-auto flex w-full max-w-5xl flex-col items-center text-center -mt-6 md:-mt-12"
          >
            <div className="relative mb-6 h-64 w-64 md:h-72 md:w-72 flex items-center justify-center">
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro logo"
                fill
                priority
                sizes="288px"
                className="object-contain p-2 drop-shadow-[0_25px_60px_rgba(16,185,129,0.45)]"
              />
            </div>

            <div className="relative max-w-5xl">
              <p className="font-serif text-2xl md:text-3xl italic tracking-tight text-[#f87171]">
                Ekosistem Circular Economy
              </p>
              <h1 className="mt-2 text-5xl font-normal leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl md:text-8xl lg:text-[7.5rem] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                Baciraro Sustainability
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-zinc-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Ekosistem pengelolaan sampah terintegrasi yang menghubungkan edukasi, daur ulang, pemberdayaan masyarakat, program kreatif, dan digital tracking untuk menciptakan dampak lingkungan yang terukur.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-zinc-100"
              >
                Mulai Kolaborasi CSR
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/creative"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-black/50 hover:border-white/30 hover:scale-[1.01]"
                >
                  Baciraro Creative
                </Link>
                <Link
                  href="/creative-studio"
                  className="inline-flex items-center gap-3 rounded-full border border-[#f87171]/30 bg-[#f87171]/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-[#f87171]/20 hover:border-[#f87171]/50 hover:scale-[1.01]"
                >
                  Baciraro Creative Studio
                </Link>
              </div>
            </div>

            <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
              {[
                "Circular economy end-to-end",
                "Digital monitoring system",
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

      {/* Partner Logo Cloud Section */}
      <section className="relative z-10 border-y border-white/5 bg-zinc-950/40 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">
            Dipercaya dalam Kolaborasi Lingkungan dan Circular Economy
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-70">
            {[
              { name: "Pertamina Geothermal Energy", detail: "PGE Lahendong" },
              { name: "Danone Aqua", detail: "Likupang & Serawet" },
              { name: "KKP", detail: "Kementerian Kelautan & Perikanan" },
              { name: "Kemenparekraf", detail: "Kementerian Pariwisata & Ekraf" },
              { name: "PLN", detail: "UID Suluttenggo" },
              { name: "BNI", detail: "BNI 46 Manado" },
            ].map((partner) => (
              <div 
                key={partner.name}
                className="flex flex-col items-center justify-center text-center p-4 rounded-2xl border border-white/5 bg-zinc-900/10 w-full hover:border-[#f87171]/20 hover:bg-zinc-900/30 transition-all duration-300 group"
              >
                <span className="text-xs font-bold text-white tracking-wider group-hover:text-[#f87171] transition-colors">{partner.name}</span>
                <span className="text-[9px] text-zinc-500 mt-1 uppercase tracking-widest">{partner.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] max-w-md overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/20 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/5">
                <Image
                  src="/baciraro ecosystem.jpeg"
                  alt="Baciraro Ecosystem"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>
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
      <section id="ecosystem" className="relative z-10 py-20 lg:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.03),_transparent_55%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Left Column: Heading and Testimonial */}
            <div className="flex flex-col gap-10 md:gap-14">
              <div className="space-y-6">
                <SectionLabel>Ekosistem Circular Economy</SectionLabel>
                <h2 className="text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                  Lima entitas yang saling terhubung.
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                  Setiap unit menjalankan fungsi berbeda, tetapi terhubung dalam satu sistem terintegrasi yang mendorong dampak sosial, ekonomi, dan lingkungan dari hulu ke hilir.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#flow"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg backdrop-blur transition-all duration-300 hover:border-emerald-500/20"
                  >
                    Jelajahi Alur Kerja
                    <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
                  </a>
                  <Link
                    href="/creative"
                    className="inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 hover:bg-[#f87171]/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#f87171] shadow-lg backdrop-blur transition-all duration-300 hover:border-[#f87171]/40 hover:scale-[1.01]"
                  >
                    Lihat Program Creative
                    <ArrowRight className="h-3.5 w-3.5 text-[#f87171]" />
                  </Link>
                </div>
              </div>

              {/* CEO Testimonial Box */}
              <div className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/5 bg-[#0a0d0a]/40 p-5 backdrop-blur-sm shadow-xl">
                <div className="relative flex aspect-square h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-zinc-900/60 shadow-lg">
                  <Image
                    src="/Marlon.png"
                    alt="Marlon Kamagi"
                    fill
                    sizes="48px"
                    className="object-cover object-top"
                  />
                </div>
                <blockquote>
                  <p className="text-sm italic leading-relaxed text-zinc-300">
                    &ldquo;Sinergi antar entitas adalah kunci untuk menciptakan sirkularitas sampah yang nyata dan berkelanjutan dari hulu ke hilir.&rdquo;
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                    <cite className="font-semibold not-italic text-white">Marlon Kamagi</cite>
                    <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:inline" />
                    <p className="text-zinc-500">CEO, Baciraro Sustainability</p>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Right Column: Premium Masked Grid */}
            <div className="relative -mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_75%,transparent_100%)] sm:mx-auto sm:max-w-xl md:mx-0 md:px-0 md:ml-auto md:w-full">
              <div className="grid gap-3 sm:grid-cols-2">
                {ecosystemCards.map((card, index) => (
                  <motion.div
                    key={card.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <Integration
                      icon={card.icon}
                      name={card.name}
                      description={card.description}
                      href={card.href}
                      image={card.image}
                    />
                  </motion.div>
                ))}

                {/* partnership CTA removed per content update */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="relative z-10 py-24 text-white lg:py-32 overflow-hidden">
        {/* Background ambient spot glow - Green Observatory */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,_rgba(16,185,129,0.04),_transparent_70%)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <SectionLabel>Alur Pengelolaan Sampah</SectionLabel>
            <div className="mt-6 max-w-3xl">
              <h2 className="text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
                Dari sampah menjadi data, <br />
                <span className="font-serif italic text-emerald-300">lalu kembali menjadi nilai.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-zinc-400 max-w-[65ch]">
                Visualisasi ini menunjukkan bagaimana Baciraro menghubungkan edukasi, pengumpulan, daur ulang, produk turunan, dan pelacakan digital dalam satu rantai nilai ekonomi sirkular yang tepercaya.
              </p>
            </div>
          </div>

          <div className="relative mt-24 space-y-16 md:space-y-24 max-w-5xl mx-auto">
            {/* Desktop Central Timeline Spine */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 via-yellow-500/10 to-[#f87171]/20 hidden md:block" />

            {/* Mobile Left-aligned Timeline Spine */}
            <div className="absolute left-6 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-gradient-to-b from-emerald-500/20 via-yellow-500/10 to-[#f87171]/20 md:hidden" />

            {flowStepsDetailed.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative flex flex-col md:flex-row items-start justify-between pl-12 md:pl-0 w-full group/step"
                >
                  {/* Circular Glow Node Marker */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-[#050805] flex items-center justify-center z-20 shadow-xl transition-all duration-500 group-hover/step:border-emerald-500/20">
                    <div className={`h-4 w-4 rounded-full ${step.color === 'coral' ? 'bg-[#f87171] shadow-[0_0_12px_rgba(248,113,113,0.6)]' : 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]'} flex items-center justify-center`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-white opacity-40 animate-ping" />
                    </div>
                  </div>

                  {/* Desktop Left Side Card */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1' : 'md:order-2 md:opacity-0 md:pointer-events-none md:invisible h-0 md:h-auto overflow-hidden md:overflow-visible'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -40, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: springEase }}
                      className="relative rounded-[2.5rem] border border-white/5 bg-[#0c0f0c]/60 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md group/card hover:border-emerald-500/20 hover:bg-[#0f140f]/60 transition-all duration-500"
                    >
                      {/* Ambient card spot glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,_${step.color === 'coral' ? 'rgba(248,113,113,0.04)' : 'rgba(16,185,129,0.04)'},_transparent_70%)]`} />

                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className={`font-serif italic text-lg ${step.color === 'coral' ? 'text-[#f87171]/90' : 'text-emerald-300/90'}`}>
                            {step.tagline}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight mt-1 leading-none">
                            {step.number}. {step.title}
                          </h3>
                        </div>
                        <div className={`rounded-2xl ${step.color === 'coral' ? 'bg-[#f87171]/10 text-[#f87171]' : 'bg-emerald-500/10 text-emerald-400'} p-3.5 group-hover/card:scale-110 transition-transform duration-300 shrink-0`}>
                          <StepIcon className="h-6 w-6" />
                        </div>
                      </div>

                      <p className="mt-4 text-zinc-400 text-sm leading-relaxed font-sans max-w-[45ch]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Desktop Right Side Card */}
                  <div className={`w-full md:w-[45%] ${!isEven ? 'md:order-2' : 'md:order-1 md:opacity-0 md:pointer-events-none md:invisible h-0 md:h-auto overflow-hidden md:overflow-visible'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 40, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: springEase }}
                      className="relative rounded-[2.5rem] border border-white/5 bg-[#0c0f0c]/60 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md group/card hover:border-emerald-500/20 hover:bg-[#0f140f]/60 transition-all duration-500"
                    >
                      {/* Ambient card spot glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,_${step.color === 'coral' ? 'rgba(248,113,113,0.04)' : 'rgba(16,185,129,0.04)'},_transparent_70%)]`} />

                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className={`font-serif italic text-lg ${step.color === 'coral' ? 'text-[#f87171]/90' : 'text-emerald-300/90'}`}>
                            {step.tagline}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-normal text-white tracking-tight mt-1 leading-none">
                            {step.number}. {step.title}
                          </h3>
                        </div>
                        <div className={`rounded-2xl ${step.color === 'coral' ? 'bg-[#f87171]/10 text-[#f87171]' : 'bg-emerald-500/10 text-emerald-400'} p-3.5 group-hover/card:scale-110 transition-transform duration-300 shrink-0`}>
                          <StepIcon className="h-6 w-6" />
                        </div>
                      </div>

                      <p className="mt-4 text-zinc-400 text-sm leading-relaxed font-sans max-w-[45ch]">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Baciraro Creative Showcase Section */}
      <section id="creative-showcase" className="relative z-10 py-20 lg:py-24 overflow-hidden border-t border-white/5 bg-[#0c0f0c]/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#f87171] backdrop-blur shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#f87171] animate-pulse" />
                Program Aktif
              </p>
              <h2 className="mt-5 text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl">
                Baciraro Creative
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Salah satu program aktif Baciraro yang menghadirkan ruang kreatif, edukatif, dan bernilai budaya dalam ekosistem Baciraro.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/creative-studio"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#f87171] hover:bg-[#ef4444] text-white px-6 py-3.5 text-sm font-semibold transition-all hover:gap-3 hover:scale-[1.01]"
                >
                  Jelajahi Baciraro Creative
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white transition-transform group-hover:scale-110">
                    <ArrowRight className="h-3 w-3 text-[#f87171]" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Papan Plastik (Eco-Board)", desc: "Material alternatif kayu tahan air untuk furnitur custom.", label: "HDPE Daur Ulang" },
                { title: "Suvenir & Plakat CSR", desc: "Suvenir ramah lingkungan pesanan resmi BUMN & korporasi.", label: "HDPE & PP Daur Ulang" },
                { title: "Sofa Puff Ecobrick", desc: "Sofa kriya hasil pemberdayaan kelompok perempuan desa.", label: "PET & Residu Terkumpul" },
                { title: "Karya Kreatif & Budaya", desc: "Produk kreatif bernilai tinggi yang berakar pada budaya lokal.", label: "10% Movement" },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-[#f87171]/20 transition-all duration-300"
                >
                  <p className="text-[9px] uppercase tracking-wider text-[#f87171] font-semibold">{item.label}</p>
                  <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Dampak Terukur"
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

      {/* CEO Profile Preview (Moved to bottom for corporate credibility layout) */}
      <section id="leadership" className="relative z-10 overflow-hidden py-20 text-white lg:py-24 border-t border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.06),_transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-8">
          <div className="flex w-full flex-col items-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur-md shadow-lg">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Kepemimpinan & Visi
            </p>

            <div className="mt-10 flex flex-col md:flex-row items-center gap-8 md:text-left max-w-3xl">
              <div className="relative h-64 w-52 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shrink-0">
                <Image
                  src="/Marlon.png"
                  alt="Marlon Kamagi"
                  fill
                  sizes="208px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              </div>
              <div className="flex-1">
                <p className="font-serif text-2xl italic tracking-tight text-emerald-300/80">
                  Chief Executive Officer
                </p>
                <h2 className="mt-1 text-4xl font-normal leading-none tracking-[-0.03em] text-white">
                  Marlon Kamagi
                </h2>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Community Development Worker & Climate Leader
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  Membawa pengalaman bertahun-tahun dalam pembangunan berkelanjutan, aksi iklim, dan pendampingan masyarakat untuk mengawal kredibilitas sirkularitas sampah di lapangan.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/leadership"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all hover:gap-3"
                  >
                    Lihat Leadership
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                      <ArrowRight className="h-2.5 w-2.5 text-white" />
                    </span>
                  </Link>
                  <Link
                    href="/creative"
                    className="inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 hover:bg-[#f87171]/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#f87171] shadow-lg backdrop-blur transition-all duration-300 hover:border-[#f87171]/40 hover:scale-[1.01]"
                  >
                    Jelajahi Baciraro Creative
                    <ArrowRight className="h-3.5 w-3.5 text-[#f87171]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 border-t border-white/5 bg-black/60 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Siap Berkolaborasi"
              title="Mari bangun sistem pengelolaan sampah yang lebih terhubung, terukur, dan berdampak."
              description="Hubungi Baciraro untuk diskusi kemitraan, implementasi CSR, program pemerintah daerah, atau pengembangan sistem digital pengelolaan sampah."
            />
          </div>

          <div className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Email Resmi", value: "creativebaciraro@gmail.com" },
                { title: "WhatsApp / Telepon", value: "+62 882-1283-5350" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/5 bg-zinc-950/40 p-4 shadow-lg">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">{item.title}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6288212835350?text=Halo%20Tim%20Baciraro%2C%20saya%20tertarik%20untuk%20berkolaborasi%20CSR%20%2F%20kemitraan%20lingkungan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/10 hover:scale-[1.01]"
              >
                Hubungi via WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="mailto:creativebaciraro@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-white/10"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}