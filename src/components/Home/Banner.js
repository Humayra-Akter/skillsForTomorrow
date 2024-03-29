import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

const Banner = () => {
  const [jobAnnouncements, setJobAnnouncements] = useState([]);
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const redirectToAllJobs = () => {
    if (loggedInUser && loggedInUser.userType === "instructor") {
      navigate("/allJobs");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    fetch("./banner.json")
      .then((res) => res.json())
      .then((data) => setJobAnnouncements(data.banner || []));
  }, []);

  const renderJobAnnouncements = () => {
    return jobAnnouncements.map((job) => (
      <div key={job.id} className="relative">
        <div
          className="w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${job.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
            <p className="text-lg mb-4">{job.subtitle}</p>
            <p className="text-base">Location: {job.cta.text}</p>

            {loggedInUser ? (
              <Link
                to="/allJobs"
                className="bg-primary text-white px-4 py-2 rounded-md inline-block mt-4"
              >
                See All
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-primary text-white px-4 py-2 rounded-md inline-block mt-4"
              >
                See All
              </Link>
            )}
          </div>
        </div>
      </div>
    ));
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-xl mt-8 mx-auto">
      <Slider {...carouselSettings}>{renderJobAnnouncements()}</Slider>
    </div>
  );
};

export default Banner;
