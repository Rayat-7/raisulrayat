"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
    Code2,
    Database,
    Smartphone,
    Server,
    ExternalLink
} from "lucide-react";
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
    SiOpenai,
    SiClaude,
    SiVite
} from "react-icons/si";

// Custom icons for AI tools that aren't in react-icons
const GsapIcon = () => (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} 
        fill={"currentColor"} viewBox="0 0 24 24">
        <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
    </svg>
);

const CursorIcon = () => (
    <svg className="w-4 h-4" height="2em" fill="currentColor" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
        <title>Cursor</title>
        <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-0)"></path>
        <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#lobe-icons-cursorundefined-fill-1)"></path>
        <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#lobe-icons-cursorundefined-fill-2)"></path>
        <path d="M22.35 6L11.925 24V12L22.35 6z" fill="#555"></path>
        <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="#000"></path>
        <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-0" x1="11.925" x2="11.925" y1="12" y2="24">
                <stop offset=".16" stopColor="#000" stopOpacity=".39"></stop>
                <stop offset=".658" stopColor="#000" stopOpacity=".8"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
                <stop offset=".182" stopColor="#000" stopOpacity=".31"></stop>
                <stop offset=".715" stopColor="#000" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-cursorundefined-fill-2" x1="11.925" x2="1.5" y1="0" y2="18">
                <stop stopColor="#000" stopOpacity=".6"></stop>
                <stop offset=".667" stopColor="#000" stopOpacity=".22"></stop>
            </linearGradient>
        </defs>
    </svg>
);

const V0Icon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M6.0952 9.4643V5.5238H7.6190V10.5476C7.6190 11.1394 7.1394 11.6190 6.5476 11.6190C6.2651 11.6190 5.9862 11.5101 5.7857 11.3096L0 5.5238H2.1548L6.0952 9.4643Z M16 10.0952H14.4762V6.6071L10.9881 10.0952H14.4762V11.6190H10.5238C9.3403 11.6190 8.3810 10.6597 8.3810 9.4762V5.5238H9.9048V9.0238L13.4047 5.5238H9.9048V4H13.8571C15.0407 4 16 4.9594 16 6.1429V10.0952Z"/>
    </svg>
);

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    tech?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    url?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

// Updated sample items with React Icons
const itemsSample: BentoItem[] = [
    {
        title: "E-Commerce Platform",
        meta: "React & Node.js",
        description:
            "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard",
        icon: <SiReact className="w-4 h-4 text-blue-600" />,
        status: "Live",
        tags: ["React", "Node.js", "MongoDB"],
        colSpan: 2,
        hasPersistentHover: true,
        url: "https://github.com/example/ecommerce"
    },
    {
        title: "Next.js Dashboard",
        meta: "Next.js & TypeScript",
        description: "Modern dashboard with server-side rendering and real-time data visualization components",
        icon: <SiNextdotjs className="w-4 h-4 text-blue-600" />,
        status: "Updated",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        url: "https://github.com/example/dashboard"
    },
    {
        title: "AI Chat Assistant",
        meta: "OpenAI & Claude",
        description: "Intelligent chatbot powered by multiple AI models with natural language processing capabilities",
        icon: <SiOpenai className="w-4 h-4 text-blue-600" />,
        tags: ["OpenAI", "Claude", "AI"],
        colSpan: 2,
        url: "https://github.com/example/chatbot"
    },
    {
        title: "Design System",
        meta: "Figma & Storybook",
        description: "Comprehensive design system with reusable components and interactive documentation",
        icon: <SiFigma className="w-4 h-4 text-blue-600" />,
        status: "Beta",
        tags: ["Figma", "Design", "Components"],
        url: "https://github.com/example/design-system"
    },
    {
        title: "Supabase Backend",
        meta: "Supabase & PostgreSQL",
        description: "Scalable backend infrastructure with real-time subscriptions and edge functions",
        icon: <SiSupabase className="w-4 h-4 text-blue-600" />,
        tags: ["Supabase", "PostgreSQL"],
        url: "https://github.com/example/backend"
    },
    {
        title: "Animation Library",
        meta: "GSAP & Framer",
        description: "High-performance animation library with smooth transitions and interactive elements",
        icon: <GsapIcon />,
        status: "Active",
        tags: ["GSAP", "Animation", "Performance"],
        url: "https://github.com/example/animations"
    },
];

// Enhanced tech icon mapping with React Icons
const getTechIcon = (techName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        // Frameworks & Libraries
        "React": <SiReact className="w-3 h-3 text-blue-500" />,
        "Next.js": <SiNextdotjs className="w-3 h-3 text-black" />,
        "Node.js": <SiNodedotjs className="w-3 h-3 text-green-600" />,
        "Vite": <SiVite className="w-3 h-3 text-purple-500" />,
        
        // Languages
        "TypeScript": <SiTypescript className="w-3 h-3 text-blue-600" />,
        
        // Styling
        "Tailwind CSS": <SiTailwindcss className="w-3 h-3 text-cyan-400" />,
        "Tailwind": <SiTailwindcss className="w-3 h-3 text-cyan-400" />,
        "shadcn/ui": <SiShadcnui className="w-3 h-3 text-black" />,
        
        // Databases
        "PostgreSQL": <SiPostgresql className="w-3 h-3 text-blue-700" />,
        "Supabase": <SiSupabase className="w-3 h-3 text-green-500" />,
        "Prisma": <SiPrisma className="w-3 h-3 text-indigo-600" />,
        "MongoDB": <Database className="w-3 h-3 text-green-600" />,
        
        // Tools & Platforms
        "Vercel": <SiVercel className="w-3 h-3 text-black" />,
        "GitHub": <SiGithub className="w-3 h-3 text-gray-800" />,
        "Figma": <SiFigma className="w-3 h-3 text-purple-500" />,
        "Framer": <SiFramer className="w-3 h-3 text-black" />,
        
        // Auth & Services
        "Clerk": <SiClerk className="w-3 h-3 text-purple-600" />,
        "clerk": <SiClerk className="w-3 h-3 text-purple-600" />,
        
        // AI & ML
        "OpenAI": <SiOpenai className="w-3 h-3 text-green-600" />,
        "Claude": <SiClaude className="w-3 h-3 text-orange-500" />,
        "AI": <TrendingUp className="w-3 h-3 text-blue-500" />,
        "ML": <TrendingUp className="w-3 h-3 text-purple-500" />,
        
        // Animation & Graphics
        "GSAP": <GsapIcon />,
        "Animation": <Star className="w-3 h-3 text-yellow-500" />,
        
        // Development Tools
        "Cursor": <CursorIcon />,
        "v0": <V0Icon />,
        
        // Fallbacks
        "Security": <CheckCircle className="w-3 h-3 text-green-600" />,
        "Cloud": <Server className="w-3 h-3 text-blue-600" />,
        "Analytics": <TrendingUp className="w-3 h-3 text-purple-600" />,
        "Design": <SiFigma className="w-3 h-3 text-purple-500" />,
        "Components": <Code2 className="w-3 h-3 text-blue-600" />,
        "Performance": <TrendingUp className="w-3 h-3 text-green-600" />
    };
    
    return iconMap[techName] || <Code2 className="w-3 h-3 text-gray-600" />;
};

function BentoGrid({ items = itemsSample }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "group relative p-6 rounded-3xl overflow-hidden transition-all duration-300",
                        "border border-white/30 bg-white/50 backdrop-blur-sm",
                        "hover:bg-white/70 hover:border-white/50",
                        "hover:shadow-xl hover:shadow-blue-300/20",
                        "hover:-translate-y-2 hover:scale-[1.02] will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-xl shadow-blue-300/20 -translate-y-1 bg-white/70":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent rounded-3xl" />
                    </div>

                    <div className="relative flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-300/20 group-hover:bg-blue-300/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                {item.icon}
                            </div>
                            <div className="flex items-center space-x-3">
                                <span
                                    className={cn(
                                        "text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm",
                                        "bg-gray-100/80 text-gray-600",
                                        "transition-colors duration-300 group-hover:bg-blue-100/80 group-hover:text-blue-700"
                                    )}
                                >
                                    {item.status || "Active"}
                                </span>
                                <div className="w-4 h-4 bg-blue-300 rounded-full group-hover:scale-125 transition-transform duration-300" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 tracking-tight transition-colors">
                                {item.title}
                                {/* <span className="ml-2 text-sm text-gray-500 font-normal">
                                    {item.meta}
                                </span> */}
                            </h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed font-normal transition-colors">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                                {(item.tech || item.tags)?.slice(0, 8).map((techName, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100/60 backdrop-blur-sm transition-all duration-200 hover:bg-blue-100/60 hover:text-blue-700"
                                    >
                                        {getTechIcon(techName)}
                                        <span className="text-xs font-medium">{techName}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors opacity-0 group-hover:opacity-100">
                                <span className="text-xs font-medium mr-1">
                                    {item.cta || "View Project"}
                                </span>
                                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorative border */}
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    <div
                        className={`absolute inset-0 -z-10 rounded-3xl p-px bg-gradient-to-br from-transparent via-blue-300/30 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </a>
            ))}
        </div>
    );
}

export { BentoGrid };









// "use client";

// import { cn } from "@/lib/utils";
// import {
//     CheckCircle,
//     Clock,
//     Star,
//     TrendingUp,
//     Video,
//     Globe,
//     Code2,
//     Database,
//     Smartphone,
//     Server,
//     ExternalLink
// } from "lucide-react";

// export interface BentoItem {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     status?: string;
//     tags?: string[];
//     meta?: string;
//     cta?: string;
//     colSpan?: number;
//     hasPersistentHover?: boolean;
//     url?: string;
// }

// interface BentoGridProps {
//     items: BentoItem[];
// }

// const itemsSample: BentoItem[] = [
//     {
//         title: "E-Commerce Platform",
//         meta: "React & Node.js",
//         description:
//             "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard",
//         icon: <Globe className="w-4 h-4 text-blue-600" />,
//         status: "Live",
//         tags: ["React", "Node.js", "MongoDB"],
//         colSpan: 2,
//         hasPersistentHover: true,
//         url: "https://github.com/example/ecommerce"
//     },
//     {
//         title: "Mobile Banking App",
//         meta: "React Native",
//         description: "Secure mobile banking application with biometric authentication and budget tracking features",
//         icon: <Smartphone className="w-4 h-4 text-blue-600" />,
//         status: "Updated",
//         tags: ["React Native", "Security"],
//         url: "https://github.com/example/banking"
//     },
//     {
//         title: "AI Chat Assistant",
//         meta: "Python & TensorFlow",
//         description: "Intelligent chatbot powered by machine learning algorithms with natural language processing capabilities",
//         icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
//         tags: ["Python", "AI", "ML"],
//         colSpan: 2,
//         url: "https://github.com/example/chatbot"
//     },
//     {
//         title: "Design System",
//         meta: "React & Storybook",
//         description: "Comprehensive design system with reusable components and interactive documentation",
//         icon: <Code2 className="w-4 h-4 text-blue-600" />,
//         status: "Beta",
//         tags: ["React", "Design"],
//         url: "https://github.com/example/design-system"
//     },
//     {
//         title: "Cloud Dashboard",
//         meta: "Next.js",
//         description: "Multi-region cloud management dashboard with real-time monitoring and analytics",
//         icon: <Server className="w-4 h-4 text-blue-600" />,
//         tags: ["Next.js", "Cloud"],
//         url: "https://github.com/example/dashboard"
//     },
//     {
//         title: "Database Analytics",
//         meta: "PostgreSQL",
//         description: "Advanced database analytics tool with performance optimization and query insights",
//         icon: <Database className="w-4 h-4 text-blue-600" />,
//         status: "Active",
//         tags: ["Database", "Analytics"],
//         url: "https://github.com/example/db-analytics"
//     },
// ];

// function BentoGrid({ items = itemsSample }: BentoGridProps) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
//             {items.map((item, index) => (
//                 <a
//                     key={index}
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={cn(
//                         "group relative p-6 rounded-3xl overflow-hidden transition-all duration-300",
//                         "border border-white/30 bg-white/50 backdrop-blur-sm",
//                         "hover:bg-white/70 hover:border-white/50",
//                         "hover:shadow-xl hover:shadow-blue-300/20",
//                         "hover:-translate-y-2 hover:scale-[1.02] will-change-transform",
//                         item.colSpan || "col-span-1",
//                         item.colSpan === 2 ? "md:col-span-2" : "",
//                         {
//                             "shadow-xl shadow-blue-300/20 -translate-y-1 bg-white/70":
//                                 item.hasPersistentHover,
//                         }
//                     )}
//                 >
//                     <div
//                         className={`absolute inset-0 ${
//                             item.hasPersistentHover
//                                 ? "opacity-100"
//                                 : "opacity-0 group-hover:opacity-100"
//                         } transition-opacity duration-300`}
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-300/10 to-transparent rounded-3xl" />
//                     </div>

//                     <div className="relative flex flex-col space-y-4">
//                         <div className="flex items-center justify-between">
//                             <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-300/20 group-hover:bg-blue-300/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//                                 {item.icon}
//                             </div>
//                             <div className="flex items-center space-x-3">
//                                 <span
//                                     className={cn(
//                                         "text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm",
//                                         "bg-gray-100/80 text-gray-600",
//                                         "transition-colors duration-300 group-hover:bg-blue-100/80 group-hover:text-blue-700"
//                                     )}
//                                 >
//                                     {item.status || "Active"}
//                                 </span>
//                                 <div className="w-4 h-4 bg-blue-300 rounded-full group-hover:scale-125 transition-transform duration-300" />
//                             </div>
//                         </div>

//                         <div className="space-y-3">
//                             <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 tracking-tight transition-colors">
//                                 {item.title}
//                                 <span className="ml-2 text-sm text-gray-500 font-normal">
//                                     {item.meta}
//                                 </span>
//                             </h3>
//                             <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed font-normal transition-colors">
//                                 {item.description}
//                             </p>
//                         </div>

//                         <div className="flex items-center justify-between mt-2">
//                             <div className="flex items-center space-x-2 text-xs text-gray-500">
//                                 {item.tags?.slice(0, 3).map((tag, i) => (
//                                     <span
//                                         key={i}
//                                         className="px-2 py-1 rounded-md bg-gray-100/60 backdrop-blur-sm transition-all duration-200 hover:bg-blue-100/60 hover:text-blue-700"
//                                     >
//                                         #{tag}
//                                     </span>
//                                 ))}
//                             </div>
//                             <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors opacity-0 group-hover:opacity-100">
//                                 <span className="text-xs font-medium mr-1">
//                                     {item.cta || "View Project"}
//                                 </span>
//                                 <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom decorative border */}
//                     <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

//                     <div
//                         className={`absolute inset-0 -z-10 rounded-3xl p-px bg-gradient-to-br from-transparent via-blue-300/30 to-transparent ${
//                             item.hasPersistentHover
//                                 ? "opacity-100"
//                                 : "opacity-0 group-hover:opacity-100"
//                         } transition-opacity duration-300`}
//                     />
//                 </a>
//             ))}
//         </div>
//     );
// }

// export { BentoGrid }

