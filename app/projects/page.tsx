"use client";

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ExternalLink, Github, ArrowLeft, Calendar, Code2 } from 'lucide-react';
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";
import { ExpandableCard } from "@/components/ui/expandable-card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "TuitionTrack",
      description: "A comprehensive web app for tuition centers in Bangladesh.",
      fullDescription: "TuitionTrack is a comprehensive web application designed for tuition centers in Bangladesh. It simplifies management tasks by handling student records, attendance tracking, and monthly fee collections. The platform features a modern dashboard and an easy-to-use interface, ensuring efficiency for administrators.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Clerk", "Supabase"],
      github: "https://github.com/rayat-7/tuitiontrack",
      live: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      date: "Dec 2024",
      category: "Web App"
    },
    {
      title: "Cyber Play Arena",
      description: "A modern web-based management software for booking slots.",
      fullDescription: "Cyber Play Arena is a web-based management software tailored for local gaming services. It facilitates the booking of gaming slots and manages marketing campaigns. Built with Next.js and modern technologies, it offers a seamless booking experience for users and robust management tools for admins.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/rayat-7/cyber_play_arena",
      live: "#",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
      date: "Nov 2024",
      category: "SaaS"
    },
    {
      title: "UIU Sprs",
      description: "A platform to enhance university's issue resolution process.",
      fullDescription: "UIU Sprs is a dedicated platform aimed at enhancing the issue resolution process within the university. It provides a transparent and user-friendly system for students to report issues, track their progress, and receive timely feedback, fostering better communication between students and administration.",
      tech: ["Next.js", "TypeScript", "Supabase", "Clerk", "Shadcn UI", "Tailwind CSS", "Prisma"],
      github: "https://github.com/rayat-7/uiu-sprs",
      live: "#",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
      date: "Oct 2024",
      category: "Web App"
    },
    {
      title: "Spendo Frontend",
      description: "Frontend for a spending tracker app and financial management.",
      fullDescription: "Spendo Frontend is the user interface for a spending tracker application. Built with Vite and responsive design principles, it delivers a seamless user experience for financial management, allowing users to track expenses and manage their finances effectively on any device.",
      tech: ["Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/rayat-7/spendo-frontend",
      live: "#",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
      date: "Sep 2024",
      category: "Frontend"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing projects and skills.",
      fullDescription: "A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, pixel art effects, and a clean design system. Showcases projects, experience, and technical skills in an engaging way.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Canvas API"],
      github: "https://github.com/rayat-7/portfolio",
      live: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
      date: "Jan 2025",
      category: "Portfolio"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing online store operations.",
      fullDescription: "A comprehensive admin dashboard for e-commerce operations. Features include product management, order tracking, customer analytics, and inventory control. Built with modern React patterns and optimized for performance.",
      tech: ["React", "TypeScript", "Redux", "Chart.js", "Material UI"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      date: "Aug 2024",
      category: "Dashboard"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-8 max-w-[1400px] relative">
          
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0ea5e9]/5 blur-[140px] -z-10 pointer-events-none" />
          <div className="absolute bottom-1/2 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10 pointer-events-none" />

          {/* Page Header */}
          <div className="mb-20">
            <NeuButton href="/" variant="outline" className="mb-8 inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </NeuButton>

            <div className="relative">
              {/* Pixelated Background for Header */}
              <div className="absolute inset-0 opacity-20 -z-10">
                <PixelCard 
                  variant="blue" 
                  className="w-full h-full"
                  gap={8}
                  speed={15}
                  autoAppear
                  noHover
                  noFocus
                />
              </div>

              <div className="relative z-10 py-16 border-b border-[#1a1a1a]">
                <div className="mb-6 flex">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="h-1 w-1 bg-[#0ea5e9]/40" />
                    ))}
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  All <span className="text-[#0ea5e9]">Projects</span>
                </h1>
                <p className="text-xl text-[#999] max-w-3xl leading-relaxed">
                  A collection of web applications, tools, and experiments I've built. 
                  Each project represents a unique challenge and learning opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ExpandableCard
                key={index}
                title={project.title}
                description={project.description}
                src={project.image}
                className="border-[#1a1a1a] bg-[#0d0d0d] hover:border-[#0ea5e9]/40 min-h-[380px]"
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
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-[#0ea5e9]/10 text-[#0ea5e9] text-[10px] font-bold uppercase tracking-wider border border-[#0ea5e9]/30 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                )}
              >
                <div className="space-y-6 pt-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#666]">
                    <Calendar size={14} />
                    <span className="text-xs font-mono">{project.date}</span>
                  </div>

                  <p className="text-[#ccc] leading-relaxed text-base">
                    {project.fullDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0ea5e9] mb-3 flex items-center gap-2">
                      <Code2 size={14} />
                      Technologies
                    </h4>
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

          {/* CTA Section */}
          <div className="mt-24 text-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)] pointer-events-none" />
            <div className="relative z-10 p-12 bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Want to see more?</h3>
              <p className="text-[#999] mb-8 leading-relaxed">
                Check out my GitHub profile for more projects, contributions, and open-source work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <NeuButton 
                  href="https://github.com/rayat-7" 
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  Visit GitHub Profile
                </NeuButton>
                <NeuButton 
                  href="mailto:raisoulrayat@gmail.com" 
                  variant="outline"
                  className="inline-flex items-center gap-2"
                >
                  Get in Touch
                </NeuButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
