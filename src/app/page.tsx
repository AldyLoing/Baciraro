"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PartnerMarquee from "@/components/PartnerMarquee";
import EcosystemRadial from "@/components/EcosystemRadial";
import FlowHorizontal from "@/components/FlowHorizontal";
import CreativeShowcase from "@/components/CreativeShowcase";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import CEOSection from "@/components/CEOSection";

export default function Home() {
  return (
    <main className="relative overflow-hidden text-foreground min-h-screen bg-background">
      <div aria-hidden="true" className="page-bg" />

      <div className="relative z-[1]">
        <Header />

        <HeroSection />
        <PartnerMarquee />
        <EcosystemRadial />
        <FlowHorizontal />
        <CreativeShowcase />
        <ImpactSection />
        <ServicesSection />
        <CEOSection />

        <Footer />
      </div>
    </main>
  );
}
