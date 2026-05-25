"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Leaf, Droplets, Zap, Award } from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const galleryImages = [
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.07.jpeg",
    alt: "Aktivitas ELMAST 1",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.08 (1).jpeg",
    alt: "Aktivitas ELMAST 2",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.08.jpeg",
    alt: "Aktivitas ELMAST 3",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.09 (1).jpeg",
    alt: "Aktivitas ELMAST 4",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.09.jpeg",
    alt: "Aktivitas ELMAST 5",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.10 (1).jpeg",
    alt: "Aktivitas ELMAST 6",
  },
  {
    src: "/elmast/WhatsApp Image 2026-05-22 at 22.50.10.jpeg",
    alt: "Aktivitas ELMAST 7",
  },
];

const products = [
  {
    name: "Biogas",
    description: "Energi gas terbarukan dari pengolahan sampah organik untuk kebutuhan memasak dan listrik.",
    icon: Zap,
  },
  {
    name: "Kompos",
    description: "Pupuk organik berkualitas tinggi hasil fermentasi sampah untuk pertanian berkelanjutan.",
    icon: Leaf,
  },
  {
    name: "Pupuk Organik Cair",
    description: "Nutrisi cair premium untuk tanaman dengan hasil pengolahan limbah organik optimal.",
    icon: Droplets,
  },
];

const solutions = [
  {
    title: "Sampah Rumah Tangga",
    description: "Mengolah limbah organik dari rumah tangga menjadi energi dan pupuk berguna secara mandiri.",
  },
  {
    title: "Eceng Gondok Danau Tondano",
    description: "Solusi inovatif penanganan gulma air menjadi produk yang bernilai ekonomi tinggi untuk komunitas.",
  },
];

const benefits = [
  { label: "Pengurangan TPA", value: "40%", description: "Volume sampah organik ke tempat pembuangan" },
  { label: "Energi Terbarukan", value: "100%", description: "Sumber energi bersih dan berkelanjutan" },
  { label: "Produktivitas Lahan", value: "+60%", description: "Peningkatan hasil pertanian dengan pupuk alami" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: springEase }}>
            <div className="mb-6">
              <SectionLabel>ELMAST Greenovasi</SectionLabel>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.04em] text-white">
              Mengubah Sampah Organik Menjadi Energi
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
              Teknologi inovatif pengolahan sampah organik menjadi biogas, kompos, dan pupuk organik cair berkualitas tinggi untuk kelestarian tanah dan kemandirian energi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#technology"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg"
              >
                Lihat Teknologi
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                Lihat Manfaat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-amber-500/5 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)]" />
              <Image
                src="/elmast.png"
                alt="ELMAST Logo"
                fill
                className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section id="technology" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square relative overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
            <Image
              src="/elmast.png"
              alt="Teknologi ELMAST"
              fill
              className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(16,185,129,0.15)]"
            />
          </div>

          <div>
            <h2 className="text-4xl font-normal leading-[1.15] tracking-tight text-white mb-6">Tentang Teknologi ELMAST</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                ELMAST Greenovasi menghadirkan sistem biogas terpadu yang merombak limbah organik menjadi sumber energi bersih terbarukan sekaligus pupuk hayati premium.
              </p>
              <p>
                Teknologi kami telah terbukti efektif mengurangi beban volume sampah organik ke TPA secara signifikan dengan proses fermentasi anaerobic yang terkontrol ketat.
              </p>
              <p>
                Dengan model circular economy yang terukur, inisiatif ini memperkuat kemandirian energi rumah tangga, mengurangi emisi gas rumah kaca, dan memulihkan produktivitas lahan tani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage]);

  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>Dokumentasi Kegiatan</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-4">Galeri Aksi Lapangan</h2>
          <p className="mx-auto max-w-2xl text-base text-zinc-400">
            Aktivitas implementasi pengolahan sampah organik menjadi energi hijau dan pupuk berkelanjutan bersama komunitas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: springEase }}
              className="group overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/20 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => setActiveImage(image)}
                className="relative block aspect-[4/3] w-full overflow-hidden text-left"
                aria-label={`Buka ${image.alt} dalam ukuran penuh`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau gambar ELMAST"
          >
            <div className="relative h-[80vh] w-full max-w-5xl rounded-[2rem] border border-white/10 bg-zinc-950 p-4 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain p-4"
                sizes="100vw"
                priority
              />
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur shadow-xl transition-all duration-200"
                aria-label="Tutup gambar"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Hasil Pengolahan</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-4">Produk Unggulan</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Tiga produk utama yang lahir dari fasilitas teknologi ramah lingkungan ELMAST.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="group rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-normal text-white mb-3">{product.name}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>Solusi Masalah</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight text-white mt-6 mb-4">Ruang Lingkup Solusi</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-8 shadow-xl backdrop-blur-sm"
            >
              <Award className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="text-2xl font-normal text-white mb-3">{solution.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-normal tracking-tight mb-12 text-center text-white">Manfaat & Dampak Nyata</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 backdrop-blur-sm shadow-xl"
            >
              <p className="text-5xl font-semibold text-emerald-400 mb-2">{benefit.value}</p>
              <h3 className="font-semibold text-white mb-2">{benefit.label}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-white mb-4">Implementasi Teknologi ELMAST</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Kami siap memfasilitasi implementasi instalasi biogas terintegrasi dan sistem pupuk hayati berkelanjutan di lokasi Anda.
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
              Kembali ke Ekosistem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ElmastPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background and grain overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

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
                  <p className="text-[11px] text-zinc-500 font-medium">ELMAST Greenovasi Profile</p>
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

      <HeroSection />
      <TechnologySection />
      <GallerySection />
      <ProductsSection />
      <SolutionsSection />
      <BenefitsSection />
      <CTASection />

      <Footer />
    </main>
  );
}
