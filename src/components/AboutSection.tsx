import aboutData from "@/data/about.json";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <h2 className="text-display-lg text-foreground mb-8">
              Καλλιτεχνική Ταυτότητα
            </h2>
            <div className="space-y-6">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                {aboutData.history}
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up">
            <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-display-md text-foreground mb-4">Το ΦΙΛΙΠ ξαναζωντανεύει από τον κινηματογράφο στην τέχνη του θεάτρου</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {aboutData.theater}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;