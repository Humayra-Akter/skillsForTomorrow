import React from "react";

const benefitsData = [
  "Interactive Live Classes-ইন্টার‍্যাক্টিভ লাইভ ক্লাস",
  "Instant Class Quizzes-ইনস্ট্যান্ট ক্লাস কুইজ",
  "Question Answer Session at the End of Class-ক্লাস শেষে প্রশ্ন-উত্তর পর্ব",
  "Full Syllabus Coverage-ফুল সিলেবাস কভার",
  "Regular Homework-নিয়মিত হোমওয়ার্ক",
  "Written Exams-লিখিত পরীক্ষা",
  "Study Material-স্টাডি ম্যাটেরিয়াল",
  "Lecture Sheet-লেকচার শিট",
  "Chapter wise Evaluation-অধ্যায় ভিত্তিক মূল্যায়ন",
  "Problem Solving-সমস্যার সমাধান",
  "Progress Report-প্রোগ্রেস রিপোর্ট",
  "Parents Meeting-প্যারেন্টস মিটিং",
  "Demo Assignment-ডেমো অ্যাসাইনমেন্ট",
];

const AllBenefits = () => {
  const chunkedBenefits = chunkArray(benefitsData, [4, 5, 4]);

  return (
    <div className="mt-28">
      <h1 className="text-3xl font-bold mb-10 text-center text-primary">
        Our System
      </h1>
      <div className="grid lg:grid-cols-3 mx-28 justify-center ">
        {chunkedBenefits.map((chunk, index) => (
          <div key={index} className="m-4">
            {chunk.map((benefit, idx) => {
              const [english, bangla] = benefit.split("-");
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-r from-pink-200 to-yellow-100 text-black text-center rounded-md p-4 mb-4 shadow-md"
                >
                  <p className="text-primary font-bold">{english}</p>
                  <p>{bangla}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to chunk array into smaller arrays
function chunkArray(arr, sizes) {
  const chunkedArr = [];
  let index = 0;

  for (const size of sizes) {
    chunkedArr.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArr;
}

export default AllBenefits;
