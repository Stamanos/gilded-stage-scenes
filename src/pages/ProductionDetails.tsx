import { useParams } from "react-router-dom";
import productionsData from "@/data/productions.json";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductionDetails = () => {
  const { id } = useParams();
  const production = productionsData.productions.find(
    (p) => String(p.id) === String(id)
  );

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
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden shadow-elegant mb-8">
                {production.image ? (
                  <img
                    src={production.image}
                    alt={production.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1 className="text-display-lg text-foreground mb-4">{production.title}</h1>
              <h2 className="text-xl text-muted-foreground mb-6">{production.subtitle}</h2>
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">{production.description}</p>
              <div className="mb-4">
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {production.status === "current" ? "Τρέχουσα Παράσταση" : "Αρχείο"}
                </span>
              </div>
              <span className="text-sm text-muted-foreground block mb-4">
                📅 {production.dates}
              </span>
              {production.nextShow && (
                <span className="text-sm text-muted-foreground block mb-4">
                  Επόμενη Παράσταση: {production.nextShow}
                </span>
              )}
              {/* Εδώ μπορείς να προσθέσεις και άλλα πεδία από το JSON αν υπάρχουν */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductionDetails;