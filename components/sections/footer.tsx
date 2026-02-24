"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  Download,
  Globe,
} from "lucide-react";
import ShinyText from "../ui/shiny-text";
import Image from "next/image";
import { personalInfo, navigationLinks } from "@/lib/data";

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      icon: <Github size={14} />,
      label: "GitHub",
      handle: personalInfo.githubUsername,
      href: personalInfo.github,
    },
    {
      icon: <Linkedin size={14} />,
      label: "LinkedIn",
      handle: personalInfo.linkedinUsername,
      href: personalInfo.linkedin,
    },
    {
      icon: <Twitter size={14} />,
      label: "Twitter / X",
      handle: personalInfo.twitterUsername,
      href: personalInfo.twitter,
    },
  ];

  return (
    <footer className="w-full bg-black text-white pt-20 pb-0 relative overflow-hidden border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6 mb-16 relative z-10 w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Terminal size={18} className="text-[#0ea5e9]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#0ea5e9]">
              Let&apos;s Connect
            </span>
          </div>
          <ShinyText className="text-4xl md:text-4xl lg:text-5xl tracking-tight mb-4 block">
            Looking for a {personalInfo.title}?
          </ShinyText>
          <p className="text-[#666] text-lg max-w-lg">
            I&apos;m actively looking for opportunities where I can contribute,
            grow, and build meaningful products.
          </p>
        </div>

        {/* Main Grid — No Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16 mb-16">
          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#555] mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors group"
              >
                <Mail size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-[#999]">
                <MapPin size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors"
              >
                <Globe size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">
                  {personalInfo.portfolio.replace("https://", "")}
                </span>
              </a>
            </div>

            {/* Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="mt-6 flex items-center gap-2 text-xs font-mono text-[#555] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#555] mb-6">
              Quick Links
            </h3>
            <div className="space-y-4">
              {navigationLinks.slice(1).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between text-[#999] hover:text-white transition-colors group"
                >
                  <span className="text-sm">{link.label}</span>
                  <span className="text-[#555] group-hover:text-[#0ea5e9] transition-colors">
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              ))}
              <a
                href="/cv.pdf"
                download="Raisul_Rayat_CV.pdf"
                className="flex items-center justify-between text-[#999] hover:text-white transition-colors group"
              >
                <span className="text-sm">Download CV</span>
                <span className="text-[#555] group-hover:text-[#0ea5e9] transition-colors">
                  <Download size={14} />
                </span>
              </a>
            </div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-[#666]">
                Open for opportunities
              </span>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#555] mb-6">
              Socials
            </h3>
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-[#999] hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#555] group-hover:text-[#0ea5e9] transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-sm">{social.label}</span>
                  </div>
                  <span className="text-xs font-mono text-[#444]">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0ea5e9] hover:text-white transition-colors"
            >
              <Mail size={14} />
              Let&apos;s talk →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden border border-[#333]">
              <Image
                src="/portfolio_img.jpg"
                alt={personalInfo.name}
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-mono text-[#555]">
              © {new Date().getFullYear()} {personalInfo.name} · Built with
              Next.js
            </span>
          </div>
          <div className="flex items-center gap-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-white transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big Background Text — KEPT AS IS */}
      <div className="w-full overflow-hidden flex justify-center pointer-events-none select-none">
        <h1
          className="text-[12vw] md:text-[16vw] font-semibold tracking-tighter leading-[0.8] whitespace-nowrap animate-shine bg-clip-text text-black"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(59, 130, 246, 0.8) 35%, #ffffff 45%, #60a5fa 50%, #ffffff 55%, rgba(59, 130, 246, 0.8) 65%)",
            backgroundSize: "200% 100%",
          }}
        >
          {personalInfo.name.toLowerCase().replace(" ", "")}.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
