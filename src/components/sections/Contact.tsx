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
            title="Get in Touch"
            subtitle="Have questions? Reach out to the event coordinators"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {EVENT_CONFIG.contacts.map((contact, index) => (
            <AnimateOnScroll
              key={contact.name}
              delay={index * 150}
              variant="fade-up"
            >
              <GlassCard className="p-8" variant="subtle">
                <span className="inline-block text-[10px] font-mono tracking-[0.3em] text-[#0ea5e9]/60 uppercase mb-4 px-3 py-1 rounded-full border border-[#0ea5e9]/15 bg-[#0ea5e9]/5">
                  {contact.role}
                </span>

                <h3 className="text-lg font-display font-semibold text-white mb-4">
                  {contact.name}
                </h3>

                <div className="space-y-2">
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-[#0ea5e9]/60" aria-hidden="true">☎</span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </p>
                  <p className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="text-[#0ea5e9]/60" aria-hidden="true">✉</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>
              </GlassCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
