"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Recycle, Leaf, Palette, Code2, Paintbrush, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/context";

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

const categories = [
  { key: "all", label: "", icon: null },
  { key: "plastic", label: "", icon: Recycle },
  { key: "organic", label: "", icon: Leaf },
  { key: "craft", label: "", icon: Palette },
  { key: "digital", label: "", icon: Code2 },
  { key: "art", label: "", icon: Paintbrush },
];

const categoryColors: Record<string, string> = {
  plastic: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  organic: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  craft: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  digital: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  art: "bg-[#f2d479]/10 text-[#f2d479] border-[#f2d479]/20",
};

export default function ProductsPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === "all"
    ? products || []
    : (products || []).filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen text-[#fafafa] overflow-hidden">
      <div aria-hidden="true" className="page-bg" />
      <div className="relative z-[1]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-noise" />
      <Header subtitle={t("products.title")} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: springEase }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {t("products.title")}
          </p>
          <h1 className="mt-6 font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.08] tracking-[-0.04em] text-white">
            {t("products.headline")}<br /><span className="text-emerald-400">{t("products.headlineHighlight")}</span>
          </h1>
          <p className="mt-4 max-w-[600px] text-[15px] text-zinc-300 leading-relaxed">
            {t("products.subtitle")}
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: springEase }} className="mt-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat.key
                  ? "bg-emerald-500 text-black"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat.icon && <cat.icon className="h-3.5 w-3.5" />}
              {cat.key === "all" ? t("products.semua") : t("products." + cat.key)}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        {loading ? (
          <div className="mt-16 text-center text-zinc-500 text-sm">{t("products.memuat")}</div>
        ) : filtered.length === 0 ? (
          <div className="mt-16 text-center text-zinc-500 text-sm">{t("products.kosong")}</div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, i) => {
              const materials = typeof product.materials === "string" ? JSON.parse(product.materials || "[]") : (product.materials || []);
              const totalKg = materials.reduce((sum: number, m: { amount: number }) => sum + m.amount, 0);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: springEase }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur overflow-hidden transition-all duration-300 hover:border-white/[0.15] hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] bg-zinc-900/50 relative overflow-hidden">
                      {product.image_url ? (
                        <Image src={product.image_url} alt={product.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Recycle className="h-10 w-10 text-zinc-700" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border ${categoryColors[product.category] || categoryColors.craft}`}>
                          {t("products." + product.category) || product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-[17px] text-white group-hover:text-emerald-400 transition-colors">{product.title}</h3>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2">{product.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        {totalKg > 0 && (
                          <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-semibold">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {t("products.bahanTerselamatkan", { kg: totalKg })}
                          </div>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            window.open(`https://wa.me/6288212835350?text=${encodeURIComponent(t("products.waMessage", { title: product.title }))}`, '_blank', 'noopener');
                          }}
                          className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
                        >
                          <MessageCircle className="h-3 w-3" />
                          {t("products.pesan")}
                        </button>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
      </div>
    </main>
  );
}
