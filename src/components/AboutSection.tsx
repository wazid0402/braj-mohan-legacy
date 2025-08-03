import bridgeImage from "@/assets/bridge-construction.jpg";

import React from "react";

// Main App component
const AboutSection = () => {
  return (
    <div className="min-h-screen-1 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 md:p-8 font-['Inter']">
      <AboutBMD />
    </div>
  );
};

// The About BMD component, containing all the content
const AboutBMD = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-7.8xl w-full flex flex-col lg:flex-row transform transition-all duration-500 hover:scale-[1.01]">
      {/* Content Section */}
      <div className="p-8 sm:p-12 lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          About BMD
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
          Braj Mohan Developers Pvt. Ltd. founded in 1999 in Patna, Bihar, is a
          multidisciplinary infrastructure and development firm with more than
          25 years of experience. The organization is renowned for producing
          top-notch civil projects, such as bridges, roads, and real estate
          developments, all over India.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Its services include manpower, security, interior and exterior,
          constructions, and power sector.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 relative p-4 sm:p-8 lg:p-0">
        <img
          src={bridgeImage}
          alt="An impressive infrastructure project with a large bridge."
          className="w-full h-full object-cover rounded-2xl lg:rounded-l-none transform transition-transform duration-500 hover:scale-105 shadow-xl"
          onError={(e) => {
            e.target.onerror = null; // prevents infinite loop
            e.target.src =
              "https://placehold.co/1200x800/e2e8f0/2d3748?text=Image+Not+Found";
          }}
        />
        <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-2xl lg:rounded-l-none"></div>
      </div>
    </div>
  );
};

export default AboutSection;
