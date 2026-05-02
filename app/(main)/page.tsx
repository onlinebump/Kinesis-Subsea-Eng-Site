"use client";
import React from "react";
import HeroBanner from "@/components/common/HeroBanner";
import WhoWeAre from "@/components/common/WhoWeAre";
import NewsSection from "@/components/common/NewsSection";
import ContactSection from "@/components/common/ContactSection";
import SectorLayout from "@/components/common/SectorSection";
import ServicesSection from "@/components/common/ServicesSection";
import RecentProjectsSection from "@/components/common/RecentProjects";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />

      <WhoWeAre />

      <SectorLayout />

      <ServicesSection />

      <RecentProjectsSection />

      <NewsSection />

      <ContactSection />
    </div>
  );
}
