import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import data from "./assets/projects.json";
import { BiLogoNetlify } from "react-icons/bi";
import { ImSpinner9 } from "react-icons/im";

const categories = [
  { name: "Frontend Projects", key: "frontend" },
  { name: "Backend Projects", key: "backend" },
  { name: "CSS Projects", key: "css" },
  /*{ name: "Branding", key: "branding" },*/
];

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4 italic">
        As a passionate Learner and Trainer, I'm dedicated to continuous
        Learning and Teaching on the Journey to success and fulfillment.
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform scale-100 hover:scale-105 ${
              activeTab === category.key
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab(category.key)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Image Cards */}
      <div className="grid grid-cols-3 gap-4">
        {data[activeTab].map((project, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src={project.img}
              alt={activeTab}
              className="w-full h-40 object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
            />

            {/* Icons Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => window.open(project.github, "_blank")}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300"
              >
                <FaGithub className="text-black text-xl" />
              </button>
              <button
                onClick={() => window.open(project.live, "_blank")}
                className="bg-white p-2 rounded-full hover:bg-gray-200 transition duration-300"
              >
                <BiLogoNetlify className="text-black text-xl" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-transform duration-500 transform scale-100 hover:scale-110 bg-blue-50 text-black"
          onClick={() =>
            window.open("https://github.com/jagadishgollapalli", "_blank")
          }
        >
          View More
          <span>
            <ImSpinner9 className="text-lg animate-spin" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TabbedGallery;
