import React from "react";
import { FaCircle } from "react-icons/fa";

const modules1 = {
  Cooking: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Cooking Basics",
          "Food Preparation Fundamentals",
          "Kitchen Safety",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Gourmet Cooking",
          "International Cuisine",
          "Pastry Arts",
        ],
      },
    ],
  },
  Basic_Computer: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Computer Basics",
          "Introduction to Operating Systems",
          "Word Processing",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Data Structures",
          "Web Development",
          "Networking Fundamentals",
        ],
      },
    ],
  },
};

const modules2 = {
  Art_And_Craft: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Drawing Fundamentals",
          "Painting Techniques",
          "Crafting Essentials",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Sculpture Design",
          "Mixed Media Art",
          "Textile Arts",
        ],
      },
    ],
  },
  Hairdressing_And_Beauty_Therapy: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Haircutting Basics",
          "Salon Management Fundamentals",
          "Skin Care Essentials",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Advanced Styling Techniques",
          "Aromatherapy",
          "Cosmetic Chemistry",
        ],
      },
    ],
  },
  Electrical_And_Plumbing_Skills: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Electrical Wiring Basics",
          "Plumbing Fundamentals",
          "Safety Protocols",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Renewable Energy Systems",
          "Advanced Plumbing Techniques",
          "Building Automation",
        ],
      },
    ],
  },
};

const modules3 = {
  Entrepreneurship_And_Financial_Literacy: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Business Planning",
          "Financial Management Fundamentals",
          "Marketing Essentials",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Strategic Management",
          "Investment Analysis",
          "E-Commerce Strategies",
        ],
      },
    ],
  },
  Tailoring_And_Sewing: {
    submodule: [
      {
        name: "Beginner",
        relevantCourses: [
          "Sewing Basics",
          "Pattern Making Fundamentals",
          "Fabric Selection",
        ],
      },
      {
        name: "Advanced",
        relevantCourses: [
          "Couture Techniques",
          "Advanced Draping",
          "Tailored Garment Construction",
        ],
      },
    ],
  },
};

const formatModuleName = (moduleName) => {
  return moduleName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const renderModule = (modules) => (
  <div className="container mx-auto flex justify-center mb-6">
    <div className="flex flex-wrap gap-16">
      {Object.entries(modules).map(([feature, { submodule }]) => (
        <div key={feature}>
          <div className="bg-emerald-50 border-2 rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4 text-center">
              {formatModuleName(feature)}
            </h2>
            {renderSubmoduleCards(submodule)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderSubmoduleCards = (submodule) => (
  <div className="grid grid-cols-1 gap-4">
    {submodule.map(({ name, relevantCourses }) => (
      <div
        key={name}
        className="bg-gray-100 border-2 border-gray-400\ w-96 rounded-lg p-4"
      >
        <div className="flex items-center mb-2">
          <FaCircle className="text-accent mr-2" />
          <p className="font-bold">{name}</p>
        </div>
        <ul className="list-disc ml-6">
          {relevantCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const FreeFeatures = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold text-primary mt-7 mb-16">
        Available Classes
      </h1>
      <div>
        {renderModule(modules1)}
        {renderModule(modules2)}
        {renderModule(modules3)}
      </div>
    </div>
  );
};

export default FreeFeatures;
