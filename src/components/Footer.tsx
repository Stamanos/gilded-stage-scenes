const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-display-md mb-4">
              <span className="text-foreground">Μέθεξις</span>
              <span className="text-accent ml-2">Productions</span>
            </div>
            <div className="flex items-center space-x-6">
              <img
                src="/logo.png"
                alt="Μέθεξις logo"
                className="h-14 w-auto object-contain"
              />
              <img
                src="/logo_filip.jpg"
                alt="Θέατρο Φιλίπ logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/productions" className="hover:text-accent transition-colors duration-300">
                  Παραστάσεις
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-accent transition-colors duration-300">
                  Σχετικά με εμάς
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors duration-300">
                  Επικοινωνία
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-accent transition-colors duration-300">
                  Νέα & Τύπος
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Επικοινωνία</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://www.instagram.com/theatro_filip/" className="hover:text-accent transition-colors duration-300">
                  Instagram ΦΙΛΙΠ
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/methexis_productions/" className="hover:text-accent transition-colors duration-300">
                  Instagram ΜΕΘΕΞΙΣ
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/methexis.productions/" className="hover:text-accent transition-colors duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@methexisproductions1453" className="hover:text-accent transition-colors duration-300">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Μέθεξις productions. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/privacy" className="hover:text-accent transition-colors duration-300">
              Προσωπικά Δεδομένα
            </a>
            <a href="/terms" className="hover:text-accent transition-colors duration-300">
              Όροι Χρήσης
            </a>
            <a href="/cookies" className="hover:text-accent transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;