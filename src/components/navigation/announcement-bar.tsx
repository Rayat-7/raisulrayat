import React from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <a
      href="https://neon.com/blog/atoms-is-out-a-multi-agent-ai-team-that-builds-full-stack-apps-for-you"
      className="group relative z-50 flex h-9 w-full items-center justify-center border-b border-[#1A1A1A] bg-[#E0F2FE] px-4 py-2.5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4FF] focus-visible:ring-inset"
    >
      {/* Pattern Overlays - Replicating the responsive subtle patterns from the HTML structure */}
      <img
        alt=""
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleft-pattern.4be4da5e.png&w=1080&q=100&dpl=dpl_BL4pF9svnAL3endzmXHNyxYZoTLe"
        width="500"
        height="36"
        className="pointer-events-none absolute left-0 top-0 z-0 h-9 w-auto 2xl:hidden"
      />
      <img
        alt=""
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-pattern.0e90dae5.png&w=1080&q=100&dpl=dpl_BL4pF9svnAL3endzmXHNyxYZoTLe"
        width="500"
        height="36"
        className="pointer-events-none absolute right-0 top-0 z-0 h-9 w-auto 2xl:hidden"
      />
      
      {/* 2XL Breakpoint Patterns */}
      <img
        alt=""
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleft-pattern-xl.850f34be.png&w=750&q=100&dpl=dpl_BL4pF9svnAL3endzmXHNyxYZoTLe"
        width="340"
        height="36"
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-9 w-auto 2xl:block xl:hidden"
      />
      <img
        alt=""
        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fright-pattern-xl.6e2e307e.png&w=640&q=100&dpl=dpl_BL4pF9svnAL3endzmXHNyxYZoTLe"
        width="260"
        height="36"
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-9 w-auto 2xl:block xl:hidden"
      />

      {/* Main Content */}
      <div className="relative z-10 -mb-px flex items-center gap-x-1.5">
        <span className="max-w-[calc(100vw-64px)] truncate font-sans text-sm font-medium leading-none tracking-tight text-[#000000] transition-colors duration-200 group-hover:text-opacity-70 sm:max-w-none lg:max-w-[482px] xl:max-w-[790px]">
          Neon powers agents and codegen platforms across the board - including Atoms, a multi-agent AI team built for production
        </span>
        
        {/* Arrow Icon */}
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="origin-center -rotate-90 text-[#000000] opacity-40 transition-opacity group-hover:opacity-60"
        >
          <path
            d="M3.5 5.25L7 8.75L10.5 5.25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Noise Overlay for technical texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />
    </a>
  );
};

export default AnnouncementBar;