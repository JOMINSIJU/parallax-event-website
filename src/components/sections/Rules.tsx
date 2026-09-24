import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Rules() {
  return (
    <section
      id="rules"
      className="relative py-24 md:py-32"
      aria-labelledby="rules-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="// Guidelines"
            title="Rules & Guidelines"
            subtitle="Official rules will be published soon"
          />
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll variant="fade-up">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md p-8 md:p-10">
              {/* Top gradient line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

              <ul className="space-y-5" role="list">
                {EVENT_CONFIG.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mt-0.5">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Placeholder notice */}
              <div className="mt-8 pt-6 border-t border-white/[0.04]">
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-indigo-400/40 animate-pulse" />
                  <p className="text-xs font-mono tracking-wider uppercase">
                    Full guidelines will be updated before the event
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
