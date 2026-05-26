import { useState } from "react";
import { Mail, Phone, ExternalLink, FileText, Check, Copy, MapPin } from "lucide-react";
import { profileData } from "../data";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerPrintResume = () => {
    window.print();
  };

  return (
    <AnimatedSection
      id="contact"
      className="bg-dark2 py-28 px-6 sm:px-12 md:px-24 border-b border-gold/10 relative overflow-hidden radial-glow-bottom-center"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Title */}
        <span className="text-gold text-xs sm:text-[0.78rem] uppercase tracking-[0.25em] font-semibold block mb-4">
          07 &middot; Connection Channel
        </span>
        <h2 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-light tracking-tight text-text-primary mb-8">
          Let's Initiate a <span className="italic text-gold">Conversation</span>
        </h2>

        {/* Central tagline/vow with italic serif styling */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-text-primary/95 leading-relaxed font-light">
            "Available for advisory, consulting, board conversations, and executive leadership opportunities at the frontier of AI and digital transformation."
          </p>
        </div>

        {/* Action button triggers & connections */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 mb-10 max-w-3xl mx-auto select-none">
          
          {/* Email button */}
          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-4 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5"
            draggable="false"
          >
            <Mail className="w-4 h-4 text-gold" />
            Email Me
          </a>

          {/* Copy Email Helper */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-4 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold" />
                Copy Address
              </>
            )}
          </button>

          {/* Phone button */}
          <a
            href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-4 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5"
            draggable="false"
          >
            <Phone className="w-4 h-4 text-gold" />
            +91-9676068934
          </a>

          {/* LinkedIn Button */}
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-4 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5"
            draggable="false"
          >
            <ExternalLink className="w-4 h-4 text-gold" />
            LinkedIn Profile
          </a>

          {/* Print/Download Dynamic Resume */}
          <div className="flex flex-wrap justify-center gap-3 w-full mt-2">
            <button
              onClick={triggerPrintResume}
              className="flex items-center gap-2 border border-gold hover:bg-gold hover:text-dark text-gold text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-5 py-3 rounded-[2px] transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              Print / Export PDF
            </button>
            <a
              href="/Swaraj_Kumar_Padma_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-5 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5"
            >
              <ExternalLink className="w-4 h-4 text-gold" />
              View Standalone CV
            </a>
            <a
              href="/Swaraj_Kumar_Padma_Resume.md"
              download="Swaraj_Kumar_Padma_Resume.md"
              className="flex items-center gap-2 border border-border-gold hover:border-gold hover:text-gold text-text-primary text-xs sm:text-sm font-sans tracking-wider uppercase font-semibold px-5 py-3 rounded-[2px] transition-all bg-dark3 hover:-translate-y-0.5"
            >
              <Check className="w-4 h-4 text-gold" />
              Download Markdown CV
            </a>
          </div>

        </div>

        {/* Sub-line location indicator */}
        <div className="flex items-center justify-center gap-2 text-muted-gray text-xs sm:text-sm font-medium uppercase tracking-[0.15em] pt-4 select-none">
          <MapPin className="w-4 h-4 text-gold shrink-0" />
          <span>Bengaluru, India &middot; Open to global conversations</span>
        </div>

      </div>
    </AnimatedSection>
  );
}
