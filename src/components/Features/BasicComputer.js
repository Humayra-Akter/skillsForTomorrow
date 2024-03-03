import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BasicComputer = () => {
  const [classesData, setClassesData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./basicComputer.json")
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data.basic_computer);
      });
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const redirectToBuyerSpecialBasicComputer = () => {
    if (loggedInUser && loggedInUser.userType === "buyer") {
      navigate("/buyerSpecialBasicComputer");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="items-center justify-center flex mt-10">
        <button
          className="bg-primary text-white text-sm p-1 rounded-lg w-40 text-center font-semibold"
          onClick={redirectToBuyerSpecialBasicComputer}
        >
          View Details
        </button>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-md my-8">
        {Object.keys(classesData).map((courseName) => (
          <div key={courseName} className="p-4">
            <h2 className="text-xl font-semibold text-primary mb-4">
              {courseName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.keys(classesData[courseName]).map((level) => (
                <div
                  key={level}
                  className="bg-gray-100 p-4 rounded-md shadow-md"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {level}
                  </h3>
                  <p className="text-sm mb-2">
                    Video: {classesData[courseName][level].vdo}
                  </p>
                  <p className="text-sm mb-2">
                    Notes: {classesData[courseName][level].notes}
                  </p>
                  <p className="text-sm mb-2">
                    Quiz: {classesData[courseName][level].quiz}
                  </p>
                  <p className="text-sm">
                    Practice: {classesData[courseName][level].practice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicComputer;
