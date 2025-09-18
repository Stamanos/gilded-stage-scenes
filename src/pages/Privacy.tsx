import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-display-xl text-foreground mb-8 text-center">
            Πολιτική Προσωπικών Δεδομένων
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-display-md text-foreground mb-4">1. Συλλογή Προσωπικών Δεδομένων</h2>
              <p>
                Το Μέθεξις productions συλλέγει προσωπικά δεδομένα μόνο όταν είναι απαραίτητο για την παροχή των υπηρεσιών μας. 
                Τα δεδομένα που συλλέγουμε περιλαμβάνουν όνομα, email, τηλέφωνο και στοιχεία κράτησης εισιτηρίων.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">2. Χρήση Δεδομένων</h2>
              <p>
                Χρησιμοποιούμε τα προσωπικά σας δεδομένα για:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Επεξεργασία κρατήσεων εισιτηρίων</li>
                <li>Αποστολή ενημερώσεων για παραστάσεις (με τη συγκατάθεσή σας)</li>
                <li>Βελτίωση των υπηρεσιών μας</li>
                <li>Τήρηση των νομικών μας υποχρεώσεων</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">3. Προστασία Δεδομένων</h2>
              <p>
                Λαμβάνουμε όλα τα απαραίτητα τεχνικά και οργανωτικά μέτρα για την προστασία των προσωπικών σας δεδομένων 
                από μη εξουσιοδοτημένη πρόσβαση, αλλαγή, διαγραφή ή κοινοποίηση.
              </p>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">4. Τα Δικαιώματά σας</h2>
              <p>
                Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε το δικαίωμα:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Πρόσβασης στα προσωπικά σας δεδομένα</li>
                <li>Διόρθωσης ανακριβών δεδομένων</li>
                <li>Διαγραφής των δεδομένων σας</li>
                <li>Περιορισμού της επεξεργασίας</li>
                <li>Φορητότητας των δεδομένων</li>
              </ul>
            </div>

            <div>
              <h2 className="text-display-md text-foreground mb-4">5. Επικοινωνία</h2>
              <p>
                Για οποιαδήποτε ερώτηση σχετικά με την επεξεργασία των προσωπικών σας δεδομένων, 
                μπορείτε να επικοινωνήσετε μαζί μας στο email: privacy@ateliertheater.gr
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

export default Privacy;