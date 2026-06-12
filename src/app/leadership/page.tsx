"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  Mail,
  Phone,
  Briefcase,
  MessageCircle,
  Share2,
  Award,
  Users,
  Globe,
  Lightbulb,
} from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ceoData = {
  name: "Marlon Kamagi",
  title: "Chief Executive Officer",
  subtitle: "Community Development Worker",
  bio: "Perencana Sosial yang berpengalaman dalam pembangunan berkelanjutan, penelitian sosial dan lingkungan, serta pemberdayaan komunitas berbasis participatory approach.",
  description: [
    "Salah seorang Climate Leader pada The Climate Reality Project Indonesia dengan aktivitas mengkampanyekan realitas iklim akibat pemanasan global.",
    "Vibrant Fasilitator untuk membangun komunitas menuju keagungan insani dan kemaslahatan bersama.",
    "Dengan teknik fasilitasi yang inovatif dan vibrant communication skill, Marlon memudahkan dalam membangun antusias dan mentransfer pengetahuan kepada komunitas.",
  ],
  contact: {
    phone: "+62 81356198513",
    email: "marlonkamagi@outlook.com",
    website: "marlonkamagi.wixsite.com/marlonkamagi",
  },
  social: [
    { name: "Facebook", icon: Share2, url: "http://www.facebook.com/marlonorangkulawi" },
    { name: "Twitter", icon: MessageCircle, url: "https://twitter.com/markfromkulawi" },
    { name: "LinkedIn", icon: Briefcase, url: "http://id.linkedin.com/pub/marlon-kamagi/1b/389/437/" },
  ],
  expertise: [
    {
      title: "Community Development",
      description: "Pengembangan komunitas berbasis partisipasi dan pemberdayaan lokal",
      icon: Users,
    },
    {
      title: "Climate Action",
      description: "Leadership dalam aksi iklim dan edukasi lingkungan berkelanjutan",
      icon: Globe,
    },
    {
      title: "Facilitation",
      description: "Teknik fasilitasi inovatif untuk transfer pengetahuan dan pengorganisasian masyarakat",
      icon: Lightbulb,
    },
    {
      title: "Social Research",
      description: "Penelitian kualitatif dan kuantitatif di bidang sosial dan lingkungan",
      icon: Award,
    },
  ],
};

const cbdData = {
  name: "Nobel Andrew Andries",
  title: "Chief Business Development",
  subtitle: "Independent Financial & Business Analyst",
  description: [
    "Analis keuangan yang berfokus pada rekonstruksi laporan keuangan, analisa biaya, arus kas, dan penilaian risiko bisnis.",
    "Berpengalaman dalam mengembangkan strategi bisnis berkelanjutan dan kemitraan strategis untuk mendorong pertumbuhan ekosistem Baciraro.",
  ],
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

export default function LeadershipPage() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.08),_transparent_30%),linear-gradient(180deg,_#000000_0%,_#050805_100%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[22rem] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
      <div className="pointer-events-none absolute right-[-8rem] top-[48rem] h-96 w-96 rounded-full bg-amber-500/5 blur-3xl -z-10" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] -z-10" />

      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="mx-auto max-w-7xl rounded-full border border-white/5 bg-[#0c0f0c]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
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
                  <p className="text-[11px] text-zinc-500 font-medium">Leadership</p>
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white shadow-lg backdrop-blur-md transition-all hover:scale-102 hover:bg-white/10 hover:border-white/20 duration-300"
            >
              <ArrowLeft className="h-3 w-3 mr-1" />
              Kembali
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 min-h-[90vh] flex items-center justify-center pt-16 pb-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(16,185,129,0.15),_transparent_60%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: springEase }}
            className="mb-12"
          >
            <div className="inline-flex justify-center mb-8">
              <div className="relative w-64 h-80 overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/Marlon.png"
                  alt={ceoData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-emerald-400 text-xs font-semibold uppercase tracking-[0.3em]">Chief Executive Officer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-none tracking-[-0.04em] text-white">
                {ceoData.name}
              </h1>
              <p className="font-serif text-3xl italic tracking-tight text-emerald-300/85">{ceoData.subtitle}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{ceoData.title}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: springEase }}
            className="mt-12 space-y-4"
          >
            {ceoData.description.map((para, index) => (
              <p key={index} className="leading-relaxed text-zinc-300 text-base md:text-lg max-w-2xl mx-auto">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: springEase }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg"
            >
              Hubungi Marlon
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                <Mail className="h-3.5 w-3.5 text-white" />
              </span>
            </a>
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              {ceoData.contact.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex gap-4 justify-center"
          >
            {ceoData.social.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shadow-lg"
                title={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[3rem] border border-white/5 bg-zinc-900/20 p-8 shadow-2xl backdrop-blur-sm">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500 mb-6">Informasi Kontak</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="flex items-start gap-4 p-5 rounded-[2rem] border border-white/5 bg-zinc-950/40 hover:bg-zinc-950/60 hover:border-white/10 transition-all duration-300"
            >
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Telepon</p>
                <p className="mt-1 font-semibold text-white">{ceoData.contact.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="flex items-start gap-4 p-5 rounded-[2rem] border border-white/5 bg-zinc-950/40 hover:bg-zinc-950/60 hover:border-white/10 transition-all duration-300"
            >
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Email</p>
                <p className="mt-1 font-semibold text-white break-all">{ceoData.contact.email}</p>
              </div>
            </a>
            <a
              href={`https://${ceoData.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-[2rem] border border-white/5 bg-zinc-950/40 hover:bg-zinc-950/60 hover:border-white/10 transition-all duration-300"
            >
              <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">Website</p>
                <p className="mt-1 font-semibold text-white">{ceoData.contact.website}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Keahlian & Kompetensi</SectionLabel>
            <h2 className="mt-6 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Pengalaman dan Keahlian Bertahun-tahun
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {ceoData.expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
              >
                <div className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-400 w-fit">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-normal text-white">{item.title}</h3>
                <p className="mt-2 text-zinc-400 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-white/5">
        <div className="mb-12">
          <SectionLabel>Chief Business Development</SectionLabel>
          <h2 className="mt-6 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {cbdData.name}
          </h2>
          <p className="mt-2 text-emerald-400 font-serif italic text-xl">{cbdData.subtitle}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">{cbdData.title}</p>
        </div>

        <div className="max-w-3xl space-y-4">
          {cbdData.description.map((para, index) => (
            <p key={index} className="text-base leading-relaxed text-zinc-300">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://www.linkedin.com/in/nobel-andrew-andries-34abb386/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-300"
          >
            <Briefcase className="h-4 w-4 text-emerald-400" />
            Lihat profil LinkedIn
          </a>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 text-center lg:p-12 shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl font-normal leading-[1.1] tracking-tight text-white">
            Tertarik untuk Berkolaborasi?
          </h2>
          <p className="mt-4 text-base text-zinc-400 max-w-xl mx-auto">
            Hubungi Marlon Kamagi untuk diskusi lebih lanjut tentang Baciraro atau peluang kemitraan lingkungan.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3"
            >
              Kirim Email
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                <Mail className="h-3.5 w-3.5 text-white" />
              </span>
            </a>
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              Hubungi langsung
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
