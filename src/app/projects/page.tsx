"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowLeft, ArrowRight, Award, Building2, Cpu, Landmark, Leaf, Recycle,
  ShieldCheck, Sprout, Users, Factory, MapPin, Droplets, Heart, Store,
  BookOpen, CheckCircle2,
} from "lucide-react";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projectTimeline = [
  {
    year: 2020,
    title: "Kompetisi 1000 Startup Digital",
    description:
      "Baciraro Recycle memperkenalkan diri sebagai startup digital inovasi pengelolaan sampah di sumber, termasuk bank sampah berbasis digital dan ekosistem circular economy.",
    highlights: [
      "Inovasi teknologi untuk pengelolaan sampah",
      "Bank Sampah berbasis digital",
      "Akselerasi pembangunan daerah",
    ],
    color: "from-blue-500/30 to-blue-600/30 border-blue-500/20 text-blue-400",
  },
  {
    year: 2021,
    title: "Project Batako dari Sampah Plastik",
    description:
      "Plastic Brick, project kerjasama dengan Trash Waste Solution untuk pembuatan batako plastik dari sampah plastik dengan isu mengurangi dampak pencemaran sampah plastik di laut, terhubung dengan aktivitas antara team Trash Waste Solution di Pulau Siladen dengan Baciraro Recycle. Diproduksi dengan mesin standar Precious Plastic.",
    highlights: [
      "Pengurangan sampah plastik di laut",
      "Inovasi batako dari plastik bekas",
      "Dukungan Ocean Hero",
      "Mesin standar Precious Plastic",
    ],
    color: "from-emerald-500/30 to-emerald-600/30 border-emerald-500/20 text-emerald-400",
  },
  {
    year: 2022,
    title: "Program Bank Sampah Setor Jo & Eco-Enzyme",
    description:
      "Program kerja sama dengan Pertamina Geothermal Energy Lahendong mencakup edukasi pemilahan sampah plastik dan pelatihan eco-enzyme.",
    highlights: [
      "Bank Sampah Setor Jo di Desa Pinabetengan Utara",
      "Produk daur ulang: sofa ecobrick, gantungan kunci, tas",
      "Pelatihan eco-enzyme untuk perempuan",
      "Sabun, detergen, dan pupuk organik dari limbah organik",
    ],
    color: "from-amber-500/30 to-amber-600/30 border-amber-500/20 text-amber-400",
  },
  {
    year: 2023,
    title: "Program Bijak Berplastik Danone Aqua",
    description:
      "Kerja sama Danone Aqua dengan Baciraro Recycle untuk fasilitas penampungan sampah plastik, didukung Komunitas Pecinta Alam Likupang.",
    highlights: [
      "Fasilitas penampungan sampah plastik",
      "Bank Sampah Induk Likupang di Desa Serawet",
      "Kegiatan bersih-bersih pantai dan kampung",
      "Alur terintegrasi ke ekosistem pengelolaan sampah",
    ],
    color: "from-cyan-500/30 to-cyan-600/30 border-cyan-500/20 text-cyan-400",
  },
  {
    year: 2024,
    title: "Program Desa Pesisir & Kolaborasi BUMN",
    description:
      "Kolaborasi dengan Kementerian Kelautan, Perikanan, dan Kementerian Pariwisata untuk pemberdayaan nelayan dan desa wisata.",
    highlights: [
      "Program Desa Pesisir Bersih di Desa Serawet",
      "Pemberdayaan nelayan dan pengelolaan sampah terpilah",
      "Pelatihan Manajemen Bank Sampah (25 peserta, 5 desa wisata)",
      "Kolaborasi BUMN melalui program TJSL/CSR",
      "Dukungan ekonomi kreatif di destinasi wisata",
    ],
    color: "from-teal-500/30 to-teal-600/30 border-teal-500/20 text-teal-400",
  },
  {
    year: 2025,
    title: "Ekosistem Baciraro & Green Action",
    description:
      "Implementasi penuh ekosistem pengelolaan sampah dari hulu ke hilir dengan kegiatan green action dan ekspansi ELMAST Greenovasi.",
    highlights: [
      "Sinergi pengelolaan sampah hulu ke hilir",
      "Green Action: workshop daur ulang bersama PLN & Yayasan Tana Nyiur Lestari",
      "Program Zero Waste Warriors serentak nasional",
      "ELMAST Greenovasi: biogas & pupuk organik",
      "Solusi untuk Danau Tondano eceng gondok",
      "Ketahanan pangan & kemandirian energi",
    ],
    color: "from-green-500/30 to-green-600/30 border-green-500/20 text-emerald-400",
  },
];

