"use client";

import { useParallax } from "@/hooks/useParallax";
import { useEffect, useRef } from "react";

/**
 * Layered parallax background with geometric shapes and grid.
 * Each layer scrolls at a different speed to create depth.
 */
export function ParallaxBackground() {
  const { getParallaxOffset, isEnabled } = useParallax();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(14, 165, 233, 0.6)"; // Electric blue
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(217, 70, 239, ${0.4 * (1 - distance / 150)})`; // Neon magenta/violet
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
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
      {/* Base gradient - 70% black */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: isEnabled ? `translateY(${getParallaxOffset(0.02)}px)` : undefined,
        }}
      />

      {/* AI Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.05)}px)` : undefined,
        }}
      />

      {/* Radial gradient orbs - Navy, Purple, Electric Blue, Magenta */}
      <div
        className="absolute inset-0"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.08)}px)` : undefined,
        }}
      >
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#0a0f1d] blur-[120px] opacity-90" />
        <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-[#4c1d95] blur-[150px] opacity-40" />
        <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-[#0ea5e9] blur-[120px] opacity-20" />
        <div className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] rounded-full bg-[#d946ef] blur-[100px] opacity-15" />
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
