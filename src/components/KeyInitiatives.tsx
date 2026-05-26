import { projectInitiatives } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function KeyInitiatives() {
  return (
    <AnimatedSection id="projects" className="bg-dark py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            04 &middot; Portfolios in Action
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            Key <span className="italic text-gold">Initiatives</span>
          </h2>
        </div>

        {/* 3-Column Autogrid (minmax 310px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectInitiatives.map((proj) => (
            <div
              key={proj.id}
              className="project-card-container group relative flex flex-col justify-between bg-dark3 border border-border-gold p-6 sm:p-8 rounded-[4px] hover:border-gold hover:-translate-y-1.5 transition-all duration-300 shadow-xl overflow-hidden cursor-default select-none pb-12"
            >
              
              {/* Top part: Icon, Title, Subtitle */}
              <div>
                <div className="text-3xl mb-5 filter drop-shadow-[0_2px_10px_rgba(201,146,42,0.15)]">
                  {proj.icon}
                </div>
                
                <h3 className="project-card-underline inline-block font-serif text-xl sm:text-[1.35rem] font-light text-text-primary tracking-tight leading-snug group-hover:text-gold transition-colors duration-300 pb-2">
                  {proj.title}
                </h3>
                
                <p className="text-gold-light text-xs font-semibold uppercase tracking-wider mt-2 mb-4">
                  {proj.subtitle}
                </p>
                
                <p className="text-muted-gray text-[0.88rem] leading-relaxed font-light font-sans mb-6">
                  {proj.desc}
                </p>
              </div>

              {/* Bottom part: Impact & Tags */}
              <div className="space-y-5">
                
                {/* Specific Highlighted Metrics block */}
                <div className="p-3.5 bg-dark4/80 border border-gold/10 rounded-[2px]">
                  <p className="text-xs uppercase tracking-widest text-muted-gray font-bold mb-1">
                    Deliverable Impact
                  </p>
                  <p className="text-sm font-semibold text-gold font-serif">
                    {proj.impact}
                  </p>
                </div>

                {/* Subtag pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block text-[0.68rem] font-sans font-medium uppercase tracking-[0.05em] text-text-primary/70 bg-dark2 border border-gold/5 px-2 py-0.5 rounded-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Gold underline slide-in container (styled via index.css project-card-underline) */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
