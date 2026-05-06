"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Play } from "lucide-react";

const featureCards = [
  {
    title: "Jejak Waraney.",
    number: "01",
    icon: "/lg.png",
    items: [
      "Berasal dari tradisi keprajuritan Minahasa.",
      "Dulu ditarikan para penjaga kampung.",
      "Kini menjadi simbol kehormatan budaya.",
    ],
  },
  {
    title: "Ritme dan Senjata.",
    number: "02",
    icon: "/pic.png",
    items: [
      "Diiringi tambur, gong, atau kolintang.",
      "Gerak pedang santi dan tombak wengko.",
      "Langkah 4/4 terasa kokoh dan presisi.",
    ],
  },
  {
    title: "Tiga Babak Inti.",
    number: "03",
    icon: "/pic.png",
    items: [
      "Cakalele: daya tempur dan kewaspadaan.",
      "Kumoyak: ayunan senjata yang terarah.",
      "Lalaya'an: penutup yang lebih cair dan lega.",
    ],
  },
];

export default function CreativePage() {
  return (
    <main className="bg-background text-primary-text">
      <section className="h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-[3rem] md:rounded-[5rem]">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

          <div className="absolute inset-0 flex items-end justify-center p-6 md:p-10">
            <div className="grid w-full max-w-7xl items-end gap-8 md:grid-cols-12">
              <div className="md:col-span-7 lg:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-[22vw] font-medium leading-[0.82] tracking-[-0.08em] sm:text-[20vw] md:text-[18vw] lg:text-[16vw]"
                >
                  Kawasaran
                </motion.h1>
              </div>

              <div className="md:col-span-5 lg:col-span-4 md:pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="rounded-2xl border border-white/10 bg-background/40 p-5 shadow-2xl backdrop-blur-md"
                >
                  <p className="text-sm leading-7 text-white/90">
                    Tarian ksatria Minahasa yang lahir dari semangat menjaga tanah, lalu bertransformasi menjadi
                    identitas budaya yang gagah, ritmis, dan penuh wibawa.
                  </p>
                  <button className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:gap-3">
                    Tonton highlight
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                      <Play className="h-4 w-4 text-white" fill="currentColor" />
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-white/5 py-16">
        <div className="m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="w-full text-center md:max-w-44 md:border-r md:border-white/10 md:pr-6 md:text-right">
              <p className="text-sm text-zinc-400">Powering the best teams</p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-8 py-4 md:justify-start">
              {[
                "/Baciraro cap.png",
                "/Logo (1).png",
                "/Logo Kemenbud.png",
                "/Baciraro cap.png",
                "/Logo (1).png",
                "/Logo Kemenbud.png",
              ].map((src, index) => (
                <Image
                  key={`${src}-${index}`}
                  src={src}
                  alt="Partner logo"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:h-12"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/5 bg-zinc-950 px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16">
          <p className="text-[10px] text-primary sm:text-xs">Budaya Minahasa</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-normal leading-[0.95] sm:text-4xl md:text-5xl lg:text-6xl">
            Kawasaran bukan sekadar tari, ia adalah napas keberanian.
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
            Setiap hentak langkah menyalakan ingatan, martabat, dan akar tradisi Minahasa. Di dalamnya ada
            disiplin, penghormatan pada leluhur, dan bahasa visual yang kuat untuk presentasi budaya.
          </p>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden px-4 pb-14 pt-8 sm:px-6 md:px-8">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h3 className="text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Warisan gerak yang lahir dari keberanian.
            </h3>
            <p className="mt-3 text-xl font-normal text-zinc-400 sm:text-2xl md:text-3xl lg:text-4xl">
              Hari ini tetap hidup sebagai wajah budaya Sulawesi Utara.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:h-[480px]">
            <article className="relative min-h-[320px] overflow-hidden rounded-2xl">
              <video
                src="/IMG_5184.MP4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-primary-text sm:text-base">Gagah, sakral, dan berakar.</p>
            </article>

            {featureCards.map((card) => (
              <article
                key={card.number}
                className="flex min-h-[320px] flex-col rounded-2xl border border-white/5 bg-zinc-950 p-4 sm:p-5"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12"
                />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-lg text-primary-text sm:text-xl">{card.title}</h3>
                  <span className="text-xs text-zinc-500">{card.number}</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <Check className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-primary transition-opacity hover:opacity-80">
                  Baca maknanya
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}