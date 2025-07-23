const ValuesSection = () => {
  const values = [
    "Building with Integrity",
    "Exceeding Expectations", 
    "Balancing Creativity and Precision",
    "Setting New Standards",
    "Empowering People"
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12">Core Values</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-primary-foreground/10 px-6 py-4 rounded-full border border-accent/30 hover:bg-accent/10 transition-all duration-300"
            >
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-primary-foreground font-medium text-lg">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;