import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productionsData from "@/data/productions.json";

const HeroSection = () => {
  const currentProductions = productionsData.productions.filter(
    (p) => p.status === "current" || p.status === "Τρέχουσα Παράσταση"
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${currentProduction.images?.landscape || currentProduction.images?.main || "/images/theater-placeholder.jpg"})` 
        }}
      />
      
      {/* Enhanced Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/60" />
      <div className="absolute inset-0 bg-primary/30" />
      
      {/* Navigation Controls */}
      {currentProductions.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Προηγούμενη παράσταση"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground hover:bg-background/20 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            aria-label="Επόμενη παράσταση"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-up">
          {/* Title with enhanced contrast */}
          <h1 className="text-display-lg text-white mb-6 drop-shadow-2xl">
            Τώρα στη σκηνή: <span className="text-gold drop-shadow-lg">{currentProduction.title}</span>
          </h1>
          
          {/* Subtitle with stroke effect */}
          <h2 
            className="text-display-md font-light mb-8 animate-fade-in"
            style={{
              color: 'white',
              textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000',
            }}
          >
            {currentProduction.subtitle}
          </h2>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {currentProduction.bookingLink ? (
              <a
                href={currentProduction.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-dramatic rounded-xl backdrop-blur-sm border border-accent/20 hover:scale-105 shadow-xl"
              >
                <span className="relative z-10">Κλείσε Εισιτήρια</span>
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ) : (
              <span className="bg-muted text-muted-foreground px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm shadow-xl">
                Σύντομα διαθέσιμα εισιτήρια
              </span>
            )}
            <Link
              to={`/productions/${currentProduction.id}`}
              className="group relative overflow-hidden bg-white/90 backdrop-blur-md text-primary hover:bg-white px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-xl hover:scale-105 shadow-xl border border-white/20"
            >
              <span className="relative z-10">Μάθετε περισσότερα</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Production Indicators */}
      {currentProductions.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {currentProductions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gold w-8' 
                  : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              aria-label={`Πήγαινε στην παράσταση ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;