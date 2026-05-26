import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Competencies from "./components/Competencies";
import Experience from "./components/Experience";
import KeyInitiatives from "./components/KeyInitiatives";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrintResume from "./components/PrintResume";

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-text-primary overflow-x-hidden font-sans">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-[50vh] radial-glow-top-right opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50vh] radial-glow-bottom-center opacity-60"></div>
      </div>

      {/* Main Dynamic Webpage */}
      <div className="relative z-10 print:hidden">
        {/* Navigation bar */}
        <Navbar />

        {/* Chronological portfolio segments */}
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <KeyInitiatives />
        <Achievements />
        <Education />
        <Contact />

        {/* Unified footer */}
        <Footer />

        {/* Visual Flare matching the Immersive UI theme Spec */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gold opacity-5 blur-[120px] pointer-events-none"></div>
      </div>

      {/* Self-contained Printer Friendly Export Template */}
      <PrintResume />

    </div>
  );
}
