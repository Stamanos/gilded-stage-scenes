import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="Μέθεξις - Θεατρικές Παραγωγές" 
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'drop-shadow-lg'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="/productions" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-white/90 hover:text-white hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Παραστάσεις
            </a>
            <a 
              href="/about" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-white/90 hover:text-white hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Σχετικά με εμάς
            </a>
            <a 
              href="/news" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-white/90 hover:text-white hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Νέα
            </a>
            <a 
              href="/contact" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-white/90 hover:text-white hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Επικοινωνία
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-foreground hover:text-accent' 
                : 'text-white/90 hover:text-white hover:drop-shadow-lg'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border border-border/50 rounded-b-lg shadow-dramatic animate-slide-in-right">
            <div className="flex flex-col px-6 py-6 space-y-1">
              <a 
                href="/productions" 
                className="text-body text-foreground hover:text-accent transition-all duration-300 px-4 py-3 rounded-lg hover:bg-accent/10 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                📚 Παραστάσεις
              </a>
              <a 
                href="/about" 
                className="text-body text-foreground hover:text-accent transition-all duration-300 px-4 py-3 rounded-lg hover:bg-accent/10 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                🎭 Σχετικά με εμάς
              </a>
              <a 
                href="/news" 
                className="text-body text-foreground hover:text-accent transition-all duration-300 px-4 py-3 rounded-lg hover:bg-accent/10 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                📰 Νέα
              </a>
              <a 
                href="/contact" 
                className="text-body text-foreground hover:text-accent transition-all duration-300 px-4 py-3 rounded-lg hover:bg-accent/10 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                📞 Επικοινωνία
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;