const experienceData = [
  {
    title: "Pengelolaan Sampah Berbasis Komunitas Pulau Bunaken",
    year: "2012",
    description: [
      "Pendampingan kelompok pengelola sampah BRITS di Pulau Bunaken.",
      "Bekerja sama dengan Badan Lingkungan Hidup Provinsi Sulawesi Utara.",
      "Implementasi sistem Bank Sampah berbasis masyarakat.",
      "Menghasilkan penghargaan MDGs 2012 untuk pengelolaan sampah berbasis prakarsa komunitas lokal.",
    ],
    icon: Leaf,
  },
  {
    title: "Pengembangan Ekosistem Bank Sampah Kota Manado",
    year: "2017",
    description: [
      "Fasilitasi implementasi aplikasi Bank Sampah Online (SMASH).",
      "Pengembangan 10 unit bank sampah digital di Kota Manado.",
      "Kolaborasi dengan Pemerintah Kota Manado, BAPELITBANGDA, Dinas Lingkungan Hidup, BNI 46, dan BPJS.",
      "Integrasi konsep bank sampah dengan sistem non-tunai dan pembayaran BPJS.",
    ],
    icon: Cpu,
  },
  {
    title: "Implementasi Konsep Sirkular Ekonomi di RSUP Prof. Kandou",
    year: "2017",
    description: [
      "Pendampingan pengelolaan limbah rumah sakit.",
      "Pemanfaatan limbah medis non-infeksius menjadi produk daur ulang.",
      "Penerapan konsep ekonomi sirkular untuk mengurangi limbah menuju incinerator.",
    ],
    icon: Recycle,
  },
  {
    title: "Bank Sampah Induk Likupang",
    year: "2019\u2013Sekarang",
    description: [
      "Fasilitasi pendirian Bank Sampah Induk Likupang.",
      "Menjadi pusat pengumpulan dan pengelolaan sampah plastik kawasan DPSP Likupang.",
      "Mendukung kegiatan bersih pantai dan kampung oleh komunitas lokal.",
    ],
    icon: Building2,
  },
];

const innovationData = [
  {
    title: "Finalis Program 1000 Startup Digital Indonesia",
    year: "2020",
    description: [
      "Baciraro Recycle menjadi peserta program nasional yang diselenggarakan oleh Kementerian Komunikasi dan Informatika Republik Indonesia.",
      "Mengembangkan sistem pengelolaan sampah berbasis digital dan ekonomi sirkular.",
    ],
    icon: Award,
  },
  {
    title: "Produksi Batako Plastik Daur Ulang",
    year: "2021",
    description: [
      "Plastic Brick, project kerjasama dengan Trash Waste Solution untuk pembuatan batako plastik dari sampah plastik.",
      "Mengurangi dampak pencemaran sampah plastik di laut.",
      "Terhubung dengan aktivitas antara team Trash Waste Solution di Pulau Siladen dengan Baciraro Recycle.",
      "Diproduksi dengan mesin standar Precious Plastic.",
    ],
    icon: Factory,
  },
  {
    title: "Pengembangan Ekosistem Baciraro",
    year: "2025",
    description: [
      "Integrasi pengelolaan sampah dari hulu hingga hilir.",
      "Penguatan rantai pasok industri daur ulang.",
      "Penerapan prinsip ekonomi sirkular dalam pengelolaan sampah.",
    ],
    icon: Sprout,
  },
];

