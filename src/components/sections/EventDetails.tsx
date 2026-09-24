import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const details = [
  {
    icon: "📅",
    label: "Date",
    value: EVENT_CONFIG.date,
    mono: true,
  },
  {
    icon: "📍",
    label: "Venue",
    value: EVENT_CONFIG.venue.hall,
    mono: false,
  },
  {
    icon: "🏢",
    label: "Location",
    value: `${EVENT_CONFIG.venue.floor}, ${EVENT_CONFIG.venue.block}`,
    mono: false,
  },
  {
    icon: "🎓",
    label: "Institution",
    value: EVENT_CONFIG.venue.institution,
    mono: false,
  },
];

export function EventDetails() {
  return (
    <section
      id="details"
      className="relative py-24 md:py-32"
      aria-labelledby="details-heading"
    >
      {/* Subtle section separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="// Details"
            title="Event Details"
            subtitle="Everything you need to know about when and where"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {details.map((detail, index) => (
            <AnimateOnScroll key={detail.label} delay={index * 100} variant="fade-up">
              <GlassCard className="p-6 text-center h-full" variant="accent">
                <div className="text-3xl mb-4" aria-hidden="true">
                  {detail.icon}
                </div>
                <p className="text-xs font-mono tracking-[0.3em] text-indigo-400/60 uppercase mb-3">
                  {detail.label}
                </p>
                <p
                  className={`text-white font-medium leading-snug ${
                    detail.mono ? "font-mono text-lg tracking-wider" : "text-sm"
                  }`}
                >
                  {detail.value}
                </p>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
