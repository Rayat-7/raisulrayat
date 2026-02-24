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
import { projects } from "@/lib/data";

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="bg-black py-24 md:py-32 relative overflow-hidden transition-all duration-500"
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0ea5e9]">
              My Works
            </span>
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
          </div>
          <ShinyText className="text-4xl md:text-5xl mb-6 tracking-tighter p-1 font-medium">
            Featured Projects
          </ShinyText>
          <p className="text-[#999] max-w-2xl mx-auto text-lg md:text-xl  leading-relaxed font-light">
            Real solutions for real problems. Building scalable products with a
            focus on user experience and performance.
          </p>
        </div>

        {/* Plain Text Project List */}
        <div className="space-y-0">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group border-t border-[#1a1a1a] last:border-b py-10 md:py-12 transition-colors hover:bg-[#0a0a0a]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Left: Number + Title */}
                <div className="md:w-[45%] flex items-start gap-5">
                  <span className="text-[11px] font-mono text-[#1889fa] mt-1.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-[#0ea5e9] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className=" text-sm font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: Description + Tech + Links */}
                <div className="md:w-[55%] md:pl-4">
                  <p className="text-[#666] text-sm leading-relaxed mb-5 group-hover:text-[#999] transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {/* Tech Stack */}
                    <div className="flex items-center gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-[#555] tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <span className="hidden md:block w-px h-3 bg-[#333]" />

                    {/* Links */}
                    <div className="flex items-center gap-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#555] hover:text-white transition-colors"
                      >
                        <Github size={12} />
                        Source
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0ea5e9] hover:text-blue-400 transition-colors"
                      >
                        <ArrowUpRight size={12} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
