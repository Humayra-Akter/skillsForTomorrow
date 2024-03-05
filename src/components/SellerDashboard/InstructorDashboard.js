import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <div>
      <div className="bg-accent h-14 text-white font-bold">
        <div className="flex items-center justify-center mt-1">
          <Link to="/instructorDashboard">
            <button className="pr-10 uppercase mt-3">Add-Classes</button>
          </Link>
          <Link to="/instructorDashboard/jobAnnounce">
            <button className="uppercase mt-3">Announce-Job</button>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default InstructorDashboard;
