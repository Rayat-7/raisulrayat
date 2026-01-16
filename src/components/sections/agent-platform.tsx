import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

/**
 * AgentPlatform Section
 * 
 * This component clones the "Speed and scale for agents" section of Neon.tech.
 * It features a technical dark aesthetic with grid patterns, code snippets,
 * and dashboard-style visualizations.
 */

const AgentPlatform = () => {
  return (
    <section className="relative bg-black-pure py-[120px] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/noise-20.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      <div className="container relative z-10">
        {/* System Status Line */}
        <div className="flex items-center gap-4 mb-16 opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">System: Neon Database Platform</span>
          </div>
          <div className="flex-1 h-px bg-white/20" />
          <div className="flex items-center gap-4 text-[10px] font-mono tracking-[0.2em] uppercase">
            <span>[ Status: Online ]</span>
            <span>[ Connection: Stable ]</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="max-w-[800px] mb-24">
          <div className="flex items-center gap-2 text-accent-green mb-6">
            <span className="text-xl">▶</span>
            <span className="text-[13px] font-bold tracking-widest uppercase">Agent Platform</span>
          </div>
          <h2 className="h2-section text-white mb-6">
            Speed and scale for <br />
            agents. And devs.
          </h2>
          <p className="text-body-large text-text-secondary max-w-[640px]">
            Codegen and agent platforms rely on Neon to run the backend for user-generated apps.
          </p>
          
          <div className="mt-8 flex gap-4">
            <div className="px-4 py-2 border border-white/10 rounded-full flex items-center gap-2">
              <span className="text-sm text-white/50">Advanced Autoscaling</span>
            </div>
            <div className="px-4 py-2 bg-white text-black rounded-full font-medium inline-flex items-center">
              I&apos;m building an agent
            </div>
          </div>
        </div>

        {/* Feature 1: Fleet Management Dash */}
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="flex-1 space-y-6">
            <h3 className="h3-subsection text-white max-w-[440px]">
              Deploy thousands of databases that turn off when idle. <span className="text-text-secondary">Inactive databases pause on their own, keeping your fleet efficient and cost-effective.</span>
            </h3>
            <a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-white hover:text-accent-green transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1 w-full">
            <div className="relative border border-white/10 p-6 bg-black/40 backdrop-blur-sm rounded-sm dot-matrix">
              <div className="flex justify-between items-center mb-8 border border-white/10 p-4">
                <span className="text-xs font-mono text-white/60">Databases deployed:</span>
                <span className="text-lg font-mono text-white">0</span>
              </div>
              
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between items-end mb-4 font-mono text-xs">
                    <span className="text-white">Friday</span>
                    <div className="flex gap-4">
                      <span className="text-accent-green">Active: 0</span>
                      <span className="text-white/40">Idle: 0</span>
                    </div>
                  </div>
                  <div className="h-24 w-full opacity-30 bg-gradient-to-t from-white/5 to-transparent border-b border-white/10 relative">
                     <div className="absolute inset-0 grid grid-cols-12 gap-1 px-1 py-2">
                        {Array.from({length: 12}).map((_, i) => (
                           <div key={i} className="flex flex-col gap-1 justify-end">
                              {Array.from({length: 4}).map((_, j) => (
                                 <div key={j} className="w-1 h-1 bg-white/20 rounded-full" />
                              ))}
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-tighter">
                    <span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span><span>19:00</span><span>21:00</span><span>23:00</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-4 font-mono text-xs">
                    <span className="text-white">Saturday</span>
                    <div className="flex gap-4">
                      <span className="text-accent-green">Active: 0</span>
                      <span className="text-white/40">Idle: 0</span>
                    </div>
                  </div>
                  <div className="h-24 w-full opacity-30 bg-gradient-to-t from-white/5 to-transparent border-b border-white/10 relative">
                  <div className="absolute inset-0 grid grid-cols-12 gap-1 px-1 py-2">
                        {Array.from({length: 12}).map((_, i) => (
                           <div key={i} className="flex flex-col gap-1 justify-end">
                              {Array.from({length: 4}).map((_, j) => (
                                 <div key={j} className="w-1 h-1 bg-white/20 rounded-full" />
                              ))}
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-tighter">
                    <span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span><span>19:00</span><span>21:00</span><span>23:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: API Call Speed */}
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="flex-1 space-y-6">
            <h3 className="h3-subsection text-white">
              Manage your fleet via API. <span className="text-text-secondary">Neon databases spin up in milliseconds, with APIs for quota controls and fleet scaling.</span>
            </h3>
            <a href="#" className="inline-flex items-center gap-1 text-[15px] font-medium text-white hover:text-accent-green transition-colors">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1 w-full space-y-12">
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-white/20 mt-1">01</span>
              <div className="flex-1">
                <p className="text-white text-[15px] mb-4">Send API call and receive connection string in <span className="text-white/40 font-mono">120ms</span></p>
                <div className="relative group">
                   {/* Gradient glow behind code */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00e699]/20 via-[#ebf5f0]/10 to-transparent blur-xl opacity-50 transition-opacity" />
                  <div className="relative bg-black-pure border border-white/10 rounded overflow-hidden">
                    <div className="px-5 py-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent-green" />
                      <code className="font-mono text-[13px] text-white/80">
                        curl -X POST https://api.neon.tech/v2/projects/:id/database
                      </code>
                    </div>
                    {/* Pattern cap */}
                    <div 
                      className="h-2 w-full opacity-40"
                      style={{ 
                        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_11.png')`,
                        backgroundPosition: 'right center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-white/20 mt-1">02</span>
              <div className="flex-1">
                <p className="text-white text-[15px] mb-4">Test and deploy &gt;&gt;</p>
                <div className="aspect-video bg-[#0d0d0d] border border-white/10 rounded-sm relative overflow-hidden flex items-center justify-center">
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                  </div>
                  <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded flex items-center gap-2 text-[11px] font-mono text-white/60 hover:bg-white/10 transition-colors">
                    <span className="text-[10px]">▶</span> Run Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Database Checkpoints */}
        <div className="mt-40 text-center max-w-[800px] mx-auto px-4">
          <h3 className="h3-subsection text-white mb-6">
            Database checkpoints. <span className="text-text-secondary">Copy-on-write storage makes it cheap and fast to save point-in-time versions of your database and restore a previous state when necessary.</span>
          </h3>
        </div>

        {/* Vertical Lines Decoration */}
        <div className="mt-12 h-64 w-full relative overflow-hidden opacity-40 flex justify-between px-4">
          {Array.from({length: 60}).map((_, i) => (
            <div 
              key={i} 
              className={`w-px h-full bg-gradient-to-b from-white/10 to-transparent ${i === 8 || i === 24 ? 'bg-white/40' : ''}`}
            />
          ))}
          {/* Timeline labels */}
          <div className="absolute bottom-8 left-[13.5%] font-mono text-[10px] text-white/40">
            <div className="h-px w-2 bg-white/40 mb-2" />
            12:00 <br /> main
          </div>
          <div className="absolute bottom-8 left-[40%] font-mono text-[10px] text-white/40">
            <div className="h-px w-2 bg-white/40 mb-2" />
            12:24 <br /> schema-v1
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentPlatform;