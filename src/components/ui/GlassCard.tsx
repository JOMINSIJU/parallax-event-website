import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Enable hover glow effect */
  hover?: boolean;
  /** Gradient border variant */
  variant?: "default" | "accent" | "subtle";
}

export function GlassCard({
  children,
  className,
  hover = true,
  variant = "default",
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl backdrop-blur-md border overflow-hidden",
        "bg-white/[0.03]",
        // Border variants
        variant === "default" && "border-white/[0.08]",
        variant === "accent" && "border-indigo-500/20",
        variant === "subtle" && "border-white/[0.05]",
        // Hover effects
        hover && [
          "transition-all duration-500 ease-out",
          "hover:border-indigo-500/30",
          "hover:bg-white/[0.05]",
          "hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)]",
          "hover:-translate-y-1",
        ],
        className
      )}
    >
      {/* Subtle gradient overlay at top */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
