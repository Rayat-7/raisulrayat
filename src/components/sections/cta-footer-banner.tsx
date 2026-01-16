import React from 'react';
import { Copy } from 'lucide-react';

const CTAFooterBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black-pure py-[120px] dark">
      {/* Background Branching Tree Visual */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://cdn.neonapi.io/public/pages/home/cta/cta.mp4?updated=20260113"
            type="video/mp4"
          />
        </video>
        {/* Branch Labels Overlay - Simplified Mockup of the original interaction */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
           <div className="absolute top-[35%] left-[15%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">branch deleted</div>
           <div className="absolute top-[48%] left-[7%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">production</div>
           <div className="absolute top-[58%] left-[12%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">branch deleted</div>
           <div className="absolute top-[28%] left-[45%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">branch deleted</div>
           <div className="absolute top-[82%] left-[36%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">test branch</div>
           <div className="absolute top-[90%] left-[43%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-mono tracking-tight text-white/50">tests running</div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col gap-y-12 lg:gap-y-16">
          {/* Top Headline Section */}
          <div className="max-w-[800px]">
            <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[64px] lg:text-[72px]">
              The world&apos;s most advanced <br />
              <span className="text-white">Postgres platform.</span>
            </h2>
          </div>

          {/* Bottom Controls Section */}
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[440px]">
              <p className="text-[18px] leading-[1.6] text-gray-new-60">
                Trusted by developers, ready for agents. Build and scale applications faster with Neon.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://neon.tech/unify"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-medium text-black transition-colors hover:bg-gray-200"
              >
                Get started
              </a>
              <a
                href="https://neon.tech/docs"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-new-20 bg-black-pure/10 px-8 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/5"
              >
                Read the docs
              </a>
              
              {/* Terminal-style CLI Action Button */}
              <div className="group relative flex h-12 items-center overflow-hidden rounded-full bg-[#00e599] transition-all hover:bg-[#00c987]">
                <div className="flex items-center px-6">
                  <span className="font-mono text-[14px] font-medium text-black">
                    $ npx neonctl init
                  </span>
                </div>
                <button 
                  onClick={() => navigator.clipboard.writeText('npx neonctl init')}
                  className="flex h-full items-center border-l border-black/10 bg-[#00e599] px-4 text-black transition-colors hover:bg-black/5"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooterBanner;