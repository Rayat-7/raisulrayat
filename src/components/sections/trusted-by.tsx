import React from 'react';
import Image from 'next/image';

/**
 * TrustedBy Section - Marquee of logos
 * 
 * Based on the design instructions:
 * - Horizontal logo marquee section
 * - Grayscale style with sky blue hover states
 * - Dark theme consistent with "Cyber-Industrial High-Tech"
 */

const logos = [
  { name: 'DoorDash', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_1.png', width: 140, height: 24 },
  { name: 'BCG', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_2.png', width: 60, height: 24 },
  { name: 'Retool', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_3.png', width: 100, height: 24 },
  // Using placeholders or common tech logos if missing from specific assets while ensuring grayscale design
  { name: 'Meta', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_1.png', width: 120, height: 24 },
  { name: 'Replit', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_2.png', width: 110, height: 24 },
  { name: 'Databricks', src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_3.png', width: 130, height: 24 },
];

export default function TrustedByMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-12 border-y border-border/40">
      <div className="container mx-auto px-6 mb-8 lg:hidden">
        <h2 className="text-[10px] font-medium tracking-[0.1em] text-muted-foreground uppercase text-center lg:text-left">
          Trusted by modern engineering teams
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Marquee Container */}
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap py-4">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-12 flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 hover:brightness-110 group cursor-default"
              style={{ minWidth: `${logo.width}px` }}
            >
              <div className="relative group/logo">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="opacity-50 transition-opacity duration-300 group-hover:opacity-100 dark:invert"
                  priority={index < 6}
                />
                {/* Sky blue hover glow state */}
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Fades for Smooth Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {/* Optional labels for desktop */}
      <div className="hidden lg:block container mx-auto px-6 mt-8">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground/60 border-t border-border/20 pt-8">
          <span>Enterprise Grade</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>Postgres Performance</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>Developer Agility</span>
        </div>
      </div>
    </section>
  );
}