const csrPrograms = [
  {
    title: "Pertamina Geothermal Energy (PGE) Lahendong",
    period: "2022\u20132025",
    program: "Program Bank Sampah Setor Jo",
    points: [
      "Edukasi pemilahan sampah.",
      "Penguatan kelembagaan bank sampah.",
      "Pengembangan produk daur ulang plastik.",
      "Pelatihan Eco-Enzyme.",
      "Pemberdayaan perempuan dan komunitas lingkungan.",
    ],
  },
  {
    title: "Danone Aqua",
    period: "2023",
    program: "Program Bijak Berplastik",
    points: [
      "Penguatan ekosistem pengelolaan sampah DPSP Likupang.",
      "Pembangunan fasilitas penampungan sampah plastik.",
      "Dukungan kegiatan bersih pantai dan kampung.",
    ],
  },
  {
    title: "Kementerian Kelautan dan Perikanan RI",
    period: "2024",
    program: "Program Desa Pesisir Bersih",
    points: [
      "Pemberdayaan kelompok nelayan.",
      "Pengelolaan sampah terpilah.",
      "Bantuan bangunan dan mesin daur ulang plastik.",
    ],
  },
  {
    title: "Kementerian Pariwisata RI",
    period: "2024",
    program: "Pelatihan Manajemen Bank Sampah",
    points: [
      "Pendampingan lima desa wisata di DPSP Likupang.",
      "Penguatan kapasitas pengelola bank sampah desa.",
    ],
  },
  {
    title: "Program Kolaborasi BUMN",
    period: "2024",
    program: "",
    points: [
      "Sosialisasi pengelolaan sampah.",
      "Pelatihan manajemen bank sampah.",
      "Bantuan sarana prasarana daur ulang.",
      "Pelatihan produk kriya berbahan plastik daur ulang.",
    ],
  },
  {
    title: "PLN UID Suluttenggo",
    period: "2025",
    program: "Program Green Action",
    points: [
      "Workshop daur ulang sampah plastik.",
      "Edukasi UMKM binaan PLN Peduli.",
      "Kegiatan Clean Up dan Bottle Up.",
      "Mendukung Program Zero Waste Warriors.",
    ],
  },
];

const partnerCategories = [
  {
    category: "Pemerintah",
    items: [
      "Kementerian Kelautan dan Perikanan RI",
      "Kementerian Pariwisata RI",
      "Kementerian Komunikasi dan Informatika RI",
      "Pemerintah Kota Manado",
      "Pemerintah Kabupaten Minahasa Utara",
      "Pemerintah Kabupaten Minahasa",
      "Dinas Lingkungan Hidup Kota Manado",
      "BAPELITBANGDA Kota Manado",
      "Badan Lingkungan Hidup Provinsi Sulawesi Utara",
    ],
  },
  {
    category: "BUMN dan Korporasi",
    items: [
      "Pertamina Geothermal Energy (PGE) Lahendong",
      "Danone Aqua",
      "PLN UID Suluttenggo",
      "BNI 46",
      "BPJS Kesehatan",
    ],
  },
  {
    category: "Kesehatan dan Pendidikan",
    items: [
      "RSUP Prof. Kandou Manado",
      "SMA Negeri 7 Manado",
    ],
  },
  {
    category: "Organisasi dan Komunitas",
    items: [
      "Trash Waste Solution (TWS)",
      "Ocean Hero",
      "APDUPI (Asosiasi Pengusaha Daur Ulang Plastik Indonesia)",
      "Yayasan Tana Nyiur Lestari",
      "Komunitas Pecinta Alam Likupang",
      "BRITS Bunaken",
      "TerraGo Indonesia",
    ],
  },
];

const coreCompetencies = [
  "Pengembangan dan pendampingan Bank Sampah.",
  "Pengelolaan sampah berbasis ekonomi sirkular.",
  "Pemberdayaan masyarakat dan kelompok perempuan.",
  "Pengelolaan sampah kawasan wisata.",
  "Pengelolaan sampah pesisir dan kelautan.",
  "Daur ulang plastik menjadi produk bernilai tambah.",
  "Pengembangan sistem digital pengelolaan sampah.",
  "Pelatihan dan pendampingan komunitas.",
  "Pengembangan eco-enzyme dan pengolahan sampah organik.",
  "Pengembangan teknologi biogas dan pupuk organik.",
  "Penyusunan model bisnis pengelolaan sampah berkelanjutan.",
];

