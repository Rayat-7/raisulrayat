import React from 'react';
import Image from 'next/image';

const SocialProof = () => {
  return (
    <section className="relative overflow-hidden bg-[#ebf5f0] py-24 sm:py-32 xl:py-40">
      <div className="container mx-auto max-w-[1856px] px-8 md:px-8 sm:px-5">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-32">
          {/* Left Column: Stats & Partner */}
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-[1px] w-3 bg-red-500" />
              <span className="label-caps !text-[10px] text-gray-new-40">Backed by Giants</span>
            </div>
            
            <h2 className="section-heading mb-16 max-w-[580px] text-black-pure">
              Backed by Giants. Trusted Postgres. Battle-tested scale.{' '}
              <span className="text-gray-new-50">
                Neon was founded by Postgres committers, bringing decades of expertise.
              </span>
            </h2>

            <div className="mt-auto grid grid-cols-1 gap-12 sm:grid-cols-2 border-t border-gray-new-90 pt-10">
              {/* Stat 1 */}
              <div className="flex flex-col gap-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500">
                  <path d="M12 4C7.58172 4 4 5.79086 4 8C4 10.2091 7.58172 12 12 12C16.4183 12 20 10.2091 20 8C20 5.79086 16.4183 4 12 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 12V16C4 18.2091 7.58172 20 12 20C16.4183 20 20 18.2091 20 16V12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 8V12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 8V12" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-medium tracking-tighter text-black-pure">150,000+</span>
                  <p className="text-[13px] leading-snug text-gray-new-40">
                    New Postgres compute endpoints provisioned daily.
                  </p>
                </div>
              </div>

              {/* Stat 2: Databricks */}
              <div className="flex flex-col gap-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-500">
                  <path d="M12 2L4 7L12 12L20 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 12L12 17L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17L12 22L20 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-medium tracking-tighter text-black-pure">Databricks</span>
                  <p className="text-[13px] leading-snug text-gray-new-40">
                    Neon has been a Databricks Company since May 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="relative">
            <div className="mb-8 flex items-center gap-2">
              <div className="h-[1px] w-3 bg-red-500" />
              <span className="label-caps !text-[10px] text-gray-new-40">Trusted by the best</span>
            </div>

            <div className="group relative mt-16 flex flex-col justify-end xl:mt-24">
              {/* Background Glow/Pattern Asset */}
              <div className="absolute -right-32 -top-32 h-[600px] w-[600px] pointer-events-none opacity-40">
                 <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_12.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative z-10 max-w-[440px] border-l border-gray-new-90 pl-10">
                <blockquote className="text-[20px] font-medium leading-[1.3] tracking-tight text-black-pure">
                  &ldquo;Neon&apos;s serverless philosophy is{' '}
                  <span className="bg-[#00e599]/30 px-1">aligned with our vision:</span> no infrastructure to manage, no servers to provision, no database cluster to maintain.&rdquo;
                </blockquote>
                
                <div className="mt-8 flex flex-col">
                  <span className="text-[15px] font-medium text-black-pure">Edouard Bonlieu</span>
                  <span className="text-[14px] text-gray-new-40">Co-founder at Koyeb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] grainy-gradient"></div>
    </section>
  );
};

export default SocialProof;