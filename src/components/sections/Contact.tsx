import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            label="// Contact"
            title="Get in Touch"
            subtitle="Have questions? Reach out to the event coordinators"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {EVENT_CONFIG.contacts.map((contact, index) => (
            <AnimateOnScroll
              key={contact.role}
              delay={index * 150}
              variant="fade-up"
            >
              <GlassCard className="p-8" variant="subtle">
                {/* Role badge */}
                <span className="inline-block text-[10px] font-mono tracking-[0.3em] text-indigo-400/60 uppercase mb-4 px-3 py-1 rounded-full border border-indigo-500/15 bg-indigo-500/5">
                  {contact.role}
                </span>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mb-4">
                  {contact.name}
                </h3>

                {/* Contact details */}
                <div className="space-y-2">
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-indigo-400/60" aria-hidden="true">
                      ☎
                    </span>
                    <span>{contact.phone}</span>
                  </p>
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-indigo-400/60" aria-hidden="true">
                      ✉
                    </span>
                    <span>{contact.email}</span>
                  </p>
                </div>

                {/* Placeholder notice */}
                {contact.name === "To Be Announced" && (
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider text-slate-600 uppercase">
                      Details coming soon
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
