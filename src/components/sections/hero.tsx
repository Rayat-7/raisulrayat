"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Trophy } from 'lucide-react';
import { BeamsBackground } from "@/components/ui/beams-background";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      <BeamsBackground 
        beamCount={5}
        beamColor="#0ea5e9"
        rotation={-135}
        noise={0.3}
        opacity={0.35}
        className="z-0"
      />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[600px] bg-gradient-to-br from-[#0ea5e9]/10 via-[#0ea5e9]/5 to-transparent blur-[100px]" />
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute left-0 top-0 w-[60%] h-full bg-gradient-to-r from-black via-black/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center gap-12 px-8 pt-32 pb-20 lg:pt-40 lg:px-8 md:px-5">
        
        <div className="flex-1 max-w-[700px]">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-[#0ea5e9]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#999999]">
              WEB DEVELOPER & ASPIRING ENTREPRENEUR
            </span>
          </div>

          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/15 to-transparent border border-[#0ea5e9]/30 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-[-2px] bg-gradient-to-r from-[#0ea5e9] via-[#0ea5e9]/50 to-transparent animate-pulse" style={{ filter: 'blur(4px)' }} />
            </div>
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
            <a href="#projects" className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0ea5e9] opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-border-glow" />
              <Button className="relative h-[48px] bg-[#0ea5e9] px-8 text-base font-medium text-white transition-transform hover:scale-[1.02] hover:bg-[#0ea5e9]/90 shadow-lg shadow-[#0ea5e9]/25 rounded-none">
                View Projects
              </Button>
            </a>
            <a href="/resume.pdf" target="_blank" className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-[#0ea5e9]/50 via-[#38bdf8]/30 to-[#0ea5e9]/50 opacity-0 group-hover:opacity-75 blur-sm transition-all duration-300" />
              <Button variant="outline" className="relative h-[48px] border-[#333333] bg-transparent px-8 text-base font-medium text-white transition-transform hover:scale-[1.02] hover:border-[#0ea5e9]/50 hover:bg-transparent backdrop-blur-sm rounded-none">
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[400px] lg:w-[380px] lg:h-[480px]">
            <div className="absolute -inset-8 bg-[#0ea5e9]/10 blur-[80px] opacity-40" />
            
            <div className="relative w-full h-full overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] group">
              <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2832a7b9-6393-42b6-b877-3b83b7ed050a/3fa258ea-a5d1-426c-9538-1a1ea2187fe3-1768600459235.jpg?width=800&height=1000&resize=cover" 
                  alt="Raisul Rayat" 
                  fill
                  className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  priority
                  unoptimized
                />
              
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#0ea5e9]/60" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#0ea5e9]/60" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0ea5e9] animate-pulse" />
                  <span className="text-[13px] text-white font-medium">Available for projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[32px] top-40 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/0 via-[#0ea5e9]/20 to-[#0ea5e9]/0 hidden xl:block z-[3]" />
    </section>
  );
};

export default HeroSection;
