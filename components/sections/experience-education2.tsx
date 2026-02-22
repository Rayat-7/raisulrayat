"use client";

import React from "react";
import {
  GraduationCap,
  Briefcase,
  Code,
  Sparkles,
  Trophy,
  Calendar,
  Building2,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import ShinyText from "@/components/ui/shiny-text";
import { cn } from "@/lib/utils";

const ExperienceEducation2 = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-[#fafafa] text-zinc-900 relative overflow-hidden border-t border-zinc-100"
    >
      {/* High-End Background Depth */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/40 blur-[130px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-50/30 blur-[130px] rounded-full -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex w-full flex-col items-center text-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-zinc-200" />
            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-zinc-400">
              The Chronicle
            </span>
            <div className="w-12 h-[1px] bg-zinc-200" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Journey
            </span>
          </h2>
          <p className="max-w-2xl text-zinc-500 text-lg leading-relaxed font-light">
            An evolution of academic rigor and technical craft, shaping the
            digital future through curiosity and precision.
          </p>
        </div>

        <div className="relative w-full">
          <div
            className="mx-auto grid gap-6 pb-20"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-6 w-full">
              {/* Column 1: Education & Growth */}
              <div
                className="flex flex-col gap-6 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "100ms" }}
              >
                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/50 p-7 rounded-[24px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 blur-3xl -z-10" />
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <GraduationCap size={18} />
                      </div>
                      <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                        Academic
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded">
                      2022 — NOW
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    BSc in Computer Science
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4 font-medium">
                    United International University
                  </p>
                  <p className="text-zinc-500 text-[14px] leading-relaxed font-light">
                    Specializing in Intelligent Systems and Software
                    Engineering, maintaining academic excellence through complex
                    problem solving.
                  </p>
                  <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        Performance
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-600 text-[9px] rounded uppercase font-bold tracking-tighter shadow-sm">
                          3.5+ CGPA
                        </span>
                        <span className="px-2 py-1 bg-white border border-zinc-100 text-zinc-600 text-[9px] rounded uppercase font-bold tracking-tighter shadow-sm">
                          DEAN'S LIST
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/50 p-7 rounded-[24px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                      <Cpu size={18} />
                    </div>
                    <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                      Intelligence
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    AI-Driven Development
                  </h3>
                  <p className="text-zinc-500 text-[14px] leading-relaxed font-light">
                    Pioneering the integration of LLMs and Generative AI into
                    modern production workflows, optimizing for speed and
                    precision.
                  </p>
                </div>
              </div>

              {/* Column 2: Centerpiece */}
              <div
                className="flex flex-col gap-6 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "300ms" }}
              >
                <div className="p-1 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group border border-zinc-200/50 bg-white">
                  <div className="relative h-[280px] overflow-hidden rounded-[28px]">
                    <Image
                      src="/eximage1.jpg"
                      alt="Journey Profile"
                      fill
                      className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
                  </div>
                  <div className="mt-6 flex flex-col items-center py-4 text-center">
                    <h4 className="text-2xl font-semibold mb-1 text-zinc-900 tracking-tight">
                      Raisul Rayat
                    </h4>
                    <span className="text-blue-600 text-[11px] font-bold uppercase tracking-[0.3em]">
                      The Architect
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-7 rounded-[24px] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-500 relative group overflow-hidden border border-zinc-800">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[50px] pointer-events-none" />
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                        <Trophy size={18} />
                      </div>
                      <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                        Distinction
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Spendo AI
                  </h3>
                  <p className="text-zinc-400 text-[14px] leading-relaxed font-light">
                    Secured{" "}
                    <span className="text-white font-medium">1st Place</span> in
                    United International University's IC6 Startup Competition
                    for innovative AI financial solutions.
                  </p>
                </div>
              </div>

              {/* Column 3: Professional & Technical */}
              <div
                className="flex flex-col gap-6 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "500ms" }}
              >
                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/50 p-7 rounded-[24px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group relative overflow-hidden">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        <Briefcase size={18} />
                      </div>
                      <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                        Corporate
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 bg-zinc-50 px-2 py-1 rounded">
                      2025
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                    Web Solutions Intern
                  </h3>
                  <p className="text-zinc-500 text-sm mb-4 font-medium">
                    Tekshilpa Solutions Ltd.
                  </p>
                  <p className="text-zinc-500 text-[14px] leading-relaxed font-light">
                    Refining industrial-scale user interfaces and implementing
                    responsive design systems for modern digital products.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md border border-zinc-200/50 p-7 rounded-[24px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="p-2 bg-zinc-100 rounded-lg text-zinc-600">
                      <Code size={18} />
                    </div>
                    <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                      Stack
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-4">
                    The Modern Arsenal
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Next.js", color: "bg-zinc-900 text-white" },
                      {
                        name: "TypeScript",
                        color: "bg-blue-50 text-blue-700 border-blue-100",
                      },
                      {
                        name: "Framer",
                        color: "bg-indigo-50 text-indigo-700 border-indigo-100",
                      },
                      {
                        name: "Prisma",
                        color:
                          "bg-emerald-50 text-emerald-700 border-emerald-100",
                      },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={cn(
                          "text-[10px] px-3 py-1.5 rounded-full font-bold tracking-tight border shadow-sm transition-transform hover:-translate-y-0.5",
                          tech.color,
                        )}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Clean Minimalist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden w-full px-4">
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl shadow-sm">
                <span className="text-blue-600 text-[9px] font-bold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8 decoration-blue-100">
                  Academic Focus
                </span>
                <h3 className="text-zinc-900 font-semibold text-lg mb-1">
                  BSc Computer Science
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  United International University • 2022-Present
                </p>
              </div>
              <div className="bg-white border border-zinc-200/50 p-6 rounded-2xl shadow-sm">
                <span className="text-blue-600 text-[9px] font-bold tracking-[0.2em] uppercase mb-4 block underline underline-offset-8 decoration-blue-100">
                  Industry Role
                </span>
                <h3 className="text-zinc-900 font-semibold text-lg mb-1">
                  Web Dev Intern
                </h3>
                <p className="text-zinc-500 text-xs font-light">
                  Tekshilpa Solutions Ltd. • 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation2;
