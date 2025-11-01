import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import productionCompanyData from "@/data/productionCompany.json";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display-lg mb-6">
            Επικοινωνία
          </h2>
          <p className="text-body-lg opacity-90 max-w-2xl mx-auto">
            Συνδεθείτε με την κοινότητά μας και μείνετε ενημερωμένοι για τις επερχόμενες παραστάσεις και ειδικές εκδηλώσεις.
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
                href={`mailto:${productionCompanyData.company.contact.email}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {productionCompanyData.company.contact.email}
              </a>
            </p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-display mb-3">Τηλέφωνο</h3>
            <p className="opacity-90">
              <a 
                href={`tel:${productionCompanyData.company.contact.phone[0]}`}
                className="hover:text-gold transition-colors duration-300"
              >
                ΜΕΘΕΞΙΣ {productionCompanyData.company.contact.phone[0]}
              </a>
              <br />
              <a 
                href={`tel:${productionCompanyData.company.contact.phone[1]}`}
                className="hover:text-gold transition-colors duration-300"
              >
                ΜΕΘΕΞΙΣ {productionCompanyData.company.contact.phone[1]}
              </a>
              <br />
              <a 
                href={`tel:${productionCompanyData.company.filip.phone}`}
                className="hover:text-gold transition-colors duration-300"
              >
                ΦΙΛΙΠ {productionCompanyData.company.filip.phone}
              </a>
            </p>
          </div>

          <div className="text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="text-xl font-display mb-3">Διεύθυνση</h3>
            <p className="opacity-90">
              {productionCompanyData.company.filip.address.street}<br />
              {productionCompanyData.company.filip.address.city} {productionCompanyData.company.filip.address.postal_code}
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary-foreground/5 p-12 rounded-2xl max-w-lg mx-auto">
            <h3 className="text-display-md mb-8">Ακολουθήστε μας</h3>
            <p className="text-body opacity-80 mb-8">
              Συνδεθείτε μαζί μας στα social media για καθημερινές ενημερώσεις και παρασκηνιακό υλικό.
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/methexis_productions/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-foreground/10 hover:bg-gold p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.facebook.com/methexis.productions/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-foreground/10 hover:bg-gold p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
              
              <a 
                href="https://www.youtube.com/@methexisproductions1453"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-foreground/10 hover:bg-gold p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;