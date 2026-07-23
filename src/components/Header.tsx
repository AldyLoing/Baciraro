"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Produk", href: "/products" },
  { name: "Track Record", href: "/track-record" },
  { name: "Leadership", href: "/leadership" },
  { name: "Creative Studio", href: "/creative-studio" },
  { name: "Baciraro Creative", href: "/creative" },
  { name: "Contact", href: "/contact" },
];

export default function Header({ subtitle }: { subtitle?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (Math.abs(delta) < 12) {
        lastScrollY.current = currentScrollY;
        return;
      } else if (delta > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2"
    >
      <div className="mx-auto max-w-7xl rounded-3xl md:rounded-full border border-white/5 bg-[#0c0f0c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300">
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
                <p className="text-[11px] text-zinc-500 font-medium">
                  {subtitle || "Sustainability Platform"}
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 border text-zinc-400 hover:text-white hover:bg-white/5 border-transparent hover:border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white transition-all hover:scale-102 hover:bg-white/10 hover:border-white/20 duration-300"
            >
              Kolaborasi CSR
              <ArrowRight className="h-3 w-3 text-emerald-400" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden border-t border-white/5 bg-[#0c0f0c]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-2 relative z-10 will-change-[transform,opacity]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-center text-sm font-semibold uppercase tracking-wider rounded-xl transition-all border text-zinc-400 hover:text-white hover:bg-white/5 border-transparent"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
