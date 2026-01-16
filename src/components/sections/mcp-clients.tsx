import React from 'react';
import Image from 'next/image';

/**
 * MCP Clients Section
 * 
 * This component renders a logo marquee section featuring MCP clients like Cursor, Windsurf, Cline, etc.
 * It strictly follows the "Developer-First Carbon" aesthetic with a dark theme.
 */

const LOGO_ASSETS = [
  {
    name: 'Cursor',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_4.png',
    width: 90,
    height: 24,
  },
  {
    name: 'Windsurf',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_5.png',
    width: 100,
    height: 24,
  },
  {
    name: 'Cline',
    url: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_6.png',
    width: 80,
    height: 24,
  },
];

// Fallback logic for missing logos based on screenshots (Zen, OpenAI, VS Code)
const ADDITIONAL_LOGOS = [
  { name: 'Zed Industries', width: 90 },
  { name: 'OpenAI', width: 85 },
  { name: 'VS Code', width: 80 },
];

const MCPClients = () => {
  return (
    <section className="bg-background py-10 lg:py-16 overflow-hidden border-t border-border">
      <div className="container flex flex-col items-start lg:flex-row lg:items-center gap-y-6 lg:gap-x-12">
        {/* Heading Label */}
        <div className="shrink-0">
          <h2 className="text-sm font-medium leading-tight text-text-secondary">
            Connect MCP <br className="hidden lg:block" /> clients to Neon:
          </h2>
        </div>

        {/* Marquee/Logo Row */}
        <div className="relative w-full overflow-hidden">
          {/* Faders for smooth edge scrolling effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          {/* Scrolling Logos Container */}
          <div className="flex animate-marquee items-center gap-x-12 whitespace-nowrap lg:gap-x-20">
            {/* First Set of Logos */}
            {LOGO_ASSETS.map((logo, index) => (
              <div key={`logo-primary-${index}`} className="flex items-center grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
            {ADDITIONAL_LOGOS.map((logo, index) => (
              <div key={`logo-add-${index}`} className="flex items-center">
                <span className="text-lg font-medium tracking-tight text-white grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                  {logo.name}
                </span>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {LOGO_ASSETS.map((logo, index) => (
              <div key={`logo-dup-primary-${index}`} className="flex items-center grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-6 w-auto object-contain"
                />
              </div>
            ))}
            {ADDITIONAL_LOGOS.map((logo, index) => (
              <div key={`logo-dup-add-${index}`} className="flex items-center">
                <span className="text-lg font-medium tracking-tight text-white grayscale opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
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
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
};

export default MCPClients;