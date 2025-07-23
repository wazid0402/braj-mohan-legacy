import solarImage from "@/assets/solar-energy.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Real Estate",
      items: ["Residential & Commercial Construction", "Renovation & Maintenance", "Buying & Selling", "Investment Advisory", "Property Management Solutions"]
    },
    {
      title: "Constructions", 
      items: ["Roads & Highways", "Overbridges", "Bore Well & Overhead Tanks", "Architectural Finishes", "Construction Elements"]
    },
    {
      title: "Interior & Exterior",
      items: ["Architecture & Interior Design", "Furniture & Furnishing Solutions", "Outdoor & Wellness Spaces", "Design Consultation"]
    },
    {
      title: "Power & Energy",
      items: ["Solar Power Systems", "EV Charging Infrastructure", "Smart City Electrification", "Smart Meters", "Substations"]
    },
    {
      title: "Security & Manpower",
      items: ["Institutional & Industrial Security", "24×7 Emergency Response", "Surveillance & Events", "Personal Security"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Service Portfolio</h2>
        
        {/* Power & Energy Special Section */}
        <div className="mb-16 bg-gradient-section rounded-lg p-8 shadow-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Power & Energy Leadership</h3>
              <p className="text-foreground leading-relaxed mb-6">
                With its expanding presence in the Power & Energy sector, Braj Mohan Developers is actively 
                supporting India's green energy objectives. The company integrates renewable energy into 
                contemporary infrastructure projects by utilizing its construction expertise to provide 
                sustainable solutions in clean-tech-enabled systems, electric mobility, and solar infrastructure.
              </p>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-accent mb-3">OUR VISION FOR ENERGY DEVELOPMENT:</h4>
                <p className="text-foreground">
                  To accelerate India's transition to renewable energy by incorporating electric vehicles 
                  and solar energy into standard infrastructure, particularly in developing areas like Bihar, 
                  and incorporating sustainability into all phases of development.
                </p>
              </div>
            </div>
            <img 
              src={solarImage} 
              alt="Solar Energy Solutions" 
              className="rounded-lg shadow-corporate w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-corporate hover:shadow-gold transition-all duration-300 border border-border">
              <h3 className="text-2xl font-bold text-accent mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;