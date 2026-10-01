"use client";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span className="text-xs tracking-[0.3em] text-slate-500 uppercase">
        Scroll
      </span>
      <div className="w-6 h-10 rounded-full border-2 border-slate-500/30 flex items-start justify-center p-1.5">
        <div className="w-1 h-2.5 rounded-full bg-[#8b5cf6] animate-scroll-indicator" />
      </div>
    </div>
  );
}
