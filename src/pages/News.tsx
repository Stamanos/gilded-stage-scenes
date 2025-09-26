import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import newsData from "@/data/news.json";

interface NewsPreview {
  title: string;
  description: string;
  image: string;
  url: string;
}

const News = () => {
  const [newsPreviews, setNewsPreviews] = useState<Record<number, NewsPreview>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const getCategoryColor = (type: string): string => {
    switch (type) {
      case 'review':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'news':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'feature':
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const fetchPreview = async (url: string, id: number) => {
    setLoading(prev => ({ ...prev, [id]: true }));
    try {
      // In a real implementation, you would fetch the actual preview data
      // For now, we'll simulate preview data based on the URL
      let preview: NewsPreview;
      
      if (url.includes('documentonews.gr')) {
        preview = {
          title: "«Χάσαμε τη Θεία στοπ»: Μια κριτική για την παράσταση",
          description: "Κριτική για την εξαιρετική παράσταση του Γιώργου Διαλεγμένου που παρουσιάζεται στο Κέντρο Πολιτισμού «Ελληνικός Κόσμος».",
          image: "/productions/xasame-ti-theia-stop/wallpaper.jpg",
          url: url
        };
      } else if (url.includes('athinorama.gr')) {
        preview = {
          title: "Χάσαμε τη Θεία STOP - Athinorama",
          description: "Παρουσίαση της παράστασης στο Athinorama με πλήρη στοιχεία για το έργο και τους συντελεστές.",
          image: "/productions/xasame-ti-theia-stop/DIAGOUPI.jpg",
          url: url
        };
      } else if (url.includes('ειδήσει.gr')) {
        preview = {
          title: "Είδαμε την παράσταση «Χάσαμε τη Θεία STOP»",
          description: "Αναλυτική κριτική της παράστασης από το ειδήσει.gr με εντυπώσεις από την παρακολούθηση.",
          image: "/productions/xasame-ti-theia-stop/crew.jpg",
          url: url
        };
      } else if (url.includes('sindetiras.gr')) {
        preview = {
          title: "Η «Βότκα Μολότοφ» για 2 μόνο παραστάσεις στην Κέρκυρα",
          description: "Ανακοίνωση για τις δύο τελευταίες παραστάσεις της «Βότκα Μολότοφ» στην Κέρκυρα.",
          image: "/productions/votka-molotof/banner.jpg",
          url: url
        };
      } else if (url.includes('topontiki.gr')) {
        preview = {
          title: "8 τελευταίες παραστάσεις για τη «Βότκα Μολότοφ»",
          description: "Το τέλος μιας επιτυχημένης θεατρικής σεζόν με τις 8 τελευταίες παραστάσεις του έργου.",
          image: "/productions/votka-molotof/banner.jpg",
          url: url
        };
      } else {
        preview = {
          title: "Θεατρικά Νέα",
          description: "Διαβάστε τα τελευταία νέα από τον κόσμο του θεάτρου.",
          image: "/logo.png",
          url: url
        };
      }
      
      setNewsPreviews(prev => ({ ...prev, [id]: preview }));
    } catch (error) {
      console.error('Failed to fetch preview:', error);
    } finally {
      setLoading(prev => ({ ...prev, [id]: false }));
    }
  };

  useEffect(() => {
    newsData.news.forEach(item => {
      fetchPreview(item.url, item.id);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Νέα & Τύπος</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Διαβάστε τι γράφει ο τύπος για τις παραστάσεις μας και μείνετε ενημερωμένοι 
              για τις τελευταίες εξελίξεις του Μέθεξις productions.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Άρθρα & Κριτικές
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.news.map((item, index) => {
              const preview = newsPreviews[item.id];
              const isLoading = loading[item.id];
              
              return (
                <article
                  key={item.id}
                  className="bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(item.url, '_blank', 'noopener,noreferrer')}
                >
                  {/* Preview Image */}
                  <div className="aspect-[16/9] bg-secondary overflow-hidden">
                    {preview?.image ? (
                      <img
                        src={preview.image}
                        alt={preview.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        {isLoading ? (
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                        ) : (
                          <span className="text-muted-foreground text-sm">Φόρτωση εικόνας...</span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getCategoryColor(item.type)}`}>
                        {item.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('el-GR')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {preview?.title || item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {preview?.description || "Φόρτωση περιεχομένου..."}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors duration-300">
                        Διαβάστε περισσότερα
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        Εξωτερικός σύνδεσμος
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Χορηγοί & Συνεργάτες
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, name: "Κέντρο Πολιτισμού Ελληνικός Κόσμος", type: "Χορηγός Επικοινωνίας" },
              { id: 2, name: "ΔΗ.ΠΕ.ΘΕ Αγρινίου", type: "Συνεργασία" },
              { id: 3, name: "GridFox", type: "Δημιουργικό Γραφείο" },
              { id: 4, name: "More.com", type: "Τεχνικός Χορηγός" }
            ].map((sponsor, index) => (
              <div
                key={sponsor.id}
                className="bg-card rounded-lg p-6 text-center shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-card-foreground mb-2">
                  {sponsor.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {sponsor.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default News;