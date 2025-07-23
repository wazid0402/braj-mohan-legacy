const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg shadow-corporate border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">Office Address</h3>
              <p className="text-foreground">
                House No. 8H/7, Vijay Nagar<br />
                Patna, Bihar - 800020
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-corporate border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">Registered Address</h3>
              <p className="text-foreground">
                Ganga Path, West Patel Nagar<br />
                Board Colony, Patna, Bihar - 800029
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-corporate border border-border">
              <h3 className="text-xl font-semibold text-accent mb-4">Contact Details</h3>
              <div className="space-y-2">
                <p className="text-foreground flex items-center">
                  <span className="text-accent mr-2">📞</span>
                  +91 612 317 4811
                </p>
                <p className="text-foreground flex items-center">
                  <span className="text-accent mr-2">✉️</span>
                  info@brajmohangroup.com
                </p>
                <p className="text-foreground flex items-center">
                  <span className="text-accent mr-2">🌐</span>
                  www.brajmohangroup.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-card rounded-lg shadow-corporate border border-border overflow-hidden">
            <div className="w-full h-96 bg-gradient-section flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-accent mb-4">📍</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Visit Our Office</h3>
                <p className="text-foreground">Patna, Bihar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;