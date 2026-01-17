"use client";

import React from 'react';
import { ExternalLink, Github, GraduationCap, Globe, Gamepad2, FileText } from 'lucide-react';
import { NeuButton } from "@/components/ui/neu-button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TuitionTrack",
      description: "A comprehensive web app for tuition centers in Bangladesh to manage students, attendance, and monthly fees. Features modern dashboard and easy-to-use interface.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk", "Supabase"],
      github: "https://github.com/rayat-7/tuitiontrack",
      live: "#",
      icon: <GraduationCap className="h-6 w-6 text-[#0ea5e9]" />
    },
    {
      title: "Cyber Play Arena",
      description: "A modern web-based management software to manage booking slots and marketing for local gaming service. Built with Next.js and modern technologies.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/rayat-7/cyber_play_arena",
      live: "#",
      icon: <Gamepad2 className="h-6 w-6 text-[#0ea5e9]" />
    },
    {
      title: "UIU Sprs",
      description: "A platform to enhance university's issue resolution process. Transparent, user-friendly system for students to report issues, track progress, and receive feedback.",
      tech: ["Next.js", "TypeScript", "Supabase", "Clerk", "Shadcn UI", "Tailwind CSS", "Prisma"],
      github: "https://github.com/rayat-7/uiu-sprs",
      live: "#",
      icon: <Globe className="h-6 w-6 text-[#0ea5e9]" />
    },
    {
      title: "Spendo Frontend",
      description: "Frontend for a spending tracker app, financial management tool. Built with Vite and responsive design for seamless user experience.",
      tech: ["Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rayat-7/spendo-frontend",
      live: "#",
      icon: <FileText className="h-6 w-6 text-[#0ea5e9]" />
    }
  ];

  return (
    <section id="projects" className="bg-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="mb-16 border-t border-[#1A1A1A] pt-12">
          <div className="mb-6 flex">
             <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-[#0ea5e9]/40" />
                ))}
             </div>
          </div>
          <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-2xl lg:text-[40px] md:text-[32px]">
            Featured Projects.{" "}
            <span className="text-[#999999]">
              Real solutions for real problems.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#0d0d0d] border border-[#1a1a1a] p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-[#0d0d0d]/80 group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#0ea5e9]/20 via-[#38bdf8]/10 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#1a1a1a] border border-[#333] group-hover:border-[#0ea5e9]/50 transition-colors">
                      {project.icon}
                    </div>
                    <span className="px-2 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#0ea5e9] transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#0ea5e9] transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-3 flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-[#999999] text-[15px] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[#1a1a1a] text-[#0ea5e9] text-[11px] font-mono border border-[#333] hover:border-[#0ea5e9]/30 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NeuButton 
            href="https://github.com/rayat-7" 
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            View all projects on GitHub
            <ExternalLink size={16} />
          </NeuButton>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/2 dot-matrix opacity-10 pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
