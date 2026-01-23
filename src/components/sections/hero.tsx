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
          <div className="absolute bottom-12 left-8 z-20 flex flex-col gap-3">
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
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform">
                <svg viewBox="-10.5 -9.45 21 18.9" className="w-3.5 h-3.5 text-[#61DAFB]" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"/><ellipse rx="10" ry="4.5" transform="rotate(60)"/><ellipse rx="10" ry="4.5" transform="rotate(120)"/></g></svg>
              </div>
              {/* Next.js */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform">
                 <svg viewBox="0 0 180 180" className="w-3.5 h-3.5 text-white"><mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{maskType:'alpha'}}><circle cx="90" cy="90" fill="black" r="90"/></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"/><path d="M149.508 157.527C151.527 154.346 153.287 150.966 154.741 147.416L116.592 98.7119C114.773 96.3869 111.458 96.2255 109.189 98.3569L107.03 100.384L149.508 157.527ZM56.3423 60.1557V157.172C56.3423 158.423 57.3564 159.437 58.6071 159.437H65.4018C66.6525 159.437 67.6666 158.423 67.6666 157.172V60.1557C67.6666 58.905 66.6525 57.8909 65.4018 57.8909H58.6071C57.3564 57.8909 56.3423 58.905 56.3423 60.1557ZM123.658 60.1557V68.9961C123.658 70.2468 122.644 71.2609 121.393 71.2609H114.598C113.348 71.2609 112.333 70.2468 112.333 68.9961V60.1557C112.333 58.905 113.348 57.8909 114.598 57.8909H121.393C122.644 57.8909 123.658 58.905 123.658 60.1557Z" fill="currentColor"/></g></svg>
              </div>
              {/* TS */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[9px] font-bold text-[#3178C6]">TS</span>
              </div>
              {/* Postgres */}
              <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#336791]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M7 15l4-2 4 2-1-4h3l-3-2 1-4-5 3-5-3 1 4-3 2h3z"/></svg>
              </div>
               {/* GSAP */}
               <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center group pointer-events-auto hover:scale-110 transition-transform">
                <span className="text-[8px] font-bold text-[#999] group-hover:text-[#88CE02] transition-colors">GSAP</span>
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

      <div className="container relative z-10 mx-auto flex flex-col items-start justify-end min-h-screen px-8 pb-20 lg:px-8 md:px-5">
        
        <div className="max-w-[700px] lg:max-w-[600px]">
          <p className=" text-medium md:text-lg max-w-[600px] leading-relaxed mb-3 text-left">Hi, I'm</p>
          <h1 className="text-left mb-5">
            <span className="text-[56px] sm:text-[60px] font-italic lg:text-[70px]  text-white  leading-none">
              Raisul <span className="text-[#0ea5e9]">Rayat</span>
            </span>
          </h1>
          <p className=" text-base md:text-lg max-w-[600px] leading-relaxed mb-8">Frontend Developer</p>

          <p className="text-[#999999] text-base md:text-lg max-w-[550px] leading-relaxed mb-8">
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
