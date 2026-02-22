"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  // Added prop for custom header component in the collapsed/card state
  triggerHeader?: React.ReactNode;
  [key: string]: any;
}

export function ExpandableCard2({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  triggerHeader,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-white/10 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div
            className={cn(
              "fixed inset-0 z-[100] grid place-items-center before:pointer-events-none sm:mt-16",
            )}
          >
            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={cardRef}
              className={cn(
                "relative flex h-full w-full max-w-[850px] flex-col overflow-auto bg-white border border-zinc-200 shadow-2xl [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:rounded-3xl",
                classNameExpanded,
              )}
              {...props}
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <div className="relative">
                  <img
                    src={src}
                    alt={title}
                    className="h-80 w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent h-full" />
                </div>
              </motion.div>

              <div className="relative h-full">
                <div className="flex h-auto items-start justify-between p-8">
                  <div>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-lg text-zinc-500"
                    >
                      {description}
                    </motion.p>
                    <motion.h3
                      layoutId={`title-${title}-${id}`}
                      className="mt-2 text-4xl font-semibold text-zinc-900"
                    >
                      {title}
                    </motion.h3>
                  </div>
                  <motion.button
                    aria-label="Close card"
                    layoutId={`button-${title}-${id}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-zinc-100 transition-colors"
                    onClick={() => setActive(false)}
                  >
                    <motion.div
                      animate={{ rotate: active ? 45 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                <div className="relative px-6 sm:px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-start gap-4 overflow-auto pb-10 text-base text-zinc-600"
                  >
                    {children}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-blue-500/50 transition-colors group relative",
          className,
        )}
      >
        {/* Customized render for the collapsed card */}
        {triggerHeader ? (
          <div className="w-full h-56 relative overflow-hidden">
            {triggerHeader}
            <motion.div
              layoutId={`image-${title}-${id}`}
              className="absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none"
            >
              {/* Hidden image proxy for layout animation continuity */}
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div layoutId={`image-${title}-${id}`} className="w-full">
            <img
              src={src}
              alt={title}
              className="h-56 w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}

        <div className="flex flex-col p-4 relative z-10 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-sm font-medium text-zinc-500"
              >
                {description}
              </motion.p>
              <motion.h3
                layoutId={`title-${title}-${id}`}
                className="font-semibold text-zinc-900 mt-1"
              >
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              layoutId={`button-${title}-${id}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
