import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import ExperienceCards from "./ExperienceCard";
import TabbedGallery from "./TabbedGallery";
import TestimonialCarousel from "./TestimonialCarousel";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <div className="App relative min-h-screen text-ink antialiased">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-surface"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-mesh" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-fine-grid bg-grid opacity-[0.65]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 noise-overlay opacity-[0.022] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <SkillsSection />
          <ExperienceCards />
          <TabbedGallery />
          <TestimonialCarousel />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
