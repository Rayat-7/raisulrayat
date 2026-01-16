import React from 'react';
import { Database, ShieldCheck, Zap } from 'lucide-react';

/**
 * FeatureGrid Component
 * Clones the "Instant branching" section of the Neon website with Sky Blue theme adaptations.
 * Features a dark aesthetic, tech iconography, and interactive-style grid layout.
 */
export default function FeatureGrid() {
  return (
    <section className="bg-black text-white py-[120px] relative overflow-hidden noise-texture">
      <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-[800px] mb-16">
          <div className="mb-8">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 48 48" 
              fill="none" 
              className="text-[#00B4FF] glow-primary"
            >
              <path 
                d="M12 12C12 10.3431 13.3431 9 15 9H33C34.6569 9 36 10.3431 36 12V36C36 37.6569 34.6569 39 33 39H15C13.3431 39 12 37.6569 12 36V12Z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path d="M18 15H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 21H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M18 27H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="15" cy="33" r="2" fill="currentColor" />
              <circle cx="21" cy="33" r="2" fill="currentColor" />
              <circle cx="27" cy="33" r="2" fill="currentColor" />
            </svg>
          </div>
          
          <h2 className="text-[48px] font-medium leading-[1.1] tracking-[-0.03em] mb-6">
            Instant branching. <span className="text-gray-new-60">Develop and test with efficient copies of any database to eliminate surprises in production deploys.</span>
          </h2>
        </div>

        {/* Vertical Progress Bar Visual - Customized per instructions to Sky Blue */}
        <div className="relative w-full h-[180px] mb-24 border-b border-gray-new-20 flex items-end gap-1 overflow-hidden">
          {Array.from({ length: 90 }).map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gray-new-10 hover:bg-[#00B4FF] transition-cyber duration-500"
              style={{ 
                height: `${Math.max(10, Math.sin(i * 0.2) * 40 + 50 + Math.random() * 20)}%`,
                opacity: i % 3 === 0 ? 0.4 : 0.1,
                backgroundColor: i > 40 && i < 60 ? '#00B4FF' : undefined,
                boxShadow: i > 40 && i < 60 ? '0 0 15px rgba(0, 180, 255, 0.4)' : 'none'
              }}
            />
          ))}
          <div className="absolute left-[45%] bottom-4 bg-[#0B0B0B] border border-[#00B4FF] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(0,180,255,0.2)]">
            <div className="w-2 h-2 rounded-full bg-[#00B4FF] animate-pulse" />
            <span className="text-[13px] font-medium tracking-snug">production</span>
          </div>
        </div>

        {/* Feature 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Copy-on-write */}
          <div className="flex flex-col gap-5 group">
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-[#00B4FF]" />
              <h3 className="text-lg font-medium tracking-tight">Copy-on-write</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-new-60 tracking-extra-tight">
              Create editable copies of databases instantly with git-like branching, saving space and time.
            </p>
          </div>

          {/* Anonymization */}
          <div className="flex flex-col gap-5 group">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00B4FF]" />
              <h3 className="text-lg font-medium tracking-tight">Anonymization</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-new-60 tracking-extra-tight">
              Mask sensitive data with realistic fake values, enabling safe testing and sharing of datasets.
            </p>
          </div>

          {/* Ephemerality */}
          <div className="flex flex-col gap-5 group">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#00B4FF]" />
              <h3 className="text-lg font-medium tracking-tight">Ephemerality</h3>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-new-60 tracking-extra-tight">
              Obsolete branches delete themselves automatically after work is complete.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-new-20 to-transparent" />
      
      {/* Matrix background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20 matrix-grid" />
    </section>
  );
}