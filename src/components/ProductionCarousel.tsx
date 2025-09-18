import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import productionsData from "@/data/productions.json";
// ...existing code...

const ProductionCarousel = () => {
  const productions = productionsData.productions;

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
                <Link
                  to={`/productions/${production.id}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 block"
                >
                  <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
                    <img
                      src={production.images?.main || "/images/theater-placeholder.jpg"}
                      alt={production.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
                </Link>
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