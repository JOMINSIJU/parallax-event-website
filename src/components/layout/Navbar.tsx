"use client";

import { useState, useEffect } from "react";
import { EVENT_CONFIG } from "@/data/event-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0ea5e9] focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo / Brand */}
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              aria-label={`${EVENT_CONFIG.name} — Back to top`}
            >
              <span className="text-xl font-display font-bold tracking-[0.15em] text-white group-hover:text-[#0ea5e9] transition-colors duration-300">
                {EVENT_CONFIG.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-[0.2em] text-[#0ea5e9]/60 uppercase border border-[#0ea5e9]/20 rounded px-2 py-0.5">
                {EVENT_CONFIG.type}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {EVENT_CONFIG.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/[0.04] font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/[0.05] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={cn("h-0.5 bg-white rounded-full transition-all duration-300 origin-center", isMobileMenuOpen && "rotate-45 translate-y-[4px]")} />
                <span className={cn("h-0.5 bg-white rounded-full transition-all duration-300", isMobileMenuOpen && "opacity-0 scale-x-0")} />
                <span className={cn("h-0.5 bg-white rounded-full transition-all duration-300 origin-center", isMobileMenuOpen && "-rotate-45 -translate-y-[4px]")} />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bottom-0 bg-[#050505]/95 backdrop-blur-xl transition-all duration-500 ease-out",
            isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            {EVENT_CONFIG.navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-2xl font-display font-medium text-slate-300 hover:text-white transition-colors duration-300"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 400ms ease, transform 400ms ease, color 300ms ease",
                }}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
