import heroImage from "@/assets/theater-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-up">
          <h1 className="text-display-xl text-primary-foreground mb-6">
            Τώρα στη σκηνή: <span className="text-gold">Ο Φιλοκτήτης </span>
          </h1>
          <p className="text-body-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Μια σύγχρονη ερμηνεία του τελευταίου αριστουργήματος του Shakespeare, 
            που εξερευνά θέματα εξουσίας, συγχώρεσης και λύτρωσης.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:shadow-elegant">
              Κλείσε Εισιτήρια
            </button>
            <button className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-medium transition-all duration-300">
              Μάθετε περισσότερα
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;