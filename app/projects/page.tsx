"use client";

import React from "react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ExternalLink, Github, ArrowLeft, Calendar, Code2 } from "lucide-react";
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { personalInfo, projects } from "@/lib/data";

const ProjectsPage = () => {
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
            <NeuButton
              href="/"
              variant="outline"
              className="mb-8 inline-flex items-center gap-2"
            >
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
                  A collection of web applications, tools, and experiments
                  I&apos;ve built. Each project represents a unique challenge
                  and learning opportunity.
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
                triggerHeader={
                  <div className="absolute inset-0 w-full h-full bg-[#0d0d0d] overflow-hidden">
                    <div
                      className="absolute inset-0 w-full h-full opacity-30"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, black 0%, transparent 100%)",
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
                }
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
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#1a1a1a] text-[#0ea5e9] text-xs font-mono border border-[#333] rounded-sm"
                        >
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
              <h3 className="text-3xl font-bold text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-[#999] mb-8 leading-relaxed">
                Check out my GitHub profile for more projects, contributions,
                and open-source work.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <NeuButton
                  href={personalInfo.github}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github size={18} />
                  Visit GitHub Profile
                </NeuButton>
                <NeuButton
                  href={`mailto:${personalInfo.email}`}
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
