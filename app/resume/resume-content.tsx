"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import {
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
import {
  personalInfo,
  experience,
  education,
  certifications,
  projects,
  techStack,
} from "@/lib/data";

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
              className="w-full min-h-[300px] p-12 flex flex-col items-center justify-center text-center border-[#1a1a1a] bg-[#0d0d0d]"
              gap={10}
              speed={10}
              noHover
            >
              <div className="relative z-10 w-full">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  {personalInfo.firstName}{" "}
                  <span className="text-[#0ea5e9]">
                    {personalInfo.lastName}
                  </span>
                </h1>
                <p className="text-xl text-white mb-4 font-medium">
                  {personalInfo.title}
                </p>
                <p className="text-[#999] text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                  {personalInfo.summary}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors"
                  >
                    <Mail size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">{personalInfo.email}</span>
                  </a>
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <Phone size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <MapPin size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">{personalInfo.location}</span>
                  </div>
                  <a
                    href={personalInfo.portfolio}
                    target="_blank"
                    className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors"
                  >
                    <Globe size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">
                      {personalInfo.portfolio.replace("https://", "")}
                    </span>
                  </a>
                </div>
              </div>
            </PixelCard>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              <NeuButton
                href="/cv.pdf"
                download={`${personalInfo.name.replace(" ", "_")}_CV.pdf`}
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
                    {personalInfo.summary} {personalInfo.bio}
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
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative">
                      <div
                        className={`absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 ${idx === 0 ? "border-[#0ea5e9]" : "border-[#333]"}`}
                      />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span
                          className={`text-sm font-mono ${idx === 0 ? "text-[#0ea5e9] bg-[#0ea5e9]/10 border-[#0ea5e9]/20" : "text-[#666] bg-[#111] border-[#333]"} px-3 py-1 border rounded-full`}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#999] mb-4 font-medium">
                        {exp.company}
                      </p>
                      <ul className="space-y-2 text-[#666] text-sm leading-relaxed">
                        {exp.description.map((desc, dIdx) => (
                          <li key={dIdx}>• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#0ea5e9]" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 border border-[#0ea5e9]/20 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-[#999] mb-2 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-[#666] text-xs font-mono">
                        {edu.details}
                      </p>
                    </div>
                  ))}
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
                  {projects.slice(0, 2).map((project, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl hover:border-[#0ea5e9]/40 transition-all group"
                    >
                      <h4 className="text-white font-bold mb-1 group-hover:text-[#0ea5e9] transition-colors text-lg">
                        {project.title}
                      </h4>
                      <p className="text-[#0ea5e9] text-[11px] font-mono mb-3">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] text-[#0ea5e9] px-2 py-0.5 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-full tracking-wider font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#666] text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <a
                        href="/projects"
                        className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9] flex items-center gap-1 mt-4"
                      >
                        View Details →
                      </a>
                    </div>
                  ))}
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
                    {techStack.map((category, idx) => (
                      <div key={idx}>
                        <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3 flex items-center gap-1.5">
                          {idx === 0 ? (
                            <Layers size={12} className="text-[#0ea5e9]" />
                          ) : idx === 1 ? (
                            <Code size={12} className="text-[#0ea5e9]" />
                          ) : idx === 2 ? (
                            <Globe size={12} className="text-[#0ea5e9]" />
                          ) : (
                            <Wrench size={12} className="text-[#0ea5e9]" />
                          )}
                          {category.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item: any) => (
                            <span
                              key={item.name}
                              className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4 flex items-center gap-2">
                    <Award size={18} className="text-[#fbbf24]" />
                    CERTIFICATIONS
                  </h3>
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#fbbf24]/5 border border-[#fbbf24]/20 rounded-xl mb-3"
                    >
                      <h4 className="text-sm font-bold text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-[#fbbf24]/80">
                        {cert.provider}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4">
                    SOCIALS
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-xl text-[#999] hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-xs">GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
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
