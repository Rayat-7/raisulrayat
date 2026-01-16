"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-20 px-8 border-t border-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand and Mission */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-1 bg-[#0ea5e9]" />
                <span className="text-xl font-bold tracking-tighter uppercase">RAISUL RAYAT</span>
              </div>
              <p className="text-[#999999] text-lg max-w-md leading-relaxed">
                Building modern web applications that solve real-life problems. 
                Constantly leveling up by exploring new technologies and ideas.
              </p>
            </div>

            <div className="mt-20 flex items-center gap-x-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></span>
              <span className="text-[13px] font-medium text-white">Available for new opportunities</span>
            </div>
          </div>

          {/* Contact and Socials */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end justify-between">
            <div className="flex flex-col items-start md:items-end gap-y-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#999999]">
                Let's Connect
              </h3>
              <div className="flex flex-wrap gap-6 justify-start md:justify-end">
                <a href="mailto:contact@raisulrayat.com" className="text-[#999999] hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/rayat-7" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#999999] hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <div className="mt-20 text-[#999999] text-[11px]">
              © {new Date().getFullYear()} Raisul Rayat. Built with Next.js and Tailwind CSS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
