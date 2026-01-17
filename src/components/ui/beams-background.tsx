"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface BeamsBackgroundProps {
  className?: string;
  beamCount?: number;
  beamColor?: string;
  beamOpacity?: number;
  beamWidth?: number;
  beamBlur?: number;
  rotation?: number;
  noise?: number;
  speed?: number;
}

export function BeamsBackground({
  className = "",
  beamCount = 16,
  beamColor = "#0ea5e9",
  beamOpacity = 0.15,
  beamWidth = 2,
  beamBlur = 40,
  rotation = -135,
  noise = 0.5,
  speed = 8,
}: BeamsBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const beams = Array.from({ length: beamCount }, (_, i) => {
    const progress = i / (beamCount - 1);
    const offset = progress * 200 - 50;
    const delay = i * 0.3;
    const duration = speed + Math.random() * 4;
    
    return {
      id: i,
      offset,
      delay,
      duration,
      width: beamWidth + Math.random() * 2,
      opacity: beamOpacity * (0.5 + Math.random() * 0.5),
    };
  });

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, transformOrigin: "center center" }}
    >
      {/* Noise overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: noise }}>
        <defs>
          <filter id="beams-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#beams-noise)" opacity="0.4" />
      </svg>

      {/* Beams */}
      <div className="absolute inset-0" style={{ transform: "scale(2.5)" }}>
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute"
            style={{
              left: `${beam.offset}%`,
              top: "-50%",
              width: `${beam.width}px`,
              height: "200%",
              background: `linear-gradient(to bottom, transparent 0%, ${beamColor} 20%, ${beamColor} 80%, transparent 100%)`,
              opacity: beam.opacity,
              filter: `blur(${beamBlur}px)`,
              boxShadow: `0 0 ${beamBlur * 2}px ${beamBlur / 2}px ${beamColor}`,
            }}
            animate={{
              y: ["-100%", "100%"],
              opacity: [0, beam.opacity, beam.opacity, 0],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for blending */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)`,
        }}
      />
      
      {/* Color tint overlay */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${beamColor}20 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}

export default BeamsBackground;
