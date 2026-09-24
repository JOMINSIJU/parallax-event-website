import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/** Gradient accent colors for each round card */
const roundAccents = [
  {
    gradient: "from-indigo-500 to-violet-500",
    glow: "indigo",
    border: "border-indigo-500/20 hover:border-indigo-500/40",
    shadow: "hover:shadow-indigo-500/10",
    number: "text-indigo-400",
    tagBg: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  {
    gradient: "from-cyan-500 to-blue-500",
    glow: "cyan",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    shadow: "hover:shadow-cyan-500/10",
    number: "text-cyan-400",
    tagBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  {
    gradient: "from-violet-500 to-fuchsia-500",
    glow: "violet",
    border: "border-violet-500/20 hover:border-violet-500/40",
    shadow: "hover:shadow-violet-500/10",
    number: "text-violet-400",
    tagBg: "bg-violet-500/10 text-violet-300 border-violet-500/20",
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
            label="// Rounds"
            title="Three Rounds"
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
                    hover:shadow-[0_0_50px_-15px] ${accent.shadow}
                    h-full flex flex-col
                  `}
                >
                  {/* Top gradient bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${accent.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Round number */}
                    <div className="mb-6">
                      <span
                        className={`font-mono text-5xl font-bold ${accent.number} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                      >
                        {round.number}
                      </span>
                    </div>

                    {/* Round label */}
                    <p className="text-[10px] font-mono tracking-[0.4em] text-slate-600 uppercase mb-2">
                      Round {round.number}
                    </p>

                    {/* Round title */}
                    <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                      {round.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                      {round.description}
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
      </div>
    </section>
  );
}
