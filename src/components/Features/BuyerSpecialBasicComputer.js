import React, { useEffect, useState } from "react";

const BuyerSpecialBasicComputer = () => {
  const [wordClasses, setWordClasses] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const { userType } = loggedInUser || {};

  useEffect(() => {
    fetch("./basicComputer.json")
      .then((res) => res.json())
      .then((data) => {
        setWordClasses(data.basic_computer.word.details);
      });
  }, []);

  return (
    <div className="mx-32 my-8">
      {Object.keys(wordClasses).map((level, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl mb-4 mt-10 text-primary capitalize font-bold">
            {level} Level
          </h2>
          <div className=" grid grid-cols-3 gap-10">
            {Object.keys(wordClasses[level]).map((classNum, i) => (
              <div
                key={i}
                className="bg-emerald-50 border-2 rounded-lg shadow-md p-6 mb-6"
              >
                <h3 className="text-lg mb-2 font-semibold">Class {classNum}</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    title={`Class ${classNum}`}
                    src={wordClasses[level][classNum].vdo}
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <p className="text-black">
                    Notes: {wordClasses[level][classNum].notes}
                  </p>
                  <p className="text-black">
                    Quiz:{" "}
                    <a
                      href={wordClasses[level][classNum].quiz}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Attempt Quiz
                    </a>
                  </p>
                  <p className="text-black">
                    Practice:{" "}
                    <a
                      href={wordClasses[level][classNum].practice}
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Practice Exercises
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerSpecialBasicComputer;
