import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EBF5F0] py-[120px] dark:bg-[#0b0b0b]">
      {/* Background visual elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="matrix-grid h-full w-full" />
      </div>
      
      <div className="container relative z-10 px-8 mx-auto xl:px-8 lg:px-8 md:px-5 sm:px-5 max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Backed by Giants */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-2 h-2 bg-[#00B4FF] rounded-full animate-pulse" />
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-[#00B4FF]">
                Backed by Giants
              </span>
            </div>
            
            <h2 className="text-[48px] font-medium leading-[1.2] tracking-[-0.03em] text-black dark:text-white mb-8 max-w-[540px]">
              Backed by Giants. Trusted Postgres. Battle-tested scale.
              <span className="text-[#94A3B8] inline"> Neon was founded by Postgres committers, bringing decades of expertise.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-auto pt-10 border-t border-[#1E293B]/10 dark:border-[#1E293B]">
              <div className="flex flex-col">
                <div className="mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00B4FF]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" fillOpacity="0.2"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="text-[32px] font-semibold text-black dark:text-white leading-none">150,000+</div>
                <div className="text-[14px] text-[#94A3B8] mt-2 leading-tight">New Postgres compute endpoints provisioned daily.</div>
              </div>

              <div className="flex flex-col">
                <div className="mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00B4FF]">
                    <path d="M12 3L2 8l10 5 10-5-10-5z" fill="currentColor"/>
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 16l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-[32px] font-semibold text-black dark:text-white leading-none">Databricks</div>
                <div className="text-[14px] text-[#94A3B8] mt-2 leading-tight">Neon has been a Databricks Company since May 2025.</div>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Quote */}
          <div className="relative p-10 bg-white/50 dark:bg-[#000000] border border-[#1E293B]/10 dark:border-[#1E293B] rounded-[20px] overflow-hidden flex flex-col justify-center">
            {/* Mesh gradient effect for background depth */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00B4FF]/5 blur-[80px] -mr-20 -mt-20 pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-10">
              <span className="inline-block w-2 h-2 bg-[#00B4FF] rounded-full" />
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-[#94A3B8]">
                Trusted by the best
              </span>
            </div>

            <blockquote className="relative z-10 text-[28px] md:text-[32px] font-medium leading-[1.3] text-black dark:text-white">
              &ldquo;Neon&apos;s serverless philosophy is 
              <span className="relative inline-block mx-2 px-1">
                <span className="relative z-10 text-black dark:text-white">aligned with our vision:</span>
                <span className="absolute inset-0 bg-[#00B4FF]/20 -skew-x-6 z-0" />
              </span> 
              no infrastructure to manage, no servers to provision, no database cluster to maintain.&rdquo;
            </blockquote>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex flex-col">
                <cite className="not-italic font-semibold text-[16px] text-black dark:text-white">EDOUARD BONLIEU</cite>
                <span className="text-[14px] text-[#94A3B8]">Co-founder at Koyeb</span>
              </div>
              <div className="ml-auto opacity-60">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/e9f6dd26523637317df6582de8906e4d-3.svg"
                  alt="Organization Logo"
                  width={80}
                  height={30}
                  className="filter grayscale brightness-0 invert dark:invert-0 dark:brightness-100"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;