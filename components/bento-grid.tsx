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

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    url?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

const itemsSample: BentoItem[] = [
    {
        title: "E-Commerce Platform",
        meta: "React & Node.js",
        description:
            "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard",
        icon: <Globe className="w-4 h-4 text-blue-600" />,
        status: "Live",
        tags: ["React", "Node.js", "MongoDB"],
        colSpan: 2,
        hasPersistentHover: true,
        url: "https://github.com/example/ecommerce"
    },
    {
        title: "Mobile Banking App",
        meta: "React Native",
        description: "Secure mobile banking application with biometric authentication and budget tracking features",
        icon: <Smartphone className="w-4 h-4 text-blue-600" />,
        status: "Updated",
        tags: ["React Native", "Security"],
        url: "https://github.com/example/banking"
    },
    {
        title: "AI Chat Assistant",
        meta: "Python & TensorFlow",
        description: "Intelligent chatbot powered by machine learning algorithms with natural language processing capabilities",
        icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
        tags: ["Python", "AI", "ML"],
        colSpan: 2,
        url: "https://github.com/example/chatbot"
    },
    {
        title: "Design System",
        meta: "React & Storybook",
        description: "Comprehensive design system with reusable components and interactive documentation",
        icon: <Code2 className="w-4 h-4 text-blue-600" />,
        status: "Beta",
        tags: ["React", "Design"],
        url: "https://github.com/example/design-system"
    },
    {
        title: "Cloud Dashboard",
        meta: "Next.js",
        description: "Multi-region cloud management dashboard with real-time monitoring and analytics",
        icon: <Server className="w-4 h-4 text-blue-600" />,
        tags: ["Next.js", "Cloud"],
        url: "https://github.com/example/dashboard"
    },
    {
        title: "Database Analytics",
        meta: "PostgreSQL",
        description: "Advanced database analytics tool with performance optimization and query insights",
        icon: <Database className="w-4 h-4 text-blue-600" />,
        status: "Active",
        tags: ["Database", "Analytics"],
        url: "https://github.com/example/db-analytics"
    },
];

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
                                <span className="ml-2 text-sm text-gray-500 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed font-normal transition-colors">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                {item.tags?.slice(0, 3).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 rounded-md bg-gray-100/60 backdrop-blur-sm transition-all duration-200 hover:bg-blue-100/60 hover:text-blue-700"
                                    >
                                        #{tag}
                                    </span>
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

export { BentoGrid }

