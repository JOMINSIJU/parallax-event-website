import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
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
        variant === "default" && "border-white/[0.08]",
        variant === "accent" && "border-[#8b5cf6]/20",
        variant === "subtle" && "border-white/[0.05]",
        hover && [
          "transition-all duration-500 ease-out",
          "hover:border-[#8b5cf6]/30",
          "hover:bg-white/[0.05]",
          "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)]",
          "hover:-translate-y-2",
          "hover:scale-[1.03]",
        ],
        className
      )}
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
