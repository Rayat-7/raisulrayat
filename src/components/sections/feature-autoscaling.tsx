import React from 'react';

const FeatureAutoscaling = () => {
  return (
    <section className="relative w-full bg-[#E0F2FE] py-[120px] overflow-hidden">
      <div className="container mx-auto px-8 max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="mb-8 block">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#00B4FF]"
            >
              <circle cx="4" cy="28" r="1.5" fill="currentColor" />
              <circle cx="9" cy="28" r="1.5" fill="currentColor" />
              <circle cx="14" cy="28" r="1.5" fill="currentColor" />
              <circle cx="19" cy="28" r="1.5" fill="currentColor" />
              <circle cx="9" cy="23" r="1.5" fill="currentColor" />
              <circle cx="14" cy="23" r="1.5" fill="currentColor" />
              <circle cx="19" cy="23" r="1.5" fill="currentColor" />
              <circle cx="14" cy="18" r="1.5" fill="currentColor" />
              <circle cx="19" cy="18" r="1.5" fill="currentColor" />
              <circle cx="19" cy="13" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <h2 className="max-w-[840px] text-[48px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B0B0B] lg:text-[40px]">
            Advanced autoscaling.{' '}
            <span className="text-[#64748B]">
              Keep scaling without worrying about capacity. Never overpay for resources you don’t use.
            </span>
          </h2>
        </div>

        {/* Action Toggle */}
        <div className="mb-12 flex items-center">
          <div className="flex rounded-md border border-[#CBD5E1] p-1 shadow-sm">
            <button className="rounded px-4 py-1.5 text-sm font-medium bg-white text-black shadow-sm transition-all">
              Avoid incidents
            </button>
            <button className="rounded px-4 py-1.5 text-sm font-medium text-[#64748B] hover:text-black transition-all">
              Save costs
            </button>
          </div>
        </div>

        {/* Data Visualization Container */}
        <div className="relative w-full border-t border-[#CBD5E1] pt-12">
          <div className="grid grid-cols-2 gap-0 relative">
            {/* Left Side: Without Neon */}
            <div className="relative pr-8">
              <span className="label-small mb-4 block text-[12px] font-medium uppercase tracking-[0.05em] text-[#64748B]">
                Without Neon
              </span>
              <div className="relative h-[320px] w-full border-b border-[#CBD5E1]">
                {/* Horizontal Guide Line */}
                <div className="absolute top-[80px] left-0 w-full border-t border-black/20 z-0" />
                
                {/* Graph Placeholder - Without Neon (Incidents) */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  {/* Provisioned background area */}
                  <rect x="0" y="80" width="100%" height="240" fill="rgba(0, 180, 255, 0.05)" />
                  {/* Load line with spikes exceeding provisioned */}
                  <path
                    d="M0 260 L40 250 L80 270 L120 220 L160 210 L200 80 L220 30 L240 80 L280 230 L320 250 L360 210 L400 240 L440 260"
                    fill="none"
                    stroke="#F43F5E"
                    strokeWidth="1.5"
                  />
                  {/* Red dotted area for incident */}
                  <path
                    d="M185 80 L200 80 L220 30 L240 80 L255 80 Z"
                    fill="url(#incident-dots)"
                    className="opacity-50"
                  />
                  <defs>
                    <pattern id="incident-dots" width="4" height="4" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="#F43F5E" />
                    </pattern>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#CBD5E1] z-10" />

            {/* Right Side: With Neon */}
            <div className="relative pl-8">
              <span className="label-small mb-4 block text-[12px] font-medium uppercase tracking-[0.05em] text-[#64748B]">
                With Neon
              </span>
              <div className="relative h-[320px] w-full border-b border-[#CBD5E1]">
                {/* Horizontal Guide Line (Floating Provisioned) */}
                <div className="absolute top-[80px] left-0 w-full border-t border-black/20 z-0" />
                
                {/* Graph Area - With Neon (Autoscaling) */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  {/* Neon Autoscaling Fill - Sky Blue Color replacement per instructions */}
                  <path
                    d="M0 260 L30 255 L60 270 L90 220 L120 200 L150 215 L180 80 L210 30 L240 85 L270 230 L300 150 L330 20 L360 50 L390 180 L420 120 L450 140 L480 240 L510 210"
                    fill="rgba(0, 180, 255, 0.2)"
                    stroke="#00B4FF"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  {/* Bar-style representation for discrete scaling steps as seen in original */}
                  <path
                    d="M30 255 V280 M60 270 V280 M90 220 V280 M120 200 V280 M180 80 V280 M210 30 V280 M300 150 V280 M330 20 V280 M360 50 V280 M420 120 V280"
                    stroke="#00B4FF"
                    strokeWidth="12"
                    strokeOpacity="0.4"
                  />
                   <pattern id="neon-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#00B4FF" />
                    </pattern>
                    <path
                     d="M170 320 L180 80 L210 30 L240 85 L250 320 Z"
                     fill="url(#neon-dots)"
                     className="opacity-30"
                    />
                </svg>
              </div>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="mt-4 flex w-full items-center bg-[#CCEBED]/30 py-2 px-4 rounded-sm">
            <span className="text-[14px] font-mono-code font-bold text-[#00B4FF]">54,210</span>
            <span className="ml-4 text-[11px] font-medium uppercase tracking-[0.05em] text-[#334155]">
              Performance degradations prevented by Autoscaling every day
            </span>
          </div>

          {/* Legend and Description */}
          <div className="mt-8 flex flex-wrap items-start justify-between gap-y-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-x-2">
                <div className="h-4 w-4 rounded-sm bg-[#00B4FF]" />
                <span className="text-[14px] font-medium text-[#334155]">Neon autoscaling</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-4 w-4 border border-[#94A3B8] flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="h-0.5 w-0.5 bg-[#94A3B8]" /><div className="h-0.5 w-0.5 bg-[#94A3B8]" />
                    <div className="h-0.5 w-0.5 bg-[#94A3B8]" /><div className="h-0.5 w-0.5 bg-[#94A3B8]" />
                  </div>
                </div>
                <span className="text-[14px] font-medium text-[#334155]">Database load</span>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-4 w-4 border border-[#94A3B8] border-dashed" />
                <span className="text-[14px] font-medium text-[#334155]">Fixed-resource provisioned</span>
              </div>
            </div>

            <p className="max-w-[440px] text-[15px] leading-relaxed text-[#475569]">
              By separating compute and storage, Neon automatically scales CPU, memory and storage to fit your workload.
            </p>
          </div>
        </div>
      </div>

      {/* Background Polish */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30 noise-texture" />
    </section>
  );
};

export default FeatureAutoscaling;