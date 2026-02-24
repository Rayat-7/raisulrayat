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

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raisoulrayat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <ShinyText className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4 block">
            Looking for a Frontend developer?
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
                href="mailto:raisoulrayat@gmail.com"
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors group"
              >
                <Mail size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">raisoulrayat@gmail.com</span>
              </a>
              <a
                href="tel:01892707713"
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">01892707713</span>
              </a>
              <div className="flex items-center gap-3 text-[#999]">
                <MapPin size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">Dhaka, Bangladesh</span>
              </div>
              <a
                href="https://raisulrayat.vercel.app"
                target="_blank"
                className="flex items-center gap-3 text-[#999] hover:text-white transition-colors"
              >
                <Globe size={14} className="text-[#0ea5e9] shrink-0" />
                <span className="text-sm">raisulrayat.vercel.app</span>
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
              {[
                {
                  label: "Resume",
                  href: "/resume",
                  icon: <ArrowUpRight size={14} />,
                },
                {
                  label: "Projects",
                  href: "/projects",
                  icon: <ArrowUpRight size={14} />,
                },
                {
                  label: "Download CV",
                  href: "/cv.pdf",
                  icon: <Download size={14} />,
                  download: true,
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download ? "Raisul_Rayat_CV.pdf" : undefined}
                  className="flex items-center justify-between text-[#999] hover:text-white transition-colors group"
                >
                  <span className="text-sm">{link.label}</span>
                  <span className="text-[#555] group-hover:text-[#0ea5e9] transition-colors">
                    {link.icon}
                  </span>
                </a>
              ))}
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
              {[
                {
                  icon: <Github size={14} />,
                  label: "GitHub",
                  handle: "@Rayat-7",
                  href: "https://github.com/Rayat-7",
                },
                {
                  icon: <Linkedin size={14} />,
                  label: "LinkedIn",
                  handle: "raisoul-rayat",
                  href: "https://linkedin.com/in/raisoul-rayat-48781a263",
                },
                {
                  icon: <Twitter size={14} />,
                  label: "Twitter / X",
                  handle: "@RaisulRayat",
                  href: "https://x.com/RaisulRayat",
                },
              ].map((social) => (
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
              href="mailto:raisoulrayat@gmail.com"
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
                alt="Raisul Rayat"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-mono text-[#555]">
              © {new Date().getFullYear()} Raisoul Rayat · Built with Next.js
            </span>
          </div>
          <div className="flex items-center gap-5">
            {[
              {
                icon: <Github size={14} />,
                href: "https://github.com/Rayat-7",
              },
              {
                icon: <Linkedin size={14} />,
                href: "https://linkedin.com/in/raisoul-rayat-48781a263",
              },
              {
                icon: <Twitter size={14} />,
                href: "https://x.com/RaisulRayat",
              },
            ].map((s, i) => (
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
        <h1 className="text-[12vw] md:text-[16vw] font-bold tracking-tighter leading-[0.8] whitespace-nowrap bg-gradient-to-t from-blue-500 via-blue-400 to-white bg-clip-text text-transparent">
          raisulrayat.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
