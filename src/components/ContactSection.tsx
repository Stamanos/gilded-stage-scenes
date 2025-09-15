import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display-lg mb-6">
            Connect With Us
          </h2>
          <p className="text-body-lg opacity-90 max-w-2xl mx-auto">
            Join our community of theater enthusiasts. Stay informed about upcoming 
            productions, special events, and behind-the-scenes insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center animate-fade-up">
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-display mb-3">Email</h3>
            <p className="opacity-90">
              <a 
                href="mailto:methexis.productions@gmail.com" 
                className="hover:text-gold transition-colors duration-300"
              >
                methexis.productions@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-display mb-3">Box Office</h3>
            <p className="opacity-90">
              <a 
                href="tel:+1-555-THEATER" 
                className="hover:text-gold transition-colors duration-300"
              >
                (555) THEATER
              </a>
            </p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-display mb-3">Location</h3>
            <p className="opacity-90">
              425 Arts District<br />
              Downtown Cultural Quarter
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary-foreground/5 p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-display-md mb-6">Stay Connected</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-gold transition-colors duration-300"
              />
              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 px-6 rounded font-medium transition-colors duration-300">
                Subscribe to Updates
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;