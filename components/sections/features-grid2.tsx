"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";
import { ExpandableCard2 } from "@/components/ui/expandable-card2";
import ShinyText from "@/components/ui/shiny-text";

const ProjectsSection2 = () => {
  const projects = [
    {
      title: "TuitionTrack",
      description: "A comprehensive web app for tuition centers in Bangladesh.",
      fullDescription:
        "TuitionTrack is a comprehensive web application designed for tuition centers in Bangladesh. It simplifies management tasks by handling student records, attendance tracking, and monthly fee collections. The platform features a modern dashboard and an easy-to-use interface, ensuring efficiency for administrators.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Clerk",
        "Supabase",
      ],
      github: "https://github.com/rayat-7/tuitiontrack",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Cyber Play Arena",
      description: "A modern web-based management software for booking slots.",
      fullDescription:
        "Cyber Play Arena is a web-based management software tailored for local gaming services. It facilitates the booking of gaming slots and manages marketing campaigns. Built with Next.js and modern technologies, it offers a seamless booking experience for users and robust management tools for admins.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/rayat-7/cyber_play_arena",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "UIU Sprs",
      description:
        "A platform to enhance university's issue resolution process.",
      fullDescription:
        "UIU Sprs is a dedicated platform aimed at enhancing the issue resolution process within the university. It provides a transparent and user-friendly system for students to report issues, track their progress, and receive timely feedback, fostering better communication between students and administration.",
      tech: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Clerk",
        "Shadcn UI",
        "Tailwind CSS",
        "Prisma",
      ],
      github: "https://github.com/rayat-7/uiu-sprs",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Spendo Frontend",
      description:
        "Frontend for a spending tracker app and financial management.",
      fullDescription:
        "Spendo Frontend is the user interface for a spending tracker application. Built with Vite and responsive design principles, it delivers a seamless user experience for financial management, allowing users to track expenses and manage their finances effectively on any device.",
      tech: ["Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rayat-7/spendo-frontend",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white text-zinc-900 py-32 relative overflow-hidden border-t border-zinc-100"
    >
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-blue-600/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
              Selected Works
            </span>
            <div className="w-12 h-[1px] bg-blue-600/30" />
          </div>
          <ShinyText
            isLight={true}
            className="text-4xl md:text-6xl mb-6 tracking-tighter"
          >
            Featured Projects
          </ShinyText>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Real solutions for real problems. Building scalable products with a
            focus on user experience and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ExpandableCard2
              key={index}
              title={project.title}
              description={project.description}
              src={project.image}
              className={
                index === 0
                  ? "border-2 border-transparent bg-white min-h-[320px] shadow-lg"
                  : "border-zinc-100 bg-white hover:border-blue-600/40 min-h-[320px] shadow-sm"
              }
              style={
                index === 0
                  ? {
                      background:
                        "linear-gradient(white, white) padding-box, conic-gradient(from var(--border-angle), transparent 20%, #2563eb 40%, #000 50%, #2563eb 60%, transparent 80%) border-box",
                    }
                  : {}
              }
              triggerHeader={
                <div className="absolute inset-0 w-full h-full bg-zinc-50 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full opacity-10"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 0%, transparent 100%)",
                    }}
                  >
                    <PixelCard
                      variant="default"
                      gap={12}
                      speed={20}
                      className="w-full h-full"
                      noFocus
                    />
                  </div>
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
              }
            >
              <div className="space-y-6 pt-4">
                <p className="text-zinc-600 leading-relaxed text-base">
                  {project.fullDescription}
                </p>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-50 text-blue-600 text-xs font-mono border border-zinc-200 rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <Github size={18} />
                    View Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </ExpandableCard2>
          ))}
        </div>

        <div className="mt-12 text-center">
          <NeuButton
            href="/projects"
            variant="outline"
            isLight={true}
            className="inline-flex items-center gap-2 bg-white border-blue-600 text-blue-600"
          >
            View All Projects
            <ExternalLink size={16} />
          </NeuButton>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/2 dot-matrix opacity-5 pointer-events-none" />
    </section>
  );
};

export default ProjectsSection2;
