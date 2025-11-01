import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productionsData from "@/data/productions.json";

const HeroSection = () => {
  const currentProductions = productionsData.productions.filter(
    (p) => p.status === "current" || p.status === "Τρέχουσα Παράσταση"
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Manual navigation only - no auto-rotation
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProductions.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentProductions.length) % currentProductions.length);
  };
  
  if (currentProductions.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-display-xl text-primary-foreground mb-6">
            Καλώς ήρθατε στη <span className="text-gold">Μέθεξις</span>
          </h1>
          <p className="text-body-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Θεατρικές παραγωγές που συναρπάζουν και εμπνέουν
          </p>
        </div>
      </section>
    );
  }

  const currentProduction = currentProductions[currentIndex];
  
  // Επιλογή εικόνας ανάλογα με το αν είναι mobile
  const bgImage = isMobile
    ? currentProduction.images?.portrait || currentProduction.images?.main || "/images/theater-placeholder.jpg"
    : currentProduction.images?.main || currentProduction.images?.landscape || "/images/theater-placeholder.jpg";
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Responsive with object-fit */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          alt={currentProduction.title}
          loading="eager"
          className="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out"
        />
      </div>
      
      {/* Subtle Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-background/50" />
      <div className="absolute inset-0 bg-primary/20" />
      
      {/* Navigation Controls */}
      {currentProductions.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Προηγούμενη παράσταση"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Επόμενη παράσταση"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </button>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-up">
          {/* Title with subtle shadow */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-none tracking-tight text-white mb-4 sm:mb-6"
            style={{
              textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            Τώρα στη σκηνή: <span className="text-gold">{currentProduction.title}</span>
          </h1>
          
          {/* Subtitle with subtle stroke */}
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-light leading-tight mb-6 sm:mb-8 animate-fade-in px-2"
            style={{
              color: 'white',
              textShadow: '-1px -1px 0 rgba(0,0,0,0.8), 1px -1px 0 rgba(0,0,0,0.8), -1px 1px 0 rgba(0,0,0,0.8), 1px 1px 0 rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            {currentProduction.subtitle}
          </h2>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            {currentProduction.bookingLink ? (
              <a
                href={currentProduction.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-dramatic rounded-xl backdrop-blur-sm border border-accent/20 hover:scale-105 shadow-xl text-center"
              >
                <span className="relative z-10">Κλείσε Εισιτήρια</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ) : (
              <span className="w-full sm:w-auto bg-muted text-muted-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm shadow-xl text-center">
                Σύντομα διαθέσιμα εισιτήρια
              </span>
            )}
            <Link
              to={`/productions/${currentProduction.id}`}
              className="w-full sm:w-auto group relative overflow-hidden bg-white/90 backdrop-blur-md text-primary hover:bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 rounded-xl hover:scale-105 shadow-xl border border-white/20 text-center"
            >
              <span className="relative z-10">Μάθετε περισσότερα</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Production Indicators */}
      {currentProductions.length > 1 && (
        <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {currentProductions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold w-6 sm:w-8' 
                  : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              aria-label={`Πήγαινε στην παράσταση ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 right-4 md:right-8 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-primary-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;