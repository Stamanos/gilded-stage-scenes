const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <h2 className="text-display-lg text-foreground mb-8">
              Art as Experience
            </h2>
            <div className="space-y-6">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Η εταιρία θεατρικών παραγωγών “ΜΕΘΕΞΙΣ”, ιδρύθηκε το 2013 από τον Χρήστο Τριπόδη. 
              <p className="text-body text-muted-foreground leading-relaxed">
                Έχοντας ήδη διανύσει δώδεκα χρόνια από την ίδρυσή της και με πάνω από τριάντα  
                παραγωγές στο ιστορικό της, η “ΜΕΘΕΞΙΣ” πιστά και με σεβασμό, δραστηριοποιείται, 
                δημιουργεί και παρουσιάζει παραστάσεις για ενήλικες και παιδιά  με σκοπό να ψυχαγωγήσει 
                και να διασκεδάσει θεατές όλων των ηλικιών.
                Στόχος και όραμα της εταιρίας είναι να δημιουργεί ποιοτικές παραστάσεις που 
                ανταποκρίνονται σε υψηλά καλλιτεχνικά κριτήρια και να συμβάλει στη θεατρική 
                παιδία και τη διάδοση της, τόσο στο ενήλικο, όσο και στο παιδικό κοινό.
              </p>
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up">
            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Ο Στόχος μας</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Μέλημα επίσης της εταιρίας Μέθεξις και του Χρήστου Τριπόδη είναι 
                να διατηρεί ένα αξιόπιστο δίκτυο συνεργατών, πάντα με γνώμονα τον αλληλοσεβασμό και 
                την κοινή καλλιτεχνική ματιά.
              </p>
            </div>

            <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
              <h3 className="text-display-md text-foreground mb-4">Επιτεύγματα</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Βασικός σταθμός στην πορεία της εταιρίας είναι η πολυετή 
                συνεργασία με το Ίδρυμα Μείζονος Ελληνισμού «Ελληνικός Κόσμος», η καλλιτεχνική 
                διοργάνωση του Καλοκαιρινού Φεστιβάλ Δήμου Παπάγου, στο Κηποθέατρο Παπάγου, τα τελευταία 
                πέντε χρόνια και του καλοκαιρινού θεατρικού φεστιβάλ του Δήμου Ηλιούπολης, τα τελευταία 
                δύο χρόνια, καθώς και η συνεργασία με σημαντικούς καλλιτέχνες και συγγραφείς του 
                σύγχρονου θεατρικού γίγνεσθαι. 
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant">
              <h3 className="text-display-md text-card-foreground mb-4">Κοινότητα</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Theater thrives in community. We cultivate relationships with artists, 
                audiences, and the broader cultural landscape to nurture the art form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;