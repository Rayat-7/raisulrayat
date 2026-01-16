import React from 'react';
import { Layers, UserCircle, Grid3X3 } from 'lucide-react';

const BranchingFeatures = () => {
  return (
    <section className="bg-background relative py-[160px] overflow-hidden">
      {/* Background Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-[0.05]" />

      <div className="container relative z-10 px-8 md:px-16 lg:px-32 max-w-[1856px] mx-auto">
        {/* Header Section */}
        <div className="max-w-[800px] mb-20">
          <div className="mb-8">
             <div className="w-[48px] h-[48px] overflow-hidden">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <circle cx="10" cy="10" r="3" fill="currentColor" />
                  <circle cx="30" cy="10" r="3" fill="currentColor" />
                  <circle cx="10" cy="30" r="3" fill="currentColor" />
                  <circle cx="30" cy="30" r="3" fill="currentColor" />
                  <circle cx="20" cy="20" r="3" fill="currentColor" />
                  <path d="M12 12L18 18M28 12L22 18M12 28L18 22M28 28L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
             </div>
          </div>
          
          <h2 className="section-heading text-white mb-6">
            Instant branching. <span className="text-text-secondary">Develop and test with efficient copies of any database to eliminate surprises in production deploys.</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {/* Copy-on-write */}
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 text-white mb-2">
              <Layers className="w-5 h-5" />
              <h3 className="text-[18px] font-medium tracking-tight">Copy-on-write</h3>
            </div>
            <p className="text-text-secondary text-[16px] leading-[1.6]">
              Create editable copies of databases instantly with git-like branching, saving space and time.
            </p>
          </div>

          {/* Anonymization */}
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 text-white mb-2">
              <UserCircle className="w-5 h-5" />
              <h3 className="text-[18px] font-medium tracking-tight">Anonymization</h3>
            </div>
            <p className="text-text-secondary text-[16px] leading-[1.6]">
              Mask sensitive data with realistic fake values, enabling safe testing and sharing of datasets.
            </p>
          </div>

          {/* Ephemerality */}
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 text-white mb-2">
              <Grid3X3 className="w-5 h-5" />
              <h3 className="text-[18px] font-medium tracking-tight">Ephemerality</h3>
            </div>
            <p className="text-text-secondary text-[16px] leading-[1.6]">
              Obsolete branches delete themselves automatically after work is complete.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="mt-[160px] w-full h-px bg-border opacity-50" />
      </div>

      {/* Optional Grainy Gradient for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] grainy-gradient opacity-20 pointer-events-none blur-[120px]" />
    </section>
  );
};

export default BranchingFeatures;