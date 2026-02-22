"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header2 from "./header2";
import ShinyText from "@/components/ui/shiny-text";
import { NeuButton } from "@/components/ui/neu-button";
import Name from "./name";

const Hero2 = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
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

      <Header2 isLight={false} />

      {/* Name - Centered Positioning */}
      <Name />

      {/* Hero Content Container: Exact positioning from Hero1 */}
      <div className="container relative z-10 mx-auto flex flex-col items-start justify-end min-h-screen px-6 md:px-12 lg:px-0 pb-12 sm:pb-36">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="max-w-full lg:max-w-[800px]"
        >
          {/* Status Badge moved to bottom right */}

          {/* Intro Text / Designation */}
          <ShinyText className="mb-12 mt-10" isLight={false}>
            <p className="text-lg sm:text-xl md:text-3xl font-medium ">
              Frontend Developer
            </p>
          </ShinyText>

          {/* Designation - Content matched from Hero1 */}

          {/* Bio - Content matched from Hero1 */}
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-[500px] mb-8">
            I build meaningful web applications that solve real-life problems
            and constantly level up by exploring new technologies and ideas.
          </p>

          {/* Action Buttons - Content matched from Hero1 but with luxury spacing */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <NeuButton
              href="/resume"
              variant="primary"
              isLight={false}
              className="px-8 py-3 font-medium"
            >
              View Resume
            </NeuButton>

            <NeuButton
              href="/projects"
              variant="outline"
              isLight={false}
              className="px-8 py-3  bg-black font-medium border-2  text-white hover:bg-blue-900/20 transition-all !shadow-none !translate-x-0 !translate-y-0"
            >
              View Projects
            </NeuButton>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines matched from Hero1 */}
      <div className="absolute left-[32px] top-40 bottom-10 w-px bg-gradient-to-t from-blue-600/0 via-blue-600/20 to-blue-600/0 hidden xl:block z-[3]" />
      <div className="absolute left-[34px] top-40 bottom-10 w-px bg-gradient-to-t from-blue-600/0 via-blue-600/20 to-blue-600/0 hidden xl:block z-[3]" />

      {/* Tech Stack Icons - Bottom Right */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-12 right-6 md:right-12 z-20 hidden sm:flex flex-col items-end gap-5"
      >
        {/* Status Badge moved from main content */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-medium tracking-wide text-white/90 uppercase">
            Open for Project
          </span>
        </div>

        <div className="flex flex-col items-end gap-3">
          {/* Row 1 */}
          <div className="flex items-center gap-2.5">
            {/* React */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                alt="React"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Next.js */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                className="w-full h-full object-contain invert"
              />
            </div>
            {/* TS */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="TypeScript"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Postgres */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                className="w-full h-full object-contain"
              />
            </div>
            {/* GSAP */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <p className="text-green-500 font-italic text-[8px] font-extrabold">
                GSAP
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2.5">
            {/* JavaScript */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                className="w-full h-full object-contain"
              />
            </div>
            {/* MongoDB */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Express */}
            <div className="w-7 h-7 rounded-full bg-white/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                alt="Express"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Node.js */}
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                className="w-full h-full object-contain"
              />
            </div>
            {/* GitHub */}
            <div className="w-7 h-7 rounded-full bg-white/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero2;
