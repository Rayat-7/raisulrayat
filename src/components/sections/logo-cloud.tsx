import React from 'react';
import Image from 'next/image';

/**
 * LogoCloud Component
 * 
 * A monochrome logo cloud section featuring partners like Outfront, DoorDash, BCG, and Meta.
 * Designed with pixel-perfect accuracy to match the "Dark Engineering" aesthetic.
 * Icons are displayed in a single horizontal row with low opacity as per instructions.
 */

const LOGO_DATA = [
  {
    name: 'Outfront',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_5.png',
    width: 140,
    height: 24,
  },
  {
    name: 'DoorDash',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_6.png',
    width: 140,
    height: 24,
  },
  {
    name: 'BCG',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_7.png',
    width: 120,
    height: 24,
  },
  {
    name: 'Pepsi',
    // Fallback or placeholder for Pepsi if not explicitly in section assets
    // UI demonstrates a simple circle-like logo for Pepsi in monochrome
    type: 'text',
    label: 'PEPSI',
    logo: (
      <div className="flex items-center gap-2">
         <span className="h-6 w-6 rounded-full border border-white/40 flex items-center justify-center text-[8px] font-bold">P</span>
         <span className="text-[10px] font-bold tracking-widest">PEPSI</span>
      </div>
    )
  },
  {
    name: 'Zimmer Biomet',
    label: 'ZIMMER BIOMET',
    logo: (
        <div className="flex items-center gap-2">
            <span className="h-5 w-5 bg-white/40 rounded-sm"></span>
            <span className="text-[11px] font-bold tracking-wide">ZIMMER BIOMET</span>
        </div>
    )
  },
  {
    name: 'Retool',
    label: 'Retool',
    logo: (
        <div className="flex items-center gap-2">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                <path d="M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z" />
             </svg>
             <span className="text-lg font-semibold -tracking-tight">Retool</span>
        </div>
    )
  },
  {
    name: 'Meta',
    label: 'Meta',
    logo: (
        <div className="flex items-center gap-2">
             <span className="text-xl font-medium tracking-tight opacity-90">∞ Meta</span>
        </div>
    )
  },
  {
    name: 'Replit',
    label: 'replit',
    logo: (
        <div className="flex items-center gap-2">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60">
                <path d="M5 4h6v4H5V4zm0 6h6v4H5v-4zm6 6h6v4h-6v-4z" />
             </svg>
             <span className="text-lg font-bold">replit</span>
        </div>
    )
  }
];

export default function LogoCloud() {
  return (
    <section className="w-full bg-black border-t border-white/5 py-12 md:py-16">
      <div className="container px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-y-12 gap-x-8 md:gap-x-4">
          {LOGO_DATA.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center grayscale opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              {logo.url ? (
                <div className="relative h-6 md:h-7 w-auto flex items-center">
                  <Image
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain h-full w-auto"
                    priority
                  />
                </div>
              ) : (
                <div className="flex items-center text-white">
                  {logo.logo}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}