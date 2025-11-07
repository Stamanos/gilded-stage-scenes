import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import FloatingInfoTip from "@/components/FloatingInfoTip";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import productionCompanyData from "@/data/productionCompany.json";

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
              Συνδεθείτε με την κοινότητά μας και μείνετε ενημερωμένοι για τις επερχόμενες παραστάσεις και ειδικές εκδηλώσεις.
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
                  href={`mailto:${productionCompanyData.company.contact.email}`}
                  className="hover:text-accent transition-colors duration-300"
                >
                  {productionCompanyData.company.contact.email}
                </a>
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Τηλέφωνο ΜΕΘΕΞΙΣ</h3>
              <div className="text-muted-foreground space-y-1">
                {productionCompanyData.company.contact.phone.map((phone, index) => (
                  <div key={index}>
                    <a 
                      href={`tel:${phone}`}
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Διεύθυνση ΦΙΛΙΠ</h3>
              <p className="text-muted-foreground">
                {productionCompanyData.company.filip.address.street}<br />
                {productionCompanyData.company.filip.address.city} {productionCompanyData.company.filip.address.postal_code}
              </p>
            </div>

            <div className="text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Τηλέφωνο ΦΙΛΙΠ</h3>
              <div className="text-muted-foreground space-y-1">
                {productionCompanyData.company.filip.phone.map((phone, index) => (
                  <div key={index}>
                    <a 
                      href={`tel:${phone}`}
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <div className="bg-accent/5 p-6 sm:p-12 rounded-2xl border border-accent/20 w-full">
              <h3 className="text-display-sm sm:text-display-md text-foreground mb-6 sm:mb-8">Ακολουθήστε μας</h3>
              <p className="text-body text-muted-foreground mb-8 px-2">
                Συνδεθείτε μαζί μας στα social media για καθημερινές ενημερώσεις και παρασκηνιακό υλικό.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-2 mb-8">
                <a 
                  href="https://www.instagram.com/theatro_filip/"
                  className="group bg-card hover:bg-accent p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </a>

                <a 
                  href="https://www.instagram.com/methexis_productions/"
                  className="group bg-card hover:bg-accent p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </a>
                
                <a 
                  href="https://www.facebook.com/methexis.productions/"
                  className="group bg-card hover:bg-accent p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </a>
                
                <a 
                  href="https://www.youtube.com/@methexisproductions1453"
                  className="group bg-card hover:bg-accent p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 sm:w-8 h-6 sm:h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </a>
              </div>

              <div className="mt-8 sm:mt-12 bg-card p-6 sm:p-8 rounded-lg shadow-elegant mx-2 sm:mx-0">
                <h4 className="text-display-sm text-card-foreground mb-4">Επικοινωνία</h4>
                <div className="space-y-2 text-muted-foreground text-sm sm:text-base break-words">
                  <p><strong>{productionCompanyData.company.name}</strong></p>
                  <p>📧 <a href={`mailto:${productionCompanyData.company.contact.email}`} className="hover:text-accent transition-colors">{productionCompanyData.company.contact.email}</a></p>
                  <p>📞Σταθερό {productionCompanyData.company.contact.phone[0]}</p>
                  <p>📞Κινητό {productionCompanyData.company.contact.phone[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <FloatingSocial />
      <FloatingInfoTip page="contact" />
    </div>
  );
};

export default Contact;