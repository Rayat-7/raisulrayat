"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      {/* Background Noise Texture */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/noise-19.svg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Main Content Container */}
      <div className="container relative z-10 mx-auto flex flex-col items-start px-8 pt-40 pb-20 lg:px-8 md:px-5">
        
        {/* Top Label */}
        <div className="mb-6 flex items-center gap-2">
          <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#0ea5e9]" />
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#999999]">
            WEB DEVELOPER & ASPIRING ENTREPRENEUR
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="max-w-[1000px] text-left text-[72px] font-medium leading-[1.1] tracking-[-0.04em] lg:text-[60px] md:text-[48px] sm:text-[40px]">
          Crafting digital experiences <br className="hidden lg:block" /> with modern web technologies
        </h1>

        <p className="mt-6 max-w-[600px] text-lg text-[#999999] leading-relaxed">
          I explore modern web technologies through experiments and innovative solutions. 
          Currently a 3rd Year Computer Science student at UIU with 1+ years of experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#projects">
            <Button className="h-[48px] rounded-full bg-[#0ea5e9] px-8 text-base font-medium text-white transition-transform hover:scale-[1.02] hover:bg-[#0ea5e9]/90">
              View Projects
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank">
            <Button variant="outline" className="h-[48px] rounded-full border-[#333333] bg-transparent px-8 text-base font-medium text-white transition-transform hover:scale-[1.02] hover:border-gray-400 hover:bg-transparent">
              Download Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Background Video Element - Positioned behind content but above noise */}
      <div className="absolute right-0 top-0 h-full w-full pointer-events-none overflow-hidden xl:w-2/3">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute right-0 top-1/2 h-full w-full -translate-y-1/2 object-cover object-right mix-blend-lighten opacity-60"
          style={{ height: '120%' }}
        >
          <source src="https://cdn.neonapi.io/public/pages/home/hero/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Glow and Gradient Mask for the Video - Adapted to Sky Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] bg-[#0ea5e9]/10 blur-[120px] rounded-full" />
      </div>

      {/* Tech Stack Bar */}
      <div className="container mx-auto px-8 lg:px-8 md:px-5">
        <div className="mt-20 border-t border-[#1A1A1A] pt-12">
          <div className="flex flex-wrap items-center justify-between gap-y-10 opacity-40 transition-opacity hover:opacity-100 lg:justify-center lg:gap-x-12 grayscale">
            <span className="text-xl font-bold">NEXT.JS</span>
            <span className="text-xl font-bold">TYPESCRIPT</span>
            <span className="text-xl font-bold">TAILWIND</span>
            <span className="text-xl font-bold">POSTGRESQL</span>
            <span className="text-xl font-bold">SUPABASE</span>
            <span className="text-xl font-bold">CLERK</span>
          </div>
        </div>
      </div>

      {/* Vertical Glowing Line Placeholder */}
      <div className="absolute left-[32px] top-40 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/0 via-[#0ea5e9]/20 to-[#0ea5e9]/0 hidden xl:block" />
    </section>
  );
};

export default HeroSection;
