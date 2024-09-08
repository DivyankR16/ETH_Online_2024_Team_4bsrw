import React from "react";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-blue-950">
        {/* Navbar */}
        <div className="mb-2">
          {/* Navbar content goes here */}
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 mt-12">
          {/* Sidebar */}
          <div>
            {/* Sidebar content goes here */}
            <Sidebar />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Main content goes here */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
