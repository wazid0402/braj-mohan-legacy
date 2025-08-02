const ValuesSection = () => {
  const valuesPoints = [
    {
      title: "Building with Integrity",
      description:
        "Maintain integrity, openness, and moral business conduct in all of your endeavors to gain the enduring trust of your clients, partners, and communities.",
    },
    {
      title: "Exceeding Expectations",
      description:
        "Deliver outstanding quality, on-time execution, and client-focused solutions that inspire confidence by going above and beyond the call of duty",
    },
    {
      title: "Balancing Creativity and Precision",
      description:
        "Combine engineering precision with architectural vision to make sure every structure honors the environment, science, and aesthetics.",
    },
    {
      title: "Setting New Standards",
      description:
        "Respect the most recent industry standards while working to rethink efficiency, safety,and quality in infrastructure development and construction.",
    },
    {
      title: "Empowering People",
      description:
        "Create an environment at work that values leadership, skill development, and overall development so that each team member can make a significant contribution to the success of the group.",
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-accent mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesPoints.map((point, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-corporate hover:shadow-gold transition-all duration-300 border border-border"
              >
                <h3 className="text-xl font-semibold text-accent mb-4">
                  {point.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
