import "./App.css";
import ContactForm from "./ContactForm";
import ExperienceCards from "./ExperienceCard";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import TabbedGallery from "./TabbedGallery";
import TestimonialCarousel from "./TestimonialCarousel";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ExperienceCards />
      <TabbedGallery />
      <TestimonialCarousel />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
