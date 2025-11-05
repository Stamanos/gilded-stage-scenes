import productionsData from '../data/productions.json';
import { Link } from "react-router-dom";

const NowPlayingSection = () => {
  const nowPlaying = productionsData.productions.filter(
    (p) => p.status === "current" || p.status === "upcoming"
  );

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-md text-foreground mb-6">
            Παίζονται Τώρα & Προσεχώς
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Ζήστε τις τρέχουσες παραστάσεις μας που κεντρίζουν το ενδιαφέρον 
            του κοινού και των κριτικών.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {nowPlaying.map((show, index) => (
            <Link
              to={`/productions/${show.id}`}
              key={show.id}
              className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in block"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[16/9] sm:aspect-[4/3] bg-secondary relative overflow-hidden">
                <img
                  src={show.images?.square || show.images?.main || "/images/theater-placeholder.jpg"}
                  alt={show.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                    show.status === 'current' ? 'bg-accent text-accent-foreground' :
                    'bg-primary text-primary-foreground'
                  }`}>
                    {show.status === 'current' ? 'Παίζεται Τώρα' : 'Προσεχώς'}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-normal leading-tight text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {show.title}
                </h3>
                <h4 className="text-base sm:text-lg text-muted-foreground font-light mb-3 sm:mb-4">
                  {show.subtitle}
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                  {show.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                  <div>
                    <p className="text-xs sm:text-sm text-accent font-medium">
                      📅 {show.productionInfo.dates || show.dates || 'Οι ημερομηνίες θα ανακοινωθούν'}
                    </p>
                  </div>
                  {show.bookingLink && show.status === "current" ? (
                    <Link
                      to={`/booking/${show.id}`}
                      className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded font-medium transition-all duration-300 text-center text-sm sm:text-base"
                      onClick={e => e.stopPropagation()}
                    >
                      Κλείσε Εισιτήρια
                    </Link>
                  ) : show.status === "upcoming" ? (
                    <button
                      className="w-full sm:w-auto bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded font-medium text-sm sm:text-base"
                      disabled
                      onClick={e => e.stopPropagation()}
                    >
                      Προσεχώς
                    </button>
                  ) : (
                    <button
                      className="w-full sm:w-auto bg-muted text-muted-foreground px-4 py-2 rounded font-medium text-sm sm:text-base"
                      disabled
                      onClick={e => e.stopPropagation()}
                    >
                      Δεν υπάρχουν διαθέσιμα εισιτήρια
                    </button>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowPlayingSection;