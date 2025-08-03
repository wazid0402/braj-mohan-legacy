import React from "react";
import {
  ShieldCheck,
  Star,
  Brush,
  Lightbulb,
  Users,
  Building,
} from "lucide-react";

// This is the main App component that renders the entire page.
const ValuesSection = () => {
  // Define the core values data as an array of objects.
  const coreValues = [
    {
      title: "Building with Integrity",
      description:
        "Maintain integrity, openness, and moral business conduct in all of your endeavors to gain the enduring trust of your clients, partners, and communities.",
      icon: ShieldCheck,
    },
    {
      title: "Exceeding Expectations",
      description:
        "Deliver outstanding quality, on-time execution, and client-focused solutions that inspire confidence by going above and beyond the call of duty.",
      icon: Star,
    },
    {
      title: "Balancing Creativity and Precision",
      description:
        "Combine engineering precision with architectural vision to make sure every structure honors the environment, science, and aesthetics.",
      icon: Brush,
    },
    {
      title: "Setting New Standards",
      description:
        "Respect the most recent industry standards while working to rethink efficiency, safety, and quality in infrastructure development and construction.",
      icon: Lightbulb,
    },
    {
      title: "Empowering People",
      description:
        "Create an environment at work that values leadership, skill development, and overall development so that each team member can make a significant contribution to the success of the group.",
      icon: Users,
    },
  ];

  return (
    // The main container for the entire page, with a linear gradient background.
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-sans text-gray-900">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        {/* Header Section */}
        <header className="mb-12 flex flex-col items-center justify-center text-center">
          {/* A simple placeholder for the DMD logo */}
          {/* The main title of the page, matching the image content */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            CORE VALUES
          </h1>
          {/* A subtitle for added context */}
          <p className="mt-4 max-w-2xl text-lg text-slate-700 md:text-xl">
            Guiding principles that define our culture and commitment to
            excellence.
          </p>
        </header>

        {/* Core Values Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => {
            const IconComponent = value.icon; // Get the icon component from the data
            return (
              // Each core value is a card with a custom linear gradient background and text color adjustments.
              <div
                key={index}
                className="transform rounded-3xl p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 163, 173, 0.85) 0%, rgba(0, 123, 145, 0.65) 100%)",
                }}
              >
                <div className="mb-4 flex items-center">
                  {/* Icon for the core value, with a vibrant color and white background for contrast */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-2 text-cyan-600">
                    <IconComponent size={24} strokeWidth={2.5} />
                  </div>
                  {/* Title of the core value with white text for readability */}
                  <h3 className="ml-4 text-2xl font-bold text-white">
                    {value.title}
                  </h3>
                </div>
                {/* Description of the core value with light gray text for readability */}
                <p className="mt-4 text-gray-200">{value.description}</p>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default ValuesSection;
