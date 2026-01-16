import React from 'react';
import Image from 'next/image';
import { 
  DiscordIcon, 
  GithubIcon, 
  XIcon, 
  LinkedinIcon, 
  YoutubeIcon 
} from 'lucide-react';

/**
 * Footer component cloned with pixel perfect accuracy for the Neon branding.
 * Theme: Dark
 * Colors: background-pure (#000000), text-primary (#FFFFFF), text-secondary (#999999), 
 * primary-accent/Social icons: Sky Blue (#00B4FF).
 */

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact Sales', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Legal', href: '#', hasArrow: true },
  ],
  resources: [
    { label: 'Docs', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Community Guides', href: '#' },
    { label: 'PostgreSQL Tutorial', href: '#' },
    { label: 'Startups', href: '#' },
    { label: 'Creators', href: '#' },
  ],
  community: [
    { label: 'Discord', href: '#', icon: 'discord' },
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'X.com', href: '#', icon: 'x' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ],
  compliance: [
    { label: 'CCPA Compliant', href: '#' },
    { label: 'GDPR Compliant', href: '#' },
    { label: 'ISO 27001 Certified', href: '#' },
    { label: 'ISO 27701 Certified', href: '#' },
    { label: 'SOC 2 Certified', href: '#' },
    { label: 'HIPAA Compliant', href: '#', hasArrow: true },
    { label: 'Trust Center', href: '#' },
  ],
};

const SocialIcon = ({ type }: { type: string }) => {
  const className = "w-[14px] h-[14px] text-[#00B4FF]"; // Replaced green with Sky Blue per design instructions
  switch (type) {
    case 'discord': return <DiscordIcon className={className} />;
    case 'github': return <GithubIcon className={className} />;
    case 'x': return <XIcon className={className} />;
    case 'linkedin': return <LinkedinIcon className={className} />;
    case 'youtube': return <YoutubeIcon className={className} />;
    default: return null;
  }
};

const FooterColumn = ({ title, links }: { title: string, links: any[] }) => (
  <div className="flex flex-col gap-y-4">
    <h3 className="font-mono-label text-[10px] text-[#999999] tracking-[0.05em] uppercase mb-2">
      {title}
    </h3>
    <ul className="flex flex-col gap-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a 
            href={link.href} 
            className="group flex items-center gap-x-2 text-[14px] leading-tight text-[#FFFFFF] hover:text-[#00B4FF] transition-colors duration-200"
          >
            {link.icon && <SocialIcon type={link.icon} />}
            <span>{link.label}</span>
            {link.hasArrow && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="ml-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M7.5 4.5L5 7L2.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="rotate-270 origin-center" />
              </svg>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] border-t border-[#1A1A1A] pt-[80px] pb-[60px] noise-overlay relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col gap-y-1">
              <a href="/" className="block">
                 <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/favicon-9.svg" 
                  alt="Neon Logo" 
                  width={24} 
                  height={24}
                  className="mb-2"
                />
                <span className="text-xl font-medium tracking-tighter text-white">NEON</span>
              </a>
              <p className="text-[13px] text-[#999999]">A Databricks Company</p>
            </div>

            <div className="pt-10 space-y-4">
              <div className="flex items-center gap-x-2">
                <div className="w-2 h-2 rounded-full bg-[#00B4FF] shadow-[0_0_8px_rgba(0,180,255,0.6)]"></div>
                <span className="text-[13px] font-medium text-white">All systems operational</span>
              </div>
              <p className="text-[12px] text-[#999999] leading-relaxed max-w-[240px]">
                Made in SF and the World. Copyright © 2022 – 2026 Neon, LLC
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Community" links={footerLinks.community} />
          <FooterColumn title="Compliance" links={footerLinks.compliance} />
          
        </div>
      </div>
    </footer>
  );
}