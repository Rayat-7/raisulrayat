import React from 'react';
import Image from 'next/image';

const CTADashboard = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 lg:py-40">
      {/* Background Dashboard Preview */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_15.png"
          alt="Neon Dashboard Preview"
          fill
          className="object-cover object-top filter brightness-50 grayscale contrast-125"
          priority
        />
        {/* Gradient Overlay to fade into the black background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="container relative z-10 px-8 md:px-16">
        <div className="max-w-[800px]">
          <h2 className="section-heading mb-6 text-white text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.04em]">
            The world&apos;s most advanced Postgres platform.
          </h2>
          <p className="subheading mb-12 text-[#999999] text-[20px] md:text-[24px] max-w-[600px] leading-relaxed tracking-[-0.01em]">
            Trusted by developers, ready for agents. Build and scale applications faster with Neon.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-16">
          <a
            href="https://console.neon.tech/signup"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-[#EBF5F0]"
          >
            Get started
          </a>
          <a
            href="https://neon.tech/docs"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/40"
          >
            Read the docs
          </a>
          
          <div className="group relative ml-0 flex h-12 items-center overflow-hidden rounded-full bg-[#00E599] md:ml-4">
             <div className="flex h-full items-center px-4 font-mono text-[13px] font-medium text-black">
               <span className="opacity-60 mr-2">$</span>
               <span>npx neonctl init</span>
             </div>
             <button 
               className="flex h-full items-center bg-black/10 px-3 transition-colors hover:bg-black/20"
               aria-label="Copy install command"
             >
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/60">
                 <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                 <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
               </svg>
             </button>
             {/* Hover ripple effect placeholder */}
             <div className="absolute inset-0 pointer-events-none bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Video Overlay (from assets) for dynamic dashboard feel if needed */}
        <div className="mt-20 hidden lg:block overflow-hidden rounded-lg border border-white/10 shadow-2xl">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full opacity-60 mix-blend-screen"
          >
            <source src="https://cdn.neonapi.io/public/pages/home/cta/cta.mp4?updated=20260113" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default CTADashboard;