const ecosystemRegionData = [
  {
    region: "Kota Bitung",
    icon: MapPin,
    points: [
      "Kerjasama dengan Pelabuhan Perikanan Samudera Bitung yang mengelola kawasan pelabuhan.",
      "Inblood (Infinity Blood) startup digital yang bekerjasama dengan PMI dan Baciraro Recycle dalam program \"Trash For Life\", ada lebih dari 50 cafe dan restoran sudah menjadi anggota dan aktif donasi sampah plastik.",
      "Bank Sampah Baciraro Bitung, tersebar di beberapa kecamatan dan kelurahan di Kota Bitung.",
    ],
  },
  {
    region: "Minahasa Utara",
    icon: MapPin,
    points: [
      "Bank Sampah Induk Likupang, kerjasama dengan Baciraro Recycle dan Danone untuk program Collecting dan Education.",
      "Inblood (Infinity Blood) startup digital yang bekerjasama Baciraro Recycle dalam program \"Trash For Life\", ada lebih dari 4 cafe dan restoran sudah menjadi anggota dan aktif donasi sampah plastik.",
      "Bank Sampah Baciraro Agape Tumaluntung, di kecamatan Kauditan.",
    ],
  },
  {
    region: "Manado",
    icon: MapPin,
    points: [
      "Bank DBS, Sociolla Manado, dan Erha Clinic, kerjasama dengan Baciraro Recycle melalui Waste4Change untuk penjemputan sampah terpilah.",
      "Inblood (Infinity Blood) startup digital yang bekerjasama Baciraro Recycle dalam program \"Trash For Life\", ada lebih dari 5 cafe dan restoran sudah menjadi anggota dan aktif donasi sampah plastik.",
      "Bank Sampah Grand Luley Tongkaina Manado.",
    ],
  },
  {
    region: "Minahasa",
    icon: MapPin,
    points: [
      "Bank Stor Jo, program Bank Sampah kerjasama antara Pertamina Geothermal Energy (PGE) Lahendong dengan Baciraro Recycle di wilayah operasional Tompaso Raya dan Langowan Utara.",
      "Baciraro Recycle MoU dengan Pemda Minahasa (DLH) dalam program pengelolaan sampah digital bersama startup Kompis (aplikasi Bank Sampah), GWM (aplikasi transportasi online).",
      "Menjadi pengurus dan Anggota Asosiasi Bank Sampah Indonesia (ASOBSI) DPD Minahasa.",
    ],
  },
  {
    region: "Kepulauan Sangihe",
    icon: MapPin,
    points: [
      "10% Movement, adalah sebuah gerakan edukasi dengan menyisihkan 10% penjualan produk daur ulang Baciraro Eco-Craft.",
      "Baciraro Recycle MoU dengan Pengelola English Learning Center Sangihe yang menyelenggarakan pelatihan bahasa Inggris bagi anak-anak dan belajar CALISTUNG dengan membayar dengan botol plastik.",
      "Bank Sampah Green Corner Sangihe.",
    ],
  },
  {
    region: "Kota Tomohon",
    icon: MapPin,
    points: [
      "Pertanian Organik. Baciraro organic farming dengan petani di Minahasa dan Rurukan Tomohon mengembangkan pertanian organik melalui supply bahan pupuk organik. Produk pupuk organik didistribusikan ke kelompok tani dengan pendampingan dari Baciraro sampai produksi pangan organik dan jaringan pemasaran.",
      "Pengelolaan Sampah Organik. Baciraro Recycle bermitra dengan Produsen (Nutrifood), mengelola limbah organik dari bahan kadaluwarsa pradaluarsa (3 bulan sebelum kadaluarsa). Bahan praluarsa disalurkan ke jaringan bank sampah untuk nasabah sebagai makanan bahan (protein susu) dan bahan kadaluwarsa diolah menjadi pupuk organik.",
    ],
  },
];

