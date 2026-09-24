import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/** Gradient accent colors for each round card */
const roundAccents = [
  {
    gradient: "from-[#0ea5e9] to-[#6366f1]",
    glow: "shadow-[#0ea5e9]/10",
    border: "border-[#0ea5e9]/20 hover:border-[#0ea5e9]/50",
    number: "text-[#0ea5e9]",
    tagBg: "bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20",
    headerBg: "bg-gradient-to-br from-[#0ea5e9]/10 to-transparent",
  },
  {
    gradient: "from-[#d946ef] to-[#a855f7]",
    glow: "shadow-[#d946ef]/10",
    border: "border-[#d946ef]/20 hover:border-[#d946ef]/50",
    number: "text-[#d946ef]",
    tagBg: "bg-[#d946ef]/10 text-[#d946ef] border-[#d946ef]/20",
    headerBg: "bg-gradient-to-br from-[#d946ef]/10 to-transparent",
  },
  {
    gradient: "from-[#a855f7] to-[#0ea5e9]",
    glow: "shadow-[#a855f7]/10",
    border: "border-[#a855f7]/20 hover:border-[#a855f7]/50",
    number: "text-[#a855f7]",
    tagBg: "bg-[#a855f7]/10 text-[#a855f7] border-[#a855f7]/20",
    headerBg: "bg-gradient-to-br from-[#a855f7]/10 to-transparent",
  },
];

export function Rounds() {
  return (
    <section
      id="rounds"
      className="relative py-24 md:py-32"
      aria-labelledby="rounds-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading
            title="The Rounds"
            subtitle="Compete through three challenging rounds of prompt engineering"
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EVENT_CONFIG.rounds.map((round, index) => {
            const accent = roundAccents[index];
            return (
              <AnimateOnScroll
                key={round.number}
                delay={index * 150}
                variant="fade-up"
              >
                <div
                  className={`
                    relative group rounded-2xl border backdrop-blur-md
                    bg-white/[0.02] overflow-hidden
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:bg-white/[0.04]
                    ${accent.border}
                    hover:shadow-[0_0_50px_-15px] ${accent.glow}
                    h-full flex flex-col
                  `}
                >
                  {/* Top gradient bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${accent.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Card header area */}
                  <div className={`p-8 pb-4 ${accent.headerBg}`}>
                    {/* Round number — large decorative */}
                    <span
                      className={`font-mono text-6xl font-bold ${accent.number} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                    >
                      {round.number}
                    </span>

                    {/* Round title */}
                    <h3 className="text-2xl font-display font-bold text-white mt-2 tracking-wide">
                      {round.title}
                    </h3>
                  </div>

                  <div className="p-8 pt-4 flex flex-col flex-1">
                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1 italic">
                      &ldquo;{round.description}&rdquo;
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {round.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-full border ${accent.tagBg}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* View Full Round Details — Brochure Button */}
        <AnimateOnScroll variant="fade-up" delay={500}>
          <div className="text-center mt-14">
            <a
              href={EVENT_CONFIG.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-mono tracking-[0.15em] text-white uppercase rounded-xl border border-[#0ea5e9]/30 bg-white/[0.03] hover:bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/50 transition-all duration-500 hover:-translate-y-0.5"
            >
              <span>View Full Round Details</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
