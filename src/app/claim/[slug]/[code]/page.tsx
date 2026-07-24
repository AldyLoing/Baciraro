"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Star, Send } from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ClaimPage() {
  const params = useParams();
  const slug = params.slug as string;
  const code = params.code as string;

  const [qr, setQr] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [submittingReview, setSubmittingReview] = useState(false);
  const [done, setDone] = useState(false);

  const fetchQr = async () => {
    setLoading(true);
    const res = await fetch(`/api/qr/${code}`);
    if (!res.ok) { setError("QR Code tidak ditemukan"); setLoading(false); return; }
    const data = await res.json();
    setQr(data.qr);
    if (data.qr.review_text) setReviewText(data.qr.review_text);
    if (data.qr.review_rating) setReviewRating(data.qr.review_rating);
    setLoading(false);
  };

  useEffect(() => { fetchQr(); }, [code]);

  const handleClaim = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitting(true);
    await fetch(`/api/qr/${code}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buyer_name: name, buyer_phone: phone }),
    });
    setSubmitting(false);
    await fetchQr();
  };

  const handleReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim() || !reviewRating) return;
    setSubmittingReview(true);
    await fetch(`/api/qr/${code}/review`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ review_text: reviewText, review_rating: reviewRating }),
    });
    setSubmittingReview(false);
    setDone(true);
    await fetchQr();
  };

  if (loading) return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-zinc-500 text-sm">Memuat...</p>
    </main>
  );

  if (error) return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <p className="text-6xl mb-4">🔍</p>
        <p className="text-zinc-400">{error}</p>
      </div>
    </main>
  );

  const isClaimed = qr?.buyer_name;
  const hasReview = qr?.review_text && qr?.review_rating;

  return (
    <main className="min-h-screen bg-black text-[#fafafa] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: springEase }}
        className="w-full max-w-md"
      >
        {!isClaimed ? (
          /* MODE 1: Claim - input nama pembeli */
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-emerald-400" />
            </div>
            <h1 className="font-serif text-2xl text-white mb-2">Registrasi Pembeli</h1>
            <p className="text-sm text-zinc-400 mb-6">Masukkan nama pembeli untuk produk ini</p>
            <form onSubmit={handleClaim} className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama pembeli"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/40"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="No. HP (opsional)"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/40"
              />
              <button
                type="submit"
                disabled={submitting || !name.trim()}
                className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-black py-3 text-sm font-bold transition-all disabled:opacity-40"
              >
                {submitting ? "Menyimpan..." : "Simpan"}
              </button>
            </form>
          </div>
        ) : hasReview && done ? (
          /* MODE 3: After review submitted - thank you */
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="h-10 w-10 text-emerald-400" fill="#34d399" />
            </motion.div>
            <h1 className="font-serif text-3xl text-white mb-2">Terima Kasih!</h1>
            <p className="text-emerald-400 font-semibold text-lg mb-1">{qr.buyer_name}</p>
            <p className="text-sm text-zinc-400 mb-6">Kontribusimu sangat berarti bagi lingkungan.</p>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="h-5 w-5" fill="#fbbf24" stroke="#fbbf24" />
              ))}
            </div>
            <p className="text-sm text-zinc-300 italic">&ldquo;{qr.review_text}&rdquo;</p>
          </div>
        ) : !hasReview ? (
          /* MODE 2: Claimed, input review */
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-emerald-400" fill="#34d399" />
            </div>
            <h1 className="font-serif text-2xl text-white mb-1">Terima Kasih</h1>
            <p className="text-emerald-400 font-semibold text-lg mb-4">{qr.buyer_name}</p>
            <p className="text-sm text-zinc-400 mb-6">Berikan kesan dan pesanmu tentang produk ini</p>
            <form onSubmit={handleReview} className="space-y-4">
              <div className="flex justify-center gap-2">
                {[1,2,3,4,5].map((s) => (
                  <button key={s} type="button" onClick={() => setReviewRating(s)}>
                    <Star className={`h-8 w-8 transition-all ${s <= reviewRating ? "fill-amber-400 text-amber-400" : "text-zinc-600"}`} />
                  </button>
                ))}
              </div>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Tulis kesan dan pesanmu..."
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/40 resize-none"
              />
              <button
                type="submit"
                disabled={submittingReview || !reviewText.trim() || !reviewRating}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black py-3 text-sm font-bold transition-all disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
                {submittingReview ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          </div>
        ) : (
          /* MODE 4: Already reviewed - show existing review */
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-7 w-7 text-emerald-400" fill="#34d399" />
            </div>
            <h1 className="font-serif text-2xl text-white mb-1">Terima Kasih</h1>
            <p className="text-emerald-400 font-semibold text-lg mb-1">{qr.buyer_name}</p>
            <p className="text-xs text-zinc-500 mb-6">Kamu sudah memberikan review</p>
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="h-5 w-5" fill={s <= qr.review_rating ? "#fbbf24" : "none"} stroke={s <= qr.review_rating ? "#fbbf24" : "#52525b"} />
              ))}
            </div>
            <p className="text-sm text-zinc-300 italic">&ldquo;{qr.review_text}&rdquo;</p>
            <button
              onClick={() => setDone(false)}
              className="mt-6 text-xs text-zinc-500 hover:text-zinc-300 underline"
            >
              Edit review
            </button>
          </div>
        )}
      </motion.div>
    </main>
  );
}
