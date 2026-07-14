"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ceoData = {
  name: "Marlon Kamagi",
  title: "Chief Executive Officer",
  subtitle: "Community Development Worker",
  description: [
    "Salah seorang Climate Leader pada The Climate Reality Project Indonesia dengan aktivitas mengkampanyekan realitas iklim akibat pemanasan global.",
    "Vibrant Fasilitator untuk membangun komunitas menuju keagungan insani dan kemaslahatan bersama.",
    "Dengan teknik fasilitasi yang inovatif dan vibrant communication skill, Marlon memudahkan dalam membangun antusias dan mentransfer pengetahuan kepada komunitas.",
  ],
  linkedin: "http://id.linkedin.com/pub/marlon-kamagi/1b/389/437/",
  email: "marlonkamagi@outlook.com",
};

type Member = { name: string; role: string; initials: string; email?: string; linkedin?: string; instagram?: string; photo?: string };

type DivisionData = {
  name: string;
  title: string;
  subtitle: string;
  photo?: string;
  linkedin?: string;
  email?: string;
  instagram?: string;
  divisionLabel: string;
  members: Member[];
};

const businessData: DivisionData = {
  name: "Nobel Andrew Andries",
  title: "Chief Business & Development Officer",
  subtitle: "Independent Financial & Business Analyst",
  photo: "/Nobel Andrew Andries.png",
  linkedin: "https://www.linkedin.com/in/nobel-andrew-andries-34abb386/",
  divisionLabel: "Business & Development Division",
  members: [
    { name: "Natasya Lumingkewas", role: "Finance & Administration Officer", initials: "NL", photo: "/Natasya Lumingkewas v2.png", linkedin: "https://www.linkedin.com/in/natasya-lumingkewas/", instagram: "https://www.instagram.com/ntsylumingkewas/" },
    { name: "Faith Alexander", role: "Public Relations & Community Engagement Officer", initials: "FA", photo: "/Faith Alexander v2.png", instagram: "https://www.instagram.com/feyyitt/" },
    { name: "Daniel Kamagi", role: "Business Development Officer", initials: "DK", photo: "/Daniel Kamagi.png", instagram: "https://www.instagram.com/kamagidaniel/", linkedin: "https://www.linkedin.com/in/daniel-kamagi-0a2a52379/" },
  ],
};

const techData: DivisionData = {
  name: "Aldy Loing",
  title: "Chief Technology Officer",
  subtitle: "Software Engineer & Digital Architect",
  photo: "/Aldy Loing.png",
  linkedin: "https://www.linkedin.com/in/aldyloing/",
  instagram: "https://www.instagram.com/aldy_loing/",
  email: "loingaldy@gmail.com",
  divisionLabel: "Technology Division",
  members: [
    { name: "Kevin Pesik", role: "Lead Software Engineer & AI Architect", initials: "KP", photo: "/Kevin Pesik.png", linkedin: "https://www.linkedin.com/in/kevin-pesik-115b24280/", instagram: "https://www.instagram.com/lac_kvn/" },
    { name: "Jazel Kandou", role: "Software Developer", initials: "JK", photo: "/Jazel Kandou v2.png", instagram: "https://www.instagram.com/jazeeray/", linkedin: "https://www.linkedin.com/in/jazel-ray-verald-kandou-jazee241103/" },
    { name: "Given Tambalean", role: "Product Innovation & Digital Creative Officer", initials: "GT", photo: "/Given Tambalean.png", linkedin: "https://www.linkedin.com/in/feergio-given-majesti-tambalean/", instagram: "https://www.instagram.com/giventambalean/" },
  ],
};

const opsData: DivisionData = {
  name: "Clay Lalamentik",
  title: "Chief Operating Officer",
  subtitle: "Operational & Supply Chain Strategist",
  photo: "/Clay.png",
  linkedin: "#",
  email: "clay@baciraro.com",
  divisionLabel: "Operations & Communications Division",
  members: [
    { name: "Rizky Mema", role: "Digital Content & Media Officer", initials: "RM", photo: "/Rizky Mema.png", instagram: "https://www.instagram.com/rizkymema/", linkedin: "https://www.linkedin.com/in/rizky-oktavian-teddy-mema-947336370/" },
    { name: "Friestha Arikalang", role: "Administration & Documentation Officer", initials: "FA", photo: "/Friestha Arikalang.png", linkedin: "https://www.linkedin.com/in/friesthaarikalang/", instagram: "https://www.instagram.com/fristaarikalang/", email: "friesthafricilia@gmail.com" },
    { name: "Giordyano Anhar", role: "Creative Design & Media Officer", initials: "GA", photo: "/Giordyano Anhar.png", instagram: "https://www.instagram.com/gioran_30/" },
  ],
};

