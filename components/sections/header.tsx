"use client";

import React from 'react';
import { Github, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NeuButton } from "@/components/ui/neu-button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-xl transition-all duration-300 ">
      <div className="container mx-auto flex h-14 items-center justify-between px-8">
        <div className="flex items-center gap-x-12">
          <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
            <span className="text-lg font-bold tracking-tighter text-white">RAISUL RAYAT</span>
          </a>

          <nav className="hidden md:flex">
            <ul className="flex items-center gap-x-8">
              <li>
                <a href="/#techstack" className="text-[13px] font-medium text-[#999999] transition-colors hover:text-white">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="/#experience" className="text-[13px] font-medium text-[#999999] transition-colors hover:text-white">
                  Experience
                </a>
              </li>
              <li>
                <a href="/projects" className="text-[13px] font-medium text-[#999999] transition-colors hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="/resume" className="text-[13px] font-medium text-[#999999] transition-colors hover:text-white">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-x-6">
          <div className="hidden items-center gap-x-5 sm:flex">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Twitter size={16} />
            </a>
            <a href="https://github.com/rayat-7" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/raisulrayat" target="_blank" rel="noopener noreferrer" className="text-[#999999] transition-colors hover:text-white">
              <Linkedin size={16} />
            </a>
          </div>
          {/* <NeuButton 
            href="mailto:raisoulrayat@gmail.com" 
            variant="primary"
            className="hidden sm:inline-flex px-4 py-1.5 text-[12px]"
          >
            Get in touch
          </NeuButton> */}
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-[#1a1a1a]">
          <nav className="container mx-auto px-8 py-6">
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="/#techstack" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a 
                  href="/#experience" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/resume" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[16px] font-medium text-[#999999] transition-colors hover:text-white py-2"
                >
                  Resume
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
                <NeuButton 
                  href="mailto:raisoulrayat@gmail.com" 
                  variant="primary"
                  className="px-6 py-2.5"
                >
                  Get in touch
                </NeuButton>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
