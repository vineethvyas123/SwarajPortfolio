import { competencies } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Competencies() {
  return (
    <AnimatedSection id="competencies" className="bg-dark py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="mb-12">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            02 &middot; Strategic Toolkit
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            Core <span className="italic text-gold">Competencies</span>
          </h2>
        </div>

        {/* Tag Cloud */}
        <div className="flex flex-wrap gap-3 sm:gap-4 max-w-5xl">
          {competencies.map((tag, idx) => (
            <div
              key={idx}
              className="border border-border-gold text-text-primary px-5 py-3 text-xs sm:text-sm font-sans font-medium tracking-wide rounded-[2px] transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold-dim cursor-default select-none"
            >
              {tag}
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
