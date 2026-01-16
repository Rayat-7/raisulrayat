import React from 'react';
import Image from 'next/image';

const AIIntegration = () => {
  return (
    <section className="relative w-full bg-black-pure py-[120px] overflow-hidden">
      {/* Dynamic Background with Gradients and Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-x-0 top-0 h-full opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 230, 153, 0.15) 0%, transparent 50%), 
                              radial-gradient(circle at 80% 50%, rgba(255, 120, 40, 0.1) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 dot-matrix opacity-[0.15]" />
      </div>

      <div className="container relative z-10 px-8 mx-auto xl:max-w-[1280px]">
        {/* Header Content */}
        <div className="mb-20 text-center">
          <h2 className="text-white text-[48px] font-medium leading-[1.1] tracking-[-0.02em] max-w-[800px] mx-auto mb-6">
            Postgres for the AI Engineering era.
          </h2>
          <p className="text-[#999999] text-xl leading-[1.5] tracking-[-0.01em] max-w-[650px] mx-auto">
            Integrate with a single command and the LLM does the hard work.
          </p>
        </div>

        {/* Interactive Terminal Interface Section */}
        <div className="relative mx-auto max-w-[960px]">
          {/* Main Visual Frame */}
          <div className="relative aspect-[16/10] w-full rounded-lg border border-[#1A1A1A] bg-[#0D0D0D] overflow-hidden shadow-2xl">
            {/* Background Pattern Grid Overlay inside the frame for depth */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 230, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 153, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            
            {/* Asset Images Integration */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full h-full flex items-center justify-center">
                  {/* Outer Window Shadow / Mesh Layer */}
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_8.png"
                    alt="Terminal UI Background"
                    fill
                    className="object-contain"
                    priority
                  />
                  
                  {/* Floating Terminal Window */}
                  <div className="relative w-[80%] h-[60%] z-10">
                    <div className="absolute inset-0 bg-black rounded-md border border-[#1A1A1A] shadow-2xl flex flex-col overflow-hidden">
                      {/* Terminal Header */}
                      <div className="h-9 px-4 flex items-center gap-2 border-b border-[#1A1A1A] bg-[#0D0D0D]">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A]" />
                        </div>
                      </div>
                      {/* Terminal Body */}
                      <div className="flex-1 p-6 font-mono text-[14px]">
                        <div className="flex items-center gap-2">
                          <span className="text-[#00E699]">$</span>
                          <span className="text-white">npx neonctl init</span>
                          <span className="w-2 h-5 bg-[#00E699] animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Bottom CLI Bar */}
            <div className="absolute bottom-0 inset-x-0 h-16 bg-[#0D0D0D] border-t border-[#1A1A1A] flex items-center justify-between px-8">
              <span className="text-[#999999] text-[15px]">Try for yourself, start building with Neon now.</span>
              <div className="flex items-center bg-black border border-[#1A1A1A] rounded px-3 py-1.5 gap-3">
                <code className="text-[#00E699] font-mono text-sm leading-none">$ npx neonctl init</code>
                <button className="text-[#666666] hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 4.5V2.5C2.5 1.94772 2.94772 1.5 3.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V10.5C12.5 11.0523 12.0523 11.5 11.5 11.5H9.5" stroke="currentColor" strokeWidth="1.2" />
                    <rect x="1.5" y="4.5" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Clients Integration Logos */}
        <div className="mt-32 border-t border-[#1A1A1A] pt-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-x-16 lg:gap-x-24">
            <span className="text-[#999999] text-sm font-medium tracking-tight whitespace-nowrap">
              Connect MCP clients to Neon:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
              <div className="flex items-center gap-2 grayscale brightness-200">
                <span className="font-bold tracking-widest text-[14px]">CURSOR</span>
              </div>
              <div className="flex items-center gap-2 grayscale brightness-200">
                <span className="font-bold italic tracking-tight text-[15px]">Windsurf</span>
              </div>
              <div className="flex items-center gap-2 grayscale brightness-200">
                <div className="w-5 h-5 bg-white rounded-sm" />
                <span className="font-medium text-[15px]">Cline</span>
              </div>
              <div className="flex items-center gap-2 grayscale brightness-200">
                <div className="w-5 h-5 border border-white flex items-center justify-center text-[10px] font-bold">Z</div>
                <span className="font-bold text-[11px] tracking-widest uppercase">Zed Industries</span>
              </div>
              <div className="flex items-center gap-2 grayscale brightness-200">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_9.png"
                  alt="OpenAI Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="font-medium text-[15px]">OpenAI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegration;