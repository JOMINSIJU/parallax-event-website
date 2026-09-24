"use client";

import { useParallax } from "@/hooks/useParallax";

/**
 * Layered parallax background with geometric shapes and grid.
 * Each layer scrolls at a different speed to create depth.
 */
export function ParallaxBackground() {
  const { getParallaxOffset, isEnabled } = useParallax();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0a0a12]" />

      {/* Grid pattern — slowest layer */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: isEnabled
            ? `translateY(${getParallaxOffset(0.03)}px)`
            : undefined,
        }}
      />

      {/* Floating geometric shapes — mid layer */}
      <div
        className="absolute inset-0"
        style={{
          transform: isEnabled
            ? `translateY(${getParallaxOffset(0.08)}px)`
            : undefined,
        }}
      >
        {/* Circle — top right */}
        <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full border border-indigo-500/[0.06] animate-float-slow" />
        {/* Circle — bottom left */}
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full border border-cyan-500/[0.05] animate-float-slower" />
        {/* Diamond — center */}
        <div className="absolute top-[40%] left-[50%] w-32 h-32 border border-indigo-400/[0.06] rotate-45 animate-float-medium" />
      </div>

      {/* Radial gradient orbs — accent layer */}
      <div
        className="absolute inset-0"
        style={{
          transform: isEnabled
            ? `translateY(${getParallaxOffset(0.05)}px)`
            : undefined,
        }}
      >
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.04] blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-cyan-600/[0.03] blur-[100px]" />
        <div className="absolute top-[60%] left-[60%] w-[300px] h-[300px] rounded-full bg-violet-600/[0.03] blur-[80px]" />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
