import { experienceData } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="bg-dark2 py-24 sm:py-32 px-6 sm:px-12 md:px-24 border-b border-gold/10 relative overflow-hidden">
      
      {/* Decorative Radial Glow */}
      <div className="absolute inset-y-0 left-0 w-80 radial-glow-blue-left pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="mb-20">
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-3">
            03 &middot; Track Record
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-text-primary">
            Executive <span className="italic text-gold">Experience</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical gold timeline line (incorporating the gradient fading out at bottom) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-4 w-[1px] bg-gradient-to-b from-gold via-gold/40 to-transparent transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {experienceData.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <AnimatedSection
                  key={job.id}
                  tag="div"
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet dot anchored on the timeline line */}
                  <div className="absolute left-[11px] md:left-1/2 top-8 w-2.5 h-2.5 rounded-full bg-gold border border-dark z-20 transform -translate-x-[2px] md:-translate-x-1.2 shadow-md">
                    <span className="absolute -inset-0.5 rounded-full border border-gold-light animate-ping opacity-60"></span>
                  </div>

                  {/* Left Column (Desktop spacing / alternate column spacing) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-5 md:mt-6 text-left md:text-right">
                    {!isEven ? (
                      <div className="md:text-left">
                        <span className="inline-block font-sans text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase bg-gold/10 px-3 py-1.5 border border-gold/20 rounded-[2px] mb-2">
                          {job.startDate} &mdash; {job.endDate}
                        </span>
                        <p className="text-muted-gray text-xs uppercase tracking-wider font-bold mt-1">
                          {job.location}
                        </p>
                      </div>
                    ) : (
                      <div className="md:text-right">
                        <span className="inline-block font-sans text-xs sm:text-sm font-semibold text-gold tracking-widest uppercase bg-gold/10 px-3 py-1.5 border border-gold/20 rounded-[2px] mb-2">
                          {job.startDate} &mdash; {job.endDate}
                        </span>
                        <p className="text-muted-gray text-xs uppercase tracking-wider font-bold mt-1">
                          {job.location}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column (The Card containing bullet list) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-4 md:mt-0">
                    <div className="bg-dark3 border border-border-gold p-6 sm:p-8 rounded-[4px] hover:border-gold transition-all duration-300 shadow-xl group">
                      
                      {/* Job title & Company */}
                      <div className="mb-4">
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-text-primary group-hover:text-gold transition-colors duration-300">
                          {job.role}
                        </h3>
                        <p className="text-gold/90 text-sm font-medium uppercase tracking-wider mt-1">
                          {job.company}
                        </p>
                      </div>

                      {/* Timeline Bullet Lines */}
                      <ul className="space-y-3 mt-4 text-muted-gray text-[0.92rem] leading-relaxed font-light">
                        {job.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2.5">
                            <span className="text-gold font-bold text-sm mt-[2px] select-none">&rarr;</span>
                            <span className="text-text-primary/80">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </AnimatedSection>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
