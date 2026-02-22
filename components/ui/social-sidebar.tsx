"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Share2, X as CloseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/rayat-7",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/raisulrayat",
    icon: Linkedin,
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:raisoulrayat@gmail.com",
    icon: Mail,
  },
];

export function SocialSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-[60%] right-0 z-50 hidden -translate-y-1/2 flex-col items-center md:flex">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "circOut" }}
          className="bg-black backdrop-blur-xl flex flex-col gap-2 rounded-l-xl px-1.5 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-l border-t border-b"
        >
          {/* Share icon at top */}
          <div className="text-zinc-200 pb-2 border-b border-zinc-200 flex justify-center">
            <Share2 size={12} strokeWidth={2.5} />
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + idx * 0.1 }}
                className="group relative flex items-center justify-center h-7 w-7 rounded-full bg-zinc-50 hover:bg-zinc-900 transition-all duration-300 shadow-sm border border-zinc-100"
                title={link.label}
              >
                <link.icon
                  size={12}
                  className="text-zinc-600 group-hover:text-white transition-colors duration-300"
                  strokeWidth={2}
                />

                {/* Tooltip */}
                <span className="absolute right-10 scale-0 group-hover:scale-100 transition-transform origin-right bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </aside>

      {/* Mobile Sticky Button */}
      <div className="fixed right-5 bottom-5 z-[100] md:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
          className={cn(
            "h-11 w-11 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500",
            isOpen
              ? "bg-red-500 text-white rotate-90"
              : "bg-white text-zinc-900",
          )}
        >
          {isOpen ? (
            <CloseIcon size={18} />
          ) : (
            <Share2 size={18} strokeWidth={2.5} />
          )}
        </motion.button>

        {/* Mobile Popup Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20, x: 20 }}
              className="absolute bottom-14 right-0 flex flex-col gap-3 min-w-[140px] bg-white rounded-2xl p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-zinc-100"
            >
              {SOCIAL_LINKS.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                    <link.icon size={14} strokeWidth={2} />
                  </div>
                  <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-wider group-hover:text-zinc-900">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
