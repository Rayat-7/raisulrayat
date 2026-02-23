"use client";

import React from "react";
import {
  ExternalLink,
  Github,
  GraduationCap,
  Gamepad2,
  Users,
  Wallet,
  ArrowUpRight,
} from "lucide-react";
import ShinyText from "../ui/shiny-text";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TuitionTrack",
      tagline: "Academy Management Solution.",
      description:
        "A comprehensive web application designed for tuition centers in Bangladesh. Simplifies management tasks like student records, attendance tracking, and fee collection with a modern, efficient dashboard.",
      tech: ["Next.js", "PostgreSQL", "Clerk"],
      github: "https://github.com/rayat-7/tuitiontrack",
      live: "#",
      icon: GraduationCap,
    },
    {
      title: "Cyber Play Arena",
      tagline: "Gaming Management.",
      description:
        "Web-based management software tailored for local gaming services. Facilitates slot booking and marketing campaign management with a high-performance interface and robust admin tools.",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com/rayat-7/cyber_play_arena",
      live: "#",
      icon: Gamepad2,
    },
    {
      title: "UIU Sprs",
      tagline: "Issue Resolution Platform.",
      description:
        "A dedicated platform for enhancing university issue resolution. Provides a transparent system for students to report issues, track progress, and receive feedback, improving communication.",
      tech: ["Next.js", "Supabase", "Clerk"],
      github: "https://github.com/rayat-7/uiu-sprs",
      live: "#",
      icon: Users,
    },
    {
      title: "Spendo",
      tagline: "Financial Management UI.",
      description:
        "A high-fidelity user interface for a spending tracker application. Built for a seamless financial management experience, allowing users to effectively track expenses across all devices.",
      tech: ["Vite", "TypeScript", "React"],
      github: "https://github.com/rayat-7/spendo-frontend",
      live: "#",
      icon: Wallet,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black py-24 md:py-32 relative overflow-hidden transition-all duration-500"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0ea5e9]">
              Innovation Gallery
            </span>
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
          </div>
          <ShinyText className="text-4xl md:text-6xl mb-6 tracking-tighter font-medium">
            Featured Projects
          </ShinyText>
          <p className="text-[#999] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Real solutions for real problems. Building scalable products with a
            focus on user experience and performance.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative p-8 md:p-12 transition-colors hover:bg-zinc-900/10 
                ${idx % 3 !== 2 ? "lg:border-r border-zinc-900" : ""} 
                ${idx % 2 !== 1 ? "md:border-r lg:md:border-r-0 border-zinc-900" : ""}
                ${idx < projects.length - (projects.length % 3 || 3) ? "lg:border-b border-zinc-900" : ""}
                ${idx < projects.length - 2 ? "md:border-b border-zinc-900" : ""}
                border-b md:border-b-0 last:border-b-0
              `}
            >
              {/* Icon */}
              <div className="mb-8 p-3 w-fit rounded-xl bg-zinc-900/50 border border-zinc-800/50 group-hover:border-[#0ea5e9]/30 transition-colors">
                <project.icon size={24} className="text-[#0ea5e9]" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                  {project.title}.{" "}
                  <span className="text-zinc-500 font-medium">
                    {project.tagline}
                  </span>
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  Source
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0ea5e9] hover:text-blue-400 transition-colors"
                >
                  <ArrowUpRight size={14} />
                  Launch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