const projectDetailData = [
  {
    title: "Bank Sampah \"Setor Jo\"",
    partner: "Pertamina Geothermal Energy",
    description: "Program kerjasama antara Baciraro Recycle dengan Pertamina Geothermal Energy di Kabupaten Minahasa khususnya di wilayah operasional Kecamatan Tompaso, Tompaso Barat dan Langowan Utara. Program ini sudah mendirikan 4 bank sampah dan akan menyusul sebanyak 15 bank sampah. Program ini mendukung Minahasa Bersih dengan mengedukasi masyarakat untuk memilah sampah dan menjadikannya bernilai ekonomi.",
    icon: Store,
  },
  {
    title: "Education and Collecting",
    partner: "Danone",
    description: "Program kerjasama antara Baciraro Recycle dengan Danone di Kabupaten Minahasa Utara khususnya di daerah Destinasi Super Prioritas Likupang untuk mengedukasi masyarakat dalam pengelolaan sampah di kawasan wisata. Program Edukasi ini sudah menjangkau lebih dari 1000 orang dan memberi dampak pengurangan sampah sebesar 5 ton sampah di tahun 2022.",
    icon: BookOpen,
  },
  {
    title: "Pengembangan Kapasitas Bank Sampah",
    partner: "Kementerian Pariwisata & Ekonomi Kreatif RI",
    description: "Program Pengembangan Kapasitas Bank Sampah Bersama Kementerian Pariwisata dan Ekonomi Kreatif Republik Indonesia telah dilakukan pengembangan kapasitas pengelolaan sampah di Likupang melalui kegiatan Sosialisasi Bank Sampah dan Pelatihan manajemen Bank Sampah. Terdukasi tentang sampah dan solusinya sebanyak 115 orang dan terbentuk 4 Bank Sampah dan 1 Pusat Daur Ulang di Kecamatan Likupang Timur.",
    icon: Users,
  },
  {
    title: "Pengembangan Pusat Daur Ulang",
    partner: "Kementerian Kelautan & Perikanan RI",
    description: "Program Pengembangan Pusat Daur Ulang Bersama Kementerian Kelautan dan Perikanan Republik Indonesia sementara dilakukan pembangunan fasilitas pengelolaan sampah plastik menjadi produk bahan furniture dan Kriya. Program ini diharapkan menjadi penunjang ekosistem pengelolaan sampah dengan prinsip sirkular ekonomi di Destinasi Pariwisata Super Prioritas Likupang.",
    icon: Recycle,
  },
  {
    title: "Baciraro Organic Farm",
    partner: "Komunitas Eco-Enzyme Manado",
    description: "Program pengelolaan sampah organik yang terintegrasi dengan pertanian organik di Kampung Rurukan. Kolaborasi ini juga melibatkan Komunitas Eco-Enzyme Manado yang menjadi sumber bahan baku ampas Eco-Enzyme sebagai pencampur pupuk organik bersama limbah organik dari beberapa mitra perusahaan. Baciraro Organic Farm menjadi model pengelolaan sampah organik terpadu dalam mendukung ketahanan pangan berbasis organik di Sulawesi Utara.",
    icon: Sprout,
  },
  {
    title: "10% Movement",
    partner: "English Learning Center Sangihe",
    description: "Program edukasi pengelolaan sampah melalui mekanisme kolaborasi dengan lembaga pendidikan bahasa Inggris dan CALISTUNG di Sangihe. Untuk mendapatkan kursus gratis, peserta hanya perlu membawa botol plastik sebagai pengganti pembayaran. Baciraro Recycle melalui penjualan produk berbahan daur ulang akan menyisihkan 10% penjualan untuk mendukung program ini.",
    icon: Heart,
  },
  {
    title: "Trash For Life",
    partner: "PMI & Infinity Blood",
    description: "Program donor darah melalui mekanisme kolaborasi dengan startup bank darah di Bitung bersama PMI. Kolaborasi ini melibatkan pemilik cafe dan restoran untuk donasi sampah plastik dan hasil transaksi antara bank darah dan Baciraro Recycle akan menjadi pembiayaan asuransi bagi pendonor. Program ini berhasil mendapat dukungan lebih dari 50 cafe dan restoran yang tersebar di Kota Bitung, Kota Manado, dan Minahasa Utara.",
    icon: Droplets,
  },
];

