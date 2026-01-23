"use client";

import React from 'react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Trophy, Briefcase, GraduationCap, Sparkles, Code, Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { NeuButton } from "@/components/ui/neu-button";
import PixelCard from "@/components/ui/pixel-card";

const ResumePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-black selection:bg-[#0ea5e9]/30 selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-8 max-w-full relative">
          
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea5e9]/5 blur-[120px] -z-10" />

          {/* Resume Header Card */}
          <div className="relative mb-12">
            <PixelCard 
              variant="default" 
              className="w-full min-h-[300px] p-12 flex flex-col items-center justify-center text-center border-[#1a1a1a] bg-[#0d0d0d]"
              gap={5}
              speed={20}
              autoAppear
              noHover
            >
              <div className="relative z-10 w-full">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                  Raisul <span className="text-[#0ea5e9]">Rayat</span>
                </h1>
                <p className="text-xl text-white mb-8 font-medium">Frontend Developer & CS Student</p>
                
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <Mail size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">raisoulrayat@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-white hover:text-white transition-colors">
                    <Phone size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">+880123456789</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#666] hover:text-white transition-colors">
                    <MapPin size={16} className="text-[#0ea5e9]" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                </div>
              </div>
            </PixelCard>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
               <NeuButton href="/resume.pdf" target="_blank" variant="primary" className="px-8 py-3 flex items-center gap-2">
                 <Download size={18} />
                 Download Full PDF
               </NeuButton>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
            
            {/* Left Column (Main Info) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <Briefcase size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Experience</h2>
                </div>
                
                <div className="space-y-10 border-l border-[#1a1a1a] ml-5 pl-8">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#0ea5e9]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">Web Development Intern (Frontend)</h3>
                      <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 border border-[#0ea5e9]/20 rounded-full">Mar 2025 — May 2025</span>
                    </div>
                    <p className="text-[#999] mb-4 font-medium">Tekshilpa Solutions Ltd.</p>
                    <ul className="space-y-2 text-[#666] text-sm leading-relaxed">
                      <li>• Developed and maintained responsive user interfaces using modern frontend frameworks.</li>
                      <li>• Collaborated with the product team to implement design specifications.</li>
                      <li>• Optimized web applications for maximum speed and scalability.</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#333]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">Full Stack Developer (Freelance)</h3>
                      <span className="text-sm font-mono text-[#666] bg-[#1a1a1a] px-3 py-1 border border-[#333] rounded-full">2023 — Present</span>
                    </div>
                    <p className="text-[#999] mb-4 font-medium">Independent Projects</p>
                    <ul className="space-y-2 text-[#666] text-sm leading-relaxed">
                      <li>• Built custom web solutions for clients including e-commerce platforms and management systems.</li>
                      <li>• Integrated various APIs and third-party services for enhanced functionality.</li>
                      <li>• Focused on delivering high-quality, performant, and user-friendly applications.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <GraduationCap size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Education</h2>
                </div>
                
                <div className="space-y-10 border-l border-[#1a1a1a] ml-5 pl-8">
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-[#0ea5e9]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">BSc in Computer Science</h3>
                      <span className="text-sm font-mono text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 border border-[#0ea5e9]/20 rounded-full">2022 — Present</span>
                    </div>
                    <p className="text-[#999] mb-4 font-medium">United International University</p>
                    <p className="text-[#666] text-sm leading-relaxed">
                      Focused on Software Engineering, Data Structures, Algorithms, and Web Development. (3rd Year Student)
                    </p>
                  </div>
                </div>
              </section>

              {/* Projects Highlight Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                    <Code size={20} className="text-[#0ea5e9]" />
                  </div>
                  <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Major Projects</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-1 w-[calc(100%+12px)]">
                  {[
                    { title: "TuitionTrack", desc: "Comprehensive tuition center management system.", link: "/projects" },
                    { title: "Cyber Play Arena", desc: "Modern slot booking software for gaming cafes.", link: "/projects" }
                  ].map((proj, i) => (
                    <div key={i} className="p-6 bg-[#0d0d0d] border border-[#1a1a1a] rounded-2xl hover:border-[#0ea5e9]/40 transition-all group">
                      <h4 className="text-white font-bold mb-2 group-hover:text-[#0ea5e9] transition-colors">{proj.title}</h4>
                      <p className="text-[#666] text-xs mb-4">{proj.desc}</p>
                      <a href={proj.link} className="text-[10px] font-bold uppercase tracking-wider text-[#0ea5e9] flex items-center gap-1">
                        View Details →
                      </a>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-12">
              
              {/* Skills Sidebar */}
              <section className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-3xl p-8 sticky top-24">
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4 flex items-center gap-2">
                    <Sparkles size={18} className="text-[#0ea5e9]" />
                    TECHNICAL SKILLS
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(s => (
                          <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]">{s}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "Express", "Python", "Prisma"].map(s => (
                          <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold text-[#666] uppercase tracking-[0.2em] mb-3">Database</p>
                      <div className="flex flex-wrap gap-2">
                        {["PostgreSQL", "MongoDB", "Redis", "Supabase"].map(s => (
                          <span key={s} className="px-3 py-1 bg-[#1a1a1a] text-white text-xs rounded-full border border-[#333]">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4 flex items-center gap-2">
                    <Trophy size={18} className="text-[#fbbf24]" />
                    AWARDS
                  </h3>
                  <div className="p-4 bg-[#fbbf24]/5 border border-[#fbbf24]/20 rounded-xl">
                    <h4 className="text-sm font-bold text-white mb-1">Startup Champion</h4>
                    <p className="text-[11px] text-[#fbbf24]/80">UIU Startup Competition IC6</p>
                  </div>
                </div>

                <div>
                   <h3 className="text-lg font-bold text-white mb-6 border-b border-[#1a1a1a] pb-4">SOCIALS</h3>
                   <div className="grid grid-cols-2 gap-4">
                     <a href="https://github.com/rayat-7" target="_blank" className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-xl text-[#999] hover:text-white transition-colors">
                        <Github size={18} />
                        <span className="text-xs">GitHub</span>
                     </a>
                     <a href="https://linkedin.com/in/raisulrayat" target="_blank" className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-xl text-[#999] hover:text-white transition-colors">
                        <Linkedin size={18} />
                        <span className="text-xs">LinkedIn</span>
                     </a>
                   </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
