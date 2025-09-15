import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NowPlayingSection from "@/components/NowPlayingSection";
import ProductionCarousel from "@/components/ProductionCarousel";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <NowPlayingSection />
        <ProductionCarousel />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;