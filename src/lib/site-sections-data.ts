import type { LucideIcon } from "lucide-react";
import {
  Sprout, MapPin, ShieldCheck, Store, BookOpen, Users, Recycle,
  Heart, Droplets, Award, Landmark,
} from "lucide-react";

export interface InnovationItem {
  title: string;
  year: string;
  description: string[];
  icon: LucideIcon;
}

export interface CSRProgram {
  title: string;
  period: string;
  program: string;
  points: string[];
}

export interface PartnerCategory {
  category: string;
  items: string[];
}

export interface EcosystemRegion {
  region: string;
  icon: LucideIcon;
  points: string[];
}

export interface ProjectDetail {
  title: string;
  partner: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const innovationData: InnovationItem[] = [
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

export const csrPrograms: CSRProgram[] = [
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

export const partnerCategories: PartnerCategory[] = [
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

export const coreCompetencies: string[] = [
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

export const ecosystemRegionData: EcosystemRegion[] = [
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

export const projectDetailData: ProjectDetail[] = [
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

export const productServiceData: ProductService[] = [
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
