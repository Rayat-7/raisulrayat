"use client";

import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-[#1a1a1a]">
      {/* CTA Section */}
      <div className="py-24 px-8 border-b border-[#1a1a1a]">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-6 lg:text-[40px] md:text-[32px]">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-[#999999] text-lg max-w-md mx-auto mb-10">
            Open to collaborations, freelance work, or just a friendly chat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:raisoulrayat@gmail.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0ea5e9] px-8 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] hover:bg-[#0ea5e9]/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/raisulrayat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#333] bg-transparent px-8 text-[15px] font-medium text-white transition-transform hover:scale-[1.02] hover:border-[#0ea5e9]/50"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              View LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand and Mission */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-x-2">
                  <div className="h-6 w-1 bg-[#0ea5e9]" />
                  <span className="text-xl font-bold tracking-tighter uppercase">RAISUL RAYAT</span>
                </div>
                <p className="text-[#999999] text-[15px] max-w-sm leading-relaxed">
                  Building modern web applications that solve real-life problems. 
                  Constantly leveling up by exploring new technologies and ideas.
                </p>

                <div className="flex items-center gap-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse"></span>
                  <span className="text-[13px] font-medium text-white">Available for new opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999999] mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:raisoulrayat@gmail.com" className="flex items-center gap-3 text-[14px] text-[#999999] hover:text-white transition-colors">
                    <Mail size={16} className="text-[#0ea5e9]" />
                    raisoulrayat@gmail.com
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-[14px] text-[#999999]">
                    <Phone size={16} className="text-[#0ea5e9]" />
                    +880 123 456 7890
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-3 text-[14px] text-[#999999]">
                    <MapPin size={16} className="text-[#0ea5e9]" />
                    Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999999] mb-6">
                Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#techstack" className="text-[14px] text-[#999999] hover:text-white transition-colors">
                    Tech Stack
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="md:col-span-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#999999] mb-6">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/rayat-7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-[#999999] hover:text-white transition-colors">
                  <Github size={18} />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/raisulrayat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-[#999999] hover:text-white transition-colors">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-[#999999] hover:text-white transition-colors">
                  <Twitter size={18} />
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[#999999] text-[12px]">
              © {new Date().getFullYear()} Raisul Rayat Omi. All rights reserved.
            </div>
            <div className="text-[#999999] text-[12px] flex items-center gap-1">
              Built with Next.js & Tailwind CSS
              <span className="text-[#0ea5e9] ml-1">♥</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
