"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-transparent text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#0ea5e9_10%,#38bdf8_15%,#7dd3fc_20%,#e0f2fe_25%,#0ea5e9_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

            "--blue-300": "#7dd3fc",
            "--blue-400": "#38bdf8",
            "--blue-500": "#0ea5e9",
            "--indigo-300": "#7dd3fc",
            "--violet-200": "#e0f2fe",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `pointer-events-none absolute -inset-[10px] opacity-60 blur-[60px] will-change-transform`,
            `[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_20%_20%,black_10%,transparent_80%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
