"use client";

import React from 'react';
import Image from 'next/image';
import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import TechStackSection from '@/components/sections/tech-stack';
import ProjectsSection from '@/components/sections/features-grid';
import Footer from '@/components/sections/footer';
import { Trophy, Briefcase, GraduationCap, Sparkles, Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Experience / About Section - Neon style */}
        <section id="experience" className="bg-black py-32 relative border-t border-[#1a1a1a]">
          <div className="container mx-auto px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <div className="mb-8 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0ea5e9]">Experience & Education</span>
                </div>
                <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-4 lg:text-[40px] md:text-[32px]">
                  My Journey.{" "}
                  <span className="text-[#999999]">Building foundations for the future.</span>
                </h2>
                
                <div className="mt-16 space-y-10">
                  {/* Startup Win Achievement */}
                  <div className="p-6 bg-gradient-to-r from-[#0ea5e9]/10 to-transparent border border-[#0ea5e9]/30 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/10 blur-[60px] rounded-full" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <Trophy className="w-5 h-5 text-[#fbbf24]" />
                        <span className="text-[12px] font-bold uppercase tracking-wider text-[#fbbf24]">Achievement</span>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">Startup Competition Champion</h3>
                      <p className="text-[#999999] text-[15px] mb-2">Spendo AI — Cohort IC6</p>
                      <p className="text-[#666] text-[13px]">Won first place at university startup competition with an AI-powered financial management solution.</p>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#0ea5e9]" />
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-[#0ea5e9]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9]">Work Experience</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Web Development Intern (Frontend)</h3>
                    <p className="text-[#999999] mt-1">Tekshilpa Solutions Ltd.</p>
                    <p className="text-[#0ea5e9] text-sm font-mono mt-2">March 2025 — May 2025</p>
                    <p className="text-[#666] text-[14px] mt-3 leading-relaxed">Contributed to user interface development and enhanced user experience. Gained hands-on experience with modern frontend technologies.</p>
                  </div>

                  {/* Self Learning */}
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#333]" />
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-[#999]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#999]">Self Learning</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Full Stack Development</h3>
                    <p className="text-[#999999] mt-1">Self-Driven Projects</p>
                    <p className="text-[#666] text-sm font-mono mt-2">2023 — Present</p>
                    <p className="text-[#666] text-[14px] mt-3 leading-relaxed">Worked on real-world applications including booking systems, dashboards, CRUD apps, and SaaS ideas. Focused on clean code and scalability.</p>
                  </div>

                  {/* Education */}
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#333]" />
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-[#999]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#999]">Education</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">BSc in Computer Science</h3>
                    <p className="text-[#999999] mt-1">United International University</p>
                    <p className="text-[#666] text-sm font-mono mt-2">2022 — Present (3rd Year)</p>
                    <p className="text-[#666] text-[14px] mt-3 leading-relaxed">Building strong foundations in software engineering, databases, and AI through academic and self-driven projects.</p>
                  </div>

                  {/* AI Wave */}
                  <div className="border-l-2 border-[#1a1a1a] pl-8 relative">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#333]" />
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#999]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#999]">Growth</span>
                    </div>
                    <h3 className="text-xl font-medium text-white">Learning with the AI Wave</h3>
                    <p className="text-[#999999] mt-1">Personal Development</p>
                    <p className="text-[#666] text-sm font-mono mt-2">2022 — 2023</p>
                    <p className="text-[#666] text-[14px] mt-3 leading-relaxed">Embraced the AI revolution by integrating AI tools into workflow. Continuously learning new technologies to stay ahead.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] relative group sticky top-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/2832a7b9-6393-42b6-b877-3b83b7ed050a/3fa258ea-a5d1-426c-9538-1a1ea2187fe3-1768600459235.jpg?width=600&height=600&resize=cover" 
                    alt="Raisul Rayat" 
                    fill
                    className="object-cover object-top grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    unoptimized
                  />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#0ea5e9]/50" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[#0ea5e9]/50" />
                </div>
                
                {/* Stats / Skills grid */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl hover:border-[#0ea5e9]/30 transition-colors">
                    <div className="text-[32px] font-medium text-white tracking-tight">10+</div>
                    <div className="text-[#999999] text-sm uppercase tracking-wider">Projects Built</div>
                  </div>
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl hover:border-[#0ea5e9]/30 transition-colors">
                    <div className="text-[32px] font-medium text-white tracking-tight">1+</div>
                    <div className="text-[#999999] text-sm uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl hover:border-[#0ea5e9]/30 transition-colors col-span-2">
                    <div className="text-[32px] font-medium text-[#0ea5e9] tracking-tight flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-[#fbbf24]" />
                      Champion
                    </div>
                    <div className="text-[#999999] text-sm uppercase tracking-wider">UIU Startup Competition IC6</div>
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
