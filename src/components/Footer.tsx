"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0c0f0c] text-zinc-400 overflow-hidden">
      {/* Subtle green ambient glow behind footer content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.04),_transparent_70%)] pointer-events-none" />
      <div className="bg-noise absolute inset-0 opacity-[0.02] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 relative z-10">
        <div className="grid gap-12 sm:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
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
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-emerald-400 flex items-center gap-1.5">
                  Baciraro
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f87171] animate-pulse" />
                </p>
                <p className="text-[11px] text-zinc-500 font-medium">Sustainability Platform</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500 max-w-xs font-serif italic text-emerald-100/60">
              "Akar Tradisi, Wajah Masa Depan." Menghubungkan kearifan budaya lokal dengan rekayasa digital presisi demi kelestarian sirkular.
            </p>
            <p className="text-[10px] tracking-wide text-zinc-600 mt-2">
              &copy; {new Date().getFullYear()} Baciraro. All rights reserved.
            </p>
          </div>

          {/* Column 2: Ekosistem */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-6">
              Ekosistem Sirkular
            </p>
            <ul className="space-y-4 text-xs font-medium">
              {[
                { name: "Yayasan Tana Nyiur Lestari", href: "/tananyiurlestari" },
                { name: "Trash Recycle Center", href: "/trashrecyclecenter" },
                { name: "ELMAST Greenovasi", href: "/elmast" },
                { name: "CBD & Financial", href: "/cbd-baciraro" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 group"
                  >
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Halaman Utama */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-6">
              Tautan Utama
            </p>
            <ul className="space-y-4 text-xs font-medium">
              {[
                { name: "Beranda", href: "/" },
                { name: "CEO Profile", href: "/ceo" },
                { name: "Proyek Inisiatif", href: "/projects" },
                { name: "Baciraro Creative", href: "/creative" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Tech Engine Credit */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white mb-4">
                Platform Engine
              </p>
              <p className="text-xs leading-relaxed text-zinc-500 max-w-xs mb-4">
                Didukung penuh oleh infrastruktur digital yang efisien, transparan, dan terotomatisasi secara terpusat.
              </p>
            </div>
            
            {/* Tech credit dock */}
            <Link
              href="/orders"
              className="inline-flex items-center gap-3.5 rounded-2xl border border-white/5 bg-zinc-950/40 p-4 transition-all duration-300 hover:border-orange-500/30 hover:bg-zinc-950/60 shadow-lg group"
            >
              <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white p-1 flex items-center justify-center border border-white/10 shadow-inner">
                <Image
                  src="/Orders.png"
                  alt="Orders logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-400 flex items-center gap-1.5 transition-colors group-hover:text-orange-300">
                  ORDERS
                  <span className="h-1 w-1 rounded-full bg-[#f87171] animate-pulse" />
                </p>
                <p className="text-[10px] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Platform digital penggerak
                </p>
              </div>
            </Link>

            <button
              onClick={scrollToTop}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white shadow hover:bg-white/10 transition-all mt-2"
            >
              Kembali ke Atas
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
