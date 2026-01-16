import React from 'react';
import { ShieldAlert, Globe, BarChart3, Clock, Zap, Key } from 'lucide-react';

const EnterpriseFeatures = () => {
  const features = [
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#00e599]" />,
      title: "HIPAA and SOC2.",
      description: "Meet your compliance requirements without high spend commitments."
    },
    {
      icon: <Globe className="w-5 h-5 text-[#00e599]" />,
      title: "Private networking.",
      description: "Keep traffic off the public internet via PrivateLink, no additional costs."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#00e599]" />,
      title: "Logs & metrics export.",
      description: "Forward them directly to Datadog or any OTel-compatible service — no extra fees."
    },
    {
      icon: <Clock className="w-5 h-5 text-[#00e599]" />,
      title: "Uptime SLAs.",
      description: "99.95% uptime guaranteed by SLA for all workloads in Scale."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00e599]" />,
      title: "Point-in-time recovery.",
      description: "Restore your database instantly to any moment in time without flat monthly fees."
    },
    {
      icon: <Key className="w-5 h-5 text-[#00e599]" />,
      title: "Single sign-on.",
      description: "Centralize your team access with SSO to manage logins securely."
    }
  ];

  return (
    <section className="bg-black py-[120px] md:py-[160px]">
      <div className="container mx-auto max-w-[1216px] px-8">
        {/* Header Block */}
        <div className="mb-20">
          <div className="mb-8 overflow-hidden">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white opacity-60"
            >
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="5" r="2" fill="currentColor" />
              <circle cx="12" cy="19" r="2" fill="currentColor" />
              <circle cx="5" cy="12" r="2" fill="currentColor" />
              <circle cx="19" cy="12" r="2" fill="currentColor" />
              <circle cx="7.05" cy="7.05" r="2" fill="currentColor" />
              <circle cx="16.95" cy="16.95" r="2" fill="currentColor" />
              <circle cx="7.05" cy="16.95" r="2" fill="currentColor" />
              <circle cx="16.95" cy="7.05" r="2" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-white">
            No platform fees.{" "}
            <span className="text-[#999999]">
              Enterprise-grade features available to everyone, without fixed fees or monthly minimums.
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-4 border-l border-[#1a1a1a] pl-6 transition-colors duration-200 hover:border-[#00e599]"
            >
              <div className="flex h-6 w-6 items-center justify-center">
                {feature.icon}
              </div>
              <p className="text-[15px] leading-relaxed tracking-tight">
                <span className="font-semibold text-white">
                  {feature.title}
                </span>{" "}
                <span className="text-[#999999]">
                  {feature.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;