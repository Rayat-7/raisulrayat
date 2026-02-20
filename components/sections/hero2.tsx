"use client";

import React from "react";
import Image from "next/image";
import Header2 from "./header2";
import ShinyText from "@/components/ui/shiny-text";
import { NeuButton } from "@/components/ui/neu-button";

const Hero2 = () => {
  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-[#050b14]">
      {/* Background Layer: Deep Water & Expansive Sky */}
      <div className="absolute inset-0 z-0">
        {/* Sky Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#1e40af]/30 via-[#0369a1]/20 to-transparent" />

        {/* Water / Horizon Line masking */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#0a192f] via-[#0f2a4a]/50 to-transparent" />

        {/* Light Rays / Underwater Refraction effect */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div
            className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </div>

        {/* Cinematic Grain */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Header2 />

      {/* Hero Content Container */}
      <div className="container relative z-10 mx-auto min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24">
        {/* Person Image - Positioned bottom middle */}
        <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full z-20 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full flex items-end justify-center">
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] lg:aspect-square max-h-[90vh]">
              <Image
                src="/portfolio_img.jpg"
                alt="Raisul Rayat"
                fill
                className="object-contain object-bottom scale-110 lg:scale-100 transition-transform duration-1000"
                priority
                unoptimized
              />
            </div>
          </div>
          {/* Blend Mask - Circular gradient for a more "studio" feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,transparent_40%,#050b14_95%)] z-30 opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050b14] to-transparent z-40" />
        </div>

        {/* Editorial Text Overlay */}
        <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12 z-50 items-center gap-4">
          {/* Left Side: Name - High Impact */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              <p className="text-white/40 text-[10px] sm:text-xs tracking-[0.6em] uppercase font-light mb-4 lg:ml-2">
                Digital Architect
              </p>
              <div className="relative">
                <h1 className="leading-[0.85] select-none">
                  <ShinyText className="text-[14vw] sm:text-[10vw] lg:text-[8vw] font-black tracking-tighter text-white/90 drop-shadow-2xl">
                    RAISUL
                  </ShinyText>
                  <br />
                  <span className="text-[12vw] sm:text-[8vw] lg:text-[7vw] font-serif italic font-light tracking-tighter text-white inline-block mt-[-2vw]">
                    Rayat
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Center Spacer for Person Image Visiblity */}
          <div className="hidden lg:block lg:col-span-2 min-h-[100px]" />

          {/* Right Side: Designation & Details - Refined */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right space-y-10 mt-12 lg:mt-0 px-4 md:px-0">
            <div className="space-y-6">
              <div className="h-[2px] w-12 bg-blue-500/50 ml-auto hidden lg:block" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extralight tracking-[0.15em] text-white">
                <span className="block opacity-60 text-lg sm:text-xl tracking-[0.3em] font-light mb-2">
                  FRONT-END
                </span>
                <span className="font-medium text-blue-100">ENGINEER</span>
              </h2>
              <p className="max-w-[320px] ml-auto text-white/50 text-sm sm:text-base leading-relaxed font-light tracking-wide italic">
                "Transforming complex requirements into fluid, luxury digital
                interfaces with obsessive attention to detail."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center">
              <NeuButton
                href="/projects"
                variant="primary"
                className="px-10 py-4 text-[11px] tracking-[0.3em] uppercase bg-white text-black hover:bg-neutral-200 transition-all font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                View Showcase
              </NeuButton>
              <a
                href="/resume"
                className="text-[11px] tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors py-2 border-b border-white/10 hover:border-white"
              >
                Experience Details
              </a>
            </div>

            {/* Micro-tech stack indicator */}
            <div className="flex items-center gap-6 pt-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-500">
              <div className="text-[10px] tracking-[0.4em] uppercase text-white border-r border-white/20 pr-6">
                Toolkit
              </div>
              <div className="flex gap-4">
                {["Next.js", "Typescript", "GSAP"].map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-widest text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left decorative coordinates/location */}
      <div className="absolute bottom-10 left-10 z-40 hidden md:block">
        <div className="flex items-center gap-4 text-white/20 text-[9px] tracking-[0.5em] uppercase font-medium">
          <span className="w-8 h-px bg-white/10" />
          <span>Available for Global High-End Projects</span>
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] z-0 pointer-events-none" />
    </section>
  );
};

export default Hero2;
