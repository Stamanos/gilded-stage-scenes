import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import FloatingInfoTip from "@/components/FloatingInfoTip";
import ProductionFilters from "@/components/ProductionFilters";
import { Button } from "@/components/ui/button";
import productionsData from "@/data/productions.json";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

const Productions = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const productions = productionsData.productions;

  // Extract available locations and genres
  const availableLocations = useMemo(() => {
    return [...new Set(productions.map(p => p.location).filter(Boolean))];
  }, [productions]);

  const availableGenres = useMemo(() => {
    return [...new Set(productions.map(p => p.genre).filter(Boolean))];
  }, [productions]);

  // Filter productions
  const filteredProductions = useMemo(() => {
    return productions.filter(production => {
      const locationMatch = selectedLocation === "all" || production.location === selectedLocation;
      const genreMatch = selectedGenre === "all" || production.genre === selectedGenre;
      const searchMatch = searchQuery.trim() === "" || 
        production.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        production.subtitle?.toLowerCase().includes(searchQuery.toLowerCase());
      
      return locationMatch && genreMatch && searchMatch;
    });
  }, [productions, selectedLocation, selectedGenre, searchQuery]);

  const currentProductions = filteredProductions.filter(p => p.status === "current");
  const upcomingProductions = filteredProductions.filter(p => p.status === "upcoming");
  const pastProductions = filteredProductions.filter(p => p.status === "past");

  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocial />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Παραστάσεις</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Κάθε παράσταση δημιουργείται με προσοχή για να δημιουργήσει έναν βαθύ διάλογο 
              μεταξύ κοινού και ερμηνευτή, εξερευνώντας τα βάθη της ανθρώπινης εμπειρίας.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ProductionFilters
              selectedLocation={selectedLocation}
              selectedGenre={selectedGenre}
              searchQuery={searchQuery}
              onLocationChange={setSelectedLocation}
              onGenreChange={setSelectedGenre}
              onSearchChange={setSearchQuery}
              availableLocations={availableLocations}
              availableGenres={availableGenres}
              allProductions={productions}
            />
          </div>
        </div>
      </section>

      {/* Current Productions */}
      {currentProductions.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
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
                      <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden shadow-lg">
                        {production.images?.main ? (
                          <img
                            src={production.images.main}
                            alt={production.title}
                            loading="lazy"
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
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                          Τρέχουσα Παράσταση
                        </span>
                        {production.genre && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {production.genre}
                          </span>
                        )}
                        {production.location && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {production.location}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {production.title}
                      </h3>
                      
                      <h4 className="text-xl text-muted-foreground font-light mb-6">
                        {production.subtitle}
                      </h4>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {production.description}
                      </p>
                      
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                        <span className="text-sm text-muted-foreground">
                          📅 {production.productionInfo?.dates || production.dates || 'Ημερομηνίες θα ανακοινωθούν'}
                        </span>
                        {production.venue && (
                          <span className="text-sm text-muted-foreground">
                            📍 {production.venue}
                          </span>
                        )}
                      </div>
                      
                      {production.bookingLink ? (
                        <Button 
                          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(production.bookingLink, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          Κλείσε Εισιτήρια
                        </Button>
                      ) : (
                        <Button 
                          className="bg-muted text-muted-foreground px-8 py-3" 
                          disabled
                        >
                          Μη διαθέσιμα εισιτήρια
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Productions */}
      {upcomingProductions.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Προσεχώς
            </h2>
            
            <div className="space-y-16">
              {upcomingProductions.map((production, index) => (
                <Link
                  to={`/productions/${production.id}`}
                  key={production.id}
                  className="group animate-fade-up block"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden shadow-lg">
                        {production.images?.main ? (
                          <img
                            src={production.images.main}
                            alt={production.title}
                            loading="lazy"
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
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Προσεχώς
                        </span>
                        {production.genre && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {production.genre}
                          </span>
                        )}
                        {production.location && (
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {production.location}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                        {production.title}
                      </h3>
                      
                      <h4 className="text-xl text-muted-foreground font-light mb-6">
                        {production.subtitle}
                      </h4>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {production.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                        <span className="text-sm text-muted-foreground">
                          📅 {production.productionInfo?.dates || 'Ημερομηνίες θα ανακοινωθούν'}
                        </span>
                        {production.venue && (
                          <span className="text-sm text-muted-foreground">
                            📍 {production.venue}
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        className="bg-primary/20 text-primary border border-primary/30 px-8 py-3" 
                        disabled
                      >
                        Προσεχώς
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Productions */}
      {pastProductions.length > 0 && (
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center">
              Παλαιότερες Παραστάσεις
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastProductions.map((production, index) => (
                <Link
                  to={`/productions/${production.id}`}
                  key={production.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] bg-secondary overflow-hidden">
                    {production.images?.main ? (
                      <img
                        src={production.images.main}
                        alt={production.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        Αρχείο
                      </span>
                      {production.genre && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {production.genre}
                        </span>
                      )}
                      {production.location && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {production.location}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {production.title}
                    </h3>
                    
                    <h4 className="text-sm text-muted-foreground font-light mb-3 line-clamp-1">
                      {production.subtitle}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {production.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground">
                      📅 {production.productionInfo?.dates || production.dates || 'Αρχειακή παράσταση'}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {currentProductions.length === 0 && upcomingProductions.length === 0 && pastProductions.length === 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <p className="text-muted-foreground text-lg">
              Δεν βρέθηκαν παραστάσεις με τα επιλεγμένα φίλτρα
            </p>
          </div>
        </section>
      )}

      <Footer />
      <FloatingSocial />
      <FloatingInfoTip page="productions" />
    </div>
  );
};

export default Productions;