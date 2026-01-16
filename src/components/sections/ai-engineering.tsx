import React from 'react';
import { Copy } from 'lucide-react';

const AiEngineeringSection = () => {
  return (
    <section className="relative overflow-hidden bg-background-pure py-[120px] lg:py-20 md:py-16">
      {/* Background Glow Highlights */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40">
        <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#00B4FF] blur-[120px] opacity-20"></div>
        <div className="absolute right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-[#00B4FF] blur-[120px] opacity-15"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-6 text-[48px] font-medium leading-[1.2] tracking-[-0.03em] text-white lg:text-[40px] md:text-[32px]">
            Postgres for the AI Engineering era.
          </h2>
          <p className="text-body-lg text-text-secondary md:text-base">
            Integrate with a single command and the LLM does the hard work.
          </p>
        </div>

        {/* Technical Terminal Visual */}
        <div className="mt-20 flex justify-center lg:mt-16 md:mt-12">
          <div className="relative w-full max-w-[960px]">
            {/* Main Container with subtle border and glow */}
            <div className="relative overflow-hidden rounded-lg border border-border-subtle bg-background-subtle shadow-2xl">
              {/* Decorative Blueprint Background (as seen in screenshots) */}
              <div className="absolute inset-0 opacity-20" 
                   style={{ 
                     backgroundImage: `radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)`,
                     backgroundSize: '24px 24px' 
                   }}>
              </div>
              
              <div className="relative flex min-h-[500px] flex-col md:min-h-[400px]">
                {/* Header/Controls */}
                <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
                  <div className="flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                    <div className="h-2.5 w-2.5 rounded-full bg-border"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1 w-4 rounded-full bg-border opacity-50"></div>
                  </div>
                </div>

                {/* Inner Content Area */}
                <div className="relative flex flex-1 items-center justify-center p-8 md:p-4">
                  {/* Floating Terminal Component */}
                  <div className="relative z-20 w-full max-w-[560px] transform rounded-md border border-[#1a1a1a] bg-black-pure shadow-[0_0_50px_rgba(0,180,255,0.1)]">
                    <div className="flex items-center gap-1.5 border-b border-[#1a1a1a] px-3 py-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#333]"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-[#333]"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-[#333]"></div>
                    </div>
                    <div className="p-5 font-mono text-[14px] leading-relaxed">
                      <div className="flex items-center gap-2">
                        <span className="text-[#00B4FF]">/</span>
                        <div className="h-4 w-1.5 animate-pulse bg-[#00e599]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Abstract HUD elements to mimic screenshot depth */}
                  <div className="absolute right-12 top-12 h-32 w-32 rounded-lg border border-white/5 opacity-10"></div>
                  <div className="absolute bottom-16 left-12 h-48 w-64 rounded-lg border border-white/5 opacity-10"></div>
                </div>

                {/* Bottom Bar Segment */}
                <div className="flex items-center justify-between border-t border-border-subtle bg-black/40 px-6 py-4 backdrop-blur-sm md:flex-col md:gap-4 md:px-4">
                  <span className="text-[15px] text-text-secondary">
                    Try for yourself, start building with Neon now.
                  </span>
                  
                  <div className="flex items-center overflow-hidden rounded-md border border-border-subtle bg-[#0D0D0D]">
                    <div className="px-4 py-2 font-mono text-[13px] text-text-primary">
                      <span className="mr-2 text-text-secondary">$</span>
                      npx neonctl init
                    </div>
                    <button className="flex h-full items-center border-l border-border-subtle bg-white/[0.03] px-3 py-2 text-text-secondary transition-colors hover:text-white">
                      <Copy size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection / Radial Gradient overlay at bottom of visual */}
            <div className="absolute -bottom-10 left-1/2 h-20 w-[80%] -translate-x-1/2 bg-[#00B4FF] blur-[80px] opacity-10"></div>
          </div>
        </div>

        {/* MCP Clients Bar */}
        <div className="mt-24 border-t border-border-subtle pt-16 md:mt-16 md:pt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:gap-x-8">
            <span className="text-sm font-medium tracking-tight text-text-secondary md:w-full md:text-center md:mb-2">
              Connect MCP clients to Neon:
            </span>
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">CURSOR</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">Windsurf</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">Cline</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium uppercase tracking-tighter">
              <span className="text-xl">Zed Industries</span>
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <span className="text-xl">OpenAI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiEngineeringSection;