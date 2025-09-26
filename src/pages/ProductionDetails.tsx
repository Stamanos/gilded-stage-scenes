import { useState } from "react";
import { useParams } from "react-router-dom";
import productionsData from "@/data/productions.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, MapPin, Users, Phone, Mail, Globe, ExternalLink } from "lucide-react";

const ProductionDetails = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const production = productionsData.productions.find(
    (p) => String(p.id) === String(id)
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!production) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Δεν βρέθηκε η παραγωγή.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={production.images?.landscape || production.images?.main || "/images/theater-hero.jpg"}
            alt={production.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 min-h-[85vh] md:min-h-[90vh] flex items-center">
          <div className="max-w-4xl pt-20 md:pt-24">
            <div className="mb-6">
                <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 backdrop-blur-sm">
                  {production.status === "current" ? "Παίζεται Τώρα" : 
                   production.status === "upcoming" ? "Προσεχώς" : "Από το Αρχείο"}
                </Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 font-bold leading-tight">
              {production.title}
            </h1>
            
            <h2 className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8 font-light leading-relaxed">
              {production.subtitle}
            </h2>
            
            <p className="text-sm md:text-base text-white/80 mb-8 md:mb-10 max-w-3xl leading-relaxed">
              {production.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {(production.bookingLink && production.status === "current") || production.status === "upcoming" ? (
                production.status === "current" ? (
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg" asChild>
                    <a href={production.bookingLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Κλείσε Εισιτήρια
                    </a>
                  </Button>
                ) : (
                  <Button size="lg" className="bg-primary/20 text-primary border border-primary/30 shadow-lg" disabled>
                    Προσεχώς
                  </Button>
                )
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Production Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Description */}
              {production.longDescription && (
                <div>
                  <h3 className="text-display-md text-foreground mb-6">Η Ιστορία</h3>
                  <div className="prose prose-md max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-body">
                      {production.longDescription}
                    </p>
                  </div>
                </div>
              )}

              {/* Cast & Creative Team */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Cast */}
                {production.cast && production.cast.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-accent" />
                        Πρωταγωνιστούν
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {production.cast.map((actor, index) => (
                          <li key={index} className="text-muted-foreground">
                            {actor}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Creative Team */}
                {production.creativeTeam && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle>Συντελεστές</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {Object.entries(production.creativeTeam).map(([role, name]) => (
                          <div key={role} className="text-sm">
                            <span className="font-medium text-foreground capitalize">
                              {role.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}:
                            </span>
                            <span className="text-muted-foreground ml-2">{name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Additional Cast (Chorus, Musicians, Dancers) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {production.chorus && production.chorus.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base">Χορός</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {production.chorus.map((member, index) => (
                          <li key={index} className="text-muted-foreground">
                            {member}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {production.musicians && production.musicians.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base">Μουσικοί</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {production.musicians.map((musician, index) => (
                          <li key={index} className="text-muted-foreground">
                            {musician}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {production.dancers && production.dancers.length > 0 && (
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-base">Χορευτές</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {production.dancers.map((dancer, index) => (
                          <li key={index} className="text-muted-foreground">
                            {dancer}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              
              {/* Production Info */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Πληροφορίες Παράστασης</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Ημερομηνίες</p>
                      <p className="text-sm text-muted-foreground">{production.productionInfo?.dates || production.dates || 'Ημερομηνίες θα ανακοινωθούν'}</p>
                      {production.schedule && (
                        <p className="text-xs text-muted-foreground mt-1">{production.schedule}</p>
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Χώρος</p>
                      <p className="text-sm text-muted-foreground">{production.venue}</p>
                    </div>
                  </div>

                  {production.duration && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-accent mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Διάρκεια</p>
                          <p className="text-sm text-muted-foreground">{production.duration}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {production.targetAudience && (
                    <>
                      <Separator />
                      <div className="flex items-start gap-3">
                        <Users className="h-4 w-4 text-accent mt-1" />
                        <div>
                          <p className="font-medium text-foreground">Κοινό</p>
                          <p className="text-sm text-muted-foreground">{production.targetAudience}</p>
                        </div>
                      </div>
                    </>
                  )}

                  {production.nextShow && production.nextShow !== "never" && (
                    <>
                      <Separator />
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <p className="font-medium text-accent text-sm">Επόμενη Παράσταση</p>
                        <p className="text-sm text-muted-foreground">{production.nextShow}</p>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Booking & Contact Info */}
              {(production.bookingInfo || production.pressContact) && (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Επικοινωνία</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    
                    {production.bookingInfo && (
                      <div>
                        <p className="font-medium text-foreground mb-2">Κρατήσεις</p>
                        <div className="space-y-2">
                          {production.bookingInfo.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3 text-accent" />
                              <span className="text-sm text-muted-foreground">{production.bookingInfo.phone}</span>
                            </div>
                          )}
                          {production.bookingInfo.email && (
                            <div className="flex items-center gap-2">
                              <Mail className="h-3 w-3 text-accent" />
                              <span className="text-sm text-muted-foreground">{production.bookingInfo.email}</span>
                            </div>
                          )}
                          {production.bookingInfo.website && (
                            <div className="flex items-center gap-2">
                              <Globe className="h-3 w-3 text-accent" />
                              <a 
                                href={production.bookingInfo.website} 
                                className="text-sm text-accent hover:underline"
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                Ιστοσελίδα
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {production.pressContact && (
                      <>
                        <Separator />
                        <div>
                          <p className="font-medium text-foreground mb-2">Δημόσιες Σχέσεις</p>
                          <div className="space-y-1">
                            {production.pressContact.name && (
                              <p className="text-sm text-muted-foreground">{production.pressContact.name}</p>
                            )}
                            {production.pressContact.phone && (
                              <div className="flex items-center gap-2">
                                <Phone className="h-3 w-3 text-accent" />
                                <span className="text-sm text-muted-foreground">{production.pressContact.phone}</span>
                              </div>
                            )}
                            {production.pressContact.email && (
                              <div className="flex items-center gap-2">
                                <Mail className="h-3 w-3 text-accent" />
                                <span className="text-sm text-muted-foreground">{production.pressContact.email}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {production.productionCompany && (
                      <>
                        <Separator />
                        <div>
                          <p className="font-medium text-foreground mb-1">Παραγωγή</p>
                          <p className="text-sm text-muted-foreground">{production.productionCompany}</p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {production.galleryImages && production.galleryImages.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-6">
            <h3 className="text-display-md text-foreground mb-8 text-center">Φωτογραφίες από την Παράσταση</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {production.galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${production.title} - Φωτογραφία ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      
      {/* Lightbox */}
      {lightboxOpen && production.galleryImages && (
        <ImageLightbox
          images={production.galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          productionTitle={production.title}
        />
      )}
      <FloatingSocial />
    </div>
  );
};

export default ProductionDetails;