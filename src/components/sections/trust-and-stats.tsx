import React from 'react';
import Image from 'next/image';

const TrustAndStats = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#EBF5F0] py-[120px] dark:bg-transparent">
      {/* Background Gradient Layer for Dark mode transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#EBF5F0] via-[#EBF5F0] to-[#000000] opacity-100" />
      
      {/* Subtle Noise / Texture overlay to keep it consistent with the overall theme */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-30 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="container relative z-10 mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Backed by Giants */}
          <div className="flex flex-col border-l border-gray-new-90/30 pl-8 lg:pl-12 lg:border-l-0 lg:pl-0">
            <div className="mb-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#FF4D00]">
              <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-[#FF4D00]" />
              Backed by Giants
            </div>
            
            <h2 className="mb-12 max-w-[540px] text-[32px] font-medium leading-[1.15] tracking-tight text-[#1A1A1A] md:text-[40px] lg:text-[48px]">
              Backed by Giants. Trusted Postgres. Battle-tested scale. <span className="text-[#999999]">Neon was founded by Postgres committers, bringing decades of expertise.</span>
            </h2>

            <div className="mt-auto grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Stat 1 */}
              <div className="flex flex-col gap-2">
                <div className="mb-2">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_13.png"
                    alt="Storage icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <div className="text-[32px] font-medium tracking-tight text-[#1A1A1A]">
                  150,000+
                </div>
                <div className="text-[13px] leading-relaxed text-[#666666]">
                  New Postgres compute endpoints provisioned daily.
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-2">
                <div className="mb-2">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_14.png"
                    alt="Stack icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <div className="text-[32px] font-medium tracking-tight text-[#1A1A1A]">
                  Databricks
                </div>
                <div className="text-[13px] leading-relaxed text-[#666666]">
                  Neon has been a Databricks Company since May 2025.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Trusted by the Best */}
          <div className="relative flex flex-col border-l border-gray-new-90/30 pl-8 lg:pl-12">
            <div className="mb-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-[#FF4D00]">
              <span className="h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-[#FF4D00]" />
              Trusted by the Best
            </div>

            <div className="relative mt-auto space-y-12">
              <p className="text-[18px] leading-[1.6] text-[#333333] italic md:text-[20px] lg:text-[22px]">
                &ldquo;Neon&apos;s serverless philosophy is <span className="bg-[#00E699]/20 px-1 font-medium text-[#1A1A1A]">aligned with our vision:</span> no infrastructure to manage, no servers to provision, no database cluster to maintain.&rdquo;
              </p>

              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-[#1A1A1A]">Edouard Bonlieu</span>
                <span className="text-[13px] text-[#666666]">Co-founder at Koyeb</span>
              </div>
              
              {/* Decorative radial glow to transition into the dark section following this */}
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/40 blur-[100px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustAndStats;