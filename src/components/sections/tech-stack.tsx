"use client";

import React from 'react';

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Shadcn UI", category: "UI Library" },
  { name: "Framer Motion", category: "Animation" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Backend" },
  { name: "Prisma", category: "ORM" },
  { name: "Clerk", category: "Auth" },
  { name: "Node.js", category: "Runtime" },
  { name: "Git", category: "Version Control" },
  { name: "Vercel", category: "Deployment" },
  { name: "Figma", category: "Design" },
  { name: "Vite", category: "Build Tool" },
];

const passions = [
  { icon: "🚀", text: "Building solutions for real problems" },
  { icon: "🎨", text: "Interactive & Modern Design" },
  { icon: "🤖", text: "AI Integration & Innovation" },
  { icon: "💻", text: "Modern Web Technologies" },
  { icon: "✨", text: "Creative Development" },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="relative bg-black py-32 overflow-hidden border-t border-[#1a1a1a]">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0ea5e9 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-8 max-w-[1280px] relative z-10">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`h-1.5 w-1.5 ${i % 2 === 0 ? 'bg-[#0ea5e9]' : 'bg-[#0ea5e9]/30'}`} />
              ))}
            </div>
            <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0ea5e9]">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white max-w-2xl lg:text-[40px] md:text-[32px]">
            Tools & Technologies.{" "}
            <span className="text-[#999999]">
              The tech I use to bring ideas to life.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-24">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative px-5 py-3 bg-[#0d0d0d] border border-[#1a1a1a] transition-all duration-300 hover:border-[#0ea5e9]/50 hover:bg-[#0ea5e9]/5 cursor-default"
            >
              <span className="text-[14px] font-medium text-white group-hover:text-[#0ea5e9] transition-colors">
                {tech.name}
              </span>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a1a] text-[10px] text-[#999999] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent mb-24" />

        <div className="mb-8">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999999] mb-8">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {passions.map((passion, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0d0d0d] border border-[#1a1a1a] transition-all duration-300 hover:border-[#0ea5e9]/30 hover:bg-[#0ea5e9]/5"
              >
                <div className="text-3xl mb-4">{passion.icon}</div>
                <p className="text-[14px] text-[#999999] group-hover:text-white transition-colors leading-snug">
                  {passion.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-[600px]">
          <blockquote className="text-[24px] font-medium text-white leading-[1.4] tracking-[-0.02em]">
            "Ideas are everywhere. I chase the ones with impact."
          </blockquote>
          <p className="mt-4 text-[15px] text-[#999999]">
            I build meaningful web applications that solve real-life problems and constantly level up by exploring new technologies and ideas.
          </p>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0ea5e9]/5 blur-[150px] pointer-events-none" />
    </section>
  );
};

export default TechStackSection;
