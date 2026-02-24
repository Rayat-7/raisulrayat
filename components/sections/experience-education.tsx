"use client";

import React from "react";
import Image from "next/image";
import ShinyText from "@/components/ui/shiny-text";
import { personalInfo, experience, education } from "@/lib/data";

const ExperienceEducation = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-black relative overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#0ea5e9]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0ea5e9]">
              Chronicle
            </span>
            <div className="w-8 h-[1px] bg-[#0ea5e9]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            My <ShinyText>Journey</ShinyText>
          </h2>
          <p className="max-w-xl text-[#999999] text-pretty text-base leading-relaxed">
            Building foundations for the future through academic excellence,
            industry experience, and continuous learning.
          </p>
        </div>

        <div className="relative w-full">
          <div
            className="mx-auto grid gap-4 pb-10"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
              width: "100%",
              maxWidth: "1100px",
            }}
          >
            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-3 gap-4 w-full">
              {/* Column 1: Education & Growth */}
              <div
                className="flex flex-col gap-4 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "100ms" }}
              >
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-xl hover:border-[#0ea5e9]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider">
                        Education
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">
                        {edu.period.split(": ").pop()}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-1.5">
                      {edu.degree}
                    </h3>
                    <p className="text-[#999999] text-xs mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-[#666] text-[13px] leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}

                <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-xl hover:border-[#0ea5e9]/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#999] text-[10px] font-bold uppercase tracking-wider">
                      Growth
                    </span>
                    <span className="text-[10px] font-mono text-[#666]">
                      2022 — 2023
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1.5">
                    AI Integration Growth
                  </h3>
                  <p className="text-[#999999] text-xs mb-3">
                    Personal Development
                  </p>
                  <p className="text-[#666] text-[13px] leading-relaxed">
                    Embraced AI by integrating LLMs and generative tools into
                    development workflow.
                  </p>
                </div>
              </div>

              {/* Column 2: Profile & Achievement */}
              <div
                className="flex flex-col gap-4 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "300ms" }}
              >
                <div
                  className="p-2 rounded-xl shadow-2xl relative overflow-hidden group border-2 border-transparent animate-border"
                  style={{
                    background:
                      "linear-gradient(#0d0d0d, #0d0d0d) padding-box, conic-gradient(from var(--border-angle), transparent 20%, #0ea5e9 40%, #ffffff 50%, #0ea5e9 60%, transparent 80%) border-box",
                  }}
                >
                  <div className="relative h-[220px] overflow-hidden rounded-lg border border-[#1a1a1a]">
                    <Image
                      src="/eximage1.jpg"
                      alt="Journey Profile"
                      fill
                      className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="mt-4 flex flex-col items-center py-1 text-center">
                    <ShinyText className="text-xl font-semibold mb-0.5">
                      {personalInfo.name}
                    </ShinyText>
                    <span className="text-[#666] text-[11px] font-mono uppercase tracking-widest">
                      {personalInfo.title}
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#fbbf24]/10 to-transparent border border-[#fbbf24]/30 p-5 rounded-xl hover:border-[#fbbf24]/50 transition-all duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#fbbf24]/10 blur-[40px]" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-widest">
                      Startup Champion
                    </span>
                    <span className="text-[10px] font-mono text-[#fbbf24]/60">
                      UIU IC6
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1.5">
                    Spendo AI
                  </h3>
                  <p className="text-[#999999] text-[13px] leading-relaxed">
                    First place winner at university startup competition for
                    AI-powered financial tracking.
                  </p>
                </div>
              </div>

              {/* Column 3: Work & Technical */}
              <div
                className="flex flex-col gap-4 animate-slide-up-fade [--offset:40px] [animation-fill-mode:both]"
                style={{ animationDelay: "500ms" }}
              >
                {experience.slice(0, 1).map((exp, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-xl hover:border-[#0ea5e9]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider">
                        Experience
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-[#999999] text-xs mb-3">{exp.company}</p>
                    <p className="text-[#666] text-[13px] leading-relaxed">
                      {exp.description[0]}
                    </p>
                  </div>
                ))}

                <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-5 rounded-xl hover:border-[#0ea5e9]/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#999] text-[10px] font-bold uppercase tracking-wider">
                      Technical
                    </span>
                    <span className="text-[10px] font-mono text-[#666]">
                      2023 — Present
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1.5">
                    Full Stack Projects
                  </h3>
                  <p className="text-[#999999] text-xs mb-3">
                    Self-Driven Learning
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {["Next.js", "React", "TS", "Postgres"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] text-[#0ea5e9] px-1.5 py-0.5 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded tracking-wider font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:hidden w-full px-4">
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 rounded-xl">
                <span className="text-[#0ea5e9] text-[9px] font-bold tracking-widest uppercase mb-2 block">
                  Education
                </span>
                <h3 className="text-white font-medium text-base mb-1">
                  {education[0].degree}
                </h3>
                <p className="text-[#666] text-[11px]">
                  {education[0].institution} •{" "}
                  {education[0].period.split(": ").pop()}
                </p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 rounded-xl">
                <span className="text-[#0ea5e9] text-[9px] font-bold tracking-widest uppercase mb-2 block">
                  Experience
                </span>
                <h3 className="text-white font-medium text-base mb-1">
                  {experience[0].role}
                </h3>
                <p className="text-[#666] text-[11px]">
                  {experience[0].company} • {experience[0].period}
                </p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 rounded-xl">
                <span className="text-[#fbbf24] text-[9px] font-bold tracking-widest uppercase mb-2 block">
                  Achievement
                </span>
                <h3 className="text-white font-medium text-base mb-1">
                  Startup Champion
                </h3>
                <p className="text-[#666] text-[11px]">Spendo AI • UIU IC6</p>
              </div>
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] p-4 rounded-xl">
                <span className="text-[#999] text-[9px] font-bold tracking-widest uppercase mb-2 block">
                  Technical
                </span>
                <h3 className="text-white font-medium text-base mb-1">
                  Full Stack Development
                </h3>
                <p className="text-[#666] text-[11px]">
                  Next.js, React, TypeScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
