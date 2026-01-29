"use client";

import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  Facebook,
  Instagram, 
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { NeuButton } from "@/components/ui/neu-button";
import Image from 'next/image';

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("raisoulrayat@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-black text-white pt-24 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-24 relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Large Card */}
          <div 
            className="lg:col-span-5 flex flex-col justify-between rounded-[32px] p-8 md:p-12 relative overflow-hidden group border-2 border-transparent animate-border"
            style={{
              background: 'linear-gradient(#0d0d0d, #0d0d0d) padding-box, conic-gradient(from var(--border-angle), transparent 20%, #0ea5e9 40%, #ffffff 50%, #0ea5e9 60%, transparent 80%) border-box',
            }}
          >
             {/* Gradient glow effect */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0ea5e9]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#1a1a1a] mb-8">
                 <Image 
                    src="/portfolio_img.jpg"
                    alt="Raisul Rayat"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                 />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                I’m Raisul Rayat.
              </h2>
              <p className="text-[#999] text-lg max-w-sm mb-12">
                I care about making your startup look and feel ready to pitch.
              </p>

              {/* Signature (Stylized Text representation) */}
              <div className="mb-16">
                 <div className="relative w-48 h-24">
                   <svg viewBox="0 0 200 100" className="w-full h-full text-[#0ea5e9] opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M20,60 Q50,10 80,60 T140,60 T190,40" strokeLinecap="round" strokeDasharray="5 5" className="animate-pulse" />
                     <text x="50%" y="60%" textAnchor="middle" fill="currentColor" stroke="none" fontFamily="cursive" fontSize="24" fontStyle="italic">Raisul</text>
                   </svg>
                 </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-6 mt-auto">
               <div className="flex items-center gap-2">
                 <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-[#ccc]">Taking New Projects</span>
               </div>
               
               <div className="flex items-center gap-3">
                  <a 
                    href="mailto:raisoulrayat@gmail.com"
                    className="px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Mail size={16} />
                    Book a Call
                  </a>
                  <a 
                    href="/resume"
                    className="px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
                  >
                    <ArrowUpRight size={16} />
                    View Resume
                  </a>
               </div>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {/* Social Cards */}
             <SocialCard 
               label="Source" 
               icon={<Github size={24} />} 
               platform="GitHub" 
               href="https://github.com/raisulrayat"
             />
             <SocialCard 
               label="Community" 
               icon={<Facebook size={24} />} 
               platform="Facebook" 
               href="#"
             />
             <SocialCard 
               label="Follow" 
               icon={<Instagram size={24} />} 
               platform="Instagram" 
               href="#"
             />
             <SocialCard 
               label="Connect" 
               icon={<Linkedin size={24} />} 
               platform="LinkedIn" 
               href="https://linkedin.com/in/raisulrayat"
             />
             <SocialCard 
               label="Call Me" 
               icon={<Phone size={24} />} 
               platform="+880123456789" 
               href="tel:+880123456789"
             />
             <SocialCard 
               label="Follow" 
               icon={<Twitter size={24} />} 
               platform="Twitter / X" 
               href="https://twitter.com"
             />

             {/* Email Card (Full Width) */}
              <div className="sm:col-span-2 md:col-span-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-[24px] p-6 flex flex-col justify-between group hover:border-[#0ea5e9]/30 transition-colors">
                <span className="text-[11px] font-medium text-[#666] uppercase tracking-wider mb-4">Or, Feel free to send a email</span>
                <div className="flex items-center justify-between gap-4">
                   <div className="flex items-center gap-4 text-white">
                      <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#999]">
                        <Mail size={20} />
                      </div>
                      <span className="text-xl md:text-2xl font-medium tracking-tight">raisoulrayat@gmail.com</span>
                   </div>
                   <button 
                    onClick={handleCopyEmail}
                    className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#999] hover:bg-[#222] hover:text-white transition-colors"
                   >
                      {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                   </button>
                </div>
              </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between text-[#666] text-xs font-medium uppercase tracking-wider">
           <div className="flex items-center gap-2">
             Hand made and Home Made 
             <span className="text-[#0ea5e9] animate-pulse">✦</span> 
             © Raisul Rayat
           </div>
           <div className="flex items-center gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Payment Policy</a>
             <span className="text-[#333]">+</span>
             <a href="#" className="hover:text-white transition-colors">T&C and Privacy Policies</a>
           </div>
        </div>
      </div>

     {/* Big Background Text */}
      <div className="w-full overflow-hidden flex justify-center  pointer-events-none select-none">
          <h1 className="text-[15vw] md:text-[20vw] font-bold  tracking-tighter leading-[0.8] whitespace-nowrap bg-gradient-to-t from-blue-500 via-blue-400 to-white bg-clip-text text-transparent">
            raisulrayat.
          </h1>
      </div>
    </footer>
  );
};

// Helper Component for Social Cards
const SocialCard = ({ label, icon, platform, href }: { label: string, icon: React.ReactNode, platform: string, href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-[24px] p-6 flex flex-col justify-between h-[160px] group hover:border-[#0ea5e9]/30 transition-all hover:-translate-y-1"
    >
      <span className="text-[11px] font-medium text-[#666] uppercase tracking-wider">{label}</span>
      <div>
         <div className="text-white mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
           {React.isValidElement(icon) && React.cloneElement(icon, { className: "w-8 h-8" } as any)}
         </div>
         <span className="text-lg font-medium text-white tracking-tight">{platform}</span>
      </div>
    </a>
  )
}

export default Footer;
