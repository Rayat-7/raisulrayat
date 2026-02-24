"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./header";
import ShinyText from "@/components/ui/shiny-text";
import { NeuButton } from "@/components/ui/neu-button";
import Name from "./name";
import { personalInfo } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Layer: hero2.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" /> */}
      </div>

      <Header isLight={false} />

      {/* Name - Centered Positioning */}
      <Name />

      {/* Hero Content Container: Exact positioning from Hero1 */}
      <div className="container relative z-10 mx-auto flex flex-col items-start justify-end min-h-[85vh] sm:min-h-screen px-6 md:px-12 lg:px-0 pb-16 sm:pb-24 pt-24 sm:pt-0">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="max-w-full  lg:max-w-[800px]"
        >
          {/* Status Badge moved to bottom right */}

          {/* Intro Text / Designation */}
          <ShinyText className=" mt-4" isLight={false}>
            <p className="text-2xl sm:text-2xl md:text-4xl font-medium ">
              {personalInfo.title}
            </p>
          </ShinyText>

          {/* Designation - Content matched from Hero1 */}
          <p className="text-white text-lg sm:text-base leading-relaxed max-w-[500px] mb-6">
            Based in {personalInfo.location}
          </p>
          {/* Bio - Content matched from Hero1 */}
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-[500px] mb-4 sm:mb-8">
            Transforming real-world challenges into fast, scalable web applications — driven by modern technologies like <span className="font-semibold text-xl ">React</span> and <span className="font-semibold text-xl ">Next.js</span>.
          </p>

          {/* Action Buttons - Content matched from Hero1 but with luxury spacing */}
          <div className="mt-4 sm:mt-8 flex flex-wrap gap-4 items-center">
            <NeuButton
              href="/resume"
              variant="primary"
              isLight={false}
              className="px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-[14px]"
            >
              View Resume
            </NeuButton>

            <a
              href="/projects"
              className="relative px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-sm sm:text-[14px] text-white bg-black border-2 border-transparent animate-border transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(#000, #000) padding-box, conic-gradient(from var(--border-angle), transparent 20%, #0ea5e9 40%, #ffffff 50%, #0ea5e9 60%, transparent 80%) border-box",
              }}
            >
              View Projects
            </a>
          </div>

          {/* Mobile-only: Tech Icons + Status Badge */}
          <div className="mt-4 flex flex-col gap-3 sm:hidden">
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-medium tracking-wide text-white/90 uppercase">
                open for opportunity
              </span>
            </div>
            {/* Tech Icons Row */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                  alt: "React",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
                  alt: "Next.js",
                  invert: true,
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                  alt: "TypeScript",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                  alt: "PostgreSQL",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  alt: "JavaScript",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                  alt: "MongoDB",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                  alt: "Node.js",
                },
              ].map((icon) => (
                <div
                  key={icon.alt}
                  className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center p-1.5"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className={`w-full h-full object-contain ${icon.invert ? "invert" : ""}`}
                  />
                </div>
              ))}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center p-1.5">
                <p className="text-green-500 font-italic text-[7px] font-extrabold">
                  GSAP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines matched from Hero1 - Shiny Effect */}
      {/* <div className="absolute left-[32px] top-40 bottom-10 w-[1px] bg-white/5 hidden xl:block z-[3] overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.4), white, rgba(14, 165, 233, 0.4), transparent)",
          }}
        />
      </div> */}
      {/* <div className="absolute left-[34px] top-40 bottom-10 w-[1px] bg-white/5 hidden xl:block z-[3] overflow-hidden">
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          }}
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(14, 165, 233, 0.4), white, rgba(14, 165, 233, 0.4), transparent)",
          }}
        />
      </div> */}

      {/* Tech Stack Icons - Bottom Right */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-20 right-6 md:right-12 z-20 hidden sm:flex flex-col items-end gap-5"
      >
        {/* Status Badge moved from main content */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-medium tracking-wide text-white/90 uppercase">
            open for opportunity
          </span>
        </div>

        <div className="flex flex-col items-end gap-3">
          {/* Row 1 */}
          <div className="flex items-center gap-2.5">
            {/* React */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Next.js */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-full h-full object-contain invert"
              />
            </div>
            {/* TS */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Postgres */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-full h-full object-contain"
              />
            </div>
            {/* GSAP */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <p className="text-green-500 font-italic text-[9px] font-extrabold">
                GSAP
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2.5">
            {/* JavaScript */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-full h-full object-contain"
              />
            </div>
            {/* MongoDB */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Express */}
            <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                alt="Express"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Node.js */}
            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-full h-full object-contain"
              />
            </div>
            {/* GitHub */}
            <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Glowing Bottom Border - Slow Bluish-White Shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] w-full overflow-hidden z-20">
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

export default HeroSection;
