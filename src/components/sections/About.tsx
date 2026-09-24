import { EVENT_CONFIG } from "@/data/event-config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeading title={EVENT_CONFIG.about.title} />
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          {EVENT_CONFIG.about.paragraphs.map((paragraph, index) => (
            <AnimateOnScroll key={index} delay={index * 150}>
              <p className="text-lg text-slate-400 leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
