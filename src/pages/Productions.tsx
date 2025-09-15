import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Productions = () => {
  const currentProductions = [
    {
      id: 1,
      title: "ΕΙΡΗΝΗ",
      subtitle: "Η κωμωδία του Αριστοφάνη ",
      description: "Σε συμπαραγωγή με το Θεσσαλικό Θέατρο, σε μετάφραση Λάκη Λαζόπουλο και σκηνοθεσία Νικορέστη Χανιωτάκη.",
      dates: "15 Μαρτίου - 28 Απριλίου 2026",
      image: "./placeholder.svg",
      status: "current"
    },
    {
      id: 2,
      title: "ΦΙΛΟΚΤΗΤΗΣ",
      subtitle: "Η τραγωδία του Σοφοκλή ",
      description: "Σε σκηνοθεσία Γιώργου Κιμούλη.",
      dates: "8 Ιουνίου - 20 Ιουλίου 2026",
      image: "./filoktitis.jpg",
      status: "current"
    },
    {
      id: 3,
      title: "ΧΑΣΑΜΕ ΤΗ ΘΕΙΑ ΣΤΟΠ",
      subtitle: "Η θεατρική παράσταση του Γιώργου Διαλεγμένου",
      description: "Σε σκηνοθεσία Χρήστου Τριπόδη.",
      dates: "8 Ιουνίου - 20 Ιουλίου 2026",
      image: "/placeholder.svg",
      status: "current"
    }
  ];

  const pastProductions = [
    {
      id: 101,
      title: "ΒΟΤΚΑ ΜΟΛΟΤΟΦ",
      subtitle: "Η εκρηκτική κωμωδία της Ελένης Ράντου",
      description: "Βασισμένη στη διασκευή του Νηλ Σάιμον, πάνω στα διηγήματα του Τσέχωφ, σε σκηνοθεσία Νικορέστη Χανιωτάκη, με τους Ιωάννη Απέργη, Παναγιώτα Βιτετζάκη, Κατερίνα Γερονικολού, Λυδία Σγουράκη, Πάνο Σταθακόπουλο, Δήμητρα Στογιάννη, Χάρη Χιώτη, στο ρόλο του Τχέχωφ ο Τάσος Χαλκιάς, σε χειμερινή περιοδεία ανά την Ελλάδα.",
      dates: "15 Μαρτίου - 28 Απριλίου 2024",
      image: "./placeholder.svg",
      status: "past"
    },
    {
      id: 102,
      title: "Ο ΘΡΥΛΟΣ ΤΗΣ ΜΟΥΛΑΝ",
      subtitle: "Η παιδική παράσταση σε σκηνοθεσία Χρήστου Τριπόδη και διασκευή Μάνου Τσότρα",
      description: "με τους Λυδία Σγουράκη, Αντώνη Αντωνάκο,Βαγγέλη Κυπαρίσση, Στρατή Νταλαγιώργο, Χρήστο Σωνάκη, Θεοδώρα Κοκκινίδη, Ελένη Φανδρίδου, Χρόνη Στρίκο, σε καλοκαιρινή περιοδεία ανά την Ελλάδα.",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    },
    {
      id: 103,
      title: "Ο ΠΑΠΠΟΥΣ ΕΧΕΙ ΠΙΕΣΗ",
      subtitle: "Την ξέφρενη κωμωδία της Δήμητρας Παπαδοπούλου",
      description: "Σε σκηνοθεσία Χρήστου Τριπόδη, με τους Άρης Αντωνόπουλο, Κρατερό Κατσούλη, Μαριλού Κατσαφάδου, Ηρώ Πεκτέση, Δήμητρα Στογιάννη και στο ρόλο του παππού ο Τάσος Χαλκιάς, στο Αίθριο του Κέντρου Πολιτισμού «Ελληνικός Κόσμος», την θερινή θεατρική περίοδο 2024 και σε περιοδεία ανά την Ελλάδα.",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    },
    {
      id: 104,
      title: "Η ΣΠΑΣΜΕΝΗ ΣΤΑΜΝΑ",
      subtitle: "Το διαχρονικό έργο του Χάινριχ Φον Κλάιστ",
      description: "Σε σκηνοθεσία Γιώργου Κιμούλη, με τους Γιώργο Κιμούλη, Τζόυς Ευείδη, Αργύρη Αγγέλου, Λίλη Τσεσματζόγλου, Γιώργο Στριφτάρη, Βασίλη Πουλάκο, Βασίλη Γιακουμάρο,  σε καλοκαιρινή περιοδεία ανά την Ελλάδα.",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    },
    {
      id: 105,
      title: "Η ΣΥΝΑΝΤΗΣΗ",
      subtitle: "Η παράστασητου Stephen Belber",
      description: "σε σκηνοθεσία Γιώργου Κιμούλη, με τους Γιώργο Κιμούλη, Κατερίνα Θεοχάρη, Βασίλη Γιακουμάρο, στο θέατρο Coronet, τη χειμερινή θεατρική περίοδο 2024-2025.",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    },
    {
      id: 106,
      title: "Ο ΠΕΤΡΟΣ ΚΑΙ Ο ΛΥΚΟΣ",
      subtitle: "Το διασημότερο μουσικό παραμύθι όλων των εποχών του Σεργκέι Προκόφιεφ",
      description: "Σε σκηνοθεσία Χρήστου Τριπόδη, με τον Ιωάννη Απέργη, τους μουσικούς Αλέξανδρο Ζουγανέλη, Κωνσταντίνα Ρούσσου, Ηλία Γυφτονικολό, Μυρτώ Ξηρουχάκη, Αουλόν Μπίνο και τις χορεύτριες Χριστίνα Μπίτου, Ναταλία Μαρτίνη, στο θέατρο Διάνα, τη χειμερινή θεατρική περίοδο 2024-2025.",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    },
    {
      id: 107,
      title: "",
      subtitle: "",
      description: "",
      dates: "10 Μαίου - 15 Ιουνίου 2023",
      image: "/placeholder.svg",
      status: "past"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Παραστάσεις</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Κάθε παράσταση δημιουργείται με προσοχή για να δημιουργήσει έναν βαθύ διάλογο 
              μεταξύ κοινού και ερμηνευτή, εξερευνώντας τα βάθη της ανθρώπινης εμπειρίας.
            </p>
          </div>
        </div>
      </section>

      {/* Current Productions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Παίζονται Τώρα
          </h2>
          
          <div className="space-y-16">
            {currentProductions.map((production, index) => (
              <div 
                key={production.id}
                className="group animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden shadow-elegant">
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        Τρέχουσα Παράσταση
                      </span>
                    </div>
                    
                    <h3 className="text-display-md text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                      {production.title}
                    </h3>
                    
                    <h4 className="text-xl text-muted-foreground font-light mb-6">
                      {production.subtitle}
                    </h4>
                    
                    <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                      {production.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                      <span className="text-sm text-muted-foreground">
                        📅 {production.dates}
                      </span>
                    </div>
                    
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                      Κλείσε Εισιτήρια
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Productions */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Παλαιότερες Παραστάσεις
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pastProductions.map((production, index) => (
              <div 
                key={production.id}
                className="group bg-card rounded-lg overflow-hidden shadow-elegant hover:shadow-dramatic transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-[4/3] bg-secondary">
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Εικόνα παράστασης</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      Αρχείο
                    </span>
                  </div>
                  
                  <h3 className="text-display-md text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {production.title}
                  </h3>
                  
                  <h4 className="text-lg text-muted-foreground font-light mb-4">
                    {production.subtitle}
                  </h4>
                  
                  <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                    {production.description}
                  </p>
                  
                  <span className="text-sm text-muted-foreground">
                    📅 {production.dates}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productions;