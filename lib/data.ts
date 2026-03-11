export const personalInfo = {
  name: "Raisul Rayat",
  firstName: "Raisul",
  lastName: "Rayat",
  title: "Frontend Developer",
  email: "raisulrayat@gmail.com",
  phone: "01892707713",
  location: "Dhaka, Bangladesh",
  portfolio: "https://raisulrayat.vercel.app",
  github: "https://github.com/Rayat-7",
  linkedin: "https://linkedin.com/in/raisul-rayat-48781a263",
  twitter: "https://x.com/RaisulRayat",
  githubUsername: "@Rayat-7",
  linkedinUsername: "raisul-rayat",
  twitterUsername: "@RaisulRayat",
  bio: `Transforming real-world challenges into fast, scalable web applications — driven by modern technologies like <span className="font-bold text-blue-500">React</span> and <span className="font-bold text-blue-500">Next.js</span>.`,
  summary:
    "Frontend Developer experienced in building web applications using React.js and Next.js. Worked as a Web Development Intern at Tekshilpa Solutions Ltd. and completed freelance frontend projects. Familiar with REST APIs, authentication systems, and database integration using PostgreSQL and MySQL.",
};

export const navigationLinks = [
  { label: "Tech Stack", href: "/#techstack", uppercase: "TECH STACK" },
  { label: "Experience", href: "/#experience", uppercase: "EXPERIENCE" },
  { label: "Projects", href: "/projects", uppercase: "PROJECTS" },
  { label: "Resume", href: "/resume", uppercase: "RESUME" },
];

export const projects = [
  {
    title: "TuitionTrack",
    tagline: "Academy Management Solution",
    description: "A comprehensive web app for tuition centers in Bangladesh to manage students, attendance, and monthly fees.",
    fullDescription:
      "TuitionTrack is a comprehensive web application designed for tuition centers in Bangladesh. It simplifies management tasks by handling student records, attendance tracking, and monthly fee collections. The platform features a modern dashboard and easy-to-use interface, replacing traditional notebooks and Excel sheets with an efficient digital system. Optional WhatsApp reminders for automation.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Clerk",
      "Supabase",
    ],
    github: "https://github.com/Rayat-7/tuitiontrack",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 2025",
    category: "Web App",
    featured: true,
  },
  {
    title: "Jhakkas AI",
    tagline: "AI-Powered Social Media Companion",
    description: "A high-performance AI companion that generates aesthetic Bengali/Banglish captions and trending music recommendations from photos.",
    fullDescription:
      "Jhakkas.ai is a high-performance AI-powered social media companion built with Next.js 16 and Gemini 1.5 Flash. It instantly generates aesthetic Bengali/Banglish captions and trending music recommendations from any photo with a focus-point analysis. Perfect for creating engaging social media content.",
    tech: [
      "Next.js",
      "TypeScript",
      "Gemini 1.5 Flash API",
      "Tailwind CSS",
      "Vercel"
    ],
    github: "https://github.com/Rayat-7/jhakkas_ai",
    live: "https://jhakkas-ai.vercel.app",
    image:
      "https://images.unsplash.com/photo-1677442d019cecf8d42b3b67debbc8830b89c06b2?q=80&w=1000&auto=format&fit=crop",
    date: "Feb 2026",
    category: "AI Tool",
    featured: true,
  },
  
  {
    title: "UIU SPRS",
    tagline: "Issue Resolution Platform",
    description: "A platform to enhance university's issue resolution process with transparent tracking and timely feedback.",
    fullDescription:
      "UIU SPRS is a dedicated platform aimed at enhancing the issue resolution process within the university. It provides a transparent and user-friendly system for students to report issues, track their progress, and receive timely feedback, fostering better communication between students and administration.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "Shadcn UI",
      "Tailwind CSS",
      "Prisma",
    ],
    github: "https://github.com/Rayat-7/uiu-sprs-next",
    live: "https://uiu-sprs.vercel.app",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    date: "Sep 2025",
    category: "Web App",
    featured: true,
  },
  {
    title: "Cyber Play Arena",
    tagline: "Gaming Slot Booking Platform",
    description: "A modern web-based management software for booking gaming slots and managing marketing campaigns.",
    fullDescription:
      "Cyber Play Arena is a web-based management software tailored for local gaming services. It facilitates the booking of gaming slots and manages marketing campaigns. Built with Next.js and modern technologies, it offers a seamless booking experience for users and robust management tools for admins.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Rayat-7/cyber_play_arena",
    live: "https://cyber-play-arena-1klo.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    date: "Nov 2024",
    category: "SaaS",
    featured: true,
  },
  {
    title: "MapIt",
    tagline: "Route Planning & Mapping Solution",
    description: "A modern route planning and mapping application built for location-based services.",
    fullDescription:
      "MapIt is a TypeScript-based web application for route planning and mapping. Featuring a clean interface built with Tailwind CSS, it helps users navigate and plan routes efficiently with an intuitive user experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    github: "https://github.com/Rayat-7/mapit",
    live: "https://shohoj-route.vercel.app",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
    date: "Dec 2025",
    category: "Web App",
    featured: true,
  },
  {
    title: "Portfolio Website",
    tagline: "Personal Showcase",
    description: "Modern portfolio showcasing projects, skills, and professional experience.",
    fullDescription:
      "A modern, responsive portfolio website built with Next.js and TypeScript. Features clean design, project showcases, and professional presentation of skills and experience. Deployed on Vercel with optimized performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    github: "https://github.com/Rayat-7/raisulrayat",
    live: "https://raisulrayat.vercel.app",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    date: "Aug 2025",
    category: "Portfolio",
    featured: false,
  },
];

