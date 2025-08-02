import React from "react";

// Import your team member images here.
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Banty Kumar",
      position: "Managing Director",
      image: "/images/banty-kumar.jpg",
    },
    {
      name: "Aditya Raj",
      position: "Project Director, Solar",
      image: "/images/aditya-raj.jpg",
    },
    {
      name: "Sunil Sharma",
      position: "Project Manager, Civil",
      image: "/images/sunil-sharma.jpg",
    },
    {
      name: "Sourav Suman",
      position: "Finance Manager",
      image: "/images/sourav-suman.jpg",
    },
    {
      name: "Bal Krishna",
      position: "Project Manager, Electricals",
      image: "/images/bal-krishna.jpg",
    },
    {
      name: "Rishu Ranjan Kumar",
      position: "Civil Engineer",
      image: "/images/rishu-ranjan-kumar.jpg",
    },
    {
      name: "Kajal Vishwakarma",
      position: "MIS Operator",
      image: "/images/kajal-vishwakarma.jpg",
    },
    {
      name: "Gyan Jyoti",
      position: "HR Manager",
      image: "/images/gyan-jyoti.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-corporate text-center hover:shadow-gold transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-accent font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
