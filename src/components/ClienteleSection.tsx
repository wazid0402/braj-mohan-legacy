const ClienteleSection = () => {
  const clients = [
    "Tata Projects", "Adani Group", "Google", "Airtel", "Genus", "Intellismart", 
    "G R Infra", "Ministry of New & Renewable Energy", "South Bihar Power Distribution", 
    "North Bihar Power Distribution", "Energy Efficiency Services", "Transrail Lighting", 
    "Godrej", "Secure"
  ];

  const financePartners = [
    "State Bank of India", "Punjab National Bank", "ICICI Bank", 
    "Bank of Baroda", "Axis Bank", "Kotak Mahindra"
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Clientele */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Clientele</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-corporate text-center hover:shadow-gold transition-all duration-300 border border-border">
                <div className="w-16 h-16 bg-gradient-gold rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {client.split(' ').map(word => word[0]).join('').substring(0, 3)}
                  </span>
                </div>
                <p className="text-foreground font-medium text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Finance Partners */}
        <div>
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Finance Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {financePartners.map((partner, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-corporate text-center hover:shadow-gold transition-all duration-300 border border-border">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">
                    {partner.split(' ').map(word => word[0]).join('').substring(0, 3)}
                  </span>
                </div>
                <p className="text-foreground font-medium text-xs">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;