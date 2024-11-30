import React from "react";
import { useState } from "react";
import PersonalProfilePage from "./personalProfile";
import LoanPage from "./loanPage";

export default function EditProfile() {
  const [activePage, setActivePage] = useState("personal");
  return (
    <div className="pb-10 px-10 bg-gray-100 min-h-screen">
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
  );
}
