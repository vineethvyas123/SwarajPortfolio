import { useEffect, useState } from "react";
import { profileData } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-gold/10 ${
        isScrolled ? "py-3 bg-dark/95 shadow-lg" : "py-5 bg-dark/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-2xl font-bold tracking-wider text-gold hover:text-gold-light transition-colors pointer-events-auto cursor-pointer"
        >
          {profileData.initials}
        </button>

        {/* Center Side: Nav Links (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {[
            { label: "About", target: "about" },
            { label: "Experience", target: "experience" },
            { label: "Initiatives", target: "projects" },
            { label: "Awards", target: "achievements" },
            { label: "Education", target: "education" }
          ].map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="text-muted-gray hover:text-gold text-[0.88rem] uppercase tracking-wider font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="border border-gold text-gold hover:text-dark hover:bg-gold px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all duration-300 rounded-[2px] cursor-pointer"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
}
