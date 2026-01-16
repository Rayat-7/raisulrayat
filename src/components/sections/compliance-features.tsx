import React from 'react';
import { Shield, Share2, BarChart2, Clock, Zap, Key } from 'lucide-react';

/**
 * ComplianceFeatures Component
 * Clones the technical features list (HIPAA, SOC2, etc.) using the icon grid layout 
 * with sky blue primary colors for the icons as requested.
 */

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Shield className="w-5 h-5 text-[#00b4ff]" />,
    title: "HIPAA and SOC2.",
    description: "Meet your compliance requirements without high spend commitments."
  },
  {
    icon: <Share2 className="w-5 h-5 text-[#00b4ff]" />,
    title: "Private networking.",
    description: "Keep traffic off the public internet via PrivateLink, no additional costs."
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-[#00b4ff]" />,
    title: "Logs & metrics export.",
    description: "Forward them directly to Datadog or any OTel-compatible service — no extra fees."
  },
  {
    icon: <Clock className="w-5 h-5 text-[#00b4ff]" />,
    title: "Uptime SLAs.",
    description: "99.95% uptime guaranteed by SLA for all workloads in Scale."
  },
  {
    icon: <Zap className="w-5 h-5 text-[#00b4ff]" />,
    title: "Point-in-time recovery.",
    description: "Restore your database instantly to any moment in time without flat monthly fees."
  },
  {
    icon: <Key className="w-5 h-5 text-[#00b4ff]" />,
    title: "Single sign-on.",
    description: "Centralize your team access with SSO to manage logins securely."
  }
];

const ComplianceFeatures: React.FC = () => {
  return (
    <section className="bg-black py-[120px] relative overflow-hidden">
      {/* Container matching max-width from high_level_design */}
      <div className="container mx-auto max-w-[1280px] px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4">
             <div className="grid grid-cols-4 gap-1 transform rotate-45">
               {[...Array(16)].map((_, i) => (
                 <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
               ))}
             </div>
          </div>
          <h2 className="text-[48px] font-medium leading-[1.2] tracking-[-0.03em] text-white max-w-[800px]">
            No platform fees. <span className="text-[#94a3b8]">Enterprise-grade features available to everyone, without fixed fees or monthly minimums.</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group transition-cyber">
              {/* Vertical accent line - subtle industrial touch */}
              <div className="hidden lg:block absolute h-32 w-px bg-border -ml-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-6 bg-surface-accent w-fit p-2.5 rounded-lg glow-primary">
                {feature.icon}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-[18px] font-medium leading-[1.3] text-white">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-[1.5] text-[#94a3b8] font-normal tracking-tight">
                  {feature.description}
                </p>
              </div>
              
              {/* Subtle bottom border on mobile/tablet */}
              <div className="mt-8 h-px w-full bg-border block lg:hidden" />
            </div>
          ))}
        </div>
      </div>

      {/* Background industrial decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Scanning line effect defined in globals.css */}
      <div className="scanline-effect absolute inset-0 opacity-10 pointer-events-none" />
    </section>
  );
};

export default ComplianceFeatures;