"use client";

import { EVENT_CONFIG } from "@/data/event-config";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { useParallax } from "@/hooks/useParallax";

export function Hero() {
  const { getParallaxOffset, isEnabled } = useParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Parallax-layered hero background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large gradient orb behind title */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/[0.08] blur-[120px]"
          style={{
            transform: isEnabled
              ? `translate(-50%, calc(-50% + ${getParallaxOffset(0.1)}px))`
              : undefined,
          }}
        />
        {/* Secondary accent orb */}
        <div
          className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-cyan-500/[0.06] blur-[80px]"
          style={{
            transform: isEnabled
              ? `translateY(${getParallaxOffset(0.15)}px)`
              : undefined,
          }}
        />
        {/* Horizontal accent lines */}
        <div
          className="absolute top-[25%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent"
          style={{
            transform: isEnabled
              ? `translateY(${getParallaxOffset(0.05)}px)`
              : undefined,
          }}
        />
        <div
          className="absolute top-[75%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          style={{
            transform: isEnabled
              ? `translateY(${getParallaxOffset(0.07)}px)`
              : undefined,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Institution label */}
        <div className="mb-8 animate-fade-in-down">
          <span className="inline-block text-[10px] sm:text-xs font-mono tracking-[0.35em] text-slate-500 uppercase border border-white/[0.06] rounded-full px-4 py-2">
            {EVENT_CONFIG.institution.name}
          </span>
        </div>

        {/* PARALLAX — Main title with depth layers */}
        <div className="relative mb-6 animate-fade-in-up">
          {/* Shadow layers for depth effect */}
          <h1
            className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.2em] text-indigo-500/[0.08] select-none pointer-events-none"
            style={{
              transform: isEnabled
                ? `translate(4px, ${4 + getParallaxOffset(0.02)}px)`
                : "translate(4px, 4px)",
            }}
            aria-hidden="true"
          >
            {EVENT_CONFIG.name}
          </h1>
          <h1
            className="absolute inset-0 text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.2em] text-cyan-500/[0.06] select-none pointer-events-none"
            style={{
              transform: isEnabled
                ? `translate(-3px, ${-3 + getParallaxOffset(0.04)}px)`
                : "translate(-3px, -3px)",
            }}
            aria-hidden="true"
          >
            {EVENT_CONFIG.name}
          </h1>
          {/* Main title */}
          <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.2em] text-white">
            {EVENT_CONFIG.name}
          </h1>
        </div>

        {/* Event type badge */}
        <div className="mb-8 animate-fade-in-up animation-delay-200">
          <span className="inline-block text-sm sm:text-base font-mono tracking-[0.4em] text-indigo-400 uppercase">
            {EVENT_CONFIG.type}
          </span>
        </div>

        {/* Date */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/80 mb-10 tracking-wide animate-fade-in-up animation-delay-400">
          {EVENT_CONFIG.date}
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-600">
          <a
            href={EVENT_CONFIG.registrationUrl}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-semibold tracking-[0.15em] text-white uppercase overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Button gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl transition-all duration-500 group-hover:from-indigo-500 group-hover:to-cyan-500" />
            {/* Button glow */}
            <span className="absolute inset-0 rounded-xl shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/40 transition-shadow duration-500" />
            <span className="relative">Register Now</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
