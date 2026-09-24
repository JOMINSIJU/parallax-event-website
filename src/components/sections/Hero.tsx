"use client";

import Image from "next/image";
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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0ea5e9]/[0.06] blur-[120px]"
          style={{
            transform: isEnabled
              ? `translate(-50%, calc(-50% + ${getParallaxOffset(0.1)}px))`
              : undefined,
          }}
        />
        <div
          className="absolute top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#d946ef]/[0.05] blur-[80px]"
          style={{
            transform: isEnabled
              ? `translateY(${getParallaxOffset(0.15)}px)`
              : undefined,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* KJU Banner Logo */}
        <div className="mb-6 animate-fade-in-down">
          <Image
            src={EVENT_CONFIG.logos.university}
            alt={EVENT_CONFIG.institution.name}
            width={500}
            height={80}
            className="mx-auto h-12 sm:h-16 md:h-20 w-auto object-contain"
            priority
          />
        </div>

        {/* School & Department */}
        <div className="mb-4 animate-fade-in-down animation-delay-200">
          <p className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-slate-400 uppercase leading-relaxed">
            {EVENT_CONFIG.institution.school}
          </p>
          <p className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">
            {EVENT_CONFIG.institution.department}
          </p>
          <p className="text-xs sm:text-sm tracking-[0.15em] text-slate-300 mt-2 uppercase">
            Organizes
          </p>
        </div>

        {/* PARALLAX Logo Image */}
        <div className="mb-6 animate-fade-in-up">
          <Image
            src={EVENT_CONFIG.logos.parallax}
            alt="PARALLAX — The Promptathon Challenge"
            width={800}
            height={250}
            className="mx-auto w-full max-w-2xl h-auto object-contain"
            priority
          />
        </div>

        {/* Year */}
        <div className="mb-4 animate-fade-in-up animation-delay-200">
          <span className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-[0.15em] text-white/90">
            {EVENT_CONFIG.year}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#0ea5e9] font-display tracking-[0.1em] mb-4 animate-fade-in-up animation-delay-400">
          {EVENT_CONFIG.tagline}
        </p>

        {/* Event Line */}
        <p className="text-sm sm:text-base text-slate-400 tracking-wide mb-6 animate-fade-in-up animation-delay-600">
          {EVENT_CONFIG.fullEventLine}
        </p>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
