import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-xl text-foreground mb-8 text-center">
            Όροι Χρήσης
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-display-md text-foreground mb-4">1. Αποδοχή Όρων</h2>
              <p>
                Χρησιμοποιώντας την ιστοσελίδα του Μέθεξις productions, συμφωνείτε με τους παρόντες όρους χρήσης. 
                Εάν δεν συμφωνείτε με οποιονδήποτε από αυτούς τους όρους, παρακαλούμε μην χρησιμοποιείτε την ιστοσελίδα μας.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">2. Κρατήσεις & Εισιτήρια</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Όλες οι κρατήσεις εισιτηρίων υπόκεινται σε διαθεσιμότητα</li>
                <li>Τα εισιτήρια δεν επιστρέφονται, εκτός σε περίπτωση ακύρωσης παράστασης από το θέατρο</li>
                <li>Οι τιμές των εισιτηρίων ενδέχεται να αλλάξουν χωρίς προειδοποίηση</li>
                <li>Η είσοδος επιτρέπεται μόνο με έγκυρο εισιτήριο</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">3. Κανόνες Θεάτρου</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Απαγορεύεται η χρήση κινητών τηλεφώνων κατά τη διάρκεια της παράστασης</li>
                <li>Δεν επιτρέπονται φωτογραφίες ή βιντεοσκοπήσεις</li>
                <li>Η είσοδος μετά την έναρξη της παράστασης γίνεται κατά τη διακριτική ευχέρεια του προσωπικού</li>
                <li>Απαγορεύονται τρόφιμα και ποτά στην αίθουσα</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">4. Πνευματική Ιδιοκτησία</h2>
              <p>
                Όλο το περιεχόμενο της ιστοσελίδας, συμπεριλαμβανομένων κειμένων, εικόνων, λογοτύπων και σχεδίασης, 
                προστατεύεται από τους νόμους πνευματικής ιδιοκτησίας και ανήκει στο Μέθεξις productions.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">5. Περιορισμός Ευθύνης</h2>
              <p>
                Το Μέθεξις productions δεν φέρει ευθύνη για οποιαδήποτε άμεση ή έμμεση ζημία που ενδέχεται να προκύψει 
                από τη χρήση της ιστοσελίδας ή την παρακολούθηση των παραστάσεων.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">6. Τροποποιήσεις</h2>
              <p>
                Το Μέθεξις productions διατηρεί το δικαίωμα να τροποποιεί αυτούς τους όρους ανά πάσα στιγμή. 
                Οι αλλαγές θα δημοσιεύονται στην ιστοσελίδα και θα ισχύουν από την ημερομηνία δημοσίευσης.
              </p>
            </div>

            <div className="text-sm text-muted-foreground border-t border-border pt-6 mt-12">
              <p>Τελευταία ενημέρωση: 15 Μαρτίου 2024</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;