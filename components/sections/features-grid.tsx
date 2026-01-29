"use client";

import React from 'react';
import { ExternalLink, Github, GraduationCap, Globe, Gamepad2, FileText } from 'lucide-react';
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";
import { ExpandableCard } from "@/components/ui/expandable-card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TuitionTrack",
      description: "A comprehensive web app for tuition centers in Bangladesh.",
      fullDescription: "TuitionTrack is a comprehensive web application designed for tuition centers in Bangladesh. It simplifies management tasks by handling student records, attendance tracking, and monthly fee collections. The platform features a modern dashboard and an easy-to-use interface, ensuring efficiency for administrators.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk", "Supabase"],
      github: "https://github.com/rayat-7/tuitiontrack",
      live: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Cyber Play Arena",
      description: "A modern web-based management software for booking slots.",
      fullDescription: "Cyber Play Arena is a web-based management software tailored for local gaming services. It facilitates the booking of gaming slots and manages marketing campaigns. Built with Next.js and modern technologies, it offers a seamless booking experience for users and robust management tools for admins.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/rayat-7/cyber_play_arena",
      live: "#",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "UIU Sprs",
      description: "A platform to enhance university's issue resolution process.",
      fullDescription: "UIU Sprs is a dedicated platform aimed at enhancing the issue resolution process within the university. It provides a transparent and user-friendly system for students to report issues, track their progress, and receive timely feedback, fostering better communication between students and administration.",
      tech: ["Next.js", "TypeScript", "Supabase", "Clerk", "Shadcn UI", "Tailwind CSS", "Prisma"],
      github: "https://github.com/rayat-7/uiu-sprs",
      live: "#",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Spendo Frontend",
      description: "Frontend for a spending tracker app and financial management.",
      fullDescription: "Spendo Frontend is the user interface for a spending tracker application. Built with Vite and responsive design principles, it delivers a seamless user experience for financial management, allowing users to track expenses and manage their finances effectively on any device.",
      tech: ["Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rayat-7/spendo-frontend",
      live: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
             <ExpandableCard
                key={index}
                title={project.title}
                description={project.description}
                src={project.image}
                className={index === 0 
                  ? "border-2 border-transparent animate-border bg-[#0d0d0d] min-h-[320px]" 
                  : "border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#0ea5e9]/40 min-h-[320px]"
                }
                style={index === 0 ? {
                  background: 'linear-gradient(#0d0d0d, #0d0d0d) padding-box, conic-gradient(from var(--border-angle), transparent 20%, #0ea5e9 40%, #ffffff 50%, #0ea5e9 60%, transparent 80%) border-box',
                } : {}}
                triggerHeader={(
                  <div className="absolute inset-0 w-full h-full bg-[#0d0d0d] overflow-hidden">
                    <div
                      className="absolute inset-0 w-full h-full opacity-30"
                      style={{
                        maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
                      }}
                    >
                      <PixelCard
                        variant="blue"
                        gap={12}
                        speed={20}
                        className="w-full h-full"
                        noFocus
                      />
                    </div>
                    {/* Overlay gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
                  </div>
                )}
             >
                <div className="space-y-6 pt-4">
                  <p className="text-[#ccc] leading-relaxed text-base">
                    {project.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0ea5e9] mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-[#1a1a1a] text-[#0ea5e9] text-xs font-mono border border-[#333] rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-[#1a1a1a]">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors text-sm font-medium"
                    >
                      <Github size={18} />
                      View Source
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
             </ExpandableCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NeuButton 
            href="/projects" 
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            View All Projects
            <ExternalLink size={16} />
          </NeuButton>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/2 dot-matrix opacity-10 pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
