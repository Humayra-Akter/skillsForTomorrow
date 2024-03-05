import React from "react";
import ins1 from "../../images/ins1.jpg";
import ins2 from "../../images/ins2.jpg";
import ins3 from "../../images/ins3.jpg";
import ins4 from "../../images/ins4.jpg";
import ins5 from "../../images/ins5.jpg";

const AllInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Humayra Akter",
      designation: "Chef Instructor",
      location: "Puran Dhaka, Dhaka",
      module: "Cooking",
      speciality: "French Cuisine",
      education: "Culinary Arts Degree",
      classesTaken: 10,
      rating: 4.5,
      feedback: 98,
      image: ins1,
    },
    {
      id: 2,
      name: "Aunindya Prosad Shaha",
      designation: "IT Trainer",
      location: "Bidda niketon, Rajshahi",
      module: "Basic Computer",
      speciality: "Web Development",
      education: "Computer Science Degree",
      classesTaken: 15,
      rating: 4.8,
      feedback: 120,
      image: ins2,
    },
    {
      id: 3,
      name: "Maisha Tabassum",
      designation: "Art Instructor",
      location: "Jamuna par, Cumilla",
      module: "Art and Craft",
      speciality: "Oil Painting",
      education: "Fine Arts Degree",
      classesTaken: 8,
      rating: 4.6,
      feedback: 90,
      image: ins3,
    },
    {
      id: 4,
      name: "Fahmida Sultana",
      designation: "Beauty Therapist",
      location: "Shagordari, Joshor",
      module: "Hairdressing and Beauty Therapy",
      speciality: "Skin Care",
      education: "Cosmetology Diploma",
      classesTaken: 12,
      rating: 4.7,
      feedback: 110,
      image: ins4,
    },
    {
      id: 5,
      name: "Istiaque Ahmed Arik",
      designation: "Plumbing Instructor",
      location: "Amtola, Dhaka",
      module: "Electrical and Plumbing Skills",
      speciality: "Water Systems",
      education: "Plumbing Certification",
      classesTaken: 6,
      rating: 4.4,
      feedback: 80,
      image: ins5,
    },
  ];

  const getRandomImage = () => {
    const images = [ins1, ins2, ins3, ins4, ins5];
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      {instructors.map((instructor) => (
        <div
          key={instructor.id}
          className="border-2 border-gray-200 bg-white shadow-lg rounded-lg p-4 m-4"
        >
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={instructor?.image}
              alt={instructor.name}
            />
            <div>
              <div className="font-bold text-lg">{instructor.name}</div>
              <p className="text-sm text-gray-700">{instructor.designation}</p>
              <p className="text-sm text-gray-700">{instructor.location}</p>
              <p className="text-sm text-gray-700">
                Module: {instructor.module}
              </p>
              <p className="text-sm text-gray-700">
                Speciality: {instructor.speciality}
              </p>
              <p className="text-sm text-gray-700">
                Education: {instructor.education}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">
              Classes Taken: {instructor.classesTaken}
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
              Rating: {instructor.rating}
            </span>
            <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700">
              Feedback: {instructor.feedback}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllInstructors;
