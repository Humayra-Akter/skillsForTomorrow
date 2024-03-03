import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../images/bg.png";
import login from "../images/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "instructor",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedInUser", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <div className="grid grid-cols-2">
      <div className="mx-auto my-24 max-w-xl">
        <div
          className="w-auto h-auto rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        >
          <div className="card bg-transparent border-primary border-4 shadow-xl">
            <div className="card-body">
              <h1
                style={{ fontFamily: "arial" }}
                className="text-center text-2xl text-white font-extrabold"
              >
                Login
              </h1>
              <form onSubmit={handleLogin}>
                <div className="my-4">
                  <label htmlFor="email" className="text-white font-bold">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input input-sm input-bordered w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="password" className="text-white font-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input input-sm input-bordered w-full"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="userType" className="text-white font-bold">
                    User Type:
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="input input-sm input-bordered w-full"
                  >
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className="btn btn-sm text-xs w-full bg-primary hover:bg-secondary hover:text-black text-white font-bold"
                  >
                    Login
                  </button>
                  <p className="text-center mt-4">
                    <small className="text-purple-50 font-semibold">
                      Don't have an account?
                      <Link className="text-white" to="/register">
                        Register
                      </Link>
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={login} />
      </div>
    </div>
  );
};

export default Login;
