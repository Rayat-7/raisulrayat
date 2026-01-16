import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Product', id: 'product', hasDropdown: true },
    { label: 'Solutions', id: 'solutions', hasDropdown: true },
    { label: 'Docs', href: 'https://neon.tech/docs', hasDropdown: false },
    { label: 'Pricing', href: 'https://neon.tech/pricing', hasDropdown: false },
    { label: 'Company', id: 'company', hasDropdown: true },
  ];

  const productMenu = {
    sections: [
      {
        title: 'Database',
        items: [
          { title: 'Autoscaling', description: 'Automatic instance sizing', href: '#' },
          { title: 'Branching', description: 'Faster Postgres workflows', href: '#' },
          { title: 'Bottomless storage', description: 'With copy-on-write', href: '#' },
          { title: 'Instant restores', description: 'Recover TBs in seconds', href: '#' },
          { title: 'Connection pooler', description: 'Built-in with pgBouncer', href: '#' },
        ],
      },
      {
        title: 'Ecosystem',
        items: [
          { title: 'Neon API', description: 'Manage infra, billing, quotas', href: '#' },
          { title: 'Auth', description: 'Add authentication", href: "#' },
          { title: 'Data API', description: 'PostgREST-compatible', href: '#' },
          { title: 'Instagres', description: 'No-signup flow', href: '#' },
          { title: 'Migration guides', description: 'Step-by-step', href: '#' },
        ],
      },
    ],
    featured: {
      title: 'What is Neon',
      description: 'Serverless Postgres, by Databricks',
      href: '#',
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Promo Banner */}
      <a 
        href="https://neon.com/blog/atoms-is-out-a-multi-agent-ai-team-that-builds-full-stack-apps-for-you"
        className="group relative flex h-9 w-full items-center justify-center overflow-hidden border-b border-[#1A1A1A] bg-[#0D0D0D] px-4 py-2.5 transition-colors duration-200"
      >
        <div className="relative z-10 flex items-center gap-x-1.5">
          <span className="truncate text-sm font-medium leading-none tracking-tight text-white group-hover:text-[#999999] transition-colors duration-200">
            Neon powers agents and codegen platforms across the board - including Atoms, a multi-agent AI team built for production
          </span>
          <ArrowRight size={14} className="text-white opacity-60 transition-transform group-hover:translate-x-0.5" />
        </div>
        {/* Background Patterns (Placeholders for original assets) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none grid-blueprint" />
      </a>

      {/* Main Navigation */}
      <header 
        className={`relative flex h-16 w-full items-center bg-black transition-all duration-200 border-b border-[#1A1A1A] ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black'}`}
        onMouseLeave={() => setActiveSubmenu(null)}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-[92px] xl:gap-x-10">
            {/* Logo */}
            <a href="/" className="block shrink-0 focus-visible:outline-offset-4">
              <span className="sr-only">Neon</span>
              <svg width="102" height="28" viewBox="0 0 102 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M16.4251 1.9375L0.25 18.1126V26.0625H8.2L24.3751 9.8874L16.4251 1.9375Z" fill="currentColor"/>
                <path d="M24.3751 9.8874L40.5502 26.0625H48.5002V18.1126L32.3251 1.9375L24.3751 9.8874Z" fill="currentColor"/>
                <path d="M60.9752 5.925L53.0251 13.8751L60.9752 21.8252L68.9253 13.8751L60.9752 5.925Z" fill="currentColor"/>
                <path d="M85.3503 13.8751L77.4003 21.8252V26.0625H81.6377L89.5878 18.1126V13.8751H85.3503Z" fill="currentColor"/>
                <path d="M85.3503 13.8751L93.3004 5.925V1.6875H89.063L81.1129 9.63756V13.8751H85.3503Z" fill="currentColor"/>
              </svg>
            </a>

            {/* Nav Links */}
            <nav className="hidden lg:block">
              <ul className="flex items-center">
                {navItems.map((item) => (
                  <li key={item.label} className="relative">
                    {item.hasDropdown ? (
                      <button
                        onMouseEnter={() => setActiveSubmenu(item.id)}
                        className={`group flex items-center gap-x-1 px-3.5 py-2 text-[15px] font-normal leading-normal tracking-snug transition-colors duration-200 ${activeSubmenu === item.id ? 'text-[#00B4FF]' : 'text-[#999999] hover:text-white'}`}
                      >
                        {item.label}
                        <ChevronDown 
                          size={14} 
                          className={`opacity-60 transition-transform duration-200 group-hover:text-white ${activeSubmenu === item.id ? 'rotate-180 text-[#00B4FF]' : ''}`} 
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center gap-x-1 px-3.5 py-2 text-[15px] font-normal leading-normal tracking-snug text-[#999999] transition-colors duration-200 hover:text-white"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-x-4">
            <a 
              href="https://console.neon.tech/login" 
              className="text-[15px] font-medium text-white transition-colors duration-200 hover:text-[#999999]"
            >
              Log in
            </a>
            <a 
              href="https://console.neon.tech/register" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-[15px] font-semibold text-black transition-colors duration-200 hover:bg-[#EBF8FF]"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* Dropdown Menu Container */}
        <div 
          className={`absolute left-0 top-full z-40 w-full overflow-hidden border-b border-[#1A1A1A] bg-black transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeSubmenu ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        >
          {activeSubmenu === 'product' && (
            <div className="container pt-10 pb-20">
              <div className="flex w-full gap-x-20">
                <div className="grid flex-1 grid-cols-2 gap-x-20">
                  {productMenu.sections.map((section) => (
                    <div key={section.title}>
                      <span className="mb-6 block text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                        {section.title}
                      </span>
                      <ul className="flex flex-col gap-y-6">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <a href={item.href} className="group block max-w-[240px]">
                              <span className="block text-lg font-medium text-white transition-colors duration-200 group-hover:text-[#00B4FF]">
                                {item.title}
                              </span>
                              <span className="mt-1 block text-[13px] leading-tight text-[#999999]">
                                {item.description}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Card */}
                <a 
                  href={productMenu.featured.href} 
                  className="group relative flex h-[340px] w-[320px] items-end overflow-hidden rounded-lg border border-[#1A1A1A] bg-[#050505] p-6 transition-all duration-300 hover:border-[#00B4FF]/30"
                >
                  <div className="absolute inset-0 z-0">
                    {/* Visual pattern representation */}
                    <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#00B4FF]/10 blur-3xl group-hover:bg-[#00B4FF]/20" />
                    <div className="grid-blueprint absolute inset-0 opacity-10" />
                  </div>
                  <div className="relative z-10 flex flex-col gap-y-2">
                    <h3 className="flex items-center gap-x-2 text-2xl font-medium text-white">
                      {productMenu.featured.title}
                      <ArrowRight size={20} className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#00B4FF]" />
                    </h3>
                    <p className="text-[15px] text-[#999999]">{productMenu.featured.description}</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;