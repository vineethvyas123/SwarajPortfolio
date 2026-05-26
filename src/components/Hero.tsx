import { profileData } from "../data";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative min-h-screen w-full flex flex-col justify-center items-start overflow-hidden grid-bg-pattern radial-glow-top-right pt-20 px-6 sm:px-12 md:px-24 select-none">
      
      {/* Editorial layout container */}
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col justify-center h-full py-12 md:py-24">
        
        {/* Eyebrow label - Delays in sequential style */}
        <div 
          className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <span className="w-9 h-[1px] bg-gold block"></span>
          <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.2em] font-semibold">
            Technology Executive · AI & Digital Transformation
          </span>
        </div>

        {/* Name H1 - Swaraj Kumar (light weight) Padma (italic, gold) */}
        <h1 
          className="font-serif text-[clamp(2.8rem,6.5vw,6rem)] leading-[1.05] font-light mb-4 text-text-primary tracking-tight opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          Swaraj Kumar{" "}
          <span className="italic text-gold font-normal font-serif">
            Padma
          </span>
        </h1>

        {/* Subtitle - Executive Director */}
        <p 
          className="text-muted-gray text-lg sm:text-2xl font-light tracking-wide mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
        >
          {profileData.currentTitle} &middot; <span className="text-text-primary/90 font-medium">{profileData.company}</span>
        </p>

        {/* Tagline - Blockquote with left gold border */}
        <div 
          className="border-l-2 border-gold pl-6 py-1 my-6 max-w-3xl opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-text-primary/90 leading-relaxed tracking-wide font-light">
            "{profileData.tagline}"
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-gold hover:bg-gold-light text-dark font-sans text-xs uppercase tracking-widest font-bold px-8 py-4 border border-transparent rounded-[2px] cursor-pointer shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Key Initiatives
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border border-gold text-gold hover:text-dark hover:bg-gold font-sans text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-[2px] cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

      </div>

      {/* Scroll hint and trailing line */}
      <div 
        className="absolute bottom-8 left-6 sm:left-12 md:left-24 flex items-center gap-3 opacity-0 animate-fade-in-up z-10"
        style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
      >
        <span className="text-muted-gray text-[0.72rem] uppercase tracking-[0.25em] font-medium">
          Scroll to explore
        </span>
        <span className="w-16 h-[1px] bg-muted-gray/30 block relative overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-1/2 bg-gold animate-slide"></span>
        </span>
      </div>

      {/* CSS For Hero keyframe Animations (specifically added to keep this clean) */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          animation: slide 3s infinite linear;
        }
      `}</style>
    </header>
  );
}
