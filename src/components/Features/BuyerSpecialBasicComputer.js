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
    <div className="max-w-4xl mx-auto bg-white rounded-md shadow-lg my-8 p-4">
      {Object.keys(wordClasses).map((level) => (
        <div key={level}>
          <h2 className="text-xl mb-2 mt-10 text-primary font-bold">{level}</h2>
          {Object.keys(wordClasses[level]).map((classNum) => (
            <div key={classNum} className="mb-4">
              <h3 className="text-lg mb-2 font-semibold">{classNum}</h3>
              <iframe
                width="100%"
                height="315"
                src={wordClasses[level][classNum].vdo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>{" "}
              <p className="text-black mb-2">
                Notes: {wordClasses[level][classNum].notes}
              </p>
              <p className="text-black mb-2">
                Quiz:{" "}
                <span className="text-blue-600 underline">
                  {wordClasses[level][classNum].quiz}
                </span>
              </p>
              <p className="text-black mb-2">
                Practice: {wordClasses[level][classNum].practice}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BuyerSpecialBasicComputer;
