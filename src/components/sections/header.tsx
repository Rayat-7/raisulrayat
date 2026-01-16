"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex-none bg-black transition-colors duration-300 border-b border-[#1a1a1a] glass-nav">
      <div className="container flex h-14 items-center justify-between px-8">
        <div className="flex items-center gap-x-12">
          {/* Logo */}
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span className="text-xl font-bold tracking-tighter text-white">RAISUL RAYAT</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-x-8">
              <li>
                <a href="#about" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  Experience
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-x-6">
          <div className="hidden items-center gap-x-5 sm:flex">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="https://github.com/rayat-7" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
          <a 
            href="mailto:contact@raisulrayat.com" 
            className="inline-flex h-9 items-center justify-center rounded-full bg-[#0ea5e9] px-5 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
