import { profileData } from "../data";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/20 py-8 px-6 sm:px-12 md:px-24 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Name */}
        <div className="font-serif text-lg font-semibold tracking-widest text-gold">
          {profileData.name}
        </div>

        {/* Center: Title / Company Description */}
        <div className="text-center font-sans text-xs uppercase tracking-wider text-muted-gray leading-normal md:max-w-md">
          {profileData.currentTitle} &middot; <span className="text-text-primary/70">{profileData.company}</span>
        </div>

        {/* Right Side: Copyright */}
        <div className="font-sans text-[0.72rem] uppercase tracking-widest text-muted-gray/80 text-right">
          &copy; 2026 &middot; Bengaluru, India
        </div>

      </div>
    </footer>
  );
}
