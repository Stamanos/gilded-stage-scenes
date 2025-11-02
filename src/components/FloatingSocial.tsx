import { Facebook, Instagram, Youtube } from "lucide-react";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">

      <a
        href="https://www.instagram.com/filiptheater/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-full shadow-elegant hover:shadow-dramatic transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground group"
        aria-label="Instagram"
      >
        <Instagram className="w-4 h-4 md:w-5 md:h-5" />
      </a>

      <a
        href="https://www.instagram.com/methexis_productions/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-full shadow-elegant hover:shadow-dramatic transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground group"
        aria-label="Instagram"
      >
        <Instagram className="w-4 h-4 md:w-5 md:h-5" />
      </a>
      
      <a
        href="https://www.facebook.com/methexis.productions/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-full shadow-elegant hover:shadow-dramatic transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground group"
        aria-label="Facebook"
      >
        <Facebook className="w-4 h-4 md:w-5 md:h-5" />
      </a>
      
      <a
        href="https://www.youtube.com/@methexisproductions1453"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card/80 backdrop-blur-md border border-border/50 p-3 rounded-full shadow-elegant hover:shadow-dramatic transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-accent-foreground group"
        aria-label="YouTube"
      >
        <Youtube className="w-4 h-4 md:w-5 md:h-5" />
      </a>
    </div>
  );
};

export default FloatingSocial;