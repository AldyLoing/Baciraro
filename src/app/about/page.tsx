"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Target, Eye, Users, Recycle, Sprout, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/context";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

const milestones = [
  { year: "2018" },
  { year: "2019" },
  { year: "2020" },
  { year: "2021" },
  { year: "2022" },
  { year: "2023-25" },
];

const valueIcons = [Recycle, Users, Sprout, Cpu];

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="relative overflow-hidden text-foreground min-h-screen bg-background">
      <div aria-hidden="true" className="page-bg" />
      <div className="relative z-[1]">
        <Header subtitle={t("about.label")} />

        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: springEase }}>
              <SectionLabel>{t("about.label")}</SectionLabel>
              <h1 className="mt-6 text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t("about.heroTitle")} <br />
                <span className="font-serif italic text-emerald-300">{t("about.heroTitleItalic")}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {t("about.heroDesc")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section — sama dengan yang dulu di homepage */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-md overflow-hidden rounded-[2rem] border border-white/5 bg-black/25 p-3 shadow-2xl backdrop-blur-sm">
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/5">
                  <Image
                    src="/baciraro ecosystem.jpeg"
                    alt={t("about.ekosistemAlt")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover transition-transform duration-500 hover:scale-102"
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionLabel>{t("about.ekosistemLabel")}</SectionLabel>
              <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("about.ekosistemTitle")}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
                {t("about.ekosistemDesc")}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-black/25 p-5 text-sm leading-relaxed text-zinc-400 shadow-lg backdrop-blur-sm">
                    {t(`about.ekosistemItems.${i}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-t border-white/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/5 bg-black/25 p-8 shadow-xl backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-normal text-white">{t("about.visi")}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {t("about.visiDesc")}
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/5 bg-black/25 p-8 shadow-xl backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-normal text-white">{t("about.misi")}</h3>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">
                  {t("about.misiDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-white/5 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <SectionLabel>{t("about.nilaiLabel")}</SectionLabel>
              <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("about.nilaiTitle")}
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {valueIcons.map((Icon, i) => (
                <div key={i} className="rounded-[2rem] border border-white/5 bg-black/25 p-6 shadow-xl backdrop-blur-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{t(`about.values.${i}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t(`about.values.${i}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="sejarah" className="border-t border-white/5 py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <SectionLabel>{t("about.timelineLabel")}</SectionLabel>
              <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t("about.timelineTitle")} <span className="font-serif italic text-emerald-300">{t("about.timelineTitleItalic")}</span>
              </h2>
            </div>
            <div className="relative mt-16">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className={`relative flex flex-col md:flex-row items-start gap-6 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="absolute left-5 md:left-1/2 top-2 h-5 w-5 -translate-x-1/2 rounded-full border border-emerald-500/30 bg-black flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">{m.year}</span>
                      <h3 className="mt-1 text-lg font-semibold text-white">{t(`about.milestones.${i}.title`)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{t(`about.milestones.${i}.desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionLabel>{t("about.kolaborasiLabel")}</SectionLabel>
            <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl">
              {t("about.kolaborasiTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
              {t("about.kolaborasiDesc")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg hover:bg-zinc-100"
              >
                {t("about.hubungiKami")}
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </Link>
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-black/50 hover:border-white/30"
              >
                {t("about.lihatLeadership")}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
