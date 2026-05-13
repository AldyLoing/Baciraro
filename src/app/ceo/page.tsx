"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      {children}
    </p>
  );
}

export default function CEOPage() {
  return (
    <main className="relative overflow-hidden bg-[#f5faf5] text-slate-900">
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.12),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(245,250,245,1))]" />

      <header className="relative z-10 border-b border-emerald-100/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="transition-colors hover:text-emerald-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">Baciraro</p>
              <p className="mt-1 text-sm text-slate-500">Sustainability Platform</p>
            </div>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
        </div>
      </header>

      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.15),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.1),_transparent_50%)]" />
        <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex justify-center mb-8">
              <div className="relative w-64 h-80 overflow-hidden rounded-[2.5rem] shadow-2xl">
                <Image
                  src="/Marlon.png"
                  alt={ceoData.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-[0.3em]">Chief Executive Officer</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                {ceoData.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-emerald-300">{ceoData.subtitle}</p>
              <p className="text-lg text-slate-300">{ceoData.title}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 space-y-4"
          >
            {ceoData.description.map((para, index) => (
              <p key={index} className="leading-8 text-slate-200 text-lg max-w-2xl mx-auto">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Hubungi Marlon
            </a>
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-transparent px-6 py-3 text-emerald-300 font-semibold hover:bg-emerald-400/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
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
                className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-emerald-400 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20 transition-colors"
                title={social.name}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-2xl border border-emerald-100 bg-white p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Informasi Kontak</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 hover:bg-emerald-50 transition-colors"
            >
              <Phone className="h-6 w-6 text-emerald-700 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Telepon</p>
                <p className="mt-1 font-semibold text-slate-900">{ceoData.contact.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 hover:bg-emerald-50 transition-colors"
            >
              <Mail className="h-6 w-6 text-emerald-700 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                <p className="mt-1 font-semibold text-slate-900 break-all">{ceoData.contact.email}</p>
              </div>
            </a>
            <a
              href={`https://${ceoData.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 rounded-xl border border-emerald-100 hover:bg-emerald-50 transition-colors"
            >
              <Globe className="h-6 w-6 text-emerald-700 mt-1" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Website</p>
                <p className="mt-1 font-semibold text-slate-900">{ceoData.contact.website}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-emerald-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>Keahlian & Kompetensi</SectionLabel>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
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
                className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="h-8 w-8 text-emerald-700" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 text-center lg:p-12">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Tertarik untuk Berkolaborasi?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Hubungi Marlon Kamagi untuk diskusi lebih lanjut tentang Baciraro atau peluang kerjasama
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${ceoData.contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Kirim Email
            </a>
            <a
              href={`tel:${ceoData.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Hubungi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
