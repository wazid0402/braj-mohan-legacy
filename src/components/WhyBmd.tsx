import React from "react";

const WhyBmd = () => {
  // Array of data points from the image.
  // Each object contains a title, a value, and an optional description.
  const statsData = [
    { title: "Smart Meter Installed", value: "1+ Million" },
    { title: "Households Solarized", value: "5000+" },
    { title: "Tons of CO2 Emission Avoided", value: "1 Million+" },
    { title: "Government Building Renovations", value: "500+" },
    { title: "Skilled Manpower Supplied", value: "1000+" },
    {
      title: "Remote Monitoring",
      value: "24*7",
      description: "Enabled for 90% of Installations",
    },
    { title: "Government Building Constructed", value: "250+" },
    { title: "Technicians Trained in Solar Installation", value: "200+" },
    { title: "Solar Installations", value: "2+ Megawatt" },
    { title: "of Cumulative Experience", value: "26+ Years" },
    {
      title: "Customers Rated our service with an",
      value: "10000+",
      description: "Average 4.32*/5 on Service Satisfaction Parameters",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center font-sans">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-center text-primary mb-12">
              WHY BMD?
            </h1>
          </div>
        </div>

        {/* The grid of data cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-blue-300 flex flex-col justify-center text-center"
            >
              {/* Value with a large, bold font */}
              <h3 className="text-4xl md:text-3xl font-black text-blue-600 mb-2">
                {stat.value}
              </h3>
              {/* Title with a smaller, bold font */}
              <p className="text-base md:text-lg font-semibold text-gray-700 leading-tight">
                {stat.title}
              </p>
              {/* Optional description, if it exists */}
              {stat.description && (
                <p className="mt-2 text-sm text-gray-500 font-medium">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBmd;
