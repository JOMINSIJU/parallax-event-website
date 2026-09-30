import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-16 lg:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#8b5cf6] uppercase mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed px-2">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 md:mt-6 h-px w-16 md:w-20 bg-gradient-to-r from-[#38bdf8] via-[#8b5cf6] to-[#d946ef]",
          align === "center" && "mx-auto"
        )}
        aria-hidden="true"
      />
    </div>
  );
}
