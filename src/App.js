import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About/About";
import FreeFeatures from "./components/Features/FreeFeatures";
import ApplyForJob from "./components/Features/ApplyForJob";
import BuyerSpecialBasicComputer from "./components/Features/BuyerSpecialBasicComputer";
import InstructorDashboard from "./components/SellerDashboard/InstructorDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import YourNotes from "./components/Dashboard/YourNotes";
import AddClasses from "./components/SellerDashboard/AddClasses";
import AllInstructors from "./components/SellerDashboard/AllInstructors";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/applyForJob/:jobId" element={<ApplyForJob />} />

        <Route path="/instructorDashboard" element={<InstructorDashboard />} />
        {/* instructor dashboard  */}
        <Route path="/instructorDashboard" element={<InstructorDashboard />}>
          <Route index element={<AddClasses />}></Route>
          <Route path="allInstructors" element={<AllInstructors />}></Route>
        </Route>

        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/yourNotes" element={<YourNotes />} />

        <Route path="/freeFeatures" element={<FreeFeatures />} />

        <Route path="/basic_computer" element={<BuyerSpecialBasicComputer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
