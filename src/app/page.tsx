"use client";

import React from 'react';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/features-grid';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Experience / About Section - Neon style */}
        <section id="experience" className="bg-black py-32 relative border-t border-[#1a1a1a]">
          <div className="container mx-auto px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <div className="mb-8 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0ea5e9]">Experience & Education</span>
                </div>
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-8">
                  Building foundations <br /> for the future.
                </h2>
                <div className="space-y-12">
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#0ea5e9]" />
                    <h3 className="text-xl font-medium text-white">United International University</h3>
                    <p className="text-[#999999] mt-1">BSc in Computer Science & Engineering</p>
                    <p className="text-[#0ea5e9] text-sm font-mono mt-2">2022 — Present (3rd Year)</p>
                  </div>
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#333]" />
                    <h3 className="text-xl font-medium text-white">Independent Web Developer</h3>
                    <p className="text-[#999999] mt-1">Crafting custom solutions for local clients</p>
                    <p className="text-[#666] text-sm font-mono mt-2">1+ Years of Experience</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src="/portimg.jpeg" 
                    alt="Raisul Rayat" 
                    className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#0ea5e9]/50" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#0ea5e9]/50" />
                </div>
                
                {/* Stats / Skills grid */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
                    <div className="text-[32px] font-medium text-white tracking-tight">10+</div>
                    <div className="text-[#999999] text-sm uppercase tracking-wider">Projects Completed</div>
                  </div>
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl">
                    <div className="text-[32px] font-medium text-white tracking-tight">99%</div>
                    <div className="text-[#999999] text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
