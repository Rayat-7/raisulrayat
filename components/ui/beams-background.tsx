"use client";

import { useEffect, useRef, useMemo } from "react";

interface BeamsBackgroundProps {
  className?: string;
  beamCount?: number;
  beamColor?: string;
  rotation?: number;
  noise?: number;
  opacity?: number;
}

export function BeamsBackground({
  className = "",
  beamCount = 6,
  beamColor = "#0ea5e9",
  rotation = -45,
  noise = 0.3,
  opacity = 0.5,
}: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const beamConfigs = useMemo(() => {
    return Array.from({ length: beamCount }, (_, i) => ({
      id: i,
      width: 80 + Math.random() * 120,
      offset: i * (100 / beamCount) + 10,
      opacity: (0.15 + Math.random() * 0.15) * opacity,
      gradientStops: [
        { pos: 0, alpha: 0 },
        { pos: 0.2, alpha: 0.3 + Math.random() * 0.2 },
        { pos: 0.5, alpha: 0.5 },
        { pos: 0.8, alpha: 0.3 + Math.random() * 0.2 },
        { pos: 1, alpha: 0 },
      ],
    }));
  }, [beamCount, opacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      draw();
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 14, g: 165, b: 233 };
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      const rgb = hexToRgb(beamColor);

      ctx.save();
      
      const centerX = width * 0.7;
      const centerY = height * 0.3;
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);

      const diagonalLength = Math.sqrt(width * width + height * height) * 2;

      beamConfigs.forEach((beam) => {
        const beamX = (beam.offset / 100) * width - width * 0.5;
        
        const gradient = ctx.createLinearGradient(
          beamX,
          -diagonalLength / 2,
          beamX,
          diagonalLength / 2
        );

        beam.gradientStops.forEach((stop) => {
          gradient.addColorStop(
            stop.pos,
            `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${stop.alpha * beam.opacity})`
          );
        });

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.rect(beamX - beam.width / 2, -diagonalLength / 2, beam.width, diagonalLength);
        ctx.fill();

        const glowGradient = ctx.createLinearGradient(
          beamX - beam.width * 2,
          0,
          beamX + beam.width * 2,
          0
        );
        glowGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        glowGradient.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${beam.opacity * 0.08})`);
        glowGradient.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.rect(beamX - beam.width * 2, -diagonalLength / 2, beam.width * 4, diagonalLength);
        ctx.fill();
      });

      ctx.restore();

      const auroraGradient = ctx.createRadialGradient(
        width * 0.1,
        height * 0.5,
        0,
        width * 0.1,
        height * 0.5,
        width * 0.5
      );
      auroraGradient.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.06 * opacity})`);
      auroraGradient.addColorStop(0.4, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.03 * opacity})`);
      auroraGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      
      ctx.fillStyle = auroraGradient;
      ctx.fillRect(0, 0, width, height);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [beamConfigs, beamColor, rotation, opacity]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "#000" }}
      />
      
      {noise > 0 && (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none mix-blend-soft-light" 
          style={{ opacity: noise * 0.4 }}
        >
          <defs>
            <filter id="beams-noise-filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#beams-noise-filter)" opacity="0.2" />
        </svg>
      )}
    </div>
  );
}

export default BeamsBackground;
