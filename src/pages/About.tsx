import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import FloatingInfoTip from "@/components/FloatingInfoTip";
import teamData from "@/data/team.json";

const About = () => {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <h1 className="text-display-xl mb-6">Σχετικά με εμάς</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Το Μέθεξις productions δημιουργήθηκε με την πεποίθηση ότι το θέατρο δεν είναι απλώς ψυχαγωγία, 
              αλλά μια μεταμορφωτική εμπειρία που προκαλεί, εμπνέει και μας συνδέει με την κοινή μας ανθρωπιά.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="animate-slide-in">
              <h2 className="text-display-lg text-foreground mb-8">
                Η Φιλοσοφία μας
              </h2>
              <div className="space-y-6">
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  Στον ιντιμιστικό μας χώρο των 150 θέσεων, δημιουργούμε ένα περιβάλλον όπου οι ιστορίες 
                  ζωντανεύουν μέσα από τον γάμο της κλασικής τεχνικής με τη σύγχρονη οπτική.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Η καλλιτεχνική μας φιλοσοφία επικεντρώνεται στη δύναμη της ζωντανής παράστασης να 
                  δημιουργεί γνήσιες στιγμές αποκάλυψης και σύνδεσης. Πιστεύουμε στο θέατρο ως μια 
                  συλλογική τέχνη που φέρνει κοντά καλλιτέχνες και κοινό σε κοινή ανακάλυψη.
                </p>
              </div>
            </div>

            <div className="space-y-8 animate-fade-up">
              <div className="bg-card p-8 rounded-lg shadow-elegant">
                <h3 className="text-display-md text-card-foreground mb-4">Όραμα</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Να δημιουργήσουμε εξαιρετικές θεατρικές εμπειρίες που τιμούν την τέχνη ενώ 
                  προωθούν τα καλλιτεχνικά όρια, καλλιεργώντας μια βαθύτερη κατανόηση της ανθρώπινης κατάστασης.
                </p>
              </div>

              <div className="bg-accent/5 p-8 rounded-lg border border-accent/20">
                <h3 className="text-display-md text-foreground mb-4">Αποστολή</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Αναζητούμε να φωτίσουμε το βαθύ μέσα στο οικείο, δημιουργώντας θέατρο 
                  που είναι ταυτόχρονα διανοητικά αυστηρό και συναισθηματικά συντονισμένο.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display-lg text-foreground mb-6">
              Η Δημιουργική μας Ομάδα
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Μια ομάδα έμπειρων καλλιτεχνών που εργάζονται με πάθος για τη δημιουργία 
              αξέχαστων θεατρικών στιγμών.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamData.teamMembers.map((member, index) => (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-elegant">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-display-lg text-foreground mb-16 text-center">
            Οι Αξίες μας
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-elegant text-center animate-fade-up">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Αυθεντικότητα</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Κάθε παράσταση αντικατοπτρίζει την πραγματική μας ουσία και τις βαθιές μας πεποιθήσεις.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Καινοτομία</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Αναζητούμε νέους τρόπους να αφηγηθούμε παλιές ιστορίες με σύγχρονη ματιά.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-elegant text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Κοινότητα</h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                Το θέατρο ανθεί μέσα στην κοινότητα. Καλλιεργούμε σχέσεις με καλλιτέχνες και κοινό.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
      <FloatingInfoTip page="about" />
    </div>
  );
};

export default About;