const techDirData: DivisionData = {
  name: "Owen Kalumata",
  title: "Technical Director",
  subtitle: "Technical Operations & Systems Lead",
  photo: "/Owen Kalumata.png",
  linkedin: "https://www.linkedin.com/in/owen-kalumata/",
  instagram: "https://www.instagram.com/_owenklmt/",
  email: "owen@baciraro.com",
  divisionLabel: "Technical Division",
  members: [
    { name: "Jemsi Indrakusuma", role: "Technical Operations Engineer", initials: "JI", photo: "/Jemsi Indrakusuma.png" },
    { name: "Calvin Kakase", role: "Technical & Systems Engineer", initials: "CK", linkedin: "https://www.linkedin.com/in/calvinkakase/", instagram: "https://www.instagram.com/clvnkkse_/", email: "sscalvinkakase@gmail.com", photo: "/Calvin Kakase.png" },
    { name: "Hizkia Kamagi", role: "Technical Support Engineer", initials: "HK" },
  ],
};

function LinkedInIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function EmailIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.42l-9 5.4-9-5.4V6l9 5.4L21 6v2.42z" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </div>
  );
}

function IconBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.04] text-zinc-400 transition-all duration-300 hover:border-[#f87171]/25 hover:bg-[#f87171]/[0.06] hover:text-[#f87171]"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: springEase }}
      className="group rounded-[20px] border border-white/[0.07] bg-white/[0.02] backdrop-blur overflow-hidden transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        {member.photo ? (
          <Image src={member.photo} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/[0.06] to-black/90">
            <span className="font-serif text-3xl text-emerald-400/60">{member.initials}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.55] via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="p-4 pb-5">
        <h3 className="font-serif text-[17px] font-normal leading-tight text-white">{member.name}</h3>
        <p className="mt-1 text-xs text-zinc-400 leading-relaxed">{member.role}</p>
        <div className="mt-3 flex gap-1.5">
          {member.linkedin && (
            <IconBtn href={member.linkedin} label={`${member.name} LinkedIn`}>
              <LinkedInIcon className="h-[13px] w-[13px]" />
            </IconBtn>
          )}
          {member.instagram && (
            <IconBtn href={member.instagram} label={`${member.name} Instagram`}>
              <InstagramIcon className="h-[13px] w-[13px]" />
            </IconBtn>
          )}
          {member.email && (
            <IconBtn href={`mailto:${member.email}`} label={`${member.name} Email`}>
              <EmailIcon className="h-[13px] w-[13px]" />
            </IconBtn>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function DivisionSection({ data }: { data: DivisionData }) {
  const gridClass = data.members.length === 2
    ? "grid-cols-1 sm:grid-cols-2"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="border-t border-white/[0.04] py-16 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: springEase }}
          className="rounded-[20px] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-8"
        >
          <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden border border-white/[0.05] shadow-[0_16px_48px_rgba(0,0,0,0.5)] mb-5">
            {data.photo ? (
              <Image src={data.photo} alt={data.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="340px" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/[0.08] to-black/90">
                <span className="font-serif text-5xl text-emerald-400/60">
                  {data.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.4] via-transparent to-transparent pointer-events-none" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#f87171] mb-1">
            {data.title}
          </p>
          <h2 className="font-serif text-[26px] font-normal leading-tight text-white">{data.name}</h2>
          <p className="mt-1 text-sm text-zinc-400">{data.subtitle}</p>
          <div className="mt-4 flex gap-2">
            {data.linkedin && (
              <IconBtn href={data.linkedin} label={`${data.name} LinkedIn`}>
                <LinkedInIcon />
              </IconBtn>
            )}
            {data.instagram && (
              <IconBtn href={data.instagram} label={`${data.name} Instagram`}>
                <InstagramIcon />
              </IconBtn>
            )}
            {data.email && (
              <IconBtn href={`mailto:${data.email}`} label={`${data.name} Email`}>
                <EmailIcon />
              </IconBtn>
            )}
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: springEase }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-400 pb-3 border-b border-white/[0.05] mb-8"
          >
            {data.divisionLabel}
          </motion.p>
          <div className={`grid gap-5 ${gridClass}`}>
            {data.members.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LeadershipPage() {
  return (
    <main className="relative overflow-hidden bg-black text-[#fafafa] min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-noise" />
      <div className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 20% 15%, rgba(16,185,129,0.10), transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 25%, rgba(248,113,113,0.05), transparent 50%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.06), transparent 60%),
            radial-gradient(ellipse 80% 50% at 30% 75%, rgba(16,185,129,0.04), transparent 50%),
            radial-gradient(ellipse 50% 40% at 70% 85%, rgba(248,113,113,0.03), transparent 50%),
            linear-gradient(180deg, #000000 0%, #050805 100%)
          `
        }}
      />

      <Header subtitle="Leadership" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== HERO ===== */}
        <section className="pt-20 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: springEase }}
          >
            <SectionLabel>Leadership</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="mt-5 font-serif text-[clamp(48px,7vw,88px)] font-normal leading-[1.08] tracking-[-0.04em] text-white"
          >
            Leadership Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: springEase }}
            className="mt-4 max-w-[640px] mx-auto text-[15px] text-zinc-300 leading-relaxed"
          >
            Tim kepemimpinan Baciraro yang berdedikasi untuk mendorong inovasi, memperkuat kolaborasi, dan menciptakan dampak berkelanjutan bagi masyarakat dan lingkungan.
          </motion.p>
        </section>

        {/* ===== CEO ===== */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: springEase }}
            className="relative rounded-[36px] p-8 lg:p-[60px_56px] border border-emerald-500/15 backdrop-blur-[20px]"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(16,185,129,0.06), transparent 70%), rgba(255,255,255,0.02)",
              boxShadow: "0 0 80px rgba(16,185,129,0.06), 0 0 160px rgba(16,185,129,0.04), inset 0 0 80px rgba(16,185,129,0.02)",
            }}
          >
            <div className="pointer-events-none absolute inset-[-1px] rounded-[36px]"
              style={{
                padding: 1,
                background: "linear-gradient(135deg, rgba(16,185,129,0.25), transparent 40%, transparent 60%, rgba(248,113,113,0.10))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-start">
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/Marlon.png"
                  alt={ceoData.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-[0.6s] hover:scale-105"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-[#f87171] mb-2">
                  Chief Executive Officer (CEO)
                </p>
                <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-normal leading-[1.08] tracking-[-0.03em] text-white">
                  {ceoData.name}
                </h2>
                <p className="font-serif text-[22px] italic text-emerald-400 mt-2">
                  {ceoData.subtitle}
                </p>
                <div className="mt-5 space-y-3 max-w-[560px]">
                  {ceoData.description.map((para, i) => (
                    <p key={i} className="text-[14px] leading-relaxed text-zinc-300">{para}</p>
                  ))}
                </div>
                <div className="flex gap-3 mt-6">
                  <IconBtn href={ceoData.linkedin} label="LinkedIn">
                    <LinkedInIcon className="h-[18px] w-[18px]" />
                  </IconBtn>
                  <IconBtn href={`mailto:${ceoData.email}`} label="Email">
                    <EmailIcon className="h-[18px] w-[18px]" />
                  </IconBtn>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== SECTIONS ===== */}
        <DivisionSection data={businessData} />
        <DivisionSection data={techData} />
        <DivisionSection data={opsData} />
        <DivisionSection data={techDirData} />

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-white/[0.04] py-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: springEase }}
            className="max-w-[720px] mx-auto rounded-[28px] border border-white/[0.07] bg-white/[0.02] backdrop-blur p-12 lg:p-14 relative"
          >
            <span className="absolute top-2 left-6 font-serif text-[80px] leading-none text-emerald-500/10 pointer-events-none select-none">
              &ldquo;
            </span>
            <p className="font-serif text-[22px] italic leading-relaxed text-[#e8e8e8]">
              Kami percaya bahwa kolaborasi, inovasi, dan integritas adalah kunci untuk menciptakan perubahan nyata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: springEase }}
            className="mt-14"
          >
            <p className="font-serif text-[28px] tracking-[-0.02em] text-white">Baciraro</p>
            <p className="text-[13px] text-emerald-400 mt-1">The Green Observatory</p>
            <div className="w-[60px] h-px bg-emerald-500/15 mx-auto my-6" />
            <div className="flex flex-wrap justify-center gap-2">
              {["Inovasi", "Kolaborasi", "Integritas", "Keberlanjutan"].map((v) => (
                <span
                  key={v}
                  className="px-4 py-1.5 rounded-full border border-emerald-500/[0.12] bg-emerald-500/[0.04] text-[12px] font-semibold tracking-[0.06em] text-emerald-400"
                >
                  {v}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-zinc-600 mt-5">Baciraro &mdash; Leadership Team</p>
          </motion.div>
        </footer>

      </div>

      <Footer />
    </main>
  );
}
