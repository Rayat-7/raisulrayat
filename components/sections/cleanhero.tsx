"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "./header";
import { personalInfo } from "@/lib/data";

const CleanHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
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
        {/* Bottom fade — blends hero into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        {/* Subtle reading overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, transparent 80%)",
          }}
        />
      </div>

      <Header isLight={false} />

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-20 containe mx-auto px-6 md:px-10 md:pl-13 md:pr-1 flex flex-col justify-between py-10 md:py-24 pointer-events-none">
        {/* Top Section: Tagline (Top Right) */}
        <div className="flex justify-start pl-78 pt-4 hidden md:block">
          <div className="max-w-[180px] text-right">
            <p className="text-[10px] leading-tight font-medium tracking-tight text-white/40 uppercase">
              Building high-performance web applications with modern
              architecture
            </p>
          </div>
        </div>

        {/* Middle Section: Scattered Layout */}
        <div className="relative flex flex-col md:flex-row items-end md:items-center justify-end md:justify-between w-full flex-grow pb-24 md:pb-0">
          {/* Left Info (Vertical-ish) - Hidden on mobile, exists for Desktop balance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-bold text-white tracking-[0.2em] uppercase">
                {personalInfo.firstName} {personalInfo.lastName}
              </span>
              <span className="text-[10px] font-medium text-white/30 tracking-[0.1em] uppercase">
                {personalInfo.title}
              </span>
            </div>
            <div className="mt-8 text-[9px] font-bold tracking-[0.5em] text-[#0ea5e9] uppercase">
              [ THE ARCHITECT & ENGINEER ]
            </div>
          </motion.div>

          {/* Center-Right Main Block */}
          <div className="md:ml-auto md:mr-0 max-w-[580px] pr-4 md:pr-1 pointer-events-auto md:py-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className=" "
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-[1.05] tracking-tight uppercase mb-8 md:mb-18">
                Hi, I&apos;m{" "}
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)" }}
                >
                  {personalInfo.firstName} {personalInfo.lastName}
                </span>
                , a frontend developer specializing in scalable,
                high‑performance web applications.
              </h2>

              <p className="text-sm md:text-base text-white/50 leading-tight mb-10 max-w-[420px] hidden md:block">
                Currently {personalInfo.summary.split(".")[0]}. Focused on
                architecting efficient digital systems that solve complex
                problems at scale.
              </p>

              <a
                href="#projects"
                className="inline-block px-10 py-4 bg-white text-black text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-[#0ea5e9] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Small Info */}
        <div className="flex justify-end items-end pb-8 pr-6 md:pr-28">
          <div className="text-right">
            <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
              Based in {personalInfo.location.split(",")[0]}
            </p>
            <p className="text-[10px] font-bold tracking-[0.1em] text-white/50 uppercase mt-1">
              LIVE —{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Giant Bottom Typography - Desktop Only to avoid mobile overlaps */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none overflow-hidden select-none hidden md:block">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "15%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <h1 className="text-[14vw] font-semibold text-white/10 uppercase">
            {personalInfo.firstName}
            {personalInfo.lastName}
          </h1>
        </motion.div>

        {/* Gradient Fade to Ground Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      {/* Perspective Grid/Line (Optional but matches image vibe) */}
      <div className="absolute inset-0 z-10 opacity-10 pointer-events-none">
        <div className="h-full w-px bg-white/20 absolute left-1/4" />
        <div className="h-full w-px bg-white/20 absolute left-1/2" />
        <div className="h-full w-px bg-white/20 absolute left-3/4" />
      </div>
    </section>
  );
};

export default CleanHero;
