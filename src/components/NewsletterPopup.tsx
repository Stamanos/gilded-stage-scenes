import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      // Remember that user has seen the popup (for 30 days)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      localStorage.setItem('newsletter-popup-seen', expiryDate.toISOString());
    }, 300);
  };

  const handleNewsletterClick = () => {
    // Mark as seen when user clicks the button
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    localStorage.setItem('newsletter-popup-seen', expiryDate.toISOString());
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 max-w-sm transition-all duration-300 ${
        isClosing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
      style={{
        animation: isClosing ? 'none' : 'slideInUp 0.4s ease-out'
      }}
    >
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div className="bg-white rounded-lg shadow-2xl border border-accent/20 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
              <Mail className="w-6 h-6 text-accent" />
            </div>

            {/* Text */}
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Μείνετε ενημερωμένοι!
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Εγγραφείτε στο newsletter μας για νέες παραστάσεις και αποκλειστικές προσφορές
              </p>

              {/* CTA Button */}
              <Link
                to="/newsletter"
                onClick={handleNewsletterClick}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Εγγραφή τώρα
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className="h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
