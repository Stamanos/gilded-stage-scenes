import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationProps {
  forceBlackText?: boolean;
}

const Navigation = ({ forceBlackText = false }: NavigationProps) => {
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
                forceBlackText
                  ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900'
                  : isScrolled 
                    ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900' 
                    : 'text-white hover:text-slate-100 hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Παραστάσεις
            </a>
            <a 
              href="/about" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                forceBlackText
                  ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900'
                  : isScrolled 
                    ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900' 
                    : 'text-white hover:text-slate-100 hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Σχετικά με εμάς
            </a>
            <a 
              href="/news" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                forceBlackText
                  ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900'
                  : isScrolled 
                    ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900' 
                    : 'text-white hover:text-slate-100 hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Νέα
            </a>
            <a 
              href="/contact" 
              className={`text-body font-medium tracking-wide transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-1/2 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ${
                forceBlackText
                  ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900'
                  : isScrolled 
                    ? 'text-slate-900 hover:text-slate-700 after:bg-slate-900' 
                    : 'text-white hover:text-slate-100 hover:drop-shadow-lg after:bg-white'
              }`}
            >
              Επικοινωνία
            </a>
          </div>

        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className={`transition-all duration-300 hover:scale-110 ${
              forceBlackText
                ? 'text-slate-900 hover:text-slate-700'
                : isScrolled 
                  ? 'text-slate-900 hover:text-slate-700' 
                  : 'text-white hover:text-slate-100 hover:drop-shadow-lg'
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
              {[
                { href: '/productions', label: 'Παραστάσεις' },
                { href: '/about', label: 'Σχετικά με εμάς' },
                { href: '/news', label: 'Νέα' },
                { href: '/contact', label: 'Επικοινωνία' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    group relative overflow-hidden
                    font-medium tracking-wide transition-all duration-300 hover:scale-105
                    px-4 py-3 rounded-lg border border-border/30 text-center
                    bg-white/70 text-primary hover:bg-primary hover:text-white
                  "
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;