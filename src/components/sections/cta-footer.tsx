import React from 'react';
import Image from 'next/image';

const CTAFooter = () => {
  return (
    <section className="relative overflow-hidden bg-black-pure py-[120px] dark">
      {/* Background Graphic: The complex tree-like branching graphic */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_17.png"
          alt="Branching visualization"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Branching labels overlays (simulating the UI in the screenshot) */}
        <div className="absolute left-[15%] top-[45%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-mono tracking-tight text-gray-new-60">
          production
        </div>
        <div className="absolute left-[38%] top-[68%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-mono tracking-tight text-gray-new-60">
          test branch
        </div>
        <div className="absolute left-[20%] top-[38%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-mono tracking-tight text-gray-new-60">
          preview-branch
        </div>
        <div className="absolute right-[45%] top-[55%] rounded border border-white/10 bg-black/40 px-2 py-1 text-[10px] font-mono tracking-tight text-gray-new-60">
          branch deleted
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Main Heading */}
          <h2 className="max-w-[700px] text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
            The world&apos;s most advanced Postgres platform.
          </h2>

          <div className="mt-8 flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:items-end">
            {/* Description */}
            <p className="max-w-[440px] text-lg font-normal leading-[1.5] tracking-[-0.01em] text-gray-new-60 md:text-xl">
              Trusted by developers, ready for agents. Build and scale applications faster with Neon.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://console.neon.tech/signup"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-medium text-black transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                Get started
              </a>
              <a
                href="https://neon.tech/docs"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-new-20 bg-transparent px-8 text-[15px] font-medium text-white transition-all duration-200 hover:border-gray-new-40 hover:bg-white/5"
              >
                Read the docs
              </a>
              <div className="relative group flex items-center h-12 rounded-full bg-accent-green px-4 gap-2 transition-transform duration-200 hover:scale-105 cursor-pointer">
                 <span className="text-[14px] font-mono font-medium text-black">$ npx neonctl init</span>
                 <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-black/60 group-hover:text-black"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.035] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterCTA">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterCTA)" />
        </svg>
      </div>
    </section>
  );
};

export default CTAFooter;