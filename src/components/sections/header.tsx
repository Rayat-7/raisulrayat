"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-xl transition-all duration-300 border-b border-[#1a1a1a]">
      <div className="container mx-auto flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-x-12">
          {/* Logo */}
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span className="text-xl font-bold tracking-tighter text-white">RAISUL RAYAT</span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-x-8">
              <li>
                <a href="#techstack" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[14px] font-medium text-[#999999] transition-colors hover:text-white">
                  Projects
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
            <a href="https://linkedin.com/in/raisulrayat" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
          <a 
            href="mailto:raisoulrayat@gmail.com" 
            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-[#0ea5e9] px-5 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-105"
          >
            Get in touch
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a]">
          <nav className="container mx-auto px-8 py-6">
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="#techstack" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Projects
                </a>
              </li>
              <li className="pt-4 border-t border-[#1a1a1a]">
                <div className="flex items-center gap-6">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
                    <Twitter size={20} />
                  </a>
                  <a href="https://github.com/rayat-7" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/raisulrayat" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
                    <Linkedin size={20} />
                  </a>
                </div>
              </li>
              <li className="pt-4">
                <a 
                  href="mailto:raisoulrayat@gmail.com" 
                  className="inline-flex h-10 items-center justify-center rounded-full bg-[#0ea5e9] px-6 text-[14px] font-semibold text-white"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
