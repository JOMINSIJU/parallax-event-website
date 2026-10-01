import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Prizes() {
  const { prizes } = EVENT_CONFIG;

  return (
    <section
      id="prizes"
      className="relative py-16 md:py-32"
      aria-labelledby="prizes-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title={prizes.headline}
            subtitle={
              prizes.status === "coming-soon"
                ? "Prize details will be announced soon. Stay tuned!"
                : undefined
            }
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {prizes.items.map((prize, index) => (
            <AnimateOnScroll key={prize.place} delay={index * 150} variant="fade-up">
              <GlassCard
                className={`p-8 text-center ${
                  index === 0
                    ? "border-amber-500/20 hover:border-amber-500/40"
                    : ""
                }`}
                variant={index === 0 ? "accent" : "default"}
              >
                <div className="text-5xl mb-6" aria-hidden="true">
                  {prize.icon}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {prize.place}
                </h3>
                <p
                  className={`text-sm tracking-wider ${
                    prizes.status === "coming-soon"
                      ? "text-slate-500"
                      : "text-[#38bdf8] text-xl font-bold"
                  }`}
                >
                  {prize.prize}
                </p>
                {prizes.status === "coming-soon" && (
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                    <span className="text-[10px] tracking-wider text-[#38bdf8] uppercase">
                      Coming Soon
                    </span>
                  </div>
                )}
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
