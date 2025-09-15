import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductionCarousel = () => {
  const productions = [
    {
      id: 1,
      title: "Η Θύελλα",
      subtitle: "Shakespeare Reimagined",
      status: "Τρέχουσα Παράσταση",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Περιμένοντας τον Γκοντό",
      subtitle: "Beckett's Existential Journey",
      status: "Επόμενη Παράσταση",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Τρεις Αδερφές",
      subtitle: "Chekhov's Poetic Drama",
      status: "Αρχείο",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Αντιγόνη",
      subtitle: "Sophocles Classic",
      status: "Αρχείο",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Ο Κήπος με τις Κερασιές",
      subtitle: "Chekhov's Masterpiece",
      status: "Αρχείο",
      image: "/placeholder.svg"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Τρέχουσα Παράσταση':
        return 'bg-accent text-accent-foreground';
      case 'Επόμενη Παράσταση':
        return 'bg-primary text-primary-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-lg text-foreground mb-6">
            Οι Παραστάσεις μας
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Εξερευνήστε το ρεπερτόριό μας από κλασικά έργα σε σύγχρονες ερμηνείες
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {productions.map((production, index) => (
              <CarouselItem key={production.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500">
                  <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <div className="text-center text-accent">
                        <span className="text-3xl block mb-2">🎭</span>
                        <span className="text-xs opacity-75">Εικόνα παράστασης</span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(production.status)}`}>
                        {production.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {production.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground font-light">
                      {production.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductionCarousel;