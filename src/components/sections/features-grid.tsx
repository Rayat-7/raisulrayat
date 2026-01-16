"use client";

import React from 'react';
import { ExternalLink, Github, GraduationCap, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TuitionTrack",
      description: "A comprehensive web app for tuition centers in Bangladesh to manage students, attendance, and monthly fees. Features modern dashboard and easy-to-use interface.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk", "Supabase"],
      link: "https://github.com/rayat-7/tuitiontrack",
      icon: <GraduationCap className="h-6 w-6 text-[#0ea5e9]" />
    },
    {
      title: "Cyber Play Arena",
      description: "Modern web-based management software for local gaming services. Manages booking slots and marketing with a sleek user interface.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/rayat-7/cyber_play_arena",
      icon: <Globe className="h-6 w-6 text-[#0ea5e9]" />
    }
  ];

  return (
    <section id="projects" className="bg-black py-32 relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Header Section */}
        <div className="mb-16 border-t border-[#1A1A1A] pt-12">
          <div className="mb-6 flex">
             <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-1 w-1 rounded-full bg-[#0ea5e9]/40" />
                ))}
             </div>
          </div>
          <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-2xl">
            Featured Projects.{" "}
            <span className="text-[#999999]">
              Real solutions built with modern web technologies and a focus on impact.
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-black p-12 flex flex-col min-h-[320px] transition-colors duration-200 hover:bg-[#0d0d0d] group"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#333] group-hover:border-[#0ea5e9]/50 transition-colors">
                  {project.icon}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-[#0ea5e9] transition-colors">
                  <Github size={20} />
                </a>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 flex items-center gap-2">
                {project.title}
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-[#999999] text-[16px] leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-[#1a1a1a] text-[#0ea5e9] text-[12px] font-mono rounded-full border border-[#333]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 dot-matrix opacity-10 pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
