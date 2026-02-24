export const personalInfo = {
  name: "Raisul Rayat",
  firstName: "Raisul",
  lastName: "Rayat",
  title: "Frontend Developer",
  email: "raisoulrayat@gmail.com",
  phone: "01892707713",
  location: "Dhaka, Bangladesh",
  portfolio: "https://raisulrayat.vercel.app",
  github: "https://github.com/Rayat-7",
  linkedin: "https://linkedin.com/in/raisoul-rayat-48781a263",
  twitter: "https://x.com/RaisulRayat",
  githubUsername: "@Rayat-7",
  linkedinUsername: "raisoul-rayat",
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
    description: "A comprehensive web app for tuition centers in Bangladesh.",
    fullDescription:
      "TuitionTrack is a comprehensive web application designed for tuition centers in Bangladesh. It simplifies management tasks by handling student records, attendance tracking, and monthly fee collections. The platform features a modern dashboard and an easy-to-use interface, ensuring efficiency for administrators.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Clerk",
      "Supabase",
    ],
    github: "https://github.com/rayat-7/tuitiontrack",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    date: "Dec 2024",
    category: "Web App",
    featured: true,
  },
  {
    title: "Cyber Play Arena",
    tagline: "Gaming Slot Booking Platform",
    description: "A modern web-based management software for booking slots.",
    fullDescription:
      "Cyber Play Arena is a web-based management software tailored for local gaming services. It facilitates the booking of gaming slots and manages marketing campaigns. Built with Next.js and modern technologies, it offers a seamless booking experience for users and robust management tools for admins.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/rayat-7/cyber_play_arena",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    date: "Nov 2024",
    category: "SaaS",
    featured: true,
  },
  {
    title: "UIU Sprs",
    tagline: "Issue Resolution Platform",
    description: "A platform to enhance university's issue resolution process.",
    fullDescription:
      "UIU Sprs is a dedicated platform aimed at enhancing the issue resolution process within the university. It provides a transparent and user-friendly system for students to report issues, track their progress, and receive timely feedback, fostering better communication between students and administration.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "Shadcn UI",
      "Tailwind CSS",
      "Prisma",
    ],
    github: "https://github.com/rayat-7/uiu-sprs",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    date: "Oct 2024",
    category: "Web App",
    featured: true,
  },
  {
    title: "Spendo Frontend",
    tagline: "Financial Management UI",
    description:
      "Frontend for a spending tracker app and financial management.",
    fullDescription:
      "Spendo Frontend is the user interface for a spending tracker application. Built with Vite and responsive design principles, it delivers a seamless user experience for financial management, allowing users to track expenses and manage their finances effectively on any device.",
    tech: ["Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rayat-7/spendo-frontend",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    date: "Sep 2024",
    category: "Frontend",
    featured: true,
  },
  {
    title: "Portfolio Website",
    tagline: "Personal Showcase",
    description: "Personal portfolio showcasing projects and skills.",
    fullDescription:
      "A modern, responsive portfolio website built with Next.js and Framer Motion. Features smooth animations, pixel art effects, and a clean design system. Showcases projects, experience, and technical skills in an engaging way.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Canvas API",
    ],
    github: "https://github.com/rayat-7/portfolio",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop",
    date: "Jan 2025",
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
    details: "Dean's List, 3.5+ CGPA",
  },
];

export const certifications = [
  {
    title: "React Accelerator Course",
    provider: "Learn with Sumit",
  },
];
