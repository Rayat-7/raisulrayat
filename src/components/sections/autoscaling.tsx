import React from 'react';

/**
 * AutoscalingSection Component
 * 
 * A light green themed section (Soft Mint) that features high-contrast dark elements.
 * Clones the "Advanced autoscaling" section with the comparative graph and prevention metric.
 */
const AutoscalingSection: React.FC = () => {
  return (
    <section className="bg-[#EBF5F0] text-black-pure py-[120px] relative overflow-hidden">
      {/* Noise overlay for tactile feel as per high-level design */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-[760px] mb-16">
          {/* Section Icon / Logo */}
          <div className="mb-8">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="20" width="4" height="8" rx="1" fill="#000" />
              <rect x="6" y="14" width="4" height="14" rx="1" fill="#000" />
              <rect x="12" y="8" width="4" height="20" rx="1" fill="#000" />
              <rect x="18" y="14" width="4" height="14" rx="1" fill="#000" />
              <rect x="24" y="4" width="4" height="24" rx="1" fill="#000" />
              <circle cx="2" cy="14" r="1.5" fill="#000" opacity="0.3" />
              <circle cx="8" cy="8" r="1.5" fill="#000" opacity="0.3" />
              <circle cx="14" cy="2" r="1.5" fill="#000" opacity="0.3" />
              <circle cx="20" cy="8" r="1.5" fill="#000" opacity="0.3" />
            </svg>
          </div>

          <h2 className="h2-section text-black-pure leading-[1.1] mb-6">
            Advanced autoscaling. <span className="text-black-pure/60">Keep scaling without worrying about capacity. Never overpay for resources you don’t use.</span>
          </h2>

          <div className="flex gap-2 mt-10">
            <button className="bg-white border border-gray-new-90 px-4 py-2 rounded-sm text-[13px] font-medium transition-colors hover:bg-gray-50">
              Avoid incidents
            </button>
            <button className="bg-transparent border border-gray-new-90/50 px-4 py-2 rounded-sm text-[13px] font-medium opacity-60 transition-colors hover:bg-black/5">
              Save costs
            </button>
          </div>
        </div>

        {/* Comparative Performance Graph Area */}
        <div className="mt-12 w-full bg-white/40 border border-[#E6E6E6] rounded-sm overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 relative h-[360px]">
            {/* Left side: Without Neon */}
            <div className="relative border-r border-[#E6E6E6] p-6 flex flex-col justify-between">
              <span className="text-[11px] font-medium uppercase tracking-wider text-black-pure/40">Without Neon</span>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden pb-12">
                 {/* Decorative Grid and Spikes Line */}
                 <div className="w-full h-full opacity-20 dot-matrix"></div>
                 <div className="absolute bottom-12 w-full h-[60%] flex items-end">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path 
                        d="M0,80 L10,82 L20,75 L30,85 L40,30 L45,100 L50,85 L60,82 L70,88 L80,80 L90,85 L100,78" 
                        fill="none" 
                        stroke="#FF4D4D" 
                        strokeWidth="1.5" 
                      />
                      <rect x="38" y="20" width="4" height="60" fill="url(#redGrad)" opacity="0.4" />
                      <defs>
                        <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF4D4D" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                 </div>
              </div>
            </div>

            {/* Right side: With Neon */}
            <div className="relative p-6 flex flex-col justify-between bg-white/20">
              <span className="text-[11px] font-medium uppercase tracking-wider text-black-pure/40">With Neon</span>
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden pb-12">
                 {/* Matching Neon Scaled Line */}
                 <div className="absolute bottom-12 w-full h-[85%] flex items-end">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path 
                        d="M0,80 L10,75 L20,68 L30,10 L40,40 L44,20 L55,45 L65,70 L75,75 L85,82 L100,78" 
                        fill="#00E699" 
                        stroke="#00C080" 
                        strokeWidth="1" 
                        opacity="0.6"
                      />
                      <path 
                        d="M0,80 L10,75 L20,68 L30,10 L40,40 L44,20 L55,45 L65,70 L75,75 L85,82 L100,78 L100,100 L0,100 Z" 
                        fill="url(#greenGrad)"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E699" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                 </div>
              </div>
            </div>

            {/* Middle Vertical Divider Label (if any) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 border border-[#E6E6E6] rounded-full text-[10px] font-bold z-10 hidden md:block">
              LOAD SPIKE
            </div>
          </div>

          {/* Metric Bar */}
          <div className="bg-[#D9EAE2] px-6 py-4 flex items-center justify-between border-t border-[#CCE0D7]">
            <div className="flex items-center gap-4">
              <div className="bg-black-pure text-white text-[12px] font-mono rounded px-1.5 py-0.5">
                8
              </div>
              <span className="text-[13px] font-medium uppercase tracking-wide text-black-pure/70">
                Performance degradations prevented by Autoscaling every day
              </span>
            </div>
            <div className="text-[18px] font-medium tabular-nums">
              54,210
            </div>
          </div>
        </div>

        {/* Legend and Footer of section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00E699] rounded-[2px]" />
              <span className="text-body-small text-black-pure/60">Neon autoscaling</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border border-black-pure/20 bg-black-pure/5 rounded-[2px]" />
              <span className="text-body-small text-black-pure/60">Database load</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-px bg-black-pure/20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black-pure/40 rounded-full" />
              </div>
              <span className="text-body-small text-black-pure/60">Fixed-resource provisioned</span>
            </div>
          </div>

          <p className="max-w-[340px] text-body-small text-black-pure/60 leading-normal">
            By separating compute and storage, Neon automatically scales CPU, memory and storage to fit your workload.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoscalingSection;