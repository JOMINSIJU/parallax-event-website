"use client";

import { useParallax } from "@/hooks/useParallax";
import { useEffect, useRef } from "react";

/**
 * Layered parallax background with AI-themed neural network,
 * data streams, floating circuit patterns, and mouse interactivity.
 */
export function ParallaxBackground() {
  const { getParallaxOffset, isEnabled } = useParallax();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Mouse tracking
    const mouse = { x: -1000, y: -1000, active: false };
    const MOUSE_RADIUS = 200;
    const MOUSE_REPEL = 0.8;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => { mouse.active = false; };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    interface Particle {
      x: number; y: number;
      baseX: number; baseY: number;
      vx: number; vy: number;
      radius: number;
      baseRadius: number;
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
      baseOpacity: number;
      size: number;
      baseSize: number;
      pulsePhase: number;
    }

    let particles: Particle[] = [];
    let dataStreams: DataStream[] = [];
    let floatingSymbols: FloatingSymbol[] = [];
    let animationFrameId: number;
    let time = 0;

    const colors = {
      crystalBlue: "56, 189, 248",
      royalBlue: "59, 130, 246",
      deepBlue: "37, 99, 235",
      violet: "139, 92, 246",
      purple: "124, 58, 237",
      magenta: "217, 70, 239",
      pink: "236, 72, 153",
      white: "255, 255, 255",
    };
    const colorValues = Object.values(colors);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initElements();
    };

    const initElements = () => {
      const isMobile = canvas.width < 768;
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / (isMobile ? 35000 : 18000));
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const colorPick = colorValues[Math.floor(Math.random() * colorValues.length)];
        const r = Math.random() * 2 + 0.5;
        particles.push({
          x, y, baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: r, baseRadius: r,
          color: colorPick,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }

      dataStreams = [];
      const numStreams = Math.floor(canvas.width / (isMobile ? 200 : 120));
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

      floatingSymbols = [];
      const symbols = ["⬡", "◇", "△", "○", "□", "⊕", "⊗", "∿", "⚡"];
      const numSymbols = Math.floor(canvas.width / (isMobile ? 300 : 200));
      for (let i = 0; i < numSymbols; i++) {
        const op = 0.04 + Math.random() * 0.06;
        const sz = 16 + Math.random() * 24;
        floatingSymbols.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          opacity: op, baseOpacity: op,
          size: sz, baseSize: sz,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016;

      // ── Mouse glow cursor ──
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS);
        gradient.addColorStop(0, "rgba(139, 92, 246, 0.06)");
        gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.03)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.x - MOUSE_RADIUS, mouse.y - MOUSE_RADIUS, MOUSE_RADIUS * 2, MOUSE_RADIUS * 2);
      }

      // ── Data streams ──
      dataStreams.forEach((stream) => {
        stream.y += stream.speed;
        if (stream.y > canvas.height + 200) {
          stream.y = -200;
          stream.x = Math.random() * canvas.width;
        }

        // Mouse influence on streams — push away
        if (mouse.active) {
          const dx = stream.x - mouse.x;
          const dy = stream.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS * 0.8) {
            stream.x += (dx / dist) * 0.5;
          }
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

      // ── Floating symbols — enlarge near mouse ──
      floatingSymbols.forEach((sym) => {
        sym.x += sym.vx;
        sym.y += sym.vy;
        sym.pulsePhase += 0.015;
        if (sym.x < -50) sym.x = canvas.width + 50;
        if (sym.x > canvas.width + 50) sym.x = -50;
        if (sym.y < -50) sym.y = canvas.height + 50;
        if (sym.y > canvas.height + 50) sym.y = -50;

        // Mouse proximity — enlarge and brighten
        let scaleFactor = 1;
        let opacityBoost = 0;
        if (mouse.active) {
          const dx = sym.x - mouse.x;
          const dy = sym.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const closeness = 1 - dist / MOUSE_RADIUS;
            scaleFactor = 1 + closeness * 1.5;
            opacityBoost = closeness * 0.15;
            // Gentle push away
            sym.x += (dx / dist) * closeness * 0.3;
            sym.y += (dy / dist) * closeness * 0.3;
          }
        }

        const pulseOpacity = (sym.baseOpacity + opacityBoost) * (0.6 + 0.4 * Math.sin(sym.pulsePhase));
        ctx.font = `${sym.baseSize * scaleFactor}px sans-serif`;
        ctx.fillStyle = `rgba(${colors.violet}, ${pulseOpacity})`;
        ctx.fillText(sym.symbol, sym.x, sym.y);
      });

      // ── Neural network nodes — react to mouse ──
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction — attract slightly + enlarge
        let mouseInfluence = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            mouseInfluence = 1 - dist / MOUSE_RADIUS;
            // Gentle repulsion
            const force = mouseInfluence * MOUSE_REPEL;
            p.vx += (dx / dist) * force * 0.1;
            p.vy += (dy / dist) * force * 0.1;
            // Dampen velocity
            p.vx *= 0.98;
            p.vy *= 0.98;
          }
        }

        const enlargedRadius = p.baseRadius * (1 + mouseInfluence * 2);
        const pulseRadius = enlargedRadius * (0.8 + 0.4 * Math.sin(p.pulse));
        const glowOpacity = (0.5 + 0.3 * Math.sin(p.pulse)) + mouseInfluence * 0.4;

        // Outer glow — bigger near mouse
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius * (3 + mouseInfluence * 4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${glowOpacity * 0.08 + mouseInfluence * 0.04})`;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(1, glowOpacity)})`;
        ctx.fill();
      });

      // ── Connections — brighter near mouse ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            let alpha = 0.25 * (1 - distance / 140);

            // Boost connections near mouse
            if (mouse.active) {
              const midX = (particles[i].x + particles[j].x) / 2;
              const midY = (particles[i].y + particles[j].y) / 2;
              const mouseDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
              if (mouseDist < MOUSE_RADIUS) {
                alpha += 0.3 * (1 - mouseDist / MOUSE_RADIUS);
              }
            }

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
            ctx.lineWidth = 0.6 + alpha * 1.5;
            ctx.stroke();
          }
        }
      }

      // ── Scanning beam lines ──
      for (let s = 0; s < 2; s++) {
        const scanY = ((time * (40 + s * 15) + s * canvas.height * 0.5) % (canvas.height + 100)) - 50;
        const scanGrad = ctx.createLinearGradient(0, scanY, canvas.width, scanY);
        scanGrad.addColorStop(0, "rgba(0,0,0,0)");
        scanGrad.addColorStop(0.3, `rgba(${s === 0 ? colors.crystalBlue : colors.magenta}, 0.03)`);
        scanGrad.addColorStop(0.5, `rgba(${s === 0 ? colors.crystalBlue : colors.magenta}, 0.06)`);
        scanGrad.addColorStop(0.7, `rgba(${s === 0 ? colors.crystalBlue : colors.magenta}, 0.03)`);
        scanGrad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 1, canvas.width, 2);
      }

      // ── Orbiting satellite dots ──
      const hubs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.25, r: 60, color: colors.crystalBlue },
        { x: canvas.width * 0.85, y: canvas.height * 0.4, r: 50, color: colors.violet },
        { x: canvas.width * 0.5, y: canvas.height * 0.75, r: 70, color: colors.magenta },
        { x: canvas.width * 0.75, y: canvas.height * 0.15, r: 45, color: colors.pink },
      ];
      hubs.forEach((hub, hi) => {
        // Hub center dot
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hub.color}, 0.15)`;
        ctx.fill();

        // Orbit ring
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hub.color}, 0.04)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Orbiting dots
        for (let d = 0; d < 3; d++) {
          const angle = time * (0.5 + hi * 0.15) + (d * Math.PI * 2) / 3;
          const ox = hub.x + Math.cos(angle) * hub.r;
          const oy = hub.y + Math.sin(angle) * hub.r;
          ctx.beginPath();
          ctx.arc(ox, oy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${hub.color}, 0.4)`;
          ctx.fill();
          // Trail
          const trailAngle = angle - 0.3;
          const tx = hub.x + Math.cos(trailAngle) * hub.r;
          const ty = hub.y + Math.sin(trailAngle) * hub.r;
          ctx.beginPath();
          ctx.moveTo(ox, oy);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = `rgba(${hub.color}, 0.12)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // ── Circuit board traces ──
      const traceSeeds = [
        { sx: canvas.width * 0.1, sy: canvas.height * 0.6, color: colors.violet },
        { sx: canvas.width * 0.9, sy: canvas.height * 0.3, color: colors.crystalBlue },
        { sx: canvas.width * 0.4, sy: canvas.height * 0.9, color: colors.magenta },
      ];
      traceSeeds.forEach((seed) => {
        ctx.beginPath();
        ctx.moveTo(seed.sx, seed.sy);
        let tx = seed.sx;
        let ty = seed.sy;
        for (let seg = 0; seg < 6; seg++) {
          const segLen = 30 + Math.sin(time * 0.5 + seg) * 15;
          if (seg % 2 === 0) {
            tx += segLen;
          } else {
            ty -= segLen;
          }
          ctx.lineTo(tx, ty);
          // Node dot at corner
          ctx.fillStyle = `rgba(${seed.color}, 0.12)`;
          ctx.fillRect(tx - 1.5, ty - 1.5, 3, 3);
        }
        ctx.strokeStyle = `rgba(${seed.color}, 0.05)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // ── Hex grid pulse wave ──
      const hexSize = 40;
      const pulseCenter = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
      const pulseWave = (time * 80) % (canvas.width * 0.8);
      for (let hx = 0; hx < canvas.width + hexSize; hx += hexSize * 1.75) {
        for (let hy = 0; hy < canvas.height + hexSize; hy += hexSize * 1.5) {
          const offsetX = (Math.floor(hy / (hexSize * 1.5)) % 2) * hexSize * 0.875;
          const cx = hx + offsetX;
          const cy = hy;
          const dist = Math.sqrt((cx - pulseCenter.x) ** 2 + (cy - pulseCenter.y) ** 2);
          const waveDist = Math.abs(dist - pulseWave);
          if (waveDist < 60) {
            const intensity = 0.03 * (1 - waveDist / 60);
            ctx.beginPath();
            for (let v = 0; v < 6; v++) {
              const angle = (Math.PI / 3) * v - Math.PI / 6;
              const px = cx + Math.cos(angle) * hexSize * 0.4;
              const py = cy + Math.sin(angle) * hexSize * 0.4;
              if (v === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.strokeStyle = `rgba(${colors.violet}, ${intensity})`;
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
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#030308]" />

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

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.05)}px)` : undefined,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          transform: isEnabled ? `translateY(${getParallaxOffset(0.08)}px)` : undefined,
        }}
      >
        <div className="absolute top-[5%] left-[5%] w-[700px] h-[700px] rounded-full bg-[#1e1b4b] blur-[150px] opacity-50" />
        <div className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full bg-[#38bdf8] blur-[150px] opacity-[0.07]" />
        <div className="absolute top-[50%] left-[30%] w-[450px] h-[450px] rounded-full bg-[#7c3aed] blur-[130px] opacity-[0.06]" />
        <div className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-[#d946ef] blur-[120px] opacity-[0.05]" />
        <div className="absolute bottom-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#2563eb] blur-[130px] opacity-[0.06]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
