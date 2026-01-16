import React from 'react';
import Image from 'next/image';

/**
 * Branching component cloning the instant branching section of neon.com
 * Includes:
 * - Headline with dark theme
 * - Grid with Copy-on-write, Anonymization, and Ephemerality features
 * - Pixel-perfect icons and spacing based on computed styles
 */

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col gap-y-4">
    <div className="relative h-6 w-6">
      <Image 
        src={icon} 
        alt="" 
        width={24} 
        height={24} 
        className="object-contain"
      />
    </div>
    <div className="flex flex-col gap-y-2">
      <h3 className="text-xl font-medium tracking-tight text-white">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed tracking-normal text-[#999999]">
        {description}
      </p>
    </div>
  </div>
);

const Branching = () => {
  const features = [
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/e9f6dd26523637317df6582de8906e4d-3.svg",
      title: "Copy-on-write",
      description: "Create editable copies of databases instantly with git-like branching, saving space and time."
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/90a2caeddd5273e66fc8508a8eb0f5ca-4.svg",
      title: "Anonymization",
      description: "Mask sensitive data with realistic fake values, enabling safe testing and sharing of datasets."
    },
    {
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/0b412b245af1bdcd3a1ff6949fdb4ee8-5.svg",
      title: "Ephemerality",
      description: "Obsolete branches delete themselves automatically after work is complete."
    }
  ];

  return (
    <section className="relative bg-[#000000] py-32 md:py-24 overflow-hidden">
      {/* Visual noise overlay - from globals.css logic */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-20" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col gap-y-16 lg:gap-y-24">
          
          {/* Headline and Icon Intro */}
          <div className="max-w-[840px]">
            <div className="mb-6 h-10 w-10">
              <div className="grid grid-cols-4 gap-1 opacity-60">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-white rounded-full" />
                ))}
              </div>
            </div>
            <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
              Instant branching. <span className="text-[#999999]">Develop and test with efficient copies of any database to eliminate surprises in production deploys.</span>
            </h2>
          </div>

          {/* Vertical Branch Visualization Placeholder Area */}
          <div className="relative w-full h-[400px] border-l border-[#1A1A1A] ml-4 md:ml-0 overflow-hidden">
            {/* These are stylized lines representing the branching structure from screenshots */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#1A1A1A] via-[#00E699] to-[#1A1A1A] opacity-30" />
            <div className="absolute left-0 top-1/2 w-full h-[1px] bg-[#1A1A1A]" />
            <div className="absolute left-20 top-1/4 h-[1px] w-[200px] bg-gradient-to-r from-[#1A1A1A] to-transparent" />
            
            <div className="absolute left-0 top-10 flex items-center gap-x-3 -translate-x-[50%]">
              <div className="h-2 w-2 rounded-full bg-[#00E699] shadow-[0_0_8px_rgba(0,230,153,0.8)]" />
              <span className="bg-[#1A1A1A] px-2 py-0.5 rounded text-[10px] font-mono text-white opacity-80 border border-[#333]">production</span>
            </div>
            
            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 dot-matrix opacity-10" />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <FeatureItem 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

        </div>
      </div>
      
      {/* Bottom Border to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1A1A1A]" />
    </section>
  );
};

export default Branching;