import { Button } from "@/components/ui/button";

const NowPlayingSection = () => {
  const nowPlaying = [
    {
      id: 1,
      title: "ΕΙΡΗΝΗ",
      subtitle: "Η κωμωδία του Αριστοφάνη ",
      shortDescription: "Σε συμπαραγωγή με το Θεσσαλικό Θέατρο, σε μετάφραση Λάκη Λαζόπουλο και σκηνοθεσία Νικορέστη Χανιωτάκη.",
      nextShow: "20/10 20:30",
      status: "Προσεχώς"
    },
    {
      id: 2,
      title: "ΦΙΛΟΚΤΗΤΗΣ",
      subtitle: "Η τραγωδία του Σοφοκλή ",
      shortDescription: "Σε σκηνοθεσία Γιώργου Κιμούλη.",
      nextShow: "Αύριο 19:00",
      status: "Επόμενη παράσταση"
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-lg text-foreground mb-6">
            Παίζονται Τώρα
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ζήστε τις τρέχουσες παραστάσεις μας που κεντρίζουν το ενδιαφέρον 
            του κοινού και των κριτικών.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {nowPlaying.map((show, index) => (
            <div 
              key={show.id}
              className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-accent-foreground">
                    <span className="text-4xl block mb-2">🎭</span>
                    <span className="text-sm opacity-75">Φωτογραφία παράστασης</span>
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {show.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-display-md text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {show.title}
                </h3>
                
                <h4 className="text-lg text-muted-foreground font-light mb-4">
                  {show.subtitle}
                </h4>
                
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                  {show.shortDescription}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-accent font-medium">
                      📅 {show.nextShow}
                    </p>
                  </div>
                  
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Κλείσε Εισιτήρια
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowPlayingSection;