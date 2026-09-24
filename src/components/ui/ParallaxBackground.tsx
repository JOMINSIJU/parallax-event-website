"use client";

import { useParallax } from "@/hooks/useParallax";
import { useEffect, useRef } from "react";

/**
 * Layered parallax background with AI-themed neural network,
 * data streams, and floating circuit patterns.
 */
export function ParallaxBackground() {
  const { getParallaxOffset, isEnabled } = useParallax();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      radius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }

    interface DataStream {
      x: number; y: number;
      speed: number;
      length: number;
      opacity: number;
      chars: string[];
      color: string;
    }

    interface FloatingSymbol {
      x: number; y: number;
      vx: number; vy: number;
      symbol: string;
      opacity: number;
      size: number;
      pulsePhase: number;
    }

    let particles: Particle[] = [];
    let dataStreams: DataStream[] = [];
    let floatingSymbols: FloatingSymbol[] = [];
    let animationFrameId: number;
    let time = 0;

    // Logo-matched color palette
    const colors = {
      crystalBlue: "56, 189, 248",     // #38bdf8
      royalBlue: "59, 130, 246",       // #3b82f6
      deepBlue: "37, 99, 235",         // #2563eb
      violet: "139, 92, 246",          // #8b5cf6
      purple: "124, 58, 237",          // #7c3aed
      magenta: "217, 70, 239",         // #d946ef
      pink: "236, 72, 153",            // #ec4899
      white: "255, 255, 255",
    };

    const colorValues = Object.values(colors);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      // Neural network nodes
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < numParticles; i++) {
        const colorPick = colorValues[Math.floor(Math.random() * colorValues.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 0.5,
          color: colorPick,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }

      // Data streams (matrix-like falling text)
      dataStreams = [];
      const numStreams = Math.floor(canvas.width / 120);
      const aiChars = ["0", "1", "A", "I", "▪", "◆", "⬡", "⊡", "◇", "∞", "λ", "Σ", "π", "∂"];
      for (let i = 0; i < numStreams; i++) {
        const streamChars: string[] = [];
        const streamLen = Math.floor(Math.random() * 8 + 4);
        for (let j = 0; j < streamLen; j++) {
          streamChars.push(aiChars[Math.floor(Math.random() * aiChars.length)]);
        }
        dataStreams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height - canvas.height,
          speed: 0.3 + Math.random() * 0.6,
          length: streamLen,
          opacity: 0.03 + Math.random() * 0.06,
          chars: streamChars,
          color: Math.random() > 0.5 ? colors.crystalBlue : colors.violet,
        });
      }

      // Floating AI symbols
      floatingSymbols = [];
      const symbols = ["⬡", "◇", "△", "○", "□", "⊕", "⊗", "∿", "⚡"];
      const numSymbols = Math.floor(canvas.width / 200);
      for (let i = 0; i < numSymbols; i++) {
        floatingSymbols.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: 0.04 + Math.random() * 0.06,
          size: 16 + Math.random() * 24,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // ── Draw data streams ──
      dataStreams.forEach((stream) => {
        stream.y += stream.speed;
        if (stream.y > canvas.height + 200) {
          stream.y = -200;
          stream.x = Math.random() * canvas.width;
        }

        stream.chars.forEach((char, i) => {
          const charY = stream.y + i * 18;
          if (charY < 0 || charY > canvas.height) return;
          const fade = i === 0 ? stream.opacity * 1.5 : stream.opacity * (1 - i / stream.length);
          ctx.font = "12px monospace";
          ctx.fillStyle = `rgba(${stream.color}, ${Math.max(0, fade)})`;
          ctx.fillText(char, stream.x, charY);
        });
      });

      // ── Draw floating symbols ──
      floatingSymbols.forEach((sym) => {
        sym.x += sym.vx;
        sym.y += sym.vy;
        sym.pulsePhase += 0.015;
        if (sym.x < -50) sym.x = canvas.width + 50;
        if (sym.x > canvas.width + 50) sym.x = -50;
        if (sym.y < -50) sym.y = canvas.height + 50;
        if (sym.y > canvas.height + 50) sym.y = -50;

        const pulseOpacity = sym.opacity * (0.6 + 0.4 * Math.sin(sym.pulsePhase));
        ctx.font = `${sym.size}px sans-serif`;
        ctx.fillStyle = `rgba(${colors.violet}, ${pulseOpacity})`;
        ctx.fillText(sym.symbol, sym.x, sym.y);
      });

      // ── Draw neural network nodes ──
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const pulseRadius = p.radius * (0.8 + 0.4 * Math.sin(p.pulse));
        const glowOpacity = 0.5 + 0.3 * Math.sin(p.pulse);

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${glowOpacity * 0.08})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${glowOpacity})`;
        ctx.fill();
      });

      // ── Draw connections ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            const alpha = 0.25 * (1 - distance / 140);
            // Gradient connection lines
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(${particles[i].color}, ${alpha})`);
            gradient.addColorStop(1, `rgba(${particles[j].color}, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // ── Draw pulsing rings (like AI processing signals) ──
      const numRings = 3;
      for (let r = 0; r < numRings; r++) {
        const ringPhase = time * 0.3 + (r * Math.PI * 2) / numRings;
        const ringRadius = 50 + (ringPhase % (Math.PI * 2)) * 80;
        const ringOpacity = Math.max(0, 0.04 * (1 - ringRadius / 600));
        const cx = canvas.width * (0.2 + r * 0.3);
        const cy = canvas.height * (0.3 + r * 0.2);

        ctx.beginPath();
        ctx.arc(cx, cy, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r === 0 ? colors.crystalBlue : r === 1 ? colors.violet : colors.magenta}, ${ringOpacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Base — deep black */}
      <div className="absolute inset-0 bg-[#030308]" />

      {/* Grid pattern — subtle blueprint */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: isEnabled ? `translateY(${getParallaxOffset(0.02)}px)` : undefined,
        }}
      />

      {/* AI Canvas — neural network + data streams + symbols */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.05)}px)` : undefined,
        }}
      />

      {/* Radial gradient orbs — logo color palette */}
      <div
        className="absolute inset-0"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.08)}px)` : undefined,
        }}
      >
        {/* Deep navy base orb */}
        <div className="absolute top-[5%] left-[5%] w-[700px] h-[700px] rounded-full bg-[#1e1b4b] blur-[150px] opacity-50" />
        {/* Crystal blue orb */}
        <div className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#38bdf8] blur-[150px] opacity-[0.07]" />
        {/* Violet/purple orb */}
        <div className="absolute top-[50%] left-[30%] w-[450px] h-[450px] rounded-full bg-[#7c3aed] blur-[130px] opacity-[0.06]" />
        {/* Magenta/pink orb */}
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#d946ef] blur-[120px] opacity-[0.05]" />
        {/* Royal blue orb */}
        <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#2563eb] blur-[130px] opacity-[0.06]" />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
