import { achievements } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="bg-dark2 py-12 sm:py-16 px-6 sm:px-12 md:px-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            05 &middot; Accolades & Milestones
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            Key <span className="italic text-gold">Achievements</span>
          </h2>
        </div>

        {/* Auto-fit card grid (minmax 260px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="group bg-dark3 border border-border-gold p-6 sm:p-8 rounded-[4px] hover:border-gold hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-start relative overflow-hidden"
            >
              {/* Highlight Corner Decoration */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[14px] border-r-[14px] border-t-gold/10 border-r-gold/10 group-hover:border-t-gold/40 group-hover:border-r-gold/40 transition-colors duration-300"></div>

              {/* Icon / Emblem */}
              <div className="text-3xl mb-5 filter drop-shadow-[0_2px_8px_rgba(201,146,42,0.15)] flex items-center justify-center w-12 h-12 bg-dark/40 border border-gold/10 rounded-[2px] group-hover:border-gold/30 transition-colors duration-300">
                {ach.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-normal text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {ach.title}
              </h3>

              {/* Description */}
              <p className="text-muted-gray text-[0.88rem] leading-relaxed font-light font-sans">
                {ach.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
