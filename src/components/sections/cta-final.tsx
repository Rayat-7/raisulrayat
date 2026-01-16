import React from 'react';
import Image from 'next/image';

const CTAFinalSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 lg:py-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source 
            src="https://cdn.neonapi.io/public/pages/home/cta/cta.mp4?updated=20260113" 
            type="video/mp4" 
          />
        </video>
        {/* Subtle Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="container relative z-10 flex flex-col px-4 md:px-8">
        {/* Large Heading Area */}
        <div className="max-w-[1000px] mb-12">
          <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
            The world&apos;s most advanced <br className="hidden md:block" />
            Postgres platform.
          </h2>
        </div>

        {/* Action Bar / Navigation Row */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-y border-[#1E293B] py-6 gap-y-6 md:gap-y-0">
          <div className="flex items-center gap-x-8">
            <a href="/" className="shrink-0">
              <span className="sr-only">Neon</span>
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2832a7b9-6393-42b6-b877-3b83b7ed050a-neon-com/assets/svgs/90a2caeddd5273e66fc8508a8eb0f5ca-4.svg"
                alt="Neon Logo"
                width={102}
                height={28}
                className="brightness-0 invert"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-x-6">
              {['Product', 'Solutions', 'Docs', 'Pricing', 'Company'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white flex items-center gap-x-1"
                >
                  {item}
                  {(item === 'Product' || item === 'Solutions' || item === 'Company') && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-60">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex items-center gap-x-4 mr-4">
              <a href="#" className="flex items-center gap-x-1.5 text-sm text-white/70 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.984 3.984c.807 0 1.488.337 2.044.91a2.82 2.82 0 0 1 .84 2.071c0 1.554-1.259 2.812-2.811 2.812h-.073c-.156.924-.627 1.706-1.414 2.316.787.61 1.258 1.392 1.414 2.316h.073c1.552 0 2.812 1.258 2.812 2.812a2.81 2.81 0 0 1-.84 2.072 2.76 2.76 0 0 1-2.044.91h-4.99c-.806 0-1.487-.338-2.043-.91a2.817 2.817 0 0 1-.84-2.072v-1.127l.001-.06c.005-.183-.002-.3-.153-.45l-.45-.45h-2.25l-.45.45c-.151.151-.158.267-.153.45l.001.06v1.127c0 .807-.338 1.488-.91 2.044a2.76 2.76 0 0 1-2.072.84h-1.13c-.807 0-1.488-.338-2.044-.91a2.817 2.817 0 0 1-.84-2.072c0-1.554 1.259-2.812 2.813-2.812h.073c.156-.924.627-1.706 1.413-2.316-.786-.61-1.257-1.392-1.413-2.316h-.073c-1.554 0-2.813-1.258-2.813-2.812 0-.807.338-1.488.91-2.044a2.768 2.768 0 0 1 2.073-.839h1.13c.806 0 1.487.337 2.043.91.492.507.772 1.13.84 1.838l.001.123.001.057c.004.183.01.3.16.45l.45.451h2.25l.45-.45c.151-.151.157-.268.152-.451V6.91a2.823 2.823 0 0 1 .84-2.071 2.753 2.753 0 0 1 2.044-.91h4.99z"/>
                </svg>
                Discord
              </a>
              <a href="#" className="flex items-center gap-x-1.5 text-sm text-white/70 hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                20.7k
              </a>
            </div>
            <a href="/login" className="text-sm font-medium text-white transition-colors hover:text-white/70">
              Log In
            </a>
            <a
              href="/signup"
              className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black transition-transform active:scale-95 hover:bg-gray-200"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-16 md:mt-32 flex flex-col md:flex-row items-end justify-between gap-y-12">
          <div className="max-w-[480px]">
            <p className="text-[20px] leading-snug tracking-tight text-white/80">
              Trusted by developers, ready for agents. Build and scale applications faster with Neon.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/signup"
              className="glow-primary inline-flex h-12 items-center justify-center rounded-full bg-[#00B4FF] px-8 text-[15px] font-semibold text-black transition-cyber hover:bg-[#33c3ff]"
            >
              Get started
            </a>
            <a
              href="/docs"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#1E293B] px-8 text-[15px] font-semibold text-white transition-cyber hover:bg-white/10"
            >
              Read the docs
            </a>
            <div className="flex items-center group cursor-pointer h-12 rounded-full px-5 bg-[#00e599]/10 border border-[#00e599]/20 transition-all hover:bg-[#00e599]/20">
               <span className="font-mono text-[#00e599] text-[13px]">$ npx neonctl init</span>
               <svg 
                  width="14" height="14" 
                  viewBox="0 0 14 14" 
                  fill="none" 
                  className="ml-3 text-[#00e599] opacity-60 group-hover:opacity-100 transition-opacity"
                >
                  <path d="M1.75 4.375C1.75 3.4085 2.5335 2.625 3.5 2.625H8.75C9.7165 2.625 10.5 3.4085 10.5 4.375V9.625C10.5 10.5915 9.7165 11.375 8.75 11.375H3.5C2.5335 11.375 1.75 10.5915 1.75 9.625V4.375Z" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5.25 1.75H10.5C11.4665 1.75 12.25 2.5335 12.25 3.5V8.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
               </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay for Texture */}
      <div className="matrix-grid pointer-events-none absolute inset-0 opacity-[0.03] z-[1]"></div>
      <div className="scanline-effect absolute inset-0 z-[2]"></div>
    </section>
  );
};

export default CTAFinalSection;