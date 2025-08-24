import React, { JSX, MouseEvent, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiGithub,
  SiFigma,
  SiFramer,
  SiClerk,
  SiShadcnui,
  SiOpenai,SiClaude,SiVite
} from "react-icons/si";
import { IconType } from "react-icons";
import { FollowerPointerCard } from "./following-pointer";

// Custom icons for AI tools that aren't in react-icons
//gsap iocn
const GsapIcon = () => (
    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
fill={"currentColor"} viewBox="0 0 24 24">
<path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
</svg>)

const CursorIcon = () => (
  <svg className="w-12 h-12" height="2em" fill="currentColor" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Cursor</title>
  <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-0)"></path><path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-1)"></path><path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#lobe-icons-cursorundefined-fill-2)"></path><path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path><path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-0" x1="11.925" x2="11.925" y1="12" y2="24"><stop offset=".16" stopColor="#000" stopOpacity=".39"></stop><stop offset=".658" stopColor="#000" stopOpacity=".8"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15"><stop offset=".182" stopColor="#000" stopOpacity=".31"></stop><stop offset=".715" stopColor="#000" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-2" x1="11.925" x2="1.5" y1="0" y2="18"><stop stopColor="#000" stopOpacity=".6"></stop><stop offset=".667" stopColor="#000" stopOpacity=".22"></stop></linearGradient></defs></svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const V0Icon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full mt-4" fill="currentColor">
     <path d="M6.0952 9.4643V5.5238H7.6190V10.5476C7.6190 11.1394 7.1394 11.6190 6.5476 11.6190C6.2651 11.6190 5.9862 11.5101 5.7857 11.3096L0 5.5238H2.1548L6.0952 9.4643Z M16 10.0952H14.4762V6.6071L10.9881 10.0952H14.4762V11.6190H10.5238C9.3403 11.6190 8.3810 10.6597 8.3810 9.4762V5.5238H9.9048V9.0238L13.4047 5.5238H9.9048V4H13.8571C15.0407 4 16 4.9594 16 6.1429V10.0952Z"/>
  </svg>

);

const TitleComponent = ({ 
  tooltip 
}: { 
  tooltip: string;
}) => (
  <span className="text-white">{tooltip}</span>
);

export default function TechStack() {
  return (
    <div className="w-full py-20 px-6">
      <div className="w-full max-w-none space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900  text-left">
            Technology Stack
          </h2>
          <p className="text-lg  text-left text-gray-600">Tools and technologies I work with</p>
        </div>
        <ClipPathLinks />
      </div>
    </div>
  );
}

const ClipPathLinks = () => {
  return (
    <div className="w-full divide-y divide-gray-200 border border-gray-200 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
      {/* Frontend & Core */}
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox 
          Icon={SiReact} 
          href="#" 
          color="text-blue-500" 
          hoverColor="bg-blue-500" 
          tooltip="React -Build interactive UIs"
        />
        <LinkBox 
          Icon={SiNextdotjs} 
          href="#" 
          color="text-gray-800" 
          hoverColor="bg-gray-800" 
          tooltip="Next js -Full-stack React framework"
        />
        <LinkBox
            Icon={SiVite} 
            href="#" 
            color="text-purple-600" 
            hoverColor="bg-purple-600" 
            tooltip="Vite-Fast build tool"
        />
        <LinkBox 
          Icon={SiTypescript} 
          href="#" 
          color="text-blue-600" 
          hoverColor="bg-blue-600" 
          tooltip=" TypeScript-Type-safe JavaScript"
        />
      </div>
      
      {/* Styling & UI */}
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox 
          Icon={SiTailwindcss} 
          href="#" 
          color="text-cyan-500" 
          hoverColor="bg-cyan-500" 
          tooltip="Tailiwind-Utility-first CSS styling"
        />
        <LinkBox 
          Icon={SiFramer} 
          href="#" 
          color="text-pink-500" 
          hoverColor="bg-pink-500" 
          tooltip="Framer-motion Smooth animations & motion"
        />
        <LinkBox
            Icon={GsapIcon} 
            href="#" 
            color="text-green-600" 
            hoverColor="bg-green-600" 
            tooltip="Gsap-Advanced animations"
        />
        <LinkBox 
          Icon={SiShadcnui} 
          href="#" 
          color="text-slate-700" 
          hoverColor="bg-slate-700" 
          tooltip=" Shadcn-Beautiful UI components"
        />
      </div>
      
      {/* Backend & Database */}
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox 
          Icon={SiNodedotjs} 
          href="#" 
          color="text-green-600" 
          hoverColor="bg-green-600" 
          tooltip="Node-js -Server-side JavaScript"
        />
        <LinkBox 
          Icon={SiPrisma} 
          href="#" 
          color="text-indigo-600" 
          hoverColor="bg-indigo-600" 
          tooltip="Prisma-Type-safe database ORM"
        />
        <LinkBox 
          Icon={SiPostgresql} 
          href="#" 
          color="text-blue-700" 
          hoverColor="bg-blue-700" 
          tooltip="Postgres-Robust SQL database"
        />
        <LinkBox 
          Icon={SiSupabase} 
          href="#" 
          color="text-green-500" 
          hoverColor="bg-green-500" 
          tooltip="Supabase-Backend as a Service"
        />
      </div>
      
      {/* Development Tools */}
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox 
          Icon={SiVercel} 
          href="#" 
          color="text-gray-900" 
          hoverColor="bg-gray-900" 
          tooltip="Vercel-Deploy & host apps"
        />
        <LinkBox 
          Icon={SiGithub} 
          href="#" 
          color="text-gray-700" 
          hoverColor="bg-gray-700" 
          tooltip="Git-Version control & collaboration"
        />
        <LinkBox 
          Icon={SiFigma} 
          href="#" 
          color="text-purple-500" 
          hoverColor="bg-purple-500" 
          tooltip="Figma -UI/UX design tool"
        />
        <LinkBox 
          Icon={SiClerk} 
          href="#" 
          color="text-purple-600" 
          hoverColor="bg-purple-600" 
          tooltip="Clerk-User authentication"
        />
      </div>

      {/* AI Development Tools */}
      <div className="grid grid-cols-4 divide-x divide-gray-200">
        <LinkBox 
          Icon={CursorIcon} 
          href="#" 
          color="text-blue-600" 
          hoverColor="bg-blue-600" 
          tooltip="CursorAI-powered code editor"
        />
        <LinkBox 
          Icon={SiOpenai} 
          href="#" 
          color="text-green-600" 
          hoverColor="bg-green-600" 
          tooltip="ChatGPT for coding help"
        />
        <LinkBox 
          Icon={SiClaude} 
          href="#" 
          color="text-orange-500" 
          hoverColor="bg-orange-500" 
          tooltip="Clude-AI assistant for development"
        />
        <LinkBox 
          Icon={V0Icon} 
          href="#" 
          color="text-black" 
          hoverColor="bg-black" 
          tooltip="V0-Generate UI components"
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ 
  Icon, 
  href, 
  color, 
  hoverColor,
  tooltip 
}: { 
  Icon: IconType | (() => JSX.Element); 
  href: string;
  color: string;
  hoverColor: string;
  tooltip: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setIsHovered(false);
  };

  return (
    <FollowerPointerCard
      title={tooltip}
    >
      <a
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative grid h-24 w-full place-content-center sm:h-28 md:h-32 hover:scale-105 transition-all duration-200 group overflow-visible"
      >
        {/* Default state icon */}
        <Icon className={`text-3xl sm:text-4xl lg:text-5xl ${color} group-hover:scale-110 transition-all duration-200`} />

        {/* Hover state overlay */}
        <div
          style={{
            clipPath: isHovered ? NO_CLIP : BOTTOM_RIGHT_CLIP,
            transition: 'clip-path 0.3s ease'
          }}
          className={`absolute inset-0 grid place-content-center ${hoverColor} text-white shadow-lg`}
        >
          <Icon className="text-3xl sm:text-4xl md:text-5xl drop-shadow-sm" />
        </div>
      </a>
    </FollowerPointerCard>
  );
};








