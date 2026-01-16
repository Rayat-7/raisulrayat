"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Trophy } from 'lucide-react';

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
      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center gap-12 px-8 pt-32 pb-20 lg:pt-40 lg:px-8 md:px-5">
        
        {/* Left Content */}
        <div className="flex-1 max-w-[700px]">
          {/* Top Label */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#0ea5e9]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#999999]">
              WEB DEVELOPER & ASPIRING ENTREPRENEUR
            </span>
          </div>

          {/* Achievement Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/20 to-transparent border border-[#0ea5e9]/30 rounded-full">
            <Trophy className="w-4 h-4 text-[#fbbf24]" />
            <span className="text-[13px] font-medium text-white">
              Startup Competition Champion — Spendo AI (Cohort IC6)
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-left text-[64px] font-medium leading-[1.05] tracking-[-0.04em] lg:text-[56px] md:text-[44px] sm:text-[36px]">
            Hi, I am{" "}
            <span className="text-[#0ea5e9]">Raisul Rayat</span>
          </h1>
          
          <p className="mt-6 max-w-[540px] text-xl text-[#999999] leading-relaxed md:text-lg">
            I believe web development can be more diverse and inspiring with AI. 
            My mission is to explore modern web technologies through experiments and innovative solutions.
          </p>

          {/* Status Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#0d0d0d] border border-[#1a1a1a] rounded-full text-[13px] text-white font-medium">
              Computer Science Student
            </span>
            <span className="px-4 py-2 bg-[#0d0d0d] border border-[#1a1a1a] rounded-full text-[13px] text-white font-medium">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-[#0d0d0d] border border-[#1a1a1a] rounded-full text-[13px] text-white font-medium">
              UI/UX Designer
            </span>
          </div>

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

        {/* Right Side - Photo */}
        <div className="relative flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[400px] lg:w-[380px] lg:h-[480px]">
            {/* Glow Background */}
            <div className="absolute -inset-8 bg-[#0ea5e9]/20 blur-[80px] rounded-full opacity-50" />
            
            {/* Photo Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] group">
              <Image 
                src="/portimg.jpeg" 
                alt="Raisul Rayat" 
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                priority
              />
              
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#0ea5e9]/60" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#0ea5e9]/60" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Name Tag at Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse" />
                  <span className="text-[13px] text-white font-medium">Available for projects</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 p-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl shadow-2xl">
              <div className="text-[24px] font-bold text-white">1+</div>
              <div className="text-[11px] text-[#999999] uppercase tracking-wider">Years Exp</div>
            </div>

            {/* Another Floating Card */}
            <div className="absolute -top-4 -right-4 p-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl shadow-2xl">
              <div className="text-[24px] font-bold text-white">UIU</div>
              <div className="text-[11px] text-[#999999] uppercase tracking-wider">3rd Year CSE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Video Element */}
      <div className="absolute right-0 top-0 h-full w-full pointer-events-none overflow-hidden opacity-40">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute right-0 top-1/2 h-full w-full -translate-y-1/2 object-cover object-right mix-blend-lighten"
          style={{ height: '120%' }}
        >
          <source src="https://cdn.neonapi.io/public/pages/home/hero/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Vertical Glowing Line */}
      <div className="absolute left-[32px] top-40 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/0 via-[#0ea5e9]/20 to-[#0ea5e9]/0 hidden xl:block" />
    </section>
  );
};

export default HeroSection;
