"use client";

import React from 'react';
import Image from 'next/image';
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#000000] text-white">
      
      {/* Pixelated Background Pattern - Left Side */}
      <div
        className="absolute left-0 top-0 w-full lg:w-2/3 h-full z-[2] pointer-events-none"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)'
        }}
      >
         <PixelCard 
           variant="blue" 
           className="w-full h-full" 
           gap={12} 
           speed={0} 
           autoAppear
           noFocus
         />
      </div>

      {/* <div className="absolute inset-0 z-[0] pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[360px] h-[450px] bg-gradient-to-br from-[#0ea5e9]/8 via-[#0ea5e9]/4 to-transparent blur-[80px]" />
      </div> */}

      <div className="absolute top-0 right-0 w-[40%] h-full z-[1] hidden lg:block">
        <div className="relative w-full h-full flex items-end justify-end">
          <div className="relative w-full h-[115%] -mb-[5%]">
            <Image 
              src="/portfolio_img.jpg" 
              alt="Raisul Rayat" 
              fill
              className="object-contain object-bottom-right"
              style={{ objectPosition: 'right bottom' }}
              priority
              unoptimized
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent" 
          // style={{ background: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 10%, rgba(0,0,0,0.15) 20%, transparent 100%)' }} 
          />
          
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          
          <div className="absolute inset-0 bg-[#0ea5e9]/5 mix-blend-overlay" />
          
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent" /> */}

          {/* New Overlay Content for Image Side, scaled down */}
          <div className="absolute bottom-17 left-8 z-20 flex flex-col gap-3">
            {/* Open for Project Badge */}
             <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-medium text-white/90">Open for Project</span>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-2.5">
              {/* React */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-full h-full object-contain" />
              </div>
              {/* Next.js */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-full h-full object-contain invert" />
              </div>
              {/* TS */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-full h-full object-contain" />
              </div>
              {/* Postgres */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-full h-full object-contain" />
              </div>
               {/* GSAP */}
               <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform p-1.5">
                <p className="text-green-500 font-italic text-[8px] font-extrabold">GSAP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-16 right-0 w-[45%] h-[50%] z-[1] lg:hidden">
        <div className="relative w-full h-full">
          <Image 
            src="/portfolio_img.jpg" 
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

      <div className="absolute inset-0 z-[3] pointer-events-none">
        <div className="absolute left-0 top-0 w-[50%] h-full bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-start justify-end min-h-screen px-6 md:px-12 lg:px-5 pb-12 sm:pb-30">
        
        <div className="max-w-full lg:max-w-[800px]">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-black/50 backdrop-blur-md border border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[12px] font-medium text-white/90">Open for Project opportunity</span>
            </div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-white/80 mb-2">Hi, I'm</p>
          <h1 className="text-left mb-4">
            <span className="text-[40px] xs:text-[48px] sm:text-[60px] md:text-[70px] font-bold text-white leading-[1.1] tracking-tight block">
              Raisul <span className="text-[#0ea5e9]">Rayat</span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-6">Frontend Developer</p>

          <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed max-w-[600px] mb-8">
            I build meaningful web applications that solve real-life problems and constantly level up by exploring new technologies and ideas. Every project is an opportunity to create something impactful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NeuButton href="/projects" variant="primary" className="px-7 py-2.5 text-[14px]">
              View Projects
            </NeuButton>
            <NeuButton href="/resume" variant="outline" className="px-7 py-2.5 text-[14px]">
              View Resume
            </NeuButton>
          </div>
        </div>
      </div>

      <div className="absolute left-[32px] top-40 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9]/0 via-[#0ea5e9]/20 to-[#0ea5e9]/0 hidden xl:block z-[3]" />
    </section>
  );
};

export default HeroSection;
