import { LucideIcon } from 'lucide-react';


// Technology icons mapping
export interface TechIcon {
  icon: string;
  color: string;
}




export const techIcons: Record<string, TechIcon> = {
  // Frontend
  "React": { icon: "⚛️", color: "text-blue-400" },
  "Next.js": { icon: "▲", color: "text-white" },
  "TypeScript": { icon: "📘", color: "text-blue-500" },
  "JavaScript": { icon: "🟨", color: "text-yellow-400" },
  "Tailwind CSS": { icon: "🎨", color: "text-cyan-400" },
  "ShadCN": { icon: "🎯", color: "text-gray-400" },
  
  // Backend &Database
  "Node.js": { icon: "🟢", color: "text-green-400" },
  "Prisma": { icon: "🔺", color: "text-indigo-400" },
  "Express": { icon: "⚡", color: "text-gray-400" },
  "Python": { icon: "🐍", color: "text-yellow-500" },
  "REST APIs": { icon: "🔗", color: "text-orange-400" },
  "PostgreSQL": { icon: "🐘", color: "text-blue-600" },
  "Neon DB": { icon: "⚡", color: "text-cyan-400" },
  "Firebase": { icon: "🔥", color: "text-orange-500" },
  "Neon PostgreSQL": { icon: "⚡", color: "text-cyan-400" },

  // Vibe Coding
    "V0": { icon: "🌀", color: "text-purple-500" },
    "Cursor": { icon: "🖱️", color: "text-blue-500"},
    "Claude": { icon: "🤖", color: "text-green-500" },
    "ChatGPT": { icon: "💬", color: "text-blue-400" },
    "Gemini": { icon: "🧠", color: "text-purple-400" },

  
  // Tools & Cloud
  "Git": { icon: "📝", color: "text-orange-600" },
  "Vercel": { icon: "▲", color: "text-white" },
  "Clerk": { icon: "🔐", color: "text-purple-400" },
  "Sanity CMS": { icon: "📝", color: "text-red-400" },
  "Figma": { icon: "🎨", color: "text-purple-500" },
  "VS Code": { icon: "💙", color: "text-blue-500" },
  "Map API": { icon: "🗺️", color: "text-green-400" },
  "AI (Gemini)": { icon: "🤖", color: "text-purple-400" },
  
  // Currently Learning
  "WebGL": { icon: "🎮", color: "text-red-400" },
  "Rust": { icon: "🦀", color: "text-orange-600" },
  "AI/ML": { icon: "🧠", color: "text-pink-400" },
  "Web3": { icon: "🌐", color: "text-blue-400" },
  "React Native": { icon: "📱", color: "text-green-500" },
};

export interface NavigationItem {
  id: string;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export interface Project {
  title: string;
  year: string;
  tech: string[];
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Cyber Play Arena Booking App",
    year: "2024",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "ShadCN"],
    description:
      "A modern web-based management platform for local gaming services. Handles 30-minute console slot bookings, marketing, and admin controls with real-time availability.",
    link: "https://github.com/Rayat-7/cyber_play_arena"
  },
   {
    title: "TuitionTrack",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    description:
      "A simple web app for tuition and coaching centers in Bangladesh to manage students, attendance, and monthly fees — replacing notebooks and messy Excel sheets.",
    link: "https://github.com/Rayat-7/tuitiontrack"
  },
  {
    title: "Dear-U",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "A personal or social web app concept built with a clean UI and modern stack, focusing on expressive design and smooth user interactions.",
    link: "https://github.com/Rayat-7/dear-u"
  },
  {
    title: "Spendofrontend",
    year: "2024",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "Frontend for a spending tracker application, designed to manage and visualize expenses with a responsive, minimal interface.",
    link: "https://github.com/Rayat-7/spendofrontend"
  },
 
  {
    title: "Nego React",
    year: "2023",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "A React-based project exploring UI components and state management, potentially for negotiation or e-commerce scenarios.",
    link: "https://github.com/Rayat-7/nego-react"
  }
];

export interface SkillGroup {
  category: string;
  items: string[];
  icon: LucideIcon;
}

import { Code, Server, Database, Cloud } from 'lucide-react';

export const skills: SkillGroup[] = [
  { 
    category: "Frontend", 
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "ShadCN"],
    icon: Code
  },
  { 
    category: "Backend & Database", 
    items: ["Node.js", "Prisma", "Express", "Python", "REST APIs","PostgreSQL", "Neon DB", "Firebase"],
    icon: Server
  },
  { 
    category: "Vibe Coding", 
    items: ["V0", "Cursor", "Claude", "ChatGPT", "Gemini",],
    icon: Database
  },
  { 
    category: "Tools & Cloud", 
    items: ["Git", "Vercel", "Clerk", "Sanity CMS", "Figma", "VS Code"],
    icon: Cloud
  }
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: "BSc in Computer Science",
    company: "United International University",
    period: "Ongoing",
    description:
      "Currently pursuing my Bachelor's degree in Computer Science. Building strong foundations in software engineering, databases, and AI through academic and self-driven projects."
  },
  {
    title: "Full Stack Developer (Projects)",
    company: "Self-Driven Projects",
    period: "2023 - Present",
    description:
      "Worked on real-world inspired applications including booking systems, dashboards, CRUD apps, and SaaS ideas. Focused on clean code, scalability, and solving real problems."
  },
  {
    title: "Hackathons & Learning",
    company: "Personal Growth",
    period: "2022 - 2023",
    description:
      "Actively practiced with smaller apps and coursework projects. Learned Next.js, Prisma, PostgreSQL, and React Hooks by building practical applications step by step."
  }
];

export const currentlyLearning: string[] = ["WebGL", "AI/ML", "React Native"];

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export const contactInfo: ContactInfo = {
  email: "raisoulrayat@gamail.com",
  phone: "+880 123 456 7890",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/rayat-7",
  linkedin: "https://linkedin.com/in/raisulrayat"
};

export interface AboutData {
  intro: string;
  description: string;
  background: string[];
  interests: string[];
}

export const aboutData: AboutData = {
 intro: `Hi, I believe web development can be more diverse and inspiring with AI. My mission is to explore modern web technologies through experiments and innovative solutions.`,
description: `Driven by curiosity, I’m exploring Next.js to create meaningful impact through code & solving real life problem.`,
  background: [
    "3rd Computer Science stduent at United International University",
    "1+ Years of self coded Experience", 
    "Full-Stack Development",
    "UI/UX Design Interest",
    "Open Source Contributor"
  ],
  interests: [
    "To build something that solves real problems",
    "Interactive Design", 
    "AI Integration",
    "Modern Web Technologies",
    "Creative Coding"
  ]
};