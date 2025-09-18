import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import productionsData from "@/data/productions.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Productions = () => {
  const productions = productionsData.productions;
  const currentProductions = productions.filter(p => p.status === "current");
  const pastProductions = productions.filter(p => p.status === "past");

  // Background slideshow
  const slideImages = [
    "/slides/filoktitis-slide.jpg",
    "/slides/oute-mpros-oute-pisw-slide.jpg", 
    "/slides/stamna-slide.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideImages.length]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocial />
      
      {/* Hero Section with Background Slideshow */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slideImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6 text-white drop-shadow-lg">Παραστάσεις</h1>
            <p className="text-body-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Κάθε παράσταση δημιουργείται με προσοχή για να δημιουργήσει έναν βαθύ διάλογο 
              μεταξύ κοινού και ερμηνευτή, εξερευνώντας τα βάθη της ανθρώπινης εμπειρίας.
            </p>
          </div>
        </div>
      </section>

      {/* Current Productions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Παίζονται Τώρα
          </h2>
          
          <div className="space-y-16">
            {currentProductions.map((production, index) => (
              <Link
                to={`/productions/${production.id}`}
                key={production.id}
                className="group animate-fade-up block"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden shadow-elegant">
                      {production.images?.main ? (
                        <img
                          src={production.images.main}
                          alt={production.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Τρέχουσα Παράσταση
                      </span>
                    </div>
                    
                    <h3 className="text-display-md text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {production.title}
                    </h3>
                    
                    <h4 className="text-xl text-muted-foreground font-light mb-6">
                      {production.subtitle}
                    </h4>
                    
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      {production.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <span className="text-sm text-muted-foreground">
                        📅 {production.dates}
                      </span>
                    </div>
                    
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                      Κλείσε Εισιτήρια
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* Past Productions */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Παλαιότερες Παραστάσεις
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pastProductions.map((production, index) => (
              <Link
                to={`/productions/${production.id}`}
                key={production.id}
                className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in block"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                  {production.images?.main ? (
                    <img
                      src={production.images.main}
                      alt={production.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                    </div>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      Αρχείο
                    </span>
                  </div>
                  
                  <h3 className="text-display-md text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {production.title}
                  </h3>
                  
                  <h4 className="text-lg text-muted-foreground font-light mb-4">
                    {production.subtitle}
                  </h4>
                  
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                    {production.description}
                  </p>
                  
                  <span className="text-sm text-muted-foreground">
                    📅 {production.dates}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Productions;