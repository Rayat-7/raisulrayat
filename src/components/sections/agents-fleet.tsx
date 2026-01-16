import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const AgentsFleet = () => {
  return (
    <section className="relative overflow-hidden bg-background-pure py-[120px] dark">
      {/* Decorative Grid Lines / Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-px w-full bg-border-subtle" />
      <div className="mx-auto flex max-w-[1856px] items-center justify-between px-8 py-2 text-[10px] font-medium tracking-[0.2em] uppercase text-gray-new-50 border-b border-border-subtle">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 bg-gray-600" /> SYSTEM: NEON DATABASE PLATFORM
          </span>
          <span className="opacity-20">||||||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          <span>[ STATUS: ONLINE ]</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-20">||||||||||||||||||||||||||||||||||||||||||||||||||||||</span>
          <span>[ CONNECTION: STABLE ]</span>
        </div>
      </div>

      <div className="container relative z-10 pt-20">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Section Header */}
          <div className="col-span-12 mb-20 lg:col-span-6">
            <div className="mb-4 flex items-center gap-2 text-[#FF4532]">
              <span className="text-[10px] font-bold">▶</span>
              <span className="font-mono-label tracking-widest text-[#FF4532]">AGENT PLATFORM</span>
            </div>
            <h2 className="mb-6 text-[48px] font-medium leading-[1.1] tracking-[-0.03em] text-white lg:text-[64px]">
              Speed and scale for agents. And devs.
            </h2>
            <p className="max-w-[540px] text-[18px] leading-relaxed text-text-secondary">
              Codegen and agent platforms rely on Neon to run the backend for user-generated apps.
            </p>
          </div>

          {/* Left Column - Deploy Feature */}
          <div className="col-span-12 mb-24 lg:col-span-5">
            <div className="flex flex-col">
              <div className="mb-8 max-w-[400px]">
                <h3 className="mb-4 text-[24px] font-medium leading-tight text-white">
                  Deploy thousands of databases that turn off when idle.
                  <span className="text-text-secondary"> Inactive databases pause on their own, keeping your fleet efficient and cost-effective.</span>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[15px] font-medium text-white transition-opacity hover:opacity-70"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Fleet Dashboard Image */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative rounded-lg border border-border-subtle bg-background-subtle p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between border border-border-subtle/50 px-4 py-2">
                <span className="font-mono text-[13px] text-text-secondary">Databases deployed:</span>
                <span className="font-mono text-[13px] text-white">0</span>
              </div>
              <div className="space-y-8 p-4">
                {['Friday', 'Saturday'].map((day) => (
                  <div key={day} className="space-y-4">
                    <div className="flex items-center gap-8 font-mono text-[13px]">
                      <span className="text-text-secondary w-16">{day}</span>
                      <span className="text-primary-accent">Active: 0</span>
                      <span className="text-text-secondary">Idle: 0</span>
                    </div>
                    {/* Simplified terminal dots/grid pattern */}
                    <div className="grid grid-cols-24 gap-1 opacity-20">
                      {Array.from({ length: 96 }).map((_, i) => (
                        <div key={i} className="h-1 w-1 rounded-full bg-white" />
                      ))}
                    </div>
                    <div className="flex justify-between font-mono text-[10px] text-text-secondary opacity-50">
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                      <span>18:00</span>
                      <span>21:00</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* API Section */}
        <div className="mt-32 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6 lg:order-2 lg:pl-12">
            <h3 className="mb-6 text-[32px] font-medium tracking-tight text-white">
              Manage your fleet via API.
              <span className="text-text-secondary"> Neon databases spin up in milliseconds, with APIs for quota controls and fleet scaling.</span>
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[15px] font-medium text-white transition-opacity hover:opacity-70"
            >
              Learn more <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="col-span-12 mt-12 lg:col-span-6 lg:mt-0 lg:order-1">
            <div className="space-y-8">
              {/* API Call 01 */}
              <div className="flex gap-4">
                <span className="font-mono text-[13px] text-text-secondary">01</span>
                <div className="w-full">
                  <p className="mb-4 text-[15px] text-text-secondary">
                    Send API call and receive connection string in <span className="text-white">120ms</span>
                  </p>
                  <div className="group relative overflow-hidden rounded-md border border-border-subtle bg-background-subtle p-4">
                    {/* Gradient Background for Code Block */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyan-900/20 via-orange-900/10 to-transparent opacity-50" />
                    <pre className="relative z-10 font-mono text-[13px] text-primary-accent">
                      <code className="text-green-400">•</code> curl -X POST https://api.neon.tech/v2/projects/:id/database
                    </pre>
                  </div>
                </div>
              </div>

              {/* API Call 02 */}
              <div className="flex gap-4">
                <span className="font-mono text-[13px] text-text-secondary">02</span>
                <div className="w-full">
                  <p className="mb-4 text-[15px] text-text-secondary">Test and deploy &gt;&gt;</p>
                  <div className="h-[200px] w-full rounded-md border border-border-subtle bg-black-pure relative flex items-center justify-center overflow-hidden">
                    <div className="glow-sky absolute inset-0 opacity-10" />
                    <button className="flex items-center gap-2 rounded-sm bg-secondary px-3 py-1.5 text-[11px] font-mono text-white border border-border-subtle hover:bg-muted transition-colors">
                      <span className="text-[8px]">▶</span> Run Query
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Database Checkpoints */}
        <div className="mt-40 text-center">
          <div className="mx-auto max-w-[700px]">
            <h3 className="text-[24px] font-medium text-white lg:text-[32px]">
              Database checkpoints.
              <span className="text-text-secondary"> Copy-on-write storage makes it cheap and fast to save point-in-time versions of your database and restore a previous state when necessary.</span>
            </h3>
          </div>
          
          {/* Branching Visualization Mock */}
          <div className="mt-16 relative h-[200px] w-full border-t border-border-subtle overflow-hidden">
             <div className="absolute inset-0 grid-blueprint opacity-20" />
             <div className="absolute left-[5%] top-1/2 -translate-y-1/2 flex flex-col items-start gap-2">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
                <span className="font-mono text-[10px] text-text-secondary">12:00</span>
                <span className="font-mono text-[11px] text-white">main</span>
             </div>
             <div className="absolute left-[20%] top-1/2 -translate-y-1/2 flex flex-col items-start gap-2">
                <div className="h-px w-20 bg-white" />
                <span className="font-mono text-[10px] text-text-secondary">12:24</span>
                <span className="font-mono text-[11px] text-white">schema-v1</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsFleet;