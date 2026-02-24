"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import {
  Trophy,
  Briefcase,
  GraduationCap,
  Sparkles,
  Code,
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
  Award,
  FileText,
  Layers,
  Wrench,
  Lightbulb,
  Eye,
} from "lucide-react";
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";

const ResumePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-8 max-w-full relative">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />

          {/* Resume Header Card */}
          <div className="relative mb-12">
            <PixelCard
              variant="blue"
              className="w-full   min-h-[300px] p-12 flex flex-col items-center justify-center text-center border-[#1a1a1a] bg-[#0d0d0d]"
              gap={10}
              speed={10}
              
              noHover
            >
              <div className="relative z-10 w-full">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Raisoul <span className="text-[#0ea5e9]">Rayat</span>
                </h1>
                <p className="text-xl text-white mb-4 font-medium">
                  Frontend Developer
                </p>
                <p className="text-[#999] text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                  Frontend Developer with hands-on experience in React.js and
                  Next.js, specializing in building responsive, scalable, and
                  user-centric web applications.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <a
                    href="mailto:raisoulrayat@gmail.com"
                    className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors"
                  >
                    <Mail size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">raisoulrayat@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <Phone size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">01892707713</span>
                  </div>
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <MapPin size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                  <a
                    href="https://raisulrayat.vercel.app"
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors"
                  >
                    <Globe size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">raisulrayat.vercel.app</span>
                  </a>
                </div>
              </div>
            </PixelCard>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              <NeuButton
                href="/cv.pdf"
                download="Raisul_Rayat_CV.pdf"
                variant="primary"
                className="px-8 py-3 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </NeuButton>
              <NeuButton
                href="/cv.pdf"
                target="_blank"
                variant="outline"
                className="px-8 py-3 flex items-center gap-2 bg-black"
              >
                <Eye size={18} />
                View CV
              </NeuButton>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
            {/* Left Column (Main Info) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Professional Summary */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <FileText size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                    Professional Summary
                  </h2>
                </div>
                <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl">
                  <p className="text-[#999] text-sm leading-relaxed">
                    Frontend Developer with hands-on experience in React.js and
                    Next.js, specializing in building responsive, scalable, and
                    user-centric web applications. Completed a Web Development
                    Internship at Tekshilpa Solutions Ltd., contributing to UI
                    development and performance optimization. Strong
                    understanding of modern frontend architecture, REST APIs,
                    and full-stack integration using PostgreSQL and Prisma.
                    Passionate about building production-ready applications and
                    continuously improving code quality.
                  </p>
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <Briefcase size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                    Experience
                  </h2>
                </div>

                <div className="space-y-10 border-l border-[#1a1a1a] ml-5 pl-8">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#0ea5e9]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        Web Development Intern
                      </h3>
                      <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 border border-[#0ea5e9]/20 rounded-full">
                        2025
                      </span>
                    </div>
                    <p className="text-[#999] mb-4 font-medium">
                      Tekshilpa Solutions Ltd.
                    </p>
                    <ul className="space-y-2 text-[#666] text-sm leading-relaxed">
                      <li>
                        • Contributed to frontend UI development using React.js
                        and modern JavaScript.
                      </li>
                      <li>
                        • Improved user experience through responsive layouts
                        and performance optimization.
                      </li>
                      <li>
                        • Collaborated with team members following structured
                        development workflow using Git.
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#333]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        Freelance Frontend Developer
                      </h3>
                    </div>
                    <ul className="space-y-2 text-[#666] text-sm leading-relaxed">
                      <li>
                        • Developed responsive web interfaces for clients using
                        React and Tailwind CSS.
                      </li>
                      <li>
                        • Contributed to building reusable React component
                        libraries.
                      </li>
                      <li>
                        • Delivered optimized and maintainable frontend
                        solutions.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <GraduationCap size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                    Education
                  </h2>
                </div>

                <div className="space-y-10 border-l border-[#1a1a1a] ml-5 pl-8">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#0ea5e9]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">
                        BSc in Computer Science and Engineering
                      </h3>
                      <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 border border-[#0ea5e9]/20 rounded-full">
                        Expected Graduation: 2027
                      </span>
                    </div>
                    <p className="text-[#999] mb-4 font-medium">
                      United International University
                    </p>
                  </div>
                </div>
              </section>

              {/* Projects Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <Code size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">
                    Projects
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-1 w-[calc(100%+12px)]">
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl hover:border-[#0ea5e9]/40 transition-all group">
                    <h4 className="text-white font-bold mb-1 group-hover:text-[#0ea5e9] transition-colors text-lg">
                      Cyber Play Arena
                    </h4>
                    <p className="text-[#0ea5e9] text-[11px] font-mono mb-3">
                      Gaming Slot Booking Platform
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {[
                        "Next.js",
                        "React",
                        "PostgreSQL",
                        "Prisma",
                        "Tailwind CSS",
                      ].map((t) => (
                        <span
                          key={t}
                          className="text-[9px] text-[#0ea5e9] px-2 py-0.5 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-full tracking-wider font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-1.5 text-[#666] text-xs leading-relaxed">
                      <li>
                        • Built a full-stack slot booking management system with
                        admin dashboard.
                      </li>
                      <li>
                        • Designed responsive UI with modern component
                        architecture.
                      </li>
                    </ul>
                    <a
                      href="/projects"
                      className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9] flex items-center gap-1 mt-4"
                    >
                      View Details →
                    </a>
                  </div>

                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl hover:border-[#0ea5e9]/40 transition-all group">
                    <h4 className="text-white font-bold mb-1 group-hover:text-[#0ea5e9] transition-colors text-lg">
                      Tuition Track
                    </h4>
                    <p className="text-[#0ea5e9] text-[11px] font-mono mb-3">
                      Management Web Application
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {["Next.js", "MySQL", "Prisma"].map((t) => (
                        <span
                          key={t}
                          className="text-[9px] text-[#0ea5e9] px-2 py-0.5 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-full tracking-wider font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="space-y-1.5 text-[#666] text-xs leading-relaxed">
                      <li>
                        • Developed CRUD-based management system for tracking
                        tuition activities.
                      </li>
                      <li>
                        • Implemented authentication and database operations.
                      </li>
                      <li>
                        • Structured scalable backend schema with efficient data
                        handling.
                      </li>
                    </ul>
                    <a
                      href="/projects"
                      className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9] flex items-center gap-1 mt-4"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-12">
              {/* Skills Sidebar */}
              <section className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 sticky top-24">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-[#0ea5e9]" />
                    TECHNICAL SKILLS
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                        <Layers size={12} className="text-[#0ea5e9]" />
                        Frontend
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React.js",
                          "Next.js",
                          "JavaScript (ES6+)",
                          "TypeScript",
                          "HTML5",
                          "CSS3",
                          "Tailwind CSS",
                          "ShadCN UI",
                        ].map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                        <Code size={12} className="text-[#0ea5e9]" />
                        Backend & Database
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Node.js",
                          "REST APIs",
                          "PostgreSQL",
                          "MySQL",
                          "Prisma",
                          "Firebase",
                        ].map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                        <Wrench size={12} className="text-[#0ea5e9]" />
                        Tools
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Git", "GitHub", "Vercel", "VS Code"].map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                        <Lightbulb size={12} className="text-[#0ea5e9]" />
                        Concepts
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Component-based Architecture",
                          "Responsive Design",
                          "API Integration",
                          "Authentication",
                          "CRUD Operations",
                        ].map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4 flex items-center gap-2">
                    <Award size={18} className="text-[#fbbf24]" />
                    CERTIFICATIONS
                  </h3>
                  <div className="p-4 bg-[#fbbf24]/5 border border-[#fbbf24]/20 rounded-xl">
                    <h4 className="text-sm font-bold text-white mb-1">
                      React Accelerator Course
                    </h4>
                    <p className="text-[11px] text-[#fbbf24]/80">
                      Learn with Sumit
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4">
                    SOCIALS
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/Rayat-7"
                      target="_blank"
                      className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-xl text-[#999] hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-xs">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/raisoul-rayat-48781a263"
                      target="_blank"
                      className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-xl text-[#999] hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
