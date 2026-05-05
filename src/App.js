import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ServicesSection from "./ServicesSection";
import ExperienceCards from "./ExperienceCard";
import TabbedGallery from "./TabbedGallery";
import TestimonialCarousel from "./TestimonialCarousel";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import BottomDock from "./BottomDock";

function App() {
  return (
    <div className="App relative min-h-screen text-ink antialiased bg-black overflow-x-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-black"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(251,191,36,0.12),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-[0.025] mix-blend-overlay"
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ExperienceCards />
          <TabbedGallery />
          <TestimonialCarousel />
          <ContactForm />
        </main>
        <Footer />
        <BottomDock />
      </div>
    </div>
  );
}

export default App;
