const VisionMissionSection = () => {
  const missionPoints = [
    {
      title: "Empowering Infrastructure Growth",
      description: "Offer specialized infrastructure and civil engineering solutions to help clients solve tough engineering problems and reach long-term, sustainable success."
    },
    {
      title: "Driving Smart Innovation",
      description: "Integrate artificial intelligence (AI), renewable energy, and modern construction technologies to increase project efficiency, environmental sustainability, and future-readiness."
    },
    {
      title: "Holistic Development Services",
      description: "Provide comprehensive knowledge of road and bridge construction, interior and exterior design, security and manpower solutions, renewable power projects including solar and electric vehicles, and real estate development."
    },
    {
      title: "Strengthening Bihar's Infrastructure",
      description: "Encourage state development by funding top-notch infrastructure initiatives that improve connectivity, generate jobs, and advance Bihar's economy."
    },
    {
      title: "Creating a Progressive Ecosystem",
      description: "Encourage inclusive growth strategies, green building techniques, and smart city planning to create resilient, community-focused infrastructure throughout India."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">Our Vision</h2>
          <div className="max-w-4xl mx-auto p-8 bg-gradient-gold rounded-lg shadow-gold">
            <p className="text-lg text-primary leading-relaxed font-medium">
              "To position Braj Mohan Developers as a multifaceted infrastructure powerhouse that not only 
              constructs tangible assets but also spearheads innovation in smart building, renewable energy, 
              and tech-driven solutions, fostering regional development and creating resilient communities 
              throughout India."
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-corporate hover:shadow-gold transition-all duration-300 border border-border">
                <h3 className="text-xl font-semibold text-accent mb-4">{point.title}</h3>
                <p className="text-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;