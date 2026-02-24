"use client";

import React, { useState } from "react";
import { Github, Twitter, Linkedin, Menu, X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  personalInfo,
  navigationLinks,
  techStack,
  education,
} from "@/lib/data";

const Header = ({ isLight = false }: { isLight?: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    const details = `
Raisoul Rayat – ${personalInfo.title}
Contact Information

Location: ${personalInfo.location}

Phone: ${personalInfo.phone}

Email: ${personalInfo.email}

LinkedIn: ${personalInfo.linkedin}

GitHub: ${personalInfo.github}

Portfolio: ${personalInfo.portfolio}

Professional Summary

${personalInfo.summary}

Technical Skills

Frontend: React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
Backend & Database: REST APIs, PostgreSQL, MySQL, Prisma, Firebase
Tools: Git, GitHub, Vercel

Experience

Web Development Intern – Tekshilpa Solutions Ltd. (2025)

Contributed to frontend UI development.

Assisted with API integration and feature updates.

Freelance Projects

Developed responsive web interfaces using React and Tailwind CSS.

Contributed to a React component library.

Projects

Cyber Play Arena – Slot booking management web application
Tech: Next.js, React, PostgreSQL, Prisma

Tuition Track – Tuition management web application
Tech: Next.js, MySQL, Prisma

Startup Achievement

Winner – Spendo AI Startup Competition

Built Spendo AI, an AI-powered Excel sheet solution designed to improve financial understanding and expense tracking.

Awarded 60,000 BDT prize money.

Education

Bachelor of Science in Computer Science and Engineering
United International University (Expected 2027)
    `.trim();

    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent transition-all pr-0 duration-300"
    >
      <div className="max-w-[1500px] mx-auto flex h-24 items-center  justify-between px-8 md:px-12">
        <div className="flex items-center gap-x-12 md:ml-16 ml-0">
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span
              className={`text-xl font-bold ${isLight ? "text-zinc-900" : "text-white"}`}
            >
              {personalInfo.name.toUpperCase()}
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-12">
          <ul className="flex items-center gap-4">
            {navigationLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[12px] uppercase font-medium transition-colors ${isLight ? "text-zinc-600 hover:text-blue-600" : "text-white/70 hover:text-white"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center justify-center rounded-4xl gap-2 w-[160px] h-9 bg-white text-black text-[11px] font-bold uppercase tracking-wider hover:bg-zinc-100 transition-all  group"
          >
            {copied ? (
              <>
                <Check size={14} className="text-green-600" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy
                  size={14}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>Copy Details</span>
              </>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${isLight ? "text-zinc-900" : "text-white"}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center text-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-white p-2"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light tracking-widest text-white hover:text-blue-400 transition-colors"
                  >
                    {link.uppercase}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                handleCopyMarkdown();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest rounded-full shadow-xl active:scale-95 transition-all"
            >
              {copied ? (
                <Check size={20} className="text-green-600" />
              ) : (
                <Copy size={20} />
              )}
              {copied ? "Copied to Clipboard!" : "Copy Profile Summary"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
