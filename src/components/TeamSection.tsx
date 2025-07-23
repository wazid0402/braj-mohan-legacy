const TeamSection = () => {
  const teamMembers = [
    { name: "Banty Kumar", position: "Managing Director" },
    { name: "Aditya Raj", position: "Project Director, Solar" },
    { name: "Sunil Sharma", position: "Project Manager, Civil" },
    { name: "Sourav Suman", position: "Finance Manager" },
    { name: "Bal Krishna", position: "Project Manager, Electricals" },
    { name: "Rishu Ranjan Kumar", position: "Civil Engineer" },
    { name: "Kajal Vishwakarma", position: "MIS Operator" },
    { name: "Gyan Jyoti", position: "HR Manager" }
  ];

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-corporate text-center hover:shadow-gold transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{member.name}</h3>
              <p className="text-accent font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;