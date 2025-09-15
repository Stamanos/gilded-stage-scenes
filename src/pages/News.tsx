import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Κριτικές για την 'Θύελλα': Ένα αριστούργημα σύγχρονης ερμηνείας",
      excerpt: "Οι κριτικοί επαινούν τη νέα παράσταση για την καινοτόμο προσέγγιση στο κλασικό έργο του Shakespeare.",
      date: "15 Μαρτίου 2024",
      category: "Κριτικές",
      type: "review"
    },
    {
      id: 2,
      title: "Συνέντευξη με τον Διευθυντή: Το όραμα του Μέθεξις productions",
      excerpt: "Ο καλλιτεχνικός διευθυντής μας μιλά για τη φιλοσοφία και τους στόχους του θεάτρου.",
      date: "8 Μαρτίου 2024",
      category: "Συνεντεύξεις",
      type: "interview"
    },
    {
      id: 3,
      title: "Νέα συνεργασία με την Εθνική Λυρική Σκηνή",
      excerpt: "Ανακοινώνουμε την έναρξη μιας στρατηγικής συνεργασίας για κοινές παραγωγές.",
      date: "1 Μαρτίου 2024",
      category: "Ανακοινώσεις",
      type: "announcement"
    }
  ];

  const sponsors = [
    { name: "Υπουργείο Πολιτισμού", type: "Θεσμικός Χορηγός" },
    { name: "Δήμος Αθηναίων", type: "Συνεργάτης" },
    { name: "Ίδρυμα Ωνάση", type: "Χορηγός Επικοινωνίας" },
    { name: "Alpha Bank", type: "Χρυσός Χορηγός" }
  ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'review': return 'bg-accent/10 text-accent';
      case 'interview': return 'bg-primary/10 text-primary';
      case 'announcement': return 'bg-secondary/50 text-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Νέα & Τύπος</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις, κριτικές, 
              συνεντεύξεις και ανακοινώσεις του Μέθεξις productions.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Πρόσφατα Νέα
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article 
                key={item.id}
                className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/10] bg-secondary">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Εικόνα άρθρου</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(item.type)}`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-card-foreground mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-body text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  
                  <button className="text-accent hover:text-accent/80 font-medium transition-colors duration-300">
                    Διαβάστε περισσότερα →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-foreground mb-6">
              Χορηγοί & Συνεργάτες
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Ευχαριστούμε τους χορηγούς και συνεργάτες μας για την πολύτιμη υποστήριξη 
              στο έργο μας και στην προώθηση του θεατρικού πολιτισμού.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg text-center shadow-elegant hover:shadow-dramatic transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {sponsor.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sponsor.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;