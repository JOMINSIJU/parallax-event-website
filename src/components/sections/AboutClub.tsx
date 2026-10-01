import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AboutClub() {
  const { clubs } = EVENT_CONFIG;

  return (
    <section
      id="club"
      className="relative py-16 md:py-32"
      aria-labelledby="club-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title="About the Clubs" />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {clubs.map((club, index) => (
            <AnimateOnScroll key={club.name} variant="fade-up" delay={index * 150}>
              <GlassCard className="p-6 md:p-10 h-full" variant="accent">
                <div className="text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-wide mb-2">
                    {club.name}
                  </h3>
                  <p className="text-sm tracking-[0.2em] text-[#38bdf8]/60 uppercase">
                    {club.tagline}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    {EVENT_CONFIG.institution.school} • {EVENT_CONFIG.institution.department}
                  </p>
                </div>

                <div className="space-y-4">
                  {club.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-base text-slate-400 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
