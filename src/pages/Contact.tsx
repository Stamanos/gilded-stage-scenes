import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Επικοινωνία</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Συνδεθείτε με την κοινότητά μας των λάτρεων του θεάτρου. Μείνετε ενημερωμένοι 
              για τις επερχόμενες παραστάσεις, ειδικές εκδηλώσεις και παρασκηνιακά νέα.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="text-center animate-fade-up">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email</h3>
              <p className="text-muted-foreground">
                <a 
                  href="mailto:info@ateliertheater.gr" 
                  className="hover:text-accent transition-colors duration-300"
                >
                  info@ateliertheater.gr
                </a>
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ταμείο</h3>
              <p className="text-muted-foreground">
                <a 
                  href="tel:+302101234567" 
                  className="hover:text-accent transition-colors duration-300"
                >
                  210 123 4567
                </a>
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Διεύθυνση</h3>
              <p className="text-muted-foreground">
                Ερμού 125<br />
                Πλάκα, Αθήνα 10551
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ώρες Λειτουργίας</h3>
              <p className="text-muted-foreground text-sm">
                Δευ-Παρ: 10:00-22:00<br />
                Σαβ-Κυρ: 18:00-22:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Newsletter */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="text-display-lg text-foreground mb-8">
                Στείλτε μας Μήνυμα
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Όνομα *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded text-card-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="Το όνομά σας"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded text-card-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Θέμα
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-card border border-border rounded text-card-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                    placeholder="Θέμα μηνύματος"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Μήνυμα *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded text-card-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                    placeholder="Γράψτε το μήνυμά σας εδώ..."
                  />
                </div>

                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                  Αποστολή Μηνύματος
                </Button>
              </form>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-12 animate-fade-up">
              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-display-md text-card-foreground mb-6">Newsletter</h3>
                <p className="text-body text-muted-foreground mb-6">
                  Εγγραφείτε στο newsletter μας για να λαμβάνετε ενημερώσεις για νέες παραστάσεις, 
                  ειδικές προσφορές και παρασκηνιακά νέα.
                </p>
                
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Το email σας"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3">
                    Εγγραφή
                  </Button>
                </form>
              </div>

              <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
                <h3 className="text-display-md text-foreground mb-6">Ακολουθήστε μας</h3>
                <p className="text-body text-muted-foreground mb-6">
                  Συνδεθείτε μαζί μας στα social media για καθημερινές ενημερώσεις και παρασκηνιακό υλικό.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-card p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                  <a 
                    href="#" 
                    className="bg-card p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="Instagram"
                  >
                    📷
                  </a>
                  <a 
                    href="#" 
                    className="bg-card p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label="YouTube"
                  >
                    📺
                  </a>
                </div>
              </div>

              {/* Responsible Person */}
              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-display-md text-card-foreground mb-4">Υπεύθυνος Επικοινωνίας</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Ελένη Κωνσταντίνου</strong></p>
                  <p>Διευθύντρια Marketing & Επικοινωνίας</p>
                  <p>📧 e.konstantinou@ateliertheater.gr</p>
                  <p>📞 210 123 4568</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Contact;