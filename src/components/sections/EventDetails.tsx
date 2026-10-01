import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const details = [
  {
    icon: "📅",
    label: "Date",
    value: `${EVENT_CONFIG.date} ${EVENT_CONFIG.year}`,
    mono: true,
  },
  {
    icon: "📍",
    label: "Venue",
    value: `${EVENT_CONFIG.venue.hall}, ${EVENT_CONFIG.venue.floor}, ${EVENT_CONFIG.venue.block}, ${EVENT_CONFIG.venue.campus}`,
    mono: false,
  },
  {
    icon: "🏫",
    label: "Location",
    value: `${EVENT_CONFIG.venue.institution}, ${EVENT_CONFIG.venue.area}`,
    mono: false,
  },
];

export function EventDetails() {
  return (
    <section
      id="details"
      className="relative py-16 md:py-32"
      aria-labelledby="details-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Event Details"
            subtitle="Everything you need to know about when and where"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {details.map((detail, index) => (
            <AnimateOnScroll key={detail.label} delay={index * 100} variant="fade-up">
              <GlassCard className="p-6 text-center h-full" variant="accent">
                <div className="text-3xl mb-4" aria-hidden="true">
                  {detail.icon}
                </div>
                <p className="text-xs tracking-[0.3em] text-[#38bdf8]/60 uppercase mb-3">
                  {detail.label}
                </p>
                <p className="text-sm text-white font-medium leading-snug">
                  {detail.value}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Location Link */}
        <AnimateOnScroll variant="fade-up" delay={400}>
          <div className="flex justify-center">
            <a
              href={EVENT_CONFIG.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#8b5cf6]/30 transition-all duration-400 hover:-translate-y-0.5"
            >
              <span className="text-lg" aria-hidden="true">📍</span>
              <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
                View Location on Google Maps
              </span>
              <span className="text-slate-500 group-hover:text-[#8b5cf6] transition-colors">→</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
