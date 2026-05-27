import { education } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-dark py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            06 &middot; Academic Foundation
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            Education & <span className="italic text-gold">Certifications</span>
          </h2>
        </div>

        {/* 2-column grid (1fr 1fr) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="group bg-dark3 border border-border-gold p-8 rounded-[4px] hover:border-gold transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              
              <div>
                {/* Badge Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block text-[0.7rem] font-sans font-bold uppercase tracking-[0.15em] text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-[2px]">
                    {edu.badge}
                  </span>
                  <span className="text-muted-gray text-xs font-mono">
                    {edu.year.split("·")[0].trim()}
                  </span>
                </div>

                {/* Degree / Program */}
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-text-primary mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-gold-light/95 uppercase text-xs tracking-wider font-semibold font-sans mb-4">
                  {edu.institution}
                </p>

                {/* Narrative Note */}
                <p className="text-muted-gray text-[0.92rem] leading-relaxed font-light font-sans italic border-l-2 border-gold/10 pl-4 py-1.5 mt-6">
                  "{edu.note}"
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
