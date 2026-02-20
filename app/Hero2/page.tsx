"use client";

import React from "react";
import Hero2 from "@/components/sections/hero2";
import TechStackSection from "@/components/sections/tech-stack";
import ExperienceEducation from "@/components/sections/experience-education";
import ProjectsSection from "@/components/sections/features-grid";
import Footer from "@/components/sections/footer";

export default function Hero2Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-white/30 selection:text-white">
      {/* Note: Hero2 already includes the Header2 (Transparent) inside it as requested */}
      <main className="flex-grow">
        <Hero2 />
        <ExperienceEducation />
        <TechStackSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
