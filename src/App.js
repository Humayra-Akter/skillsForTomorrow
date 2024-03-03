import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About/About";
import FreeFeatures from "./components/Features/FreeFeatures";
import ApplyForJob from "./components/Features/ApplyForJob";
import BuyerSpecialEducationalInstitution from "./components/Features/BuyerSpecialEducationalInstitution";
import EducationalInstitution from "./components/Features/EducationalInstitution";

function App() {
  return (
    <div className="bg-pink-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/applyForJob/:jobId" element={<ApplyForJob />} />
        <Route path="/freeFeatures" element={<FreeFeatures />} />
        <Route
          path="/educationalInstitutions"
          element={<EducationalInstitution />}
        />
        <Route
          path="/buyerSpecialEducationalInstitutions"
          element={<BuyerSpecialEducationalInstitution />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
