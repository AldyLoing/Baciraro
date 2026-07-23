"use client";

import { motion } from "framer-motion";
import { Building2, Droplets, Ship, Landmark, Zap, Banknote } from "lucide-react";

const PARTNERS = [
  { name: "Pertamina Geothermal Energy", detail: "PGE Lahendong", icon: Zap },
  { name: "Danone Aqua", detail: "Likupang & Serawet", icon: Droplets },
  { name: "KKP", detail: "Kementerian Kelautan & Perikanan", icon: Ship },
  { name: "Kemenparekraf", detail: "Kementerian Pariwisata & Ekraf", icon: Landmark },
  { name: "PLN", detail: "UID Suluttenggo", icon: Building2 },
  { name: "BNI", detail: "BNI 46 Manado", icon: Banknote },
];

export default function PartnerMarquee() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative z-10 border-y border-white/5 bg-black/20 py-8 overflow-hidden">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-4">
        Dipercaya dalam Kolaborasi Lingkungan dan Circular Economy
      </p>
      <div className="relative overflow-hidden mask-image-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {items.map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="flex items-center gap-3 shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40">
                <partner.icon className="h-5 w-5 text-zinc-500 group-hover:text-[#D4785C] transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-zinc-400 whitespace-nowrap">{partner.name}</p>
                <p className="text-[9px] text-zinc-600 uppercase tracking-wider">{partner.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
