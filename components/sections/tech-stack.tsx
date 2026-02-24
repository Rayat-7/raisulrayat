"use client";

import { motion } from "framer-motion";
import React from "react";
import PixelCard from "@/components/ui/pixel-card";
import ShinyText from "../ui/shiny-text";
import { techStack } from "@/lib/data";

// Helper to construct Devicon URLs
const getDevIcon = (name: string, variant: string = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

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
          <ShinyText className="text-4xl md:text-5xl  mb-6 tracking-tighter">
            Technical Stack
          </ShinyText>
          <p className="text-[#999] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Technologies I use to build scalable and high-performance
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
          {techStack.map((category, idx) => (
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
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-5 sm:flex sm:flex-wrap gap-x-4 sm:gap-x-10 gap-y-8">
                {category.items.map((tech: any, techIdx) => {
                  let iconElement: React.ReactNode;

                  if (tech.name === "GSAP") {
                    iconElement = (
                      <span className="text-green-500 font-bold italic text-sm tracking-tighter text-center">
                        GSAP
                      </span>
                    );
                  } else if (tech.name === "Express") {
                    iconElement = (
                      <span className="text-white leading-none text-2xl">
                        ex
                      </span>
                    );
                  } else if (tech.iconPath) {
                    iconElement = (
                      <img
                        src={tech.iconPath}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    );
                  } else if (tech.url) {
                    iconElement = (
                      <img
                        src={tech.url}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    );
                  } else if (tech.devicon) {
                    iconElement = (
                      <img
                        src={getDevIcon(tech.devicon)}
                        alt={tech.name}
                        className={`w-full h-full object-contain ${tech.name === "Next.js" ? "invert" : ""}`}
                      />
                    );
                  }

                  return (
                    <div
                      key={techIdx}
                      className="flex flex-col items-center gap-3 group"
                    >
                      <div className="w-7 h-7 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {iconElement}
                      </div>
                      <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider text-center group-hover:text-[#0ea5e9] transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing Bottom Border - Slow Bluish-White Shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full overflow-hidden z-20">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(14, 165, 233, 0.3), white, rgba(14, 165, 233, 0.3), transparent)",
          }}
        />
        {/* Subtle base line */}
        <div className="absolute inset-0 bg-[#0ea5e9]/20" />
      </div>
    </section>
  );
};

export default TechStack;
