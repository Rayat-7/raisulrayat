"use client";

import React from "react";
import { Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent transition-all duration-300">
      <div className="container mx-auto flex h-24 items-center justify-between px-8 md:px-16">
        <div className="flex items-center gap-x-12">
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span className="text-xl font-light tracking-[0.3em] text-white">
              RAISUL RAYAT
            </span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-x-12">
          <ul className="flex items-center gap-x-10">
            <li>
              <a
                href="/#techstack"
                className="text-[12px] uppercase tracking-[0.2em] font-medium text-white/70 transition-colors hover:text-white"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a
                href="/#experience"
                className="text-[12px] uppercase tracking-[0.2em] font-medium text-white/70 transition-colors hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-[12px] uppercase tracking-[0.2em] font-medium text-white/70 transition-colors hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/resume"
                className="text-[12px] uppercase tracking-[0.2em] font-medium text-white/70 transition-colors hover:text-white"
              >
                Resume
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-x-6 h-4 border-l border-white/20 pl-6">
            <a
              href="https://github.com/rayat-7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-all hover:text-white hover:scale-110"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com/in/raisulrayat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-all hover:text-white hover:scale-110"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-white p-2"
          >
            <X size={32} />
          </button>
          <ul className="flex flex-col items-center gap-8">
            <li>
              <a
                href="/#techstack"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-white"
              >
                TECH STACK
              </a>
            </li>
            <li>
              <a
                href="/#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-white"
              >
                EXPERIENCE
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-white"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light tracking-widest text-white"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header2;
