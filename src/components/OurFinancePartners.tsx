import React from "react";

const OurFinancePartners = () => {
  const financePartners = [
    { name: "State Bank Of India", image: "/images/state-bank-of-india.jpg" },
    { name: "Punjab National Bank", image: "/images/punjab-national-bank.jpg" },
    { name: "Icici Bank", image: "/images/icici-bank.jpg" },
    { name: "Bank Of Baroda", image: "/images/bank-of-baroda.jpg" },
    { name: "Axis Bank", image: "/images/axis-bank.jpg" },
    { name: "Kotak Mahindra", image: "/images/kotak-mahindra.jpg" },
  ];

  return (
    <div className="bg-cover bg-center p-8">
      <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/20 p-8 rounded-xl shadow-lg">
        {/* Header section with title and BMD logo */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider bg-[#2a3044] px-4 py-2 rounded-md shadow-md">
            OUR FINANCE PARTNERS
          </h2>
        </div>

        {/* Grid for client logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {financePartners.map((client, index) => (
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

export default OurFinancePartners;
