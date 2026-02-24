"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TechStackSection from "@/components/sections/tech-stack";
import ExperienceEducation from "@/components/sections/experience-education";
import ProjectsSection from "@/components/sections/features-grid";
import Footer from "@/components/sections/footer";
import { Trophy, Briefcase, GraduationCap, Sparkles, Code } from "lucide-react";
import VisitorSection from "@/components/sections/visitor-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      {/* <Header /> */}

      <main className="flex-grow">
        <HeroSection />
        <ExperienceEducation />
        <TechStackSection />

        <ProjectsSection />
        <VisitorSection />
      </main>

      <Footer />
    </div>
  );
}
