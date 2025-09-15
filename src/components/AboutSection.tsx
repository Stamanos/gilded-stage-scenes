const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <h2 className="text-display-lg text-foreground mb-8">
              Art as Experience
            </h2>
            <div className="space-y-6">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Atelier Theater was founded on the belief that theater is not merely entertainment, 
                but a transformative experience that challenges, inspires, and connects us to our 
                shared humanity.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                In our intimate 150-seat theater, we create a space where stories come alive 
                through the marriage of classical technique and contemporary vision. Each production 
                is meticulously crafted to honor the text while speaking to modern audiences.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Our artistic philosophy centers on the power of live performance to create 
                genuine moments of revelation and connection. We believe in theater as a 
                collaborative art form that brings together artists and audiences in shared discovery.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up">
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Our Mission</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                To create exceptional theatrical experiences that honor the craft while 
                pushing artistic boundaries, fostering a deeper understanding of the human condition.
              </p>
            </div>

            <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-display-md text-foreground mb-4">Artistic Vision</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                We seek to illuminate the profound within the intimate, creating theater 
                that is both intellectually rigorous and emotionally resonant.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Community</h3>
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