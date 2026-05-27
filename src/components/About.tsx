import { profileData, metricCards } from "../data";
import ProfilePhoto from "./ProfilePhoto";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="bg-dark2 py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-b border-gold/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="mb-16 md:mb-20">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            01 &middot; Executive Profile
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            About <span className="italic text-gold">Swaraj Kumar</span>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Narrative and Photo */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Split row for photo & intro paragraph on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <ProfilePhoto />
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-2xl font-light italic text-gold mb-4 leading-snug">
                  "Turning complex technology into board-defensible enterprise value."
                </h3>
                <p className="text-text-primary/95 text-[0.95rem] leading-relaxed font-light font-sans">
                  {profileData.summaryParagraphs[0]}
                </p>
              </div>
            </div>

            {/* Remaining narrative paragraphs */}
            <div className="space-y-6 text-muted-gray text-[0.95rem] leading-relaxed font-light">
              <p>{profileData.summaryParagraphs[1]}</p>
              <p>{profileData.summaryParagraphs[2]}</p>
              <div className="pt-4 border-t border-gold/10 flex items-center gap-4">
                <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold rounded-[2px] uppercase tracking-wider">
                  ISB CERTIFIED &middot; 2026
                </span>
                <p className="text-text-primary text-sm font-medium">
                  {profileData.summaryParagraphs[3]}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column - 6 Metric Cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h4 className="text-muted-gray text-xs uppercase tracking-[0.2em] font-bold mb-6">
              Measurable Executive Impact
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {metricCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-dark3 border border-border-gold border-l-[3px] border-l-gold p-6 rounded-[4px] hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-lg group-hover:shadow-gold-dim"
                >
                  <p className="font-sans text-3xl sm:text-4xl font-extrabold text-gold-light tracking-tight mb-2 leading-none">
                    {card.value}
                  </p>
                  <p className="text-muted-gray text-[0.82rem] leading-snug font-medium font-sans">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-dark3/50 border border-gold/5 rounded-[4px]">
              <p className="text-[0.78rem] text-muted-gray leading-normal italic text-center">
                * All metrics traced to direct C-suite signoffs and corporate performance auditable achievements.
              </p>
            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
}
