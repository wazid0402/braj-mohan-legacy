const StatsSection = () => {
  const stats = [
    { number: "1+", label: "Million Smart Meters Installed", icon: "⚡" },
    { number: "5000+", label: "Households Solarized", icon: "☀️" },
    { number: "26+", label: "Years of Experience", icon: "🏗️" },
    { number: "1M+", label: "Tons CO₂ Emission Avoided", icon: "🌱" }
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12">Why BMD</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-primary-foreground/10 p-6 rounded-lg border border-accent/30">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-primary-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Annual Turnover Growth Note */}
        <div className="text-center mt-12">
          <div className="bg-primary-foreground/10 p-6 rounded-lg border border-accent/30 inline-block">
            <h3 className="text-xl font-semibold text-accent mb-2">Annual Turnover Growth</h3>
            <p className="text-primary-foreground">Consistent growth over the last 3 years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;