import React from 'react';
import { ArrowUpRight, Copy, Terminal } from 'lucide-react';

const AgentExperience = () => {
  return (
    <section className="relative w-full bg-black py-[120px] overflow-hidden">
      {/* Decorative Matrix Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] matrix-grid" />
      
      <div className="container relative z-10 px-8 mx-auto max-w-[1280px]">
        {/* System Bar Header */}
        <div className="flex items-center gap-4 mb-20 text-[10px] font-mono tracking-[0.2em] text-[#94a3b8] uppercase">
          <div className="w-2 h-2 bg-[#00b4ff] animate-pulse" />
          <span>System: Neon Database Platform</span>
          <span className="opacity-20">|||||||||||||||||||||||||||||||||</span>
          <span>[ Status: Online ]</span>
          <span className="opacity-20">|||||||||||||||||||||</span>
          <span>[ Connection: Stable ]</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#00b4ff] text-xs font-semibold tracking-widest uppercase">▶ Agent Platform</span>
            </div>
            <h2 className="text-[56px] font-medium leading-[1.1] tracking-[-0.03em] text-white mb-8">
              Speed and scale for <br />
              <span className="text-white">agents. And devs.</span>
            </h2>
            <p className="text-[18px] leading-relaxed text-[#94a3b8] mb-12 max-w-[500px]">
              Codegen and agent platforms rely on Neon to run the backend for user-generated apps.
            </p>

            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00b4ff]" />
                <div>
                  <h4 className="text-white font-medium mb-1">Advanced Autoscaling</h4>
                  <p className="text-[#94a3b8] text-sm">Deploy thousands of databases that turn off when idle.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00b4ff]" />
                <div>
                  <h4 className="text-white font-medium mb-1">Auth Included</h4>
                  <p className="text-[#94a3b8] text-sm">Users and sessions live in your database and branch with your data.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00b4ff]" />
                <div>
                  <h4 className="text-white font-medium mb-1">Production-Grade Features</h4>
                  <p className="text-[#94a3b8] text-sm">Compliance, point-in-time recovery, and 99.95% uptime SLAs.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-3 bg-[#00b4ff] text-black font-semibold rounded-full hover:shadow-[0_0_20px_rgba(0,180,255,0.4)] transition-cyber flex items-center gap-2">
              I&apos;m building an agent
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Content - Interactive Dashboard UI */}
          <div className="relative">
            <div className="rounded-lg border border-[#1e293b] bg-[#0b0b0b] p-8 shadow-2xl relative overflow-hidden">
              {/* Grain/Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-texture" />
              
              <div className="flex justify-between items-center mb-10 border-b border-[#1e293b] pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">Databases deployed:</span>
                  <span className="text-sm font-mono text-[#00b4ff] font-bold">1,248</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#00b4ff]" />
                    <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#1e293b]" />
                    <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">Idle</span>
                  </div>
                </div>
              </div>

              {/* Grid Chart Simulation */}
              <div className="space-y-12">
                {['Friday', 'Saturday'].map((day) => (
                  <div key={day}>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-xs font-medium text-white w-16">{day}</span>
                      <div className="flex gap-4 text-[11px] font-mono">
                        <span className="text-[#00b4ff]">Active: 842</span>
                        <span className="text-[#94a3b8]">Idle: 406</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-1">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="space-y-1">
                          {Array.from({ length: 4 }).map((_, j) => (
                            <div 
                              key={j} 
                              className={`h-4 rounded-sm transition-colors duration-500 ${
                                i > 4 && i < 18 && j < 3
                                  ? 'bg-[#00b4ff] opacity-60 hover:opacity-100' 
                                  : 'bg-[#1e293b] opacity-30'
                              }`} 
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-[9px] font-mono text-[#475569] uppercase tracking-tighter">
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                      <span>21:00</span>
                      <span>23:59</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Terminal Snippet */}
            <div className="absolute -bottom-10 -left-10 w-full max-w-[440px] rounded-lg border border-[#1e293b] bg-black shadow-2xl overflow-hidden scale-90 sm:scale-100">
              <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#1e293b]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#334155]" />
                  <div className="w-2 h-2 rounded-full bg-[#334155]" />
                  <div className="w-2 h-2 rounded-full bg-[#334155]" />
                </div>
                <span className="text-[10px] font-mono text-[#94a3b8]">bash — 80x24</span>
              </div>
              <div className="p-4 font-mono text-[13px] leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-[#00b4ff]">01</span>
                  <div className="flex-1">
                    <span className="text-[#94a3b8]">Send API call and receive connection string in 120ms</span>
                    <div className="mt-3 p-3 rounded bg-[#0b0b0b] border border-[#1e293b] flex items-center justify-between group">
                      <code className="text-[#00b4ff] break-all">
                        curl -X POST https://api.neon.tech/v2/projects/:id/database
                      </code>
                      <Copy className="w-4 h-4 text-[#94a3b8] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex-shrink-0 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text Component */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 pt-20 border-t border-[#1e293b]">
          <div>
            <h3 className="text-xl font-medium text-white mb-4">Manage your fleet via API</h3>
            <p className="text-[#94a3b8] max-w-[400px]">
              Neon databases spin up in milliseconds, with APIs for quota controls and fleet scaling.
            </p>
            <a href="#" className="inline-flex items-center gap-1 h-10 text-sm text-[#00b4ff] font-medium hover:underline mt-4">
              Learn more <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-4">Database checkpoints</h3>
            <p className="text-[#94a3b8] max-w-[400px]">
              Copy-on-write storage makes it cheap and fast to save point-in-time versions and restore previously.
            </p>
            <div className="mt-6 flex items-center gap-3">
               <div className="flex-1 h-px bg-gradient-to-r from-[#00b4ff] to-transparent opacity-30" />
               <span className="text-[10px] font-mono text-[#00b4ff]">SNAPSHOT_ID: BC-129-PX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentExperience;