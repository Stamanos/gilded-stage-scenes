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
              <p className="text-body text-muted-foreground leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up">
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Ο Στόχος μας</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {aboutData.vision}
              </p>
            </div>

            <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-display-md text-foreground mb-4">Επιτεύγματα</h3>
              <ul className="list-disc pl-6">
                {aboutData.achievements.map((item, idx) => (
                  <li key={idx} className="mb-2 text-body text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Κοινότητα</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Theater thrives in community. We cultivate relationships with artists, 
                audiences, and the broader cultural landscape to nurture the art form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;