// import React, { JSX, MouseEvent, useState } from "react";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiPrisma,
//   SiPostgresql,
//   SiSupabase,
//   SiVercel,
//   SiGithub,
//   SiFigma,
//   SiFramer,
//   SiClerk,
//   SiShadcnui,
//   SiOpenai,SiClaude,SiVite
// } from "react-icons/si";
// import { IconType } from "react-icons";
// import { Link } from "lucide-react";

// // Custom icons for AI tools that aren't in react-icons
// //gsap iocn
// const GsapIcon = () => (
//     <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
// fill={"currentColor"} viewBox="0 0 24 24">
// <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
// </svg>)

// const CursorIcon = () => (
//   <svg className="w-12 h-12" height="2em" fill="currentColor" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Cursor</title>
//   <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-0)"></path><path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-1)"></path><path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#lobe-icons-cursorundefined-fill-2)"></path><path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path><path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-0" x1="11.925" x2="11.925" y1="12" y2="24"><stop offset=".16" stopColor="#000" stopOpacity=".39"></stop><stop offset=".658" stopColor="#000" stopOpacity=".8"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15"><stop offset=".182" stopColor="#000" stopOpacity=".31"></stop><stop offset=".715" stopColor="#000" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-2" x1="11.925" x2="1.5" y1="0" y2="18"><stop stopColor="#000" stopOpacity=".6"></stop><stop offset=".667" stopColor="#000" stopOpacity=".22"></stop></linearGradient></defs></svg>
// );

// const ClaudeIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
//     <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
//     <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//   </svg>
// );

// const V0Icon = () => (
//   <svg viewBox="0 0 24 24" className="w-full h-full mt-4" fill="currentColor">
//      <path d="M6.0952 9.4643V5.5238H7.6190V10.5476C7.6190 11.1394 7.1394 11.6190 6.5476 11.6190C6.2651 11.6190 5.9862 11.5101 5.7857 11.3096L0 5.5238H2.1548L6.0952 9.4643Z M16 10.0952H14.4762V6.6071L10.9881 10.0952H14.4762V11.6190H10.5238C9.3403 11.6190 8.3810 10.6597 8.3810 9.4762V5.5238H9.9048V9.0238L13.4047 5.5238H9.9048V4H13.8571C15.0407 4 16 4.9594 16 6.1429V10.0952Z"/>
//   </svg>

// );

// export default function TechStack() {
//   return (
//     <div className="w-screenpy-20 px-6 ">
//       <div className=" absolutew-full max-w-none space-y-12">
//         <div className="text-center space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Technology Stack
//           </h2>
//           <p className="text-lg text-gray-600">Tools and technologies I work with</p>
//         </div>
//         <ClipPathLinks />
//       </div>
//     </div>
//   );
// }

// const ClipPathLinks = () => {
//   return (
//     <div className="w-full divide-y divide-gray-200 border border-gray-200 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
//       {/* Frontend & Core */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox 
//           Icon={SiReact} 
//           href="#" 
//           color="text-blue-500" 
//           hoverColor="bg-blue-500" 
//           tooltip="Build interactive UIs"
//         />
//         <LinkBox 
//           Icon={SiNextdotjs} 
//           href="#" 
//           color="text-gray-800" 
//           hoverColor="bg-gray-800" 
//           tooltip="Full-stack React framework"
//         />
//         <LinkBox
//             Icon={SiVite} 
//             href="#" 
//             color="text-purple-600" 
//             hoverColor="bg-purple-600" 
//             tooltip="Fast build tool"
//         />
//         <LinkBox 
//           Icon={SiTypescript} 
//           href="#" 
//           color="text-blue-600" 
//           hoverColor="bg-blue-600" 
//           tooltip="Type-safe JavaScript"
//         />
//       </div>
      
//       {/* Styling & UI */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox 
//           Icon={SiTailwindcss} 
//           href="#" 
//           color="text-cyan-500" 
//           hoverColor="bg-cyan-500" 
//           tooltip="Utility-first CSS styling"
//         />
//         <LinkBox 
//           Icon={SiFramer} 
//           href="#" 
//           color="text-pink-500" 
//           hoverColor="bg-pink-500" 
//           tooltip="Smooth animations & motion"
//         />
//         <LinkBox
//             Icon={GsapIcon} 
//             href="#" 
//             color="text-green-600" 
//             hoverColor="bg-green-600" 
//             tooltip="Advanced animations"
//         />
//         <LinkBox 
//           Icon={SiShadcnui} 
//           href="#" 
//           color="text-slate-700" 
//           hoverColor="bg-slate-700" 
//           tooltip="Beautiful UI components"
//         />
//       </div>
      
//       {/* Backend & Database */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox 
//           Icon={SiNodedotjs} 
//           href="#" 
//           color="text-green-600" 
//           hoverColor="bg-green-600" 
//           tooltip="Server-side JavaScript"
//         />
//         <LinkBox 
//           Icon={SiPrisma} 
//           href="#" 
//           color="text-indigo-600" 
//           hoverColor="bg-indigo-600" 
//           tooltip="Type-safe database ORM"
//         />
//         <LinkBox 
//           Icon={SiPostgresql} 
//           href="#" 
//           color="text-blue-700" 
//           hoverColor="bg-blue-700" 
//           tooltip="Robust SQL database"
//         />
//         <LinkBox 
//           Icon={SiSupabase} 
//           href="#" 
//           color="text-green-500" 
//           hoverColor="bg-green-500" 
//           tooltip="Backend as a Service"
//         />
//       </div>
      
//       {/* Development Tools */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox 
//           Icon={SiVercel} 
//           href="#" 
//           color="text-gray-900" 
//           hoverColor="bg-gray-900" 
//           tooltip="Deploy & host apps"
//         />
//         <LinkBox 
//           Icon={SiGithub} 
//           href="#" 
//           color="text-gray-700" 
//           hoverColor="bg-gray-700" 
//           tooltip="Version control & collaboration"
//         />
//         <LinkBox 
//           Icon={SiFigma} 
//           href="#" 
//           color="text-purple-500" 
//           hoverColor="bg-purple-500" 
//           tooltip="UI/UX design tool"
//         />
//         <LinkBox 
//           Icon={SiClerk} 
//           href="#" 
//           color="text-purple-600" 
//           hoverColor="bg-purple-600" 
//           tooltip="User authentication"
//         />
//       </div>

//       {/* AI Development Tools */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox 
//           Icon={CursorIcon} 
//           href="#" 
//           color="text-blue-600" 
//           hoverColor="bg-blue-600" 
//           tooltip="AI-powered code editor"
//         />
//         <LinkBox 
//           Icon={SiOpenai} 
//           href="#" 
//           color="text-green-600" 
//           hoverColor="bg-green-600" 
//           tooltip="ChatGPT for coding help"
//         />
//         <LinkBox 
//           Icon={SiClaude} 
//           href="#" 
//           color="text-orange-500" 
//           hoverColor="bg-orange-500" 
//           tooltip="AI assistant for development"
//         />
//         <LinkBox 
//           Icon={V0Icon} 
//           href="#" 
//           color="text-black" 
//           hoverColor="bg-black" 
//           tooltip="Generate UI components"
//         />
//       </div>
//     </div>
//   );
// };

// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

// type Side = "top" | "left" | "bottom" | "right";
// type KeyframeMap = {
//   [key in Side]: string[];
// };

// const ENTRANCE_KEYFRAMES: KeyframeMap = {
//   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// const EXIT_KEYFRAMES: KeyframeMap = {
//   left: [NO_CLIP, TOP_RIGHT_CLIP],
//   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
//   top: [NO_CLIP, TOP_RIGHT_CLIP],
//   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// const LinkBox = ({ 
//   Icon, 
//   href, 
//   color, 
//   hoverColor,
//   tooltip 
// }: { 
//   Icon: IconType | (() => JSX.Element); 
//   href: string;
//   color: string;
//   hoverColor: string;
//   tooltip: string;
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

//   const getNearestSide = (e: MouseEvent) => {
//     const box = (e.target as HTMLElement).getBoundingClientRect();

//     const proximityToLeft = {
//       proximity: Math.abs(box.left - e.clientX),
//       side: "left" as Side,
//     };
//     const proximityToRight = {
//       proximity: Math.abs(box.right - e.clientX),
//       side: "right" as Side,
//     };
//     const proximityToTop = {
//       proximity: Math.abs(box.top - e.clientY),
//       side: "top" as Side,
//     };
//     const proximityToBottom = {
//       proximity: Math.abs(box.bottom - e.clientY),
//       side: "bottom" as Side,
//     };

//     const sortedProximity = [
//       proximityToLeft,
//       proximityToRight,
//       proximityToTop,
//       proximityToBottom,
//     ].sort((a, b) => a.proximity - b.proximity);

//     return sortedProximity[0].side;
//   };

//   const handleMouseEnter = (e: MouseEvent) => {
//     const box = (e.target as HTMLElement).getBoundingClientRect();
//     setTooltipPosition({
//       x: box.left + box.width / 2,
//       y: box.top - 10
//     });
//     setIsHovered(true);
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <a
//         href={href}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="relative grid h-24 w-full place-content-center sm:h-28 md:h-32 hover:scale-105 transition-all duration-200 group overflow-visible "
//       >
//         {/* Default state icon */}
//         <Icon className={`text-3xl sm:text-4xl lg:text-5xl ${color} group-hover:scale-110 transition-all duration-200`} />

//         {/* Hover state overlay */}
//         <div
//           style={{
//             clipPath: isHovered ? NO_CLIP : BOTTOM_RIGHT_CLIP,
//             transition: 'clip-path 0.3s ease'
//           }}
//           className={`absolute inset-0 grid place-content-center ${hoverColor} text-white shadow-lg`}
//         >
//           <Icon className="text-3xl sm:text-4xl md:text-5xl drop-shadow-sm" />
//         </div>
//       </a>

//       {/* Animated Tooltip */}
//       {isHovered && (
//         <div
//           className="fixed z-50 pointer-events-none transform -translate-x-full -translate-y-1/2 overflow-visible"
//           style={{
//             left: tooltipPosition.x,
//             top: tooltipPosition.y
//           }}
//         >
//           <div className="bg-gray-900 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg animate-in slide-in-from-bottom-2 duration-200 ">
//             {tooltip}
//             <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };













// import React, { MouseEvent } from "react";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiPrisma,
//   SiPostgresql,
//   SiSupabase,
//   SiVercel,
//   SiGithub,
//   SiFigma,
//   SiFramer,
//   SiClerk,
//   SiV
//   SiShadcnui
// } from "react-icons/si";
// import { useAnimate } from "framer-motion";
// import { IconType } from "react-icons";

// export default function TechStack() {
//   return (
//     <div className="py-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-12">
//         <div className="text-center space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Technology Stack
//           </h2>
//           <p className="text-lg text-gray-600">Tools and technologies I work with</p>
//         </div>
//         <ClipPathLinks />
//       </div>
//     </div>
//   );
// }

// const ClipPathLinks = () => {
//   return (
//     <div className="divide-y divide-gray-200 border border-gray-200 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-sm shadow-lg">
//       {/* Frontend & Core */}
//       <div className="grid grid-cols-3 divide-x divide-gray-200">
//         <LinkBox Icon={SiReact} href="#" color="text-blue-500" hoverColor="bg-blue-500" />
//         <LinkBox Icon={SiNextdotjs} href="#" color="text-gray-800" hoverColor="bg-gray-800" />
//         <LinkBox Icon={SiTypescript} href="#" color="text-blue-600" hoverColor="bg-blue-600" />
//       </div>
      
//       {/* Styling & UI */}
//       <div className="grid grid-cols-3 divide-x divide-gray-200">
//         <LinkBox Icon={SiTailwindcss} href="#" color="text-cyan-500" hoverColor="bg-cyan-500" />
//         <LinkBox Icon={SiFramer} href="#" color="text-pink-500" hoverColor="bg-pink-500" />
//         <LinkBox Icon={SiShadcnui} href="#" color="text-slate-700" hoverColor="bg-slate-700" />
//       </div>
      
//       {/* Backend & Database */}
//       <div className="grid grid-cols-4 divide-x divide-gray-200">
//         <LinkBox Icon={SiNodedotjs} href="#" color="text-green-600" hoverColor="bg-green-600" />
//         <LinkBox Icon={SiPrisma} href="#" color="text-indigo-600" hoverColor="bg-indigo-600" />
//         <LinkBox Icon={SiPostgresql} href="#" color="text-blue-700" hoverColor="bg-blue-700" />
//         <LinkBox Icon={SiSupabase} href="#" color="text-green-500" hoverColor="bg-green-500" />
//       </div>
      
//       {/* Tools & Services */}
//       <div className="grid grid-cols-5 divide-x divide-gray-200">
//         <LinkBox Icon={SiVercel} href="#" color="text-gray-900" hoverColor="bg-gray-900" />
//         <LinkBox Icon={SiGithub} href="#" color="text-gray-700" hoverColor="bg-gray-700" />
//         <LinkBox Icon={SiFigma} href="#" color="text-purple-500" hoverColor="bg-purple-500" />
//         <LinkBox Icon={SiVscode} href="#" color="text-blue-500" hoverColor="bg-blue-500" />
//         <LinkBox Icon={SiClerk} href="#" color="text-purple-600" hoverColor="bg-purple-600" />
//       </div>
//     </div>
//   );
// };

// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

// type Side = "top" | "left" | "bottom" | "right";
// type KeyframeMap = {
//   [key in Side]: string[];
// };

// const ENTRANCE_KEYFRAMES: KeyframeMap = {
//   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// const EXIT_KEYFRAMES: KeyframeMap = {
//   left: [NO_CLIP, TOP_RIGHT_CLIP],
//   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
//   top: [NO_CLIP, TOP_RIGHT_CLIP],
//   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// const LinkBox = ({ 
//   Icon, 
//   href, 
//   color, 
//   hoverColor 
// }: { 
//   Icon: IconType; 
//   href: string;
//   color: string;
//   hoverColor: string;
// }) => {
//   const [scope, animate] = useAnimate();

//   const getNearestSide = (e: MouseEvent) => {
//     const box = (e.target as HTMLElement).getBoundingClientRect();

//     const proximityToLeft = {
//       proximity: Math.abs(box.left - e.clientX),
//       side: "left" as Side,
//     };
//     const proximityToRight = {
//       proximity: Math.abs(box.right - e.clientX),
//       side: "right" as Side,
//     };
//     const proximityToTop = {
//       proximity: Math.abs(box.top - e.clientY),
//       side: "top" as Side,
//     };
//     const proximityToBottom = {
//       proximity: Math.abs(box.bottom - e.clientY),
//       side: "bottom" as Side,
//     };

//     const sortedProximity = [
//       proximityToLeft,
//       proximityToRight,
//       proximityToTop,
//       proximityToBottom,
//     ].sort((a, b) => a.proximity - b.proximity);

//     return sortedProximity[0].side;
//   };

//   const handleMouseEnter = (e: MouseEvent) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: ENTRANCE_KEYFRAMES[side],
//     });
//   };

//   const handleMouseLeave = (e: MouseEvent) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: EXIT_KEYFRAMES[side],
//     });
//   };

//   return (
//     <a
//       href={href}
//       onMouseEnter={(e) => {
//         handleMouseEnter(e);
//       }}
//       onMouseLeave={(e) => {
//         handleMouseLeave(e);
//       }}
//       className="relative grid h-24 w-full place-content-center sm:h-28 md:h-32 hover:scale-105 transition-transform duration-200 group"
//     >
//       {/* Default state icon */}
//       <Icon className={`text-3xl sm:text-4xl lg:text-5xl ${color} group-hover:scale-110 transition-all duration-200`} />

//       {/* Hover state overlay */}
//       <div
//         ref={scope}
//         style={{
//           clipPath: BOTTOM_RIGHT_CLIP,
//         }}
//         className={`absolute inset-0 grid place-content-center ${hoverColor} text-white shadow-lg`}
//       >
//         <Icon className="text-3xl sm:text-4xl md:text-5xl drop-shadow-sm" />
//       </div>
//     </a>
//   );
// };










// import React from "react";
// import {
//   SiAdobe,
//   SiApple,
//   SiFacebook,
//   SiGoogle,
//   SiLinkedin,
//   SiShopify,
//   SiSoundcloud,
//   SiSpotify,
//   SiTiktok,
// } from "react-icons/si";
// import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
// import { useAnimate } from "framer-motion";

// export const Example = () => {
//   return (
//     <div className="bg-neutral-50 ">
//       <div className="mx-auto max-w-7xl">
//         <ClipPathLinks />
//       </div>
//     </div>
//   );
// };

// const ClipPathLinks = () => {
//   return (
//     <div className="divide-y divide-blue-300 border-8 border-white rounded-lg shadow-lg shadow-blue-200/50 ">
//       <div className="grid grid-cols-2 divide-x divide-blue-300">
//         <LinkBox Icon={ SiReact} href="https://react.dev" />
//         <LinkBox Icon={SiShopify} href="#" />
//       </div>
//       <div className="grid grid-cols-4 divide-x divide-blue-300">
//         <LinkBox Icon={SiApple} href="#" />
//         <LinkBox Icon={SiSoundcloud} href="#" />
//         <LinkBox Icon={SiAdobe} href="#" />
//         <LinkBox Icon={SiFacebook} href="#" />
//       </div>
//       <div className="grid grid-cols-3 divide-x divide-blue-300">
//         <LinkBox Icon={SiTiktok} href="#" />
//         <LinkBox Icon={SiSpotify} href="#" />
//         <LinkBox Icon={SiLinkedin} href="#" />
//       </div>
//     </div>
//   );
// };

// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

// const ENTRANCE_KEYFRAMES = {
//   left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
//   right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// const EXIT_KEYFRAMES = {
//   left: [NO_CLIP, TOP_RIGHT_CLIP],
//   bottom: [NO_CLIP, TOP_RIGHT_CLIP],
//   top: [NO_CLIP, TOP_RIGHT_CLIP],
//   right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// const LinkBox = ({ Icon, href }) => {
//   const [scope, animate] = useAnimate();

//   const getNearestSide = (e) => {
//     const box = e.target.getBoundingClientRect();

//     const proximityToLeft = {
//       proximity: Math.abs(box.left - e.clientX),
//       side: "left",
//     };
//     const proximityToRight = {
//       proximity: Math.abs(box.right - e.clientX),
//       side: "right",
//     };
//     const proximityToTop = {
//       proximity: Math.abs(box.top - e.clientY),
//       side: "top",
//     };
//     const proximityToBottom = {
//       proximity: Math.abs(box.bottom - e.clientY),
//       side: "bottom",
//     };

//     const sortedProximity = [
//       proximityToLeft,
//       proximityToRight,
//       proximityToTop,
//       proximityToBottom,
//     ].sort((a, b) => a.proximity - b.proximity);

//     return sortedProximity[0].side;
//   };

//   const handleMouseEnter = (e) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: ENTRANCE_KEYFRAMES[side],
//     });
//   };

//   const handleMouseLeave = (e) => {
//     const side = getNearestSide(e);

//     animate(scope.current, {
//       clipPath: EXIT_KEYFRAMES[side],
//     });
//   };

//   return (
//     <a
//       href={href}
//       onMouseEnter={(e) => {
//         handleMouseEnter(e);
//       }}
//       onMouseLeave={(e) => {
//         handleMouseLeave(e);
//       }}
//       className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 bg-gradient-to-b from-blue-500 via-blue-900 to-slate-950"
//     >
//       <Icon className="text-xl sm:text-3xl lg:text-4xl" />

//       <div
//         ref={scope}
//         style={{
//           clipPath: BOTTOM_RIGHT_CLIP,
//         }}
//         className="absolute inset-0 grid place-content-center bg-blue-300 text-white"
//       >
//         <Icon className="text-xl sm:text-3xl md:text-4xl" />
//       </div>
//     </a>
//   );
// };