export const techStack = [
  {
    category: "Frontend & Framework",
    items: [
      { name: "React", devicon: "react" },
      { name: "Next.js", devicon: "nextjs" },
      { name: "Tailwind", devicon: "tailwindcss" },
      { name: "GSAP", isCustom: true },
      { name: "Vite", url: "https://vite.dev/assets/vite-light.t8GCa_VF.svg" },
      { name: "TanStack Start", iconPath: "/tanstackstart.png" },
      { name: "motion.dev", devicon: "framermotion" },
      { name: "Figma", devicon: "figma" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", devicon: "nodejs" },
      { name: "Express", isCustom: true },
      { name: "Sanity", devicon: "sanity" },
      { name: "PostgreSQL", devicon: "postgresql" },
      { name: "MongoDB", devicon: "mongodb" },
      { name: "Redis", devicon: "redis" },
      { name: "Supabase", devicon: "supabase" },
      { name: "Prisma", devicon: "prisma" },
      { name: "Appwrite", devicon: "appwrite" },
      { name: "Firebase", devicon: "firebase" },
    ],
  },
  {
    category: "Language",
    items: [
      { name: "JavaScript", devicon: "javascript" },
      { name: "TypeScript", devicon: "typescript" },
      { name: "Python", devicon: "python" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", devicon: "git" },
      { name: "Docker", devicon: "docker" },
      { name: "Sentry", devicon: "sentry" },
      { name: "Postman", devicon: "postman" },
      {
        name: "Vercel",
        url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      },
    ],
  },
];

export const experience = [
  {
    role: "Web Development Intern",
    company: "Tekshilpa Solutions Ltd.",
    period: "2025",
    description: [
      "Contributed to frontend UI development using React.js and modern JavaScript.",
      "Improved user experience through responsive layouts and performance optimization.",
      "Collaborated with team members following structured development workflow using Git.",
    ],
    isInternship: true,
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed",
    period: "Ongoing",
    description: [
      "Developed responsive web interfaces for clients using React and Tailwind CSS.",
      "Contributed to building reusable React component libraries.",
      "Delivered optimized and maintainable frontend solutions.",
    ],
  },
];

export const education = [
  {
    degree: "BSc in Computer Science and Engineering",
    institution: "United International University",
    period: "Expected Graduation: 2027",
    details: "Learned about data structures, algorithms, and software engineering principles.",
  },
];

export const certifications = [
  {
    title: "React Accelerator Course",
    provider: "Learn with Sumit",
  },
];
