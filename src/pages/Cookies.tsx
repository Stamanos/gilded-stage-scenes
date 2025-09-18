import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-xl text-foreground mb-8 text-center">
            Πολιτική Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-display-md text-foreground mb-4">Τι είναι τα Cookies</h2>
              <p>
                Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε μια ιστοσελίδα. 
                Χρησιμοποιούνται για να κάνουν τις ιστοσελίδες να λειτουργούν πιο αποτελεσματικά και για να παρέχουν 
                πληροφορίες στους ιδιοκτήτες της ιστοσελίδας.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">Πώς Χρησιμοποιούμε τα Cookies</h2>
              <p>Το Μέθεξις productions χρησιμοποιεί cookies για:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Να θυμόμαστε τις προτιμήσεις σας</li>
                <li>Να βελτιώσουμε την απόδοση της ιστοσελίδας</li>
                <li>Να αναλύσουμε τη χρήση της ιστοσελίδας</li>
                <li>Να παρέχουμε στοχευμένο περιεχόμενο</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">Τύποι Cookies που Χρησιμοποιούμε</h2>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">Απαραίτητα Cookies</h3>
              <p className="mb-4">
                Αυτά τα cookies είναι απαραίτητα για τη λειτουργία της ιστοσελίδας και δεν μπορούν να απενεργοποιηθούν.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Απόδοσης</h3>
              <p className="mb-4">
                Συλλέγουν ανώνυμες πληροφορίες σχετικά με τον τρόπο χρήσης της ιστοσελίδας μας.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Λειτουργικότητας</h3>
              <p className="mb-4">
                Επιτρέπουν στην ιστοσελίδα να θυμάται επιλογές που κάνετε και να παρέχει βελτιωμένες λειτουργίες.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">Διαχείριση Cookies</h2>
              <p>
                Μπορείτε να ελέγξετε και/ή να διαγράψετε cookies όπως επιθυμείτε. Μπορείτε να διαγράψετε όλα τα cookies 
                που βρίσκονται ήδη στον υπολογιστή σας και μπορείτε να ρυθμίσετε τα περισσότερα προγράμματα περιήγησης 
                να αποτρέπουν την τοποθέτησή τους.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">Επικοινωνία</h2>
              <p>
                Εάν έχετε ερωτήσεις σχετικά με την πολιτική cookies μας, μπορείτε να επικοινωνήσετε μαζί μας στο: 
                info@ateliertheater.gr
              </p>
            </div>

            <div className="text-sm text-muted-foreground border-t border-border pt-6 mt-12">
              <p>Τελευταία ενημέρωση: 15 Μαρτίου 2024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Cookies;