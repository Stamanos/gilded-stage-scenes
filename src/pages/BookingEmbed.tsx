import { useParams, useNavigate } from "react-router-dom";
import productionsData from "@/data/productions.json";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const BookingEmbed = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const production = productionsData.productions.find(
    (p) => String(p.id) === String(id)
  );

  if (!production || !production.bookingLink) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-slate-900 mb-4">
              Δεν βρέθηκε σύνδεσμος κράτησης.
            </p>
            <Button onClick={() => navigate(-1)}>
              Επιστροφή
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navigation forceBlackText={true} />
      
      {/* Header */}
      <div className="bg-card border-b border-border py-8 flex-shrink-0">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 text-center md:text-left md:ml-48 max-w-xl break-words">
            Κράτηση Εισιτηρίων - {production.title}
          </h1>
        </div>
      </div>

      {/* Embedded Iframe - Full Screen */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0" style={{ top: '-75px' }}>
          <iframe
            src={production.bookingLink}
            title={`Κράτηση εισιτηρίων για ${production.title}`}
            className="w-full border-0"
            style={{ height: 'calc(100% + 75px)' }}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingEmbed;