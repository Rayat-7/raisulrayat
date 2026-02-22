"use client";

import React from "react";
import Hero2 from "@/components/sections/hero2";
import TechStackSection from "@/components/sections/tech-stack";
import ExperienceEducation2 from "@/components/sections/experience-education2";
import ProjectsSection2 from "@/components/sections/features-grid2";
import Footer from "@/components/sections/footer";

export default function Hero2Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-blue-600/30 selection:text-zinc-900">
      {/* Note: Hero2 already includes the Header2 (Transparent) inside it as requested */}
      <main className="flex-grow">
        <Hero2 />
        <ExperienceEducation2 />
        <TechStackSection />
        <ProjectsSection2 />
      </main>

      <Footer />
    </div>
  );
}
