import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

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
        ? 'bg-background/40 backdrop-blur-lg border-b border-border/30' 
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
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/productions"
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-accent hover:drop-shadow-lg after:bg-accent'
              }`}
            >
              Παραστάσεις
            </a>
            <a 
              href="/about" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-accent hover:drop-shadow-lg after:bg-accent'
              }`}
            >
              Σχετικά με εμάς
            </a>
            <a 
              href="/news" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-accent hover:drop-shadow-lg after:bg-accent'
              }`}
            >
              Νέα
            </a>
            <a 
              href="/contact" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                isScrolled 
                  ? 'text-foreground hover:text-accent after:bg-accent' 
                  : 'text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-accent hover:drop-shadow-lg after:bg-accent'
              }`}
            >
              Επικοινωνία
            </a>
            <ThemeToggle isScrolled={isScrolled} />
          </div>

        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle isScrolled={isScrolled} />
          <button
            className={`transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'text-foreground hover:text-accent' 
                : 'text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-accent'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border border-border/20 rounded-b-lg shadow-elegant animate-fade-in z-40">
            <div className="flex flex-col px-6 py-6 space-y-2">
              <a 
                href="/productions" 
                className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 px-4 py-3 rounded-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent after:bg-accent hover:bg-accent/5' 
                    : 'text-white/90 hover:text-white after:bg-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Παραστάσεις
              </a>
              <a 
                href="/about" 
                className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 px-4 py-3 rounded-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent after:bg-accent hover:bg-accent/5' 
                    : 'text-white/90 hover:text-white after:bg-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Σχετικά με εμάς
              </a>
              <a 
                href="/news" 
                className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 px-4 py-3 rounded-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent after:bg-accent hover:bg-accent/5' 
                    : 'text-white/90 hover:text-white after:bg-white hover:bg-white/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Νέα
              </a>
              <a 
                href="/contact" 
                className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 px-4 py-3 rounded-lg relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-1 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                  isScrolled 
                    ? 'text-foreground hover:text-accent after:bg-accent hover:bg-accent/5' 
                    : 'text-white/90 hover:text-white after:bg-white hover:bg-white/10'
                }`}
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