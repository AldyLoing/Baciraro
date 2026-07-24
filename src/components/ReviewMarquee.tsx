"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  id: number;
  buyer_name: string;
  review_text: string;
  review_rating: number;
  product_slug: string;
  products: { title: string } | null;
}

export default function ReviewMarquee() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.ok && res.json())
      .then((data) => data?.reviews && setReviews(data.reviews))
      .catch(() => {});
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-12">
      <div className="mb-8 px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400">
          Apa Kata Mereka
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex shrink-0 gap-6 pr-6"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5" fill={s <= r.review_rating ? "#fbbf24" : "none"} stroke={s <= r.review_rating ? "#fbbf24" : "#52525b"} />
                ))}
              </div>
              <p className="text-sm text-zinc-300 mb-3 leading-relaxed">&ldquo;{r.review_text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">{r.buyer_name}</p>
                {r.products?.title && (
                  <p className="text-[10px] text-zinc-600">{r.products.title}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
