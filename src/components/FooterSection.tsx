import React from "react";

// Extracted data from the screenshot
const footerData = {
  logo: "BMG",
  groupName: "BRAJ MOHAN GROUP",
  tagline:
    "Building India's infrastructure for over 25 years with excellence, innovation, and integrity.",
  quickLinks: [
    { name: "About BMG", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Career Opportunities", href: "#" },
  ],
  copyright: "© 2025 Braj Mohan Group. All rights reserved.",
};

const FooterSection = () => {
  const { logo, groupName, tagline, quickLinks, copyright } = footerData;

  return (
    <footer className="bg-[#121A37] text-white p-8 md:p-16 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-600 pb-8 md:pb-12 space-y-8 md:space-y-0">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div className="flex items-center space-x-4">
              {/* This is a placeholder for a logo, assuming it's a golden circle with 'BMG' */}
              <div className="bg-[#D9A953] text-black w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg">
                {logo}
              </div>
              <span className="text-xl font-bold tracking-wide">
                {groupName}
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-sm">{tagline}</p>
          </div>

          {/* Quick Links Section */}
          <div className="md:w-1/4">
            <h3 className="text-[#D9A953] font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 text-center text-sm text-gray-500">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
