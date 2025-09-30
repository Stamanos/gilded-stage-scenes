import { useState, useEffect } from "react";
import { Info, X } from "lucide-react";
import infoTipsData from "@/data/infoTips.json";

interface InfoTip {
  title: string;
  text: string;
}

interface FloatingInfoTipProps {
  page: keyof typeof infoTipsData.pageTips;
}

const FloatingInfoTip = ({ page }: FloatingInfoTipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasAutoShown, setHasAutoShown] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips: InfoTip[] = infoTipsData.pageTips[page] || [];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > 200;

      if (shouldShow && !isVisible) {
        setIsVisible(true);
        
        // Auto-show popup after first scroll, only once
        if (!hasAutoShown) {
          setTimeout(() => {
            setIsPopupOpen(true);
            setHasAutoShown(true);
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
              setIsPopupOpen(false);
            }, 3000);
          }, 500);
        }
      } else if (!shouldShow) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, hasAutoShown]);

  const handleToggle = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      setCurrentTipIndex(0);
    }
  };

  const handleNext = () => {
    setCurrentTipIndex((prev) => (prev + 1) % tips.length);
  };

  const handlePrev = () => {
    setCurrentTipIndex((prev) => (prev - 1 + tips.length) % tips.length);
  };

  if (tips.length === 0) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0 pointer-events-none"
      }`}
    >
      {/* Info Icon Button */}
      <button
        onClick={handleToggle}
        className="bg-accent/90 backdrop-blur-md border border-accent-foreground/20 p-3 rounded-full shadow-elegant hover:shadow-dramatic transition-all duration-300 hover:scale-110 hover:bg-accent group animate-bounce-gentle"
        aria-label="Χρήσιμες πληροφορίες"
      >
        <Info className="w-5 h-5 text-accent-foreground" />
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div className="absolute bottom-16 left-0 w-80 bg-card/95 backdrop-blur-lg border border-border rounded-lg shadow-dramatic p-4 animate-fade-in">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-accent flex-shrink-0" />
              <h3 className="font-semibold text-accent-foreground">
                {tips[currentTipIndex].title}
              </h3>
            </div>
            <button
              onClick={handleToggle}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Κλείσιμο"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {tips[currentTipIndex].text}
          </p>

          {tips.length > 1 && (
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="text-xs text-accent hover:text-accent-foreground transition-colors"
              >
                ← Προηγούμενο
              </button>
              <span className="text-xs text-muted-foreground">
                {currentTipIndex + 1} / {tips.length}
              </span>
              <button
                onClick={handleNext}
                className="text-xs text-accent hover:text-accent-foreground transition-colors"
              >
                Επόμενο →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingInfoTip;
