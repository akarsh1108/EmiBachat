"use client";

import Sidebar from "../../components/sidebar";
import PersonalProfilePage from "./components/personalProfile";
import LoanPage from "./components/loanPage";
import { useState } from "react";

export default function ProfilePage() {
  const [activePage, setActivePage] = useState("personal"); // Track the active page

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-48 px-10 py-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        {/* Row of Tiles */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActivePage("personal")}
            className={`flex-1 py-4 text-center rounded-md shadow-md ${
              activePage === "personal"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            Personal Profile
          </button>
          <button
            onClick={() => setActivePage("loan")}
            className={`flex-1 py-4 text-center rounded-md shadow-md ${
              activePage === "loan"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            Loan Details
          </button>
        </div>

        {/* Conditionally Render Pages */}
        {activePage === "personal" && <PersonalProfilePage />}
        {activePage === "loan" && <LoanPage />}
      </div>
    </div>
  );
}
