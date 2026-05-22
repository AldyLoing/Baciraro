"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, Zap, Award } from "lucide-react";

const galleryImages = [
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.07.jpeg",
    alt: "Aktivitas ELMAST 1",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.08%20(1).jpeg",
    alt: "Aktivitas ELMAST 2",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.08.jpeg",
    alt: "Aktivitas ELMAST 3",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.09%20(1).jpeg",
    alt: "Aktivitas ELMAST 4",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.09.jpeg",
    alt: "Aktivitas ELMAST 5",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.10%20(1).jpeg",
    alt: "Aktivitas ELMAST 6",
  },
  {
    src: "/elmast/WhatsApp%20Image%202026-05-22%20at%2022.50.10.jpeg",
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
    description: "Mengolah limbah organik dari rumah tangga menjadi energi dan pupuk berguna",
  },
  {
    title: "Eceng Gondok Danau Tondano",
    description: "Solusi penanganan gulma air menjadi produk yang bernilai ekonomi tinggi",
  },
];

const benefits = [
  { label: "Pengurangan TPA", value: "40%", description: "Volume sampah ke tempat pembuangan" },
  { label: "Energi Terbarukan", value: "100%", description: "Sumber energi bersih dan sustainable" },
  { label: "Produktivitas Lahan", value: "+60%", description: "Peningkatan hasil pertanian dengan pupuk organik" },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-lime-50 pt-20 pb-16 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(0,147,69,0.06),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">ELMAST Greenovasi</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              Mengubah Sampah Organik Menjadi Energi dan Kehidupan
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl">
              Teknologi inovatif pengolahan sampah organik menjadi biogas, kompos, dan pupuk organik berkualitas tinggi untuk keberlanjutan lingkungan dan ekonomi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#technology"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
              >
                Lihat Teknologi
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-transform hover:-translate-y-0.5"
              >
                Lihat Manfaat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-green-300/20 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-2xl">
              <Image
                src="/elmast.jpeg"
                alt="Logo ELMAST Greenovasi"
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

function TechnologySection() {
  return (
    <section id="technology" className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-green-50 p-4">
            <Image
              src="/elmast.jpeg"
              alt="Teknologi ELMAST"
              fill
              className="object-contain p-8"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Tentang Teknologi ELMAST</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                ELMAST Greenovasi menghadirkan sistem biogas terpadu yang mengubah limbah organik menjadi sumber energi terbarukan sekaligus pupuk berkualitas.
              </p>
              <p>
                Teknologi kami telah terbukti efektif mengurangi volume sampah organik ke TPA sambil memberikan solusi energi bersih dan pupuk alami untuk pertanian.
              </p>
              <p>
                Dengan proses anaerobic digestion yang optimal, kami menciptakan ekonomi sirkular yang menguntungkan lingkungan, petani, dan masyarakat secara bersamaan.
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
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Dokumentasi ELMAST</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Dokumentasi implementasi dan aktivitas pengolahan sampah organik menjadi energi serta pupuk berkelanjutan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.25rem] border border-emerald-100 bg-white shadow-[0_10px_30px_rgba(0,147,69,0.08)]"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau gambar ELMAST"
          >
            <div className="relative h-[85vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-1.5 text-sm font-semibold text-white hover:bg-black/80"
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
    <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Produk Unggulan</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tiga produk utama dari teknologi pengolahan sampah organik ELMAST
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
              className="group rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_10px_40px_rgba(0,147,69,0.08)]"
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
    <section className="relative py-20 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Solusi Kami</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-[1.75rem] border border-emerald-100 bg-gradient-to-br from-green-50 to-emerald-50 p-8"
            >
              <Award className="h-8 w-8 text-emerald-700 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-lg text-slate-600 leading-7">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-20 px-6 lg:px-8 bg-emerald-950 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.1),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Manfaat & Dampak</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 backdrop-blur p-6"
            >
              <p className="text-4xl font-bold text-amber-300 mb-2">{benefit.value}</p>
              <h3 className="font-semibold text-emerald-50 mb-2">{benefit.label}</h3>
              <p className="text-sm text-emerald-100">{benefit.description}</p>
            </motion.div>
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
        <div className="rounded-[2rem] bg-gradient-to-r from-emerald-700 to-green-600 p-12 text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Implementasi Teknologi ELMAST</h2>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto mb-8">
            Kami siap membantu implementasi teknologi biogas di lokasi Anda dengan dukungan teknis dan konsultasi penuh
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

export default function ElmastPage() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <TechnologySection />
      <GallerySection />
      <ProductsSection />
      <SolutionsSection />
      <BenefitsSection />
      <CTASection />
    </main>
  );
}
