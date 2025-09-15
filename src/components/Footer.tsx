const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-display-md mb-4">
              <span className="text-foreground">Atelier</span>
              <span className="text-accent ml-2">Theater</span>
            </div>
            <p className="text-body text-muted-foreground leading-relaxed max-w-md">
              Creating transformative theatrical experiences that honor tradition 
              while embracing contemporary artistic vision.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#productions" className="hover:text-accent transition-colors duration-300">
                  Current Season
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors duration-300">
                  Box Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Education Programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p className="text-sm">
            © 2024 Atelier Theater. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;