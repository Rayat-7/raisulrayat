"use client";

import { motion } from "framer-motion";
import React from "react";
import PixelCard from "@/components/ui/pixel-card";
import ShinyText from "../ui/shiny-text";

// Helper to construct Devicon URLs
const getDevIcon = (name: string, variant: string = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const stackCategories = [
  {
    title: "Frontend & Framework",
    items: [
      { name: "React", icon: getDevIcon("react") },
      { name: "Next.js", icon: getDevIcon("nextjs") },
      { name: "Tailwind", icon: getDevIcon("tailwindcss") },
      {
        name: "GSAP",
        custom: (
          <span className="text-green-500 font-bold italic text-sm tracking-tighter">
            GSAP
          </span>
        ),
      },
      { name: "Vite", icon: "https://vite.dev/assets/vite-light.t8GCa_VF.svg" },
      {
        name: "TanStack Start",
        icon:
          "https://raw.githubusercontent.com/tanstack/query/main/docs/src/hooks/useQuery.md" ===
          ""
            ? ""
            : "https://avatars.githubusercontent.com/u/72518440?v=4",
      },
      { name: "motion.dev", icon: getDevIcon("framermotion") },
      { name: "Figma", icon: getDevIcon("figma") },
      
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "Node.js", icon: getDevIcon("nodejs") },
      {
        name: "Express",
        custom: (
          <span className="text-white   leading-none text-2xl">
            ex
          </span>
        ),
      },
      {
        name: "Sanity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg",
      },
      { name: "PostgreSQL", icon: getDevIcon("postgresql") },
      { name: "MongoDB", icon: getDevIcon("mongodb") },
      { name: "Redis", icon: getDevIcon("redis") },
      { name: "Supabase", icon: getDevIcon("supabase") },
      { name: "Prisma", icon: getDevIcon("prisma") },
      { name: "Appwrite", icon: getDevIcon("appwrite") },
      { name: "Firebase", icon: getDevIcon("firebase") },
    ],
  },
  {
    title: "Language",
    items: [
      { name: "JavaScript", icon: getDevIcon("javascript") },
      { name: "TypeScript", icon: getDevIcon("typescript") },
      { name: "Python", icon: getDevIcon("python") },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: getDevIcon("git") },
      { name: "Docker", icon: getDevIcon("docker") },
      { name: "Sentry", icon: getDevIcon("sentry") },
      { name: "Postman", icon: getDevIcon("postman") },
      {
        name: "Vercel",
        icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      },
    ],
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-24 bg-black relative overflow-hidden border-t border-[#1a1a1a]"
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(circle at top right, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
        }}
      />

      {/* Pixelated Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <PixelCard
          variant="default"
          className="w-full h-full"
          gap={8}
          speed={20}
          autoAppear
          noHover
          noFocus
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="mb-24 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0ea5e9]">
              Core Arsenal
            </span>
            <div className="w-12 h-[1px] bg-[#0ea5e9]/50" />
          </div>
          <ShinyText className="text-4xl md:text-6xl  mb-6 tracking-tighter">
            Technical Stack
          </ShinyText>
          <p className="text-[#999] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Technologies I use to build scalable and high-performance
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
          {stackCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4 border-b border-zinc-900 pb-4">
                <h3 className="text-white text-base  uppercase tracking-widest">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-10 gap-y-8">
                {category.items.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                      {tech.custom ? (
                        tech.custom
                      ) : (
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-full h-full object-contain ${tech.name === "Next.js" ? "invert" : ""}`}
                        />
                      )}
                    </div>
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider text-center group-hover:text-[#0ea5e9] transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