const productServiceData = [
  {
    title: "Baciraro Eco-Craft",
    description: "Dalam upaya mendukung sirkular ekonomi dalam pengelolaan sampah di Sulawesi Utara, Baciraro Recycle bermitra dengan beberapa pihak diantaranya Souvenir Likupang untuk produksi beragam produk berbasis bahan baku daur ulang. Produk Kriya yang dihasilkan oleh Baciraro Eco-Craft diharapkan dapat mendukung sektor ekonomi kreatif untuk menunjang Destinasi Super Prioritas (DSP) Likupang.",
    icon: Award,
  },
  {
    title: "Konsultansi SROI",
    description: "Mengerjakan perhitungan SROI dari Yayasan Gellar untuk Program Kolaborasi TJSL 23 BUMN di DSP Likupang. Konsultansi ini diharapkan dapat gambaran dampak sosial terhadap evaluasi implementasi program yang dilaksanakan tahun 2022. Program ini menjadi bagian dari rencana pengembangan ekosistem pengelolaan sampah di DPSP Likupang khususnya pemanfaatan sampah menjadi produk kriya dan mendukung pariwisata berkelanjutan dengan prinsip sirkular ekonomi.",
    icon: ShieldCheck,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400 backdrop-blur shadow-lg">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-5 text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: springEase }}>
            <div className="mb-6">
              <SectionLabel>Rekam Jejak & Proyek</SectionLabel>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.04em] text-white">
              Perjalanan Baciraro dalam Pengelolaan Sampah Berkelanjutan
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl">
              Dari pendampingan komunitas di Pulau Bunaken hingga program nasional, Baciraro telah membangun jejak pengelolaan sampah yang terintegrasi dan berdampak nyata.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#timeline"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:gap-3 shadow-lg"
              >
                Lihat Timeline
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black">
                  <ArrowRight className="h-3 w-3 text-white" />
                </span>
              </a>
              <a
                href="#ekosistem"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                Lihat Ekosistem
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: springEase }}
            className="relative"
          >
            <div className="absolute -left-8 top-1/4 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="absolute -right-8 bottom-1/4 h-40 w-40 rounded-full bg-amber-500/5 blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/5 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)]" />
              <Image
                src="/Baciraro cap.png"
                alt="Baciraro"
                fill
                className="object-contain p-8 drop-shadow-[0_15px_30px_rgba(16,185,129,0.2)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section id="timeline" className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
      <div className="mb-12">
        <SectionHeading
          eyebrow="Timeline"
          title="Perjalanan Baciraro 2020\u20132025"
          description="Evolusi ekosistem pengelolaan sampah dari startup digital lokal menjadi gerakan nasional pengelolaan sampah sirkular berkelanjutan."
        />
      </div>

      <div className="relative space-y-12">
        {projectTimeline.map((project, index) => (
          <motion.div
            key={project.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: springEase }}
            className="relative"
          >
            <div className="grid gap-8 md:grid-cols-[120px_1fr]">
              <div className="md:sticky md:top-24 md:h-fit">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${project.color} border font-black text-white shadow-xl backdrop-blur`}>
                  {project.year}
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/20 p-8 shadow-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-normal text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <div className="mt-6 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 rounded-2xl bg-zinc-950/40 border border-white/5 p-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-xs leading-relaxed text-zinc-300 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {index < projectTimeline.length - 1 && (
              <div className="absolute left-[3.5rem] top-32 hidden h-16 w-0.5 bg-gradient-to-b from-emerald-500/20 to-transparent md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="pengalaman" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.03),_transparent_55%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Pengalaman"
            title="Pengelolaan Sampah dan Pemberdayaan Masyarakat"
            description="Perjalanan Baciraro dalam membangun sistem pengelolaan sampah berbasis komunitas dan ekonomi sirkular."
          />
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 sm:p-8 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="inline-flex shrink-0 rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-xl font-normal text-white">{item.title}</h3>
                    <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-950/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-400 shrink-0 w-fit">
                      {item.year}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span className="text-sm text-zinc-400 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.05),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Inovasi"
            title="Inovasi dan Startup Pengelolaan Sampah"
            description="Pengembangan solusi berbasis teknologi dan inovasi produk daur ulang."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {innovationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="group rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-normal text-white">{item.title}</h3>
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 shrink-0">
                  {item.year}
                </span>
              </div>
              <ul className="space-y-2">
                {item.description.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-sm text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemRegionSection() {
  return (
    <section id="ekosistem" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.05),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Ekosistem"
            title="Ekosistem Baciraro di Seluruh Wilayah"
            description="Baciraro Recycle sudah membangun ekosistem yang terhubung dari Hulu (sumber timbulan sampah) ke Hilir (Produk Akhir Limbah Daur Ulang), fokus mengelola sampah plastik jenis HDPE, LDPE, dan PP untuk dijadikan produk kriya mendukung sirkular ekonomi lokal dan pariwisata berkelanjutan di DSP Likupang."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ecosystemRegionData.map((region, index) => (
            <motion.div
              key={region.region}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                  <region.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{region.region}</h3>
              </div>
              <ul className="space-y-3">
                {region.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                    <span className="text-sm text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetailSection() {
  return (
    <section id="proyek" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Proyek"
            title="Proyek Unggulan Baciraro"
            description="Beragam program dan inisiatif yang dijalankan Baciraro bersama mitra strategis di berbagai sektor."
          />
        </div>

        <div className="space-y-8">
          {projectDetailData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 sm:p-8 shadow-xl backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="inline-flex shrink-0 rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-normal text-white mb-1">{item.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-3">{item.partner}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSRProgramsSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="CSR & Kemitraan"
            title="Program CSR dan Kemitraan Strategis"
            description="Kolaborasi dengan berbagai lembaga dan perusahaan dalam pengelolaan sampah berkelanjutan."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {csrPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="inline-flex rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{program.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">{program.period}</span>
                  {program.program && (
                    <p className="text-xs text-zinc-500 mt-1 font-medium italic">{program.program}</p>
                  )}
                </div>
              </div>
              <ul className="space-y-1.5">
                {program.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-xs text-zinc-400 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section className="relative py-20 px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.05),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Mitra"
            title="Mitra dan Lembaga yang Pernah Bekerja Sama"
            description="Jaringan kemitraan Baciraro dengan berbagai sektor pemerintah, korporasi, pendidikan, dan komunitas."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="inline-flex rounded-2xl bg-emerald-500/10 p-3 mb-4 text-emerald-400">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400/60" />
                    <span className="text-xs text-zinc-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="produk" className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.05),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Produk & Layanan"
            title="Produk dan Layanan Baciraro"
            description="Dari produk kriya daur ulang hingga konsultansi dampak sosial, Baciraro menyediakan solusi lengkap untuk ekonomi sirkular."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {productServiceData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: springEase }}
              className="rounded-[2.25rem] border border-white/5 bg-zinc-900/20 p-6 sm:p-8 shadow-xl backdrop-blur-sm hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="inline-flex shrink-0 rounded-2xl bg-emerald-500/10 p-3 text-emerald-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-normal text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetencySection() {
  return (
    <section id="kompetensi" className="relative py-20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <SectionHeading
            eyebrow="Kompetensi"
            title="Kompetensi Utama Baciraro Recycle"
            description="Keahlian inti yang menjadi fondasi setiap program dan layanan Baciraro."
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={competency}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: springEase }}
              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-zinc-950/40 p-4 shadow-md hover:border-emerald-500/20 hover:bg-zinc-900/30 transition-all duration-300"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-sm text-zinc-300 font-medium leading-relaxed">{competency}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950/20 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-normal leading-[1.1] tracking-tight text-white mb-4">
            Mari Berkolaborasi
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Baciraro terbuka untuk kemitraan, kolaborasi program CSR, dan pengembangan sistem pengelolaan sampah berkelanjutan di wilayah Anda.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:halo@baciraro.id"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black shadow-lg"
            >
              Hubungi Kami
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                <ArrowRight className="h-3 w-3 text-white" />
              </span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
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
                  <p className="text-[11px] text-zinc-500 font-medium">Proyek & Rekam Jejak</p>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              <Link
                href="/"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Beranda
              </Link>
              <Link
                href="/#ecosystem"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Ekosistem
              </Link>
              <Link
                href="/#impact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Dampak
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white rounded-full transition-all duration-300 hover:bg-white/5 border border-transparent hover:border-white/5"
              >
                Kontak
              </Link>
            </nav>

            <Link
              href="/creative"
              className="inline-flex items-center gap-2 rounded-full border border-[#f87171]/20 bg-[#f87171]/5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#f87171] shadow-[0_0_15px_rgba(248,113,113,0.1)] transition-all hover:scale-102 hover:bg-[#f87171]/10 hover:border-[#f87171]/40 duration-300"
            >
              Baciraro Creative
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </header>

      <HeroSection />
      <TimelineSection />
      <ExperienceSection />
      <InnovationSection />
      <EcosystemRegionSection />
      <ProjectDetailSection />
      <CSRProgramsSection />
      <PartnerSection />
      <ProductSection />
      <CompetencySection />
      <CTASection />

      <Footer />
    </main>
  );
}
