import React, { useEffect, useState } from "react";

const BuyerSpecialBasicComputer = () => {
  const [wordClasses, setWordClasses] = useState([]);

  useEffect(() => {
    fetch("./basicComputer.json")
      .then((res) => res.json())
      .then((data) => {
        setWordClasses(data.basic_computer.word.details);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-t from-pink-50 to-red-50 rounded-md shadow-lg my-8 p-4">
      {Object.keys(wordClasses).map((level, index) => (
        <div key={index}>
          <h2 className="text-xl mb-4 mt-10 text-primary font-bold">
            {level} Level
          </h2>
          {Object.keys(wordClasses[level]).map((classNum, i) => (
            <div key={i} className="mb-6">
              <h3 className="text-lg mb-2 font-semibold">Class {classNum}</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  title={`Class ${classNum}`}
                  src={wordClasses[level][classNum].vdo}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-black mt-2 mb-1">
                Notes: {wordClasses[level][classNum].notes}
              </p>
              <p className="text-black mb-1">
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
              <p className="text-black mb-2">
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default BuyerSpecialBasicComputer;
