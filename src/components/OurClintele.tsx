import React from "react";

const OurClintele = () => {
  const clients = [
    { name: "Intellismart", image: "/images/intellismart.jpg" },
    { name: "G R Infra Projects", image: "/images/gr-infra-projects.jpg" },
    {
      name: "Department of Education",
      image: "/images/department-of-education.jpg",
    },
    {
      name: "South Bihar Power Distribution",
      image: "/images/south-bihar-power-distribution.jpg",
    },
    {
      name: "North Bihar Power Distribution",
      image: "/images/north-bihar-power-distribution.jpg",
    },
    {
      name: "Ministry of New & Renewable Energy",
      image: "/images/ministry-of-new-renewable-energy.jpg",
    },
    {
      name: "Energy Efficiency Services",
      image: "/images/energy-efficiency-services.jpg",
    },
    { name: "Transrail Lighting", image: "/images/transrail-lighting.jpg" },
    { name: "Tata Projects", image: "/images/tata-projects.jpg" },
    { name: "Tata Power", image: "/images/tata-power.jpg" },
    { name: "Adani Group", image: "/images/adani-group.jpg" },
    { name: "Genus", image: "/images/genus.jpg" },
    { name: "Airtel", image: "/images/airtel.jpg" },
    { name: "Godrej", image: "/images/godrej.jpg" },
    { name: "Google", image: "/images/google.jpg" },
    { name: "Secure", image: "/images/secure.jpg" },
  ];

  return (
    <div className="bg-cover bg-center min-h-screen p-8">
      <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/20 p-8 rounded-xl shadow-lg">
        {/* Header section with title and BMD logo */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider bg-[#2a3044] px-4 py-2 rounded-md shadow-md">
            Our Clientele
          </h2>
        </div>

        {/* Grid for client logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center justify-between text-center transition-transform duration-300 transform hover:scale-105"
            >
              <div className="w-full h-40 flex items-center justify-center p-2">
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-800 uppercase leading-tight">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClintele;
