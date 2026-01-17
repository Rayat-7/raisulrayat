"use client";

import React from 'react';
import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { BeamsBackground } from "@/components/ui/beams-background";
import { NeuButton } from "@/components/ui/neu-button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      <BeamsBackground 
        beamCount={6}
        beamColor="#0ea5e9"
        rotation={-45}
        noise={0.25}
        opacity={0.45}
        className="z-0"
      />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[500px] bg-gradient-to-br from-[#0ea5e9]/8 via-[#0ea5e9]/4 to-transparent blur-[80px]" />
      </div>

      <div className="absolute top-0 right-0 w-[55%] h-full z-[1] hidden lg:block">
        <div className="relative w-full h-full">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2832a7b9-6393-42b6-b877-3b83b7ed050a/3fa258ea-a5d1-426c-9538-1a1ea2187fe3-1768600459235.jpg?width=1200&height=1400&resize=cover" 
            alt="Raisul Rayat" 
            fill
            className="object-cover object-[center_15%]"
            style={{ objectPosition: 'center 15%' }}
            priority
            unoptimized
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" style={{ background: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          
          <div className="absolute inset-0 bg-[#0ea5e9]/5 mix-blend-overlay" />
          
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent" />
          
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/30 to-transparent" />
        </div>
      </div>

      <div className="absolute top-16 right-0 w-[45%] h-[50%] z-[1] lg:hidden">
        <div className="relative w-full h-full">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2832a7b9-6393-42b6-b877-3b83b7ed050a/3fa258ea-a5d1-426c-9538-1a1ea2187fe3-1768600459235.jpg?width=600&height=800&resize=cover" 
            alt="Raisul Rayat" 
            fill
            className="object-cover object-[center_10%]"
            priority
            unoptimized
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-[#0ea5e9]/5 mix-blend-overlay" />
        </div>
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute left-0 top-0 w-[50%] h-full bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-start min-h-screen px-8 pt-32 pb-20 lg:pt-40 lg:px-8 md:px-5">
        
        <div className="flex-1 max-w-[700px] lg:max-w-[550px]">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#0ea5e9]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#999999]">
              WEB DEVELOPER & ASPIRING ENTREPRENEUR
            </span>
          </div>

          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/15 to-transparent border border-[#0ea5e9]/30 backdrop-blur-sm relative overflow-hidden group">
            <Trophy className="w-4 h-4 text-[#fbbf24] relative z-10" />
            <span className="text-[13px] font-medium text-white relative z-10">
              Startup Competition Champion — Spendo AI (Cohort IC6)
            </span>
          </div>

          <h1 className="text-left text-[64px] font-medium leading-[1.05] tracking-[-0.04em] lg:text-[56px] md:text-[44px] sm:text-[36px]">
            Hi, I am{" "}
            <span className="text-[#0ea5e9]">Raisul Rayat</span>
          </h1>
          
          <p className="mt-6 max-w-[540px] text-xl text-[#999999] leading-relaxed md:text-lg">
            I believe web development can be more diverse and inspiring with AI. 
            My mission is to explore modern web technologies through experiments and innovative solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#1a1a1a] text-[13px] text-white font-medium">
              Computer Science Student
            </span>
            <span className="px-4 py-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#1a1a1a] text-[13px] text-white font-medium">
              Full-Stack Developer
            </span>
            <span className="px-4 py-2 bg-[#0d0d0d]/80 backdrop-blur-sm border border-[#1a1a1a] text-[13px] text-white font-medium">
              UI/UX Designer
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <NeuButton href="#projects" variant="primary" className="px-8 py-3">
              View Projects
            </NeuButton>
            <NeuButton href="/resume.pdf" variant="outline" target="_blank" className="px-8 py-3">
              Download Resume
            </NeuButton>
          </div>

          <div className="mt-12 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0ea5e9] animate-pulse" />
            <span className="text-[13px] text-white/80 font-medium">Available for projects</span>
          </div>
        </div>
      </div>

      <div className="absolute left-[32px] top-40 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/0 via-[#0ea5e9]/20 to-[#0ea5e9]/0 hidden xl:block z-[3]" />
    </section>
  );
};

export default HeroSection;
