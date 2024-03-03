import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../images/bg.png";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomColorWithDuration = (duration) => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `color ${duration}s ease, background-color ${duration}s ease`;
};

const Modules = () => {
  const navigate = useNavigate();
  const modules = {
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
    Art_and_Craft: {
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
    Hairdressing_and_Beauty_Therapy: {
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
    Electrical_and_Plumbing_Skills: {
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
    Entrepreneurship_and_Financial_Literacy: {
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
    Tailoring_and_sewing: {
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

  const [showModules, setShowModules] = useState({});
  const [showSubmodules, setShowSubmodules] = useState({});

  const handleMouseEnter = (module) => {
    setShowModules((prev) => ({ ...prev, [module]: true }));
  };

  const handleMouseLeave = (module) => {
    setShowModules((prev) => ({ ...prev, [module]: false }));
    setShowSubmodules((prev) => ({ ...prev, [module]: null }));
  };

  const handleCourseClick = (module, submodule, course) => {
    navigate(`/freeFeatures`);
  };

  return (
    <div>
      <h2 className="text-3xl text-primary font-bold mt-20 text-center">
        Find Through Your Interest
      </h2>

      <div className="grid lg:grid-cols-3 gap-4 items-center justify-center text-center mt-10">
        {Object.keys(modules).map((module) => (
          <div
            key={module}
            className="p-4"
            onMouseEnter={() => handleMouseEnter(module)}
            onMouseLeave={() => handleMouseLeave(module)}
          >
            <div
              className="p-2 h-56 rounded-md overflow-hidden relative"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
              }}
              // style={{
              //   backgroundColor: generateRandomColor(),
              //   transition: generateRandomColorWithDuration(10),
              // }}
            >
              <button
                className={`text-black font-bold ${
                  showModules[module] ? "text-2xl" : "text-xl"
                }`}
              >
                {module}
              </button>
              {showModules[module] && (
                <div className="mt-2">
                  {modules[module].submodule.map((submodule) => (
                    <div
                      key={submodule.name}
                      className="mt-2"
                      onMouseEnter={() =>
                        setShowSubmodules((prev) => ({
                          ...prev,
                          [module]: submodule.name,
                        }))
                      }
                      onMouseLeave={() =>
                        setShowSubmodules((prev) => ({
                          ...prev,
                          [module]: null,
                        }))
                      }
                    >
                      <button className="text-gray-900 font-semibold">
                        {submodule.name}
                      </button>
                      {showSubmodules[module] === submodule.name && (
                        <div>
                          <button className="mt-2">
                            {submodule.relevantCourses.map((course) => (
                              <div
                                key={course}
                                className="mt-2 text-slate-800"
                                onClick={() =>
                                  handleCourseClick(
                                    module,
                                    submodule.name,
                                    course
                                  )
                                }
                              >
                                {course}
                              </div>
                            ))}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
