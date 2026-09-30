"use client";

import Image from "next/image";
import { EVENT_CONFIG } from "@/data/event-config";
import { useParallax } from "@/hooks/useParallax";

export function Hero() {
  const { getParallaxOffset, isEnabled } = useParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      aria-label="Hero section"
    >
      {/* Parallax-layered hero background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-[#38bdf8]/[0.06] blur-[80px] md:blur-[120px]"
          style={{
            transform: isEnabled
              ? `translate(-50%, calc(-50% + ${getParallaxOffset(0.1)}px))`
              : undefined,
          }}
        />
        <div
          className="absolute top-[30%] right-[5%] md:right-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[#8b5cf6]/[0.06] blur-[60px] md:blur-[80px]"
          style={{
            transform: isEnabled
              ? `translateY(${getParallaxOffset(0.15)}px)`
              : undefined,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto pt-20 md:pt-24 pb-8">
        {/* KJU Banner Logo */}
        <div className="mb-6 md:mb-8 animate-fade-in-down">
          <Image
            src={EVENT_CONFIG.logos.university}
            alt={EVENT_CONFIG.institution.name}
            width={700}
            height={120}
            className="mx-auto h-14 sm:h-20 md:h-28 w-auto object-contain"
            priority
          />
        </div>

        {/* School & Department */}
        <div className="mb-4 md:mb-6 animate-fade-in-down animation-delay-200">
          <p className="text-[11px] sm:text-sm md:text-lg tracking-[0.08em] sm:tracking-[0.15em] text-slate-200 uppercase leading-relaxed font-medium px-2">
            {EVENT_CONFIG.institution.school}
          </p>
          <p className="text-[10px] sm:text-xs md:text-base tracking-[0.08em] sm:tracking-[0.15em] text-slate-300 uppercase mt-1 px-2">
            {EVENT_CONFIG.institution.department}
          </p>
          <p className="text-xs sm:text-base tracking-[0.15em] text-[#38bdf8]/80 mt-2 md:mt-3 uppercase font-semibold">
            Organizes
          </p>
        </div>

        {/* PARALLAX Logo Image */}
        <div className="mb-4 md:mb-6 animate-fade-in-up">
          <Image
            src={EVENT_CONFIG.logos.parallax}
            alt="PARALLAX — The Promptathon Challenge"
            width={800}
            height={250}
            className="mx-auto w-full max-w-xs sm:max-w-lg md:max-w-2xl h-auto object-contain"
            priority
          />
        </div>

        {/* Year */}
        <div className="mb-3 md:mb-4 animate-fade-in-up animation-delay-200">
          <span className="text-2xl sm:text-4xl md:text-5xl font-display font-bold tracking-[0.15em] text-white/90">
            {EVENT_CONFIG.type} {EVENT_CONFIG.year}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-xl md:text-2xl bg-gradient-to-r from-[#38bdf8] via-[#8b5cf6] to-[#d946ef] bg-clip-text text-transparent font-display tracking-[0.05em] sm:tracking-[0.1em] mb-3 md:mb-4 animate-fade-in-up animation-delay-400">
          {EVENT_CONFIG.tagline}
        </p>

        {/* Event Line */}
        <p className="text-xs sm:text-sm md:text-base text-slate-400 tracking-wide mb-4 animate-fade-in-up animation-delay-600 px-4">
          {EVENT_CONFIG.fullEventLine}
        </p>
      </div>
    </section>
  );
}
