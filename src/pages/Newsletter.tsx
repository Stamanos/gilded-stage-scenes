import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Mail, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const Newsletter = () => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize validation after script loads
      const validationScript = document.createElement('script');
      validationScript.type = 'text/javascript';
      validationScript.innerHTML = `
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';
          ftypes[0]='email';
          fnames[1]='FNAME';
          ftypes[1]='text';
          fnames[2]='LNAME';
          ftypes[2]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `;
      document.body.appendChild(validationScript);
    };

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-up">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-foreground/10 w-20 h-20 rounded-full flex items-center justify-center">
                <Mail className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-display-xl mb-6">Newsletter</h1>
            <p className="text-body-lg opacity-90 max-w-3xl mx-auto">
              Εγγραφείτε στο newsletter μας και μείνετε ενημερωμένοι για τις νέες παραστάσεις, 
              ειδικές προσφορές και όλα τα νέα της Μέθεξις!
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center animate-fade-up">
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Πρώτοι θα μαθαίνετε</h3>
                <p className="text-sm text-muted-foreground">
                  Νέες παραστάσεις & πρεμιέρες
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Ειδικές προσφορές</h3>
                <p className="text-sm text-muted-foreground">
                  Αποκλειστικές εκπτώσεις για συνδρομητές
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Backstage περιεχόμενο</h3>
                <p className="text-sm text-muted-foreground">
                  Αποκλειστικά νέα από τα παρασκήνια
                </p>
              </div>
            </div>

            {/* Mailchimp Form Container */}
            <div className="bg-card p-8 rounded-lg shadow-elegant animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-center mb-8">
                <h2 className="text-display-md text-card-foreground mb-3">
                  Εγγραφή στο Newsletter
                </h2>
                <p className="text-body text-muted-foreground">
                  Συμπληρώστε το email σας παρακάτω για να εγγραφείτε
                </p>
              </div>

              {/* Mailchimp embedded form */}
              <div id="mc_embed_shell">
                <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
                <style type="text/css">{`
                  #mc_embed_signup {
                    background: transparent;
                    clear: left;
                    font: 14px Helvetica, Arial, sans-serif;
                    width: 100%;
                  }
                  #mc_embed_signup form {
                    padding: 0;
                  }
                  #mc_embed_signup h2 {
                    display: none;
                  }
                  #mc_embed_signup .mc-field-group {
                    width: 100%;
                    padding-bottom: 3%;
                    min-height: 50px;
                  }
                  #mc_embed_signup input.email,
                  #mc_embed_signup input.text {
                    font-size: 16px;
                    padding: 12px 16px;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    width: 100%;
                    margin-top: 8px;
                  }
                  #mc_embed_signup input.email:focus,
                  #mc_embed_signup input.text:focus {
                    border-color: #8b5cf6;
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
                  }
                  #mc_embed_signup .button {
                    background-color: #8b5cf6;
                    color: white;
                    font-size: 16px;
                    font-weight: 600;
                    padding: 14px 40px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    width: 100%;
                    margin-top: 8px;
                    min-height: 52px;
                    white-space: normal;
                    line-height: 1.4;
                  }
                  #mc_embed_signup .button:hover {
                    background-color: #7c3aed;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
                  }
                  #mc_embed_signup label {
                    font-weight: 600;
                    color: #1e293b;
                    font-size: 14px;
                  }
                  #mc_embed_signup .asterisk {
                    color: #8b5cf6;
                  }
                  #mc_embed_signup .indicates-required {
                    text-align: right;
                    font-size: 12px;
                    color: #64748b;
                    margin-bottom: 16px;
                  }
                  #mce-responses {
                    margin-top: 16px;
                  }
                  #mce-responses .response {
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 8px;
                    font-size: 14px;
                  }
                  #mce-error-response {
                    background-color: #fee2e2;
                    color: #991b1b;
                    border: 1px solid #fecaca;
                  }
                  #mce-success-response {
                    background-color: #dcfce7;
                    color: #166534;
                    border: 1px solid #bbf7d0;
                  }
                `}</style>
                <div id="mc_embed_signup">
                  <form 
                    action="https://gmail.us10.list-manage.com/subscribe/post?u=416a18ef8fd9475b70da2ad6f&amp;id=9585a1de5b&amp;f_id=0050d1e1f0" 
                    method="post" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank"
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="indicates-required">
                        <span className="asterisk">*</span> υποχρεωτικά πεδία
                      </div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">
                          Email Address <span className="asterisk">*</span>
                        </label>
                        <input 
                          type="email" 
                          name="EMAIL" 
                          className="required email" 
                          id="mce-EMAIL" 
                          required 
                          defaultValue=""
                          placeholder="το email σας"
                        />
                      </div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-FNAME">Όνομα</label>
                        <input 
                          type="text" 
                          name="FNAME" 
                          className="text" 
                          id="mce-FNAME" 
                          defaultValue=""
                          placeholder="το όνομά σας"
                        />
                      </div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-LNAME">Επίθετο</label>
                        <input 
                          type="text" 
                          name="LNAME" 
                          className="text" 
                          id="mce-LNAME" 
                          defaultValue=""
                          placeholder="το επίθετό σας"
                        />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                      </div>
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <input 
                          type="text" 
                          name="b_416a18ef8fd9475b70da2ad6f_9585a1de5b" 
                          tabIndex={-1} 
                          defaultValue="" 
                        />
                      </div>
                      <div className="clear">
                        <input 
                          type="submit" 
                          name="subscribe" 
                          id="mc-embedded-subscribe" 
                          className="button" 
                          value="Εγγραφή στο Newsletter" 
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Σεβόμαστε την ιδιωτικότητά σας. Τα στοιχεία σας θα χρησιμοποιηθούν 
                  μόνο για την αποστολή ενημερωτικών email και δεν θα κοινοποιηθούν 
                  σε τρίτους. Μπορείτε να διαγραφείτε ανά πάσα στιγμή.
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Έχετε ήδη εγγραφεί; Ελέγξτε το email σας για τα τελευταία νέα!
              </p>
              <p className="text-sm text-muted-foreground">
                Για οποιαδήποτε απορία, επικοινωνήστε μαζί μας στο{" "}
                <a 
                  href="mailto:methexis.productions@gmail.com" 
                  className="text-accent hover:underline"
                >
                  methexis.productions@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Newsletter;
