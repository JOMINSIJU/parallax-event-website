import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-24 md:py-32"
      aria-labelledby="sponsors-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="Our Sponsors"
            subtitle="Sponsor details will be updated soon"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up">
          <div className="max-w-2xl mx-auto">
            <GlassCard className="p-12 text-center" variant="subtle">
              <div className="text-4xl mb-6" aria-hidden="true">🤝</div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">
                Sponsors — Coming Soon
              </h3>
              <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto">
                We are partnering with leading organizations to bring you the best
                experience. Sponsor details will be announced shortly.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-[#0ea5e9] uppercase">
                  To Be Updated
                </span>
              </div>
            </GlassCard>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
