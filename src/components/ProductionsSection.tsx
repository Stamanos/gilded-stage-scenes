import productionsData from "../data/productions.json";

const ProductionsSection = () => {
  const productions = productionsData.productions.filter(
    (p) => p.status === "current" || p.status === "upcoming"
  );

  return (
    <section id="productions" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-display-lg text-foreground mb-6">
            Current & Upcoming Productions
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Each production is carefully crafted to create an intimate dialogue 
            between audience and performer, exploring the depths of human experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productions.map((production, index) => (
            <div 
              key={production.id}
              className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Εικόνα παράστασης */}
              {production.images?.main && (
                <img
                  src={production.images.main}
                  alt={production.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {production.status}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {production.dates}
                  </span>
                  <button className="text-accent hover:text-accent/80 font-medium transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionsSection;