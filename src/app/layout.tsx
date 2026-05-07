import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Use the provided logo in public as the site icon/favicons
export const metadata: Metadata = {
  title: "Baciraro | Ekosistem Pengelolaan Sampah Terintegrasi",
  description:
    "Baciraro menghadirkan ekosistem pengelolaan sampah berbasis circular economy, teknologi, dan pemberdayaan masyarakat.",
  icons: {
    icon: "/Baciraro cap.png",
    apple: "/Baciraro cap.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/Baciraro cap.png" />
        <link rel="apple-touch-icon" href="/Baciraro cap.png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
