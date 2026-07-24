"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  buyer_name: string;
  review_text: string;
  review_rating: number;
  product_slug: string;
  product_title: string;
  product_image: string;
}

export default function ReviewMarquee() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.ok && res.json())
      .then((data) => data?.reviews && setReviews(data.reviews))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    setWidth(containerRef.current.scrollWidth / 2);
  }, [reviews]);

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
          ref={containerRef}
          animate={width ? { x: [0, -width] } : undefined}
          transition={{ repeat: Infinity, duration: width ? width / 40 : 40, ease: "linear" }}
          className="flex shrink-0 gap-6"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 rounded-[1.5rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                {r.product_image ? (
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0">
                    <Image src={r.product_image} alt={r.product_title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-xs text-zinc-300 truncate">{r.buyer_name}</p>
                  {r.product_title && (
                    <p className="text-[10px] text-zinc-600 truncate">{r.product_title}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5" fill={s <= r.review_rating ? "#fbbf24" : "none"} stroke={s <= r.review_rating ? "#fbbf24" : "#52525b"} />
                ))}
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">&ldquo;{r.review_text}&rdquo;</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
