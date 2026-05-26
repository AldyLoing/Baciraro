"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Code, Smartphone, BarChart3, Zap } from "lucide-react";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

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

export default function OrdersPage() {
  return (
    <main className="relative bg-[#050805] text-white min-h-screen">
      {/* Background grain overlays */}
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] z-10" />

      {/* Sticky Header */}
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
                  <p className="text-[11px] text-zinc-500 font-medium">ORDERS Profile</p>
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

      {/* GSAP Story Scroll Presentation */}
      <FlowArt aria-label="ORDERS Interactive Story Flow">
        
        {/* Slide 01: Hero / Who We Are */}
        <FlowSection aria-label="ORDERS Hero" style={{ backgroundColor: '#050805', color: '#fff' }}>
          <div className="flex flex-col h-full justify-between gap-6 pt-[2vh]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">01 — Who We Are</p>
              <span className="text-xs font-mono opacity-50">ORDERS Ecosystem</span>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="my-auto flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
              <div className="flex-1 space-y-6">
                <h1 className="text-[clamp(2.5rem,7vw,7.5rem)] font-bold leading-[0.9] uppercase tracking-tight text-white">
                  Tech for
                  <br />
                  <span className="text-emerald-400">Circular</span>
                  <br />
                  Future
                </h1>
                <p className="max-w-[55ch] text-[clamp(0.95rem,1.8vw,1.25rem)] font-normal leading-relaxed text-zinc-400">
                  Komunitas pengembang teknologi yang mendukung digitalisasi pengelolaan sampah dalam ekosistem Baciraro dengan inovasi, kolaborasi, dan keahlian tinggi.
                </p>
              </div>
              
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square overflow-hidden rounded-[2.5rem] border border-white/5 bg-white p-6 shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.08),_transparent_70%)] pointer-events-none" />
                  <Image
                    src="/Orders.png"
                    alt="ORDERS Logo Illustration"
                    fill
                    className="object-contain p-8 drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="flex justify-between items-center text-xs opacity-60">
              <span>Baciraro Sustainability Platform</span>
            </div>
          </div>
        </FlowSection>

        {/* Slide 02: Tentang / Our Mission */}
        <FlowSection aria-label="Tentang ORDERS" style={{ backgroundColor: '#022c22', color: '#fff' }}>
          <div className="flex flex-col h-full justify-between gap-6 pt-[2vh]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">02 — The Mission</p>
              <span className="text-xs font-mono opacity-50">Tentang ORDERS</span>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="my-auto grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-[clamp(2.5rem,6vw,6.5rem)] font-bold leading-[0.9] uppercase tracking-tight text-white">
                  Digital
                  <br />
                  Solidarity &
                  <br />
                  <span className="text-emerald-300">Trust</span>
                </h2>
                <div className="space-y-4 text-[clamp(0.9rem,1.5vw,1.15rem)] font-normal leading-relaxed text-zinc-300">
                  <p>
                    ORDERS adalah komunitas pengembang teknologi yang didedikasikan untuk menciptakan solusi digital inovatif dalam pengelolaan sampah secara transparan.
                  </p>
                  <p>
                    Kami berkomitmen untuk mentransformasi cara ekosistem Baciraro beroperasi melalui sistem berbasis data yang scalable, aman, dan berfokus pada kemudahan pengguna.
                  </p>
                </div>
              </div>
              
              <div className="rounded-[2rem] border border-white/10 bg-zinc-950/40 p-8 space-y-6 backdrop-blur shadow-2xl">
                <h3 className="text-lg font-bold uppercase tracking-wider text-emerald-300">Visi Keberlanjutan</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Dengan tim pengembang berpengalaman dan visi keberlanjutan yang kuat, kami merancang platform untuk mempertemukan pemangku kepentingan dalam satu ruang digital terintegrasi.
                </p>
                <div className="pt-6 border-t border-white/5 flex gap-8">
                  <div>
                    <p className="text-emerald-300 text-2xl font-bold font-mono">100%</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Open-Source Dev</p>
                  </div>
                  <div>
                    <p className="text-emerald-300 text-2xl font-bold font-mono">Secure</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Real-time Audits</p>
                  </div>
                </div>
              </div>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            <p className="text-xs opacity-60">Empowering Green Technology Systems</p>
          </div>
        </FlowSection>

        {/* Slide 03: Produk & Karya */}
        <FlowSection aria-label="Produk & Karya" style={{ backgroundColor: '#064e3b', color: '#fff' }}>
          <div className="flex flex-col h-full justify-between gap-6 pt-[2vh]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">03 — Products</p>
              <span className="text-xs font-mono opacity-50">Sistem yang Dibangun</span>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="my-auto space-y-6">
              <div>
                <h2 className="text-[clamp(2rem,5vw,5.5rem)] font-bold uppercase tracking-tight text-white mb-2 leading-none">
                  Sistem Digital Tangguh
                </h2>
                <p className="text-zinc-300 text-sm max-w-xl">
                  Platform digital yang memantau data operasional circular economy ekosistem Baciraro secara berkala.
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                {products.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <div
                      key={product.name}
                      className="group rounded-[2rem] border border-white/10 bg-zinc-950/60 p-6 shadow-xl backdrop-blur-sm hover:border-emerald-400/30 hover:bg-zinc-950/80 transition-all duration-300 flex flex-col justify-between min-h-[200px]"
                    >
                      <div>
                        <div className="inline-flex rounded-xl bg-emerald-500/10 p-3 mb-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{product.name}</h3>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-xs">{product.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            <p className="text-xs opacity-60">Scalable Waste Management Architectures</p>
          </div>
        </FlowSection>

        {/* Slide 04: Solusi & Visi */}
        <FlowSection aria-label="Solusi & Visi" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
          <div className="flex flex-col h-full justify-between gap-6 pt-[2vh]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-400">04 — Solutions & Vision</p>
              <span className="text-xs font-mono opacity-50">Pilar Keberlanjutan</span>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="my-auto grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-[clamp(2rem,5vw,5.5rem)] font-bold uppercase tracking-tight text-white leading-[0.95]">
                  Platform
                  <br />
                  <span className="text-indigo-400">Digital</span>
                  <br />
                  Waste
                </h2>
                
                <div className="space-y-3">
                  {solutions.map((sol) => (
                    <div key={sol.name} className="flex gap-4 items-start p-3.5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                      <div className="h-2 w-2 rounded-full bg-indigo-400 mt-2 shrink-0 animate-pulse" />
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{sol.name}</h4>
                        <p className="text-[11px] text-zinc-400 mt-1">{sol.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-[2.5rem] border border-white/5 bg-zinc-950/60 p-8 space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-wider">Visi Digitalisasi</h3>
                <p className="text-xs text-zinc-400">
                  Teknologi adalah sarana vital untuk melacak data dampak lingkungan secara transparan, mendorong circular economy yang efisien dan berkelanjutan.
                </p>
                
                <div className="grid gap-3">
                  {visionPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-full border border-white/5 bg-zinc-900/20 p-3 shadow-md hover:bg-zinc-900/40 transition-colors"
                    >
                      <Zap className="h-4 w-4 shrink-0 text-indigo-400" />
                      <span className="text-xs text-zinc-300 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            <p className="text-xs opacity-60">Decentralized Data and Civic Collaboration</p>
          </div>
        </FlowSection>

        {/* Slide 05: Kolaborasi & CTA */}
        <FlowSection aria-label="Hubungi Kami" style={{ backgroundColor: '#0a0d0a', color: '#fff' }}>
          <div className="flex flex-col h-full justify-between gap-6 pt-[2vh]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">05 — Join Us</p>
              <span className="text-xs font-mono opacity-50">Kolaborasi</span>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="my-auto text-center max-w-3xl mx-auto space-y-8">
              <h2 className="text-[clamp(2.5rem,6vw,6.5rem)] font-bold leading-[0.9] uppercase tracking-tight text-white">
                Ready to <br />
                <span className="text-emerald-400">Collaborate?</span>
              </h2>
              <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
                Kami menyambut kolaborasi dengan para pengembang, desainer, dan wirausahawan sosial yang bersemangat untuk memajukan transformasi teknologi hijau.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="mailto:halo@baciraro.id"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-wider text-black shadow-lg transition-all hover:scale-105 duration-300"
                >
                  Hubungi Kami
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                    <ArrowRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
                >
                  Kembali ke Ekosistem
                </Link>
              </div>
            </div>
            
            <hr className="border-none border-t border-white/10" />
            
            <div className="flex justify-between items-center text-[10px] md:text-xs opacity-60">
              <span>&copy; {new Date().getFullYear()} ORDERS. All rights reserved.</span>
              <span>Akar Tradisi, Wajah Masa Depan.</span>
            </div>
          </div>
        </FlowSection>
      </FlowArt>

      {/* Global Footer (slides up naturally after FlowArt is finished scrolling) */}
      <Footer />
    </main>
  );
}
