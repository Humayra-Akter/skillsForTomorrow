import React, { useState } from "react";

const AddClasses = () => {
  const [module, setModule] = useState("");
  const [submodule, setSubmodule] = useState("");
  const [level, setLevel] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [notePDF, setNotePDF] = useState("");
  const [quizURL, setQuizURL] = useState("");
  const [practiceURL, setPracticeURL] = useState("");
  const [schedule, setSchedule] = useState("");
  const [days, setDays] = useState([]);

  const handleModuleChange = (e) => {
    setModule(e.target.value);
  };

  const handleSubmoduleChange = (e) => {
    setSubmodule(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleVideoURLChange = (e) => {
    setVideoURL(e.target.value);
  };

  const handleNotePDFChange = (e) => {
    setNotePDF(e.target.value);
  };

  const handleQuizURLChange = (e) => {
    setQuizURL(e.target.value);
  };

  const handlePracticeURLChange = (e) => {
    setPracticeURL(e.target.value);
  };

  const handleScheduleChange = (e) => {
    setSchedule(e.target.value);
  };

  const handleDayChange = (e) => {
    const day = e.target.value;
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      module,
      submodule,
      level,
      videoURL,
      notePDF,
      quizURL,
      practiceURL,
      schedule,
      days,
    });
    // Reset form fields after submission
    setModule("");
    setSubmodule("");
    setLevel("");
    setVideoURL("");
    setNotePDF("");
    setQuizURL("");
    setPracticeURL("");
    setSchedule("");
    setDays([]);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-4xl mx-auto border-2 bg-white rounded-md shadow-lg my-8 p-4">
        <h2 className="text-2xl mb-4 text-center text-primary font-bold">
          Add Classes
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="module"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Module
            </label>
            <select
              id="module"
              value={module}
              onChange={handleModuleChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">Select Module</option>
              <option value="Cooking">Cooking</option>
              <option value="Basic_Computer">Basic Computer</option>
              <option value="Art_And_Craft">Art And Craft</option>
              <option value="Hairdressing_And_Beauty_Therapy">
                Hairdressing And Beauty Therapy
              </option>
              <option value="Electrical_And_Plumbing_Skills">
                Electrical And Plumbing Skills
              </option>
              <option value="Entrepreneurship_And_Financial_Literacy">
                Entrepreneurship And Financial Literacy{" "}
              </option>
              <option value="Tailoring_And_Sewing">Tailoring And Sewing</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="submodule"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Submodule
            </label>
            <input
              type="text"
              id="submodule"
              value={submodule}
              onChange={handleSubmoduleChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Level
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="beginner"
                  checked={level === "beginner"}
                  onChange={handleLevelChange}
                  className="form-radio text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Beginner</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  value="advanced"
                  checked={level === "advanced"}
                  onChange={handleLevelChange}
                  className="form-radio text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Advanced</span>
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="videoURL"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Video URL
            </label>
            <input
              type="text"
              id="videoURL"
              value={videoURL}
              onChange={handleVideoURLChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="notePDF"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Note PDF
            </label>
            <input
              type="text"
              id="notePDF"
              value={notePDF}
              onChange={handleNotePDFChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="quizURL"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Quiz URL
            </label>
            <input
              type="text"
              id="quizURL"
              value={quizURL}
              onChange={handleQuizURLChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="practiceURL"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Practice URL
            </label>
            <input
              type="text"
              id="practiceURL"
              value={practiceURL}
              onChange={handlePracticeURLChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label
              htmlFor="schedule"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Class Schedule
            </label>
            <input
              type="text"
              id="schedule"
              value={schedule}
              onChange={handleScheduleChange}
              className="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Days
            </label>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Saturday"
                  checked={days.includes("Saturday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Saturday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Sunday"
                  checked={days.includes("Sunday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Sunday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Monday"
                  checked={days.includes("Monday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Monday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Tuesday"
                  checked={days.includes("Tuesday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Tuesday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Wednesday"
                  checked={days.includes("Wednesday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Wednesday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Thursday"
                  checked={days.includes("Thursday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Thursday</span>
              </label>{" "}
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Friday"
                  checked={days.includes("Friday")}
                  onChange={handleDayChange}
                  className="form-checkbox text-primary focus:outline-none focus:shadow-outline"
                />
                <span className="ml-2">Friday</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
