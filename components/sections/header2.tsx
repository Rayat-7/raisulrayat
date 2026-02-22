"use client";

import React, { useState } from "react";
import { Github, Twitter, Linkedin, Menu, X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header2 = ({ isLight = false }: { isLight?: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyMarkdown = () => {
    const details = `
# Raisul Rayat
**Frontend Developer**

- 📧 Email: raisoulrayat@gmail.com
- 🔗 LinkedIn: https://linkedin.com/in/raisulrayat
- 💻 GitHub: https://github.com/rayat-7
- 🌐 Portfolio: https://raisulrayat.com

*Experienced in React, Next.js, and modern frontend architecture.*
    `.trim();

    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent transition-all pr-0 duration-300"
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-8 md:px-0">
        <div className="flex items-center gap-x-12">
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span
              className={`text-xl font-bold ${isLight ? "text-zinc-900" : "text-white"}`}
            >
              RAISUL RAYAT
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-12">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="/#techstack"
                className={`text-[12px] uppercase font-medium transition-colors ${isLight ? "text-zinc-600 hover:text-blue-600" : "text-white/70 hover:text-white"}`}
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="/#experience"
                className={`text-[12px] uppercase font-medium transition-colors ${isLight ? "text-zinc-600 hover:text-blue-600" : "text-white/70 hover:text-white"}`}
              >
                Experience
              </a>
            </li>
            
           
          </ul>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-wider  hover:bg-zinc-100 transition-all shadow-sm group"
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

        <div className="md:hidden flex items-center gap-8">
          <button
            onClick={handleCopyMarkdown}
            className="p-2 bg-white text-black rounded-full shadow-sm"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} />
            )}
          </button>
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
              <li>
                <a
                  href="/#techstack"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest text-white hover:text-blue-400 transition-colors"
                >
                  TECH STACK
                </a>
              </li>
              <li>
                <a
                  href="/#experience"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest text-white hover:text-blue-400 transition-colors"
                >
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest text-white hover:text-blue-400 transition-colors"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light tracking-widest text-white hover:text-blue-400 transition-colors"
                >
                  RESUME
                </a>
              </li>
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
              {copied ? "Copied to Clipboard!" : "Copy Developer Markdown"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header2;
