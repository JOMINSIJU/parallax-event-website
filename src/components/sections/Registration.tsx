import { EVENT_CONFIG } from "@/data/event-config";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function Registration() {
  return (
    <section
      id="register"
      className="relative py-16 md:py-32"
      aria-labelledby="register-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll variant="scale">
          <div className="relative max-w-3xl mx-auto text-center">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#38bdf8]/[0.05] blur-[100px] rounded-full pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative rounded-2xl md:rounded-3xl border border-[#38bdf8]/20 bg-white/[0.02] backdrop-blur-md p-6 sm:p-10 md:p-16 overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#38bdf8]/30 rounded-tl-3xl" aria-hidden="true" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#38bdf8]/30 rounded-tr-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#38bdf8]/30 rounded-bl-3xl" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#38bdf8]/30 rounded-br-3xl" aria-hidden="true" />

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />

              <span className="inline-block text-xs font-mono tracking-[0.4em] text-[#38bdf8]/60 uppercase mb-6">
                Registration Portal
              </span>

              <h2
                id="register-heading"
                className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6 tracking-tight"
              >
                Ready to Compete?
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 md:mb-10 max-w-xl mx-auto leading-relaxed">
                Secure your spot at {EVENT_CONFIG.name} — the ultimate {EVENT_CONFIG.type} challenge
                at {EVENT_CONFIG.institution.name}.
              </p>

              <a
                href={EVENT_CONFIG.registrationUrl}
                className="group relative inline-flex items-center gap-3 px-6 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-semibold tracking-[0.15em] text-white uppercase overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                id="register-cta"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] via-[#6366f1] to-[#d946ef] rounded-2xl" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="absolute inset-0 rounded-2xl shadow-xl shadow-[#38bdf8]/30 group-hover:shadow-[#38bdf8]/50 transition-shadow duration-500" />
                <span className="relative">Register Now</span>
                <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <p className="mt-6 text-xs font-mono tracking-wider text-slate-600">
                {EVENT_CONFIG.date} • {EVENT_CONFIG.venue.hall}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
