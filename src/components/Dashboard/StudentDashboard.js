import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/8.jpg";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const StudentDashboard = () => {
  // Sample data for courses and graphs
  const courses = [
    { name: "Tailoring and Sewing", progress: 70 },
    { name: "Cooking", progress: 50 },
    { name: "Basic Computer", progress: 80 },
    { name: "Art and Craft", progress: 60 },
  ];

  const quizResultData = [
    { name: "Quiz 1", score: 80 },
    { name: "Quiz 2", score: 70 },
    { name: "Quiz 3", score: 90 },
    { name: "Quiz 4", score: 85 },
  ];

  const classPerformanceData = [
    { name: "Class 1", attendance: 90 },
    { name: "Class 2", attendance: 85 },
    { name: "Class 3", attendance: 95 },
    { name: "Class 4", attendance: 80 },
  ];

  const schedule = [
    { time: "10:00 AM", class: "Tailoring and Sewing", day: 7 },
    { time: "2:00 PM", class: "Cooking", day: 9 },
    { time: "4:00 PM", class: "Basic Computer", day: 12 },
  ];
  const missedSchedule = [
    { time: "10:00 AM", class: "Tailoring and Sewing", day: 6 },
    { time: "4:00 PM", class: "Basic Computer", day: 1 },
  ];

  const getBackgroundColor = (day) => {
    switch (day % 7) {
      case 0:
        return "bg-red-200"; // Sunday
      case 1:
        return "bg-blue-200"; // Monday
      case 2:
        return "bg-green-200"; // Tuesday
      case 3:
        return "bg-yellow-200"; // Wednesday
      case 4:
        return "bg-purple-200"; // Thursday
      case 5:
        return "bg-pink-200"; // Friday
      case 6:
        return "bg-indigo-200"; // Saturday
      default:
        return "";
    }
  };

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f0e"]; // Define colors array

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        {/* Avatar and name */}
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4">
            <img
              src={avatar}
              className="w-16 h-16 bg-gray-300 rounded-full mr-4"
            />
          </div>
          <h1 className="text-xl font-bold">Rahim Uddin</h1>
        </div>

        {/* Percentage counter */}
        <div className="flex items-center">
          <div className="w-12 h-12 border-2 border-gray-200 rounded-full mr-4 relative">
            <div
              className="absolute w-full h-full rounded-full bg-blue-500"
              style={{
                width: "70%",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-full bg-green-500"
              style={{
                width: "50%",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-full bg-yellow-500"
              style={{
                width: "80%",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div
              className="absolute w-full h-full rounded-full bg-red-500"
              style={{
                width: "60%",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            ></div>
            <div className="absolute w-full h-full flex items-center justify-center">
              <p className="text-2xl font-bold">70%</p>
            </div>
          </div>
          <p className="text-lg font-semibold">Overall Progress</p>
        </div>
      </div>
      {/* Cards for courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-28">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-${
              index + 1 === 1
                ? "blue"
                : index + 1 === 2
                ? "green"
                : index + 1 === 3
                ? "yellow"
                : "red"
            }-500 text-white rounded-lg p-4`}
          >
            <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
            <p className="text-sm">Progress: {course.progress}%</p>
          </div>
        ))}
      </div>
      {/* Graphs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-28">
        {/* Pie chart */}
        <div>
          <h2 className="text-lg text-center text-primary font-bold mb-4">
            Quiz Result
          </h2>
          <PieChart width={400} height={400}>
            <Pie dataKey="score" data={quizResultData} label>
              {quizResultData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Bar chart */}
        <div>
          <h2 className="text-lg text-center text-primary font-bold  mb-4">
            Class Performance
          </h2>
          <BarChart width={400} height={400} data={classPerformanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="attendance" fill="#8884d8">
              {classPerformanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* Line chart */}
        <div>
          <h2 className="text-lg text-center text-primary font-bold mb-4">
            Quiz Result
          </h2>
          <LineChart width={400} height={400} data={quizResultData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-gray-100 p-4 rounded-lg mb-28">
        <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
        <div className="grid grid-cols-7 gap-1">
          <div className="text-center bg-red-200 font-semibold">Sun</div>
          <div className="text-center bg-orange-200 font-semibold">Mon</div>
          <div className="text-center bg-teal-200 font-semibold">Tue</div>
          <div className="text-center bg-fuchsia-200 font-semibold">Wed</div>
          <div className="text-center bg-emerald-200 font-semibold">Thu</div>
          <div className="text-center bg-lime-200 font-semibold">Fri</div>
          <div className="text-center bg-amber-200 font-semibold">Sat</div>
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <div
              key={day}
              className={`p-2 rounded-md ${
                schedule.some((item) => item.day === day)
                  ? getBackgroundColor(day)
                  : ""
              }`}
            >
              <p className="font-semibold">{day}</p>
              {schedule
                .filter((item) => item.day === day)
                .map((item, index) => (
                  <p key={index} className="text-xs">
                    {item.time} - {item.class}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-28">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Attendance History</h2>
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-2 bg-green-200 p-2 rounded-md"
            >
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <p>
                {item.time} - {item.class}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Missed Classes History</h2>
          {missedSchedule.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-2 bg-red-200 p-2 rounded-md"
            >
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <p>
                {item.time} - {item.class}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Your Notes */}
      <div className="bg-gray-100 p-4 rounded-lg mb-28">
        <h2 className="text-lg font-semibold mb-4">Your Notes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add cards for notes */}
          {/* Example:  */}
          <Link to="/yourNotes">
            {" "}
            <div className="bg-pink-400 text-white rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-2">
                {" "}
                Microsoft Word Class Notes
              </h2>
              <p className="text-sm">Content of Word class notes</p>
              <p className="text-sm">Content of note 1</p>{" "}
            </div>
          </Link>{" "}
          <div className="bg-amber-500 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              {" "}
              Microsoft Word Class Notes
            </h2>
            <p className="text-sm">Content of Word class notes</p>
            <p className="text-sm">Content of note 2</p>{" "}
          </div>{" "}
          <div className="bg-purple-500 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              {" "}
              Microsoft Word Class Notes
            </h2>
            <p className="text-sm">Content of Word class notes</p>
            <p className="text-sm">Content of note 3</p>
          </div>
          <div className="bg-blue-500 text-white rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Microsoft Word Class Notes
            </h2>
            <p className="text-sm">Content of Word class notes</p>
            <p className="text-sm">Content of note 4</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;