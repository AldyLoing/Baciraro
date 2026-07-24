"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Recycle, Leaf, Palette, Code2, QrCode, Package, ArrowLeft, Trash2, Star, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QRModal from "@/components/QRModal";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Product = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  story: string;
  materials: string;
  total_plastic_kg: number;
  image_url: string;
  gallery: string;
};

type Material = {
  name: string;
  amount: number;
  unit: string;
};

const categoryIcons: Record<string, typeof Recycle> = {
  plastic: Recycle,
  organic: Leaf,
  craft: Palette,
  digital: Code2,
};

const categoryLabels: Record<string, string> = {
  plastic: "Plastik",
  organic: "Organik",
  craft: "Kriya",
  digital: "Digital",
};

const categoryAccent: Record<string, string> = {
  plastic: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  organic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  craft: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  digital: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [showQR, setShowQR] = useState(false);
  const [qrUrl, setQrUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/products/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setProduct(data.product))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
    fetch(`/api/reviews/${slug}`)
      .then((res) => res.ok && res.json())
      .then((data) => data?.reviews && setReviews(data.reviews))
      .catch(() => {});
  }, [slug]);

  const openQR = async () => {
    const res = await fetch("/api/qr/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_slug: slug }),
    });
    if (res.ok) {
      const data = await res.json();
      setQrUrl(data.claimUrl || data.claim_url);
      setShowQR(true);
    }
  };

  if (loading) {
    return (
      <main className="relative min-h-screen text-[#fafafa] overflow-hidden">
        <div aria-hidden="true" className="page-bg" />
        <div className="relative z-[1]">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-noise" />
        <Header subtitle="Products" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center text-zinc-500 text-sm">Memuat produk...</div>
        <Footer />
        </div>
      </main>
    );
  }

  if (notFound || !product) {
    return (
      <main className="relative min-h-screen text-[#fafafa] overflow-hidden">
        <div aria-hidden="true" className="page-bg" />
        <div className="relative z-[1]">
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-noise" />
        <Header subtitle="Products" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <Package className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-400 text-lg">Produk tidak ditemukan</p>
          <Link href="/products" className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali ke katalog
          </Link>
        </div>
        <Footer />
        </div>
      </main>
    );
  }

  const materials: Material[] = Array.isArray(product.materials) ? product.materials : JSON.parse(product.materials || "[]");
  const gallery: string[] = Array.isArray(product.gallery) ? product.gallery : (() => {
    try {
      return JSON.parse(product.gallery || "[]");
    } catch {
      return [];
    }
  })();
  const allImages = [product.image_url, ...gallery].filter(Boolean);
  const totalKg = materials.reduce((sum, m) => sum + m.amount, 0);
  const Icon = categoryIcons[product.category] || Package;

  return (
    <main className="relative min-h-screen text-[#fafafa] overflow-hidden">
      <div aria-hidden="true" className="page-bg" />
      <div className="relative z-[1]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-noise" />
      <Header subtitle="Products" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: springEase }}>
          <Link href="/products" className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Kembali ke katalog
          </Link>
        </motion.div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Images */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: springEase }}>
            <div className="rounded-[2rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur overflow-hidden aspect-[4/3] relative">
              {allImages.length > 0 && allImages[selectedImage] ? (
                <Image
                  src={allImages[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-16 w-16 text-zinc-700" />
                </div>
              )}
            </div>
            {allImages.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`shrink-0 rounded-xl border overflow-hidden w-20 h-16 relative transition-all ${
                      i === selectedImage ? "border-emerald-500/50 ring-1 ring-emerald-500/30" : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Info */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: springEase }}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryAccent[product.category] || categoryAccent.craft}`}>
                <Icon className="h-3.5 w-3.5" />
                {categoryLabels[product.category] || product.category}
              </span>
            </div>

            <h1 className="font-serif text-[clamp(32px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.03em] text-white">
              {product.title}
            </h1>
            <p className="mt-4 text-[15px] text-zinc-300 leading-relaxed">{product.description}</p>

            {/* Story */}
            {product.story && (
              <div className="mt-8 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400 mb-3">Cerita Produk</p>
                <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">{product.story}</p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={openQR}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:gap-4"
              >
                <QrCode className="h-5 w-5 text-emerald-400" />
                Lihat QR
              </button>
              <a
                href={`https://wa.me/6288212835350?text=${encodeURIComponent(`Halo, saya ingin memesan produk ${product.title}, bisa dibantu?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-black transition-all hover:gap-4"
              >
                <MessageCircle className="h-5 w-5" />
                Pesan via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Material Breakdown */}
        {materials.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: springEase }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05] mb-8">
              <Trash2 className="h-4 w-4 text-emerald-400" />
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">Material Breakdown</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {materials.map((material, i) => {
                const pct = totalKg > 0 ? Math.round((material.amount / totalKg) * 100) : 0;
                return (
                  <div key={i} className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-6 transition-all hover:border-white/[0.12]">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">{material.name}</p>
                      <span className="text-xs text-emerald-400 font-semibold">{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-500/60" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-3 font-serif text-[22px] text-white">
                      {material.amount} <span className="text-sm text-zinc-500 font-sans">{material.unit}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Total Impact Card */}
            <div className="mt-6 rounded-[1.5rem] border border-emerald-500/10 bg-emerald-500/[0.03] backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-emerald-400">Total Bahan</p>
                  <p className="font-serif text-[28px] text-white mt-1">{totalKg} <span className="text-sm text-zinc-500 font-sans">kg</span></p>
                </div>
                {product.total_plastic_kg > 0 && (
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#f87171]">Plastik Dialihkan</p>
                    <p className="font-serif text-[28px] text-[#f87171] mt-1">{product.total_plastic_kg} <span className="text-sm text-zinc-500 font-sans">kg</span></p>
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Reviews */}
        {reviews.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: springEase }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 pb-3 border-b border-white/[0.05] mb-8">
              <Heart className="h-4 w-4 text-emerald-400" />
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">Review Pelanggan</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r: any, i: number) => (
                <div key={i} className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5" fill={s <= r.review_rating ? "#fbbf24" : "none"} stroke={s <= r.review_rating ? "#fbbf24" : "#52525b"} />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-300 mb-3 leading-relaxed">&ldquo;{r.review_text}&rdquo;</p>
                  <p className="text-xs text-zinc-500">{r.buyer_name}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      <QRModal open={showQR} onClose={() => setShowQR(false)} url={qrUrl} title={product.title} />
      <Footer />
      </div>
    </main>
  );
}
