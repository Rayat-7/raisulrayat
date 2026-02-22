"use client";

import { FiCode, FiDatabase, FiTool } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";
import PixelCard from "@/components/ui/pixel-card";

// Helper to construct Devicon URLs
const getDevIcon = (name: string, variant: string = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const stackCategories = [
  {
    id: 1,
    title: "Frontend",
    Icon: FiCode,
    description:
      "Building responsive, accessible, and performant user interfaces with modern frameworks.",
    items: [
      { name: "JavaScript", icon: getDevIcon("javascript") },
      { name: "TypeScript", icon: getDevIcon("typescript") },
      { name: "React", icon: getDevIcon("react") },
      { name: "Next.js", icon: getDevIcon("nextjs") },
      { name: "Tailwind", icon: getDevIcon("tailwindcss") },
      { name: "MongoDB", icon: getDevIcon("mongodb") },
      {
        name: "GSAP",
        icon: "https://cdn.worldvectorlogo.com/logos/greensock.svg",
      },
      { name: "Vite", icon: "https://vite.dev/assets/vite-light.t8GCa_VF.svg" },
    ],
  },
  {
    id: 2,
    title: "Backend & DB",
    Icon: FiDatabase,
    description:
      "Robust server-side solutions and scalable database architectures.",
    items: [
      { name: "Node.js", icon: getDevIcon("nodejs") },
      { name: "Python", icon: getDevIcon("python") },

      { name: "PostgreSQL", icon: getDevIcon("postgresql") },
      { name: "Express", icon: getDevIcon("express") },
      {
        name: "Framer Motion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
      { name: "Redis", icon: getDevIcon("redis") },
      { name: "Supabase", icon: getDevIcon("supabase") },
      { name: "Appwrite", icon: getDevIcon("appwrite") },
      { name: "Prisma", icon: getDevIcon("prisma") },
      { name: "Firebase", icon: getDevIcon("firebase") },
      {
        name: "Sanity",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sanity/sanity-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Tools",
    Icon: FiTool,
    description:
      "The essential toolkit for efficient development and deployment workflows.",
    items: [
      {
        name: "Expo",
        icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg",
      },
      { name: "Sentry", icon: getDevIcon("sentry") },
      { name: "Git", icon: getDevIcon("git") },
      { name: "Figma", icon: getDevIcon("figma") },
      { name: "Postman", icon: getDevIcon("postman") },
      { name: "Docker", icon: getDevIcon("docker") },
      {
        name: "Vercel",
        icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      },
    ],
  },
];

const TechStack2 = () => {
  const allTechs = stackCategories.flatMap((category) => category.items);

  return (
    <section
      id="techstack"
      className="py-24 bg-white text-zinc-900 relative overflow-hidden border-t border-zinc-100"
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.02) 40%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-50/50 blur-[140px] rounded-full -mr-96 -mt-96 z-[1] pointer-events-none" />

      {/* Pixelated Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <PixelCard
          variant="default"
          className="w-full h-full"
          gap={6}
          speed={20}
          autoAppear
          noHover
          noFocus
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
              ARSENAL
            </span>
            <div className="w-8 h-[1px] bg-blue-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-zinc-900">
            Tech <span className="text-blue-600">Stack</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            The technologies I trust to build robust, scalable, and beautiful
            applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-12">
          {allTechs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.02, duration: 0.4 }}
              className="relative group w-8 h-8 md:w-12 md:h-12 flex items-center justify-center p-1 bg-white rounded-lg shadow-sm border border-zinc-100 hover:border-blue-200 transition-all"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className="w-full h-full object-contain grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack2;
