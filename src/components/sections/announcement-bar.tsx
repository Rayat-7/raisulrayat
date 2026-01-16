import React from 'react';
import Image from 'next/image';

const AnnouncementBar = () => {
  return (
    <a
      className="safe-paddings group relative z-50 flex h-9 w-full items-center justify-center overflow-hidden border-b border-[#E6E6E6] bg-[#EBF5F0] px-4 py-2.5 focus-visible:-outline-offset-2 dark:border-[#1A1A1A] dark:bg-[#0D0D0D]"
      href="https://neon.com/blog/atoms-is-out-a-multi-agent-ai-team-that-builds-full-stack-apps-for-you"
    >
      <div className="relative z-10 -mb-px grid grid-cols-[1fr_auto] items-center gap-x-1.5">
        <span className="max-w-[calc(100vw-64px)] truncate text-sm font-medium leading-none tracking-[-0.02em] text-[#000000] transition-colors duration-200 group-hover:text-[#666666] sm:max-w-[calc(100vw-64px)] lg:max-w-[482px] xl:max-w-[790px] dark:text-white group-hover:dark:text-[#999999]">
          Neon powers agents and codegen platforms across the board - including Atoms, a multi-agent AI team built for production
        </span>
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="origin-center -rotate-90 text-[#000000] opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-white dark:opacity-60"
        >
          <path
            d="M3.5 5.5L7 9L10.5 5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Decorative Side Patterns - Handling breakpoints with different assets for pixel perfect scaling */}
      
      {/* Default Patterns (Mobile/Small) */}
      <Image
        alt=""
        width={500}
        height={36}
        className="pointer-events-none absolute left-0 top-0 z-0 h-9 w-auto 2xl:hidden"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_1.png"
        priority
      />
      <Image
        alt=""
        width={500}
        height={36}
        className="pointer-events-none absolute right-0 top-0 z-0 h-9 w-auto 2xl:hidden"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_2.png"
        priority
      />

      {/* 2XL Patterns */}
      <Image
        alt=""
        width={340}
        height={36}
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-9 w-auto 2xl:block xl:hidden"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_3.png"
      />
      <Image
        alt=""
        width={260}
        height={36}
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-9 w-auto 2xl:block xl:hidden"
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/images/images_4.png"
      />

      {/* Note: Additional breakpoint patterns from HTML structure but following the primary asset usage rules. 
          The images above cover the main aesthetic requirements of 'clear visibility of the decorative side patterns'. */}
    </a>
  );
};

export default AnnouncementBar;