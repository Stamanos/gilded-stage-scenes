import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  productionTitle: string;
}

const ImageLightbox = ({ images, currentIndex, onClose, productionTitle }: ImageLightboxProps) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
      onClick={handleBackgroundClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
        aria-label="Κλείσιμο"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            aria-label="Προηγούμενη φωτογραφία"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110"
            aria-label="Επόμενη φωτογραφία"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </>
      )}

      {/* Image */}
      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-scale-in">
        <img
          src={images[activeIndex]}
          alt={`${productionTitle} - Φωτογραφία ${activeIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-dramatic"
        />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
          <span className="text-white text-sm">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;