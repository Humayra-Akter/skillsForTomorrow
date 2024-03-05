import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const { userType } = loggedInUser || {};
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmSignOut = window.confirm("Are you sure you want to sign out?");
    if (confirmSignOut) {
      localStorage.removeItem("loggedInUser");
      // window.location.reload();
      navigate("/");
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-black font-bold">
      <div className="navbar sticky">
        <div className="navbar-start">
          <Link to="/"></Link>
        </div>

        <div className="navbar-end pr-10">
          <Link className="pr-10" to="/freeFeatures">
            <button>Classes</button>
          </Link>
          <Link className="pr-10" to="/about">
            <button>About</button>
          </Link>
          {userType === "student" && (
            <Link to="/studentDashboard">
              <button className="pr-10">Student-Dashboard</button>
            </Link>
          )}
          {userType === "instructor" && (
            <Link to="/instructorDashboard">
              <button className="pr-10">Instructor-Dashboard</button>
            </Link>
          )}
          {loggedInUser ? (
            <button className="pr-10" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <Link to="/register">
              <button className="pr-10">Register</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
