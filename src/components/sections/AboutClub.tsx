import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AboutClub() {
  const { club } = EVENT_CONFIG;

  return (
    <section
      id="club"
      className="relative py-24 md:py-32"
      aria-labelledby="club-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Know About the Club"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <GlassCard className="max-w-4xl mx-auto p-8 md:p-12" variant="accent">
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wide mb-2">
                {club.name}
              </h3>
              <p className="text-sm font-mono tracking-[0.3em] text-[#0ea5e9]/60 uppercase">
                {club.tagline}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                {EVENT_CONFIG.institution.school} • {EVENT_CONFIG.institution.department}
              </p>
            </div>

            <div className="space-y-4">
              {club.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-400 leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </GlassCard>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
