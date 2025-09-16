import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-display-md">
            <span className="text-foreground">Θέατρο</span>
            <span className="text-accent ml-2">Φιλίπ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="/productions" 
              className="text-body text-foreground hover:text-accent transition-colors duration-300"
            >
              Παραστάσεις
            </a>
            <a 
              href="/about" 
              className="text-body text-foreground hover:text-accent transition-colors duration-300"
            >
              Σχετικά με εμάς
            </a>
            <a 
              href="/news" 
              className="text-body text-foreground hover:text-accent transition-colors duration-300"
            >
              Νέα
            </a>
            <a 
              href="/contact" 
              className="text-body text-foreground hover:text-accent transition-colors duration-300"
            >
              Επικοινωνία
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border">
            <div className="flex flex-col space-y-4 mt-6">
              <a 
                href="/productions" 
                className="text-body text-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Παραστάσεις
              </a>
              <a 
                href="/about" 
                className="text-body text-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Σχετικά με εμάς
              </a>
              <a 
                href="/news" 
                className="text-body text-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Νέα
              </a>
              <a 
                href="/contact" 
                className="text-body text-foreground hover:text-accent transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Επικοινωνία
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;