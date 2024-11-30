"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar";
import LoanSummaryPage from "./components/loanSummary";
import LoanGuidePage from "./components/noLoan";
import { useSession } from "next-auth/react";

export default function TrackerPage() {
  const [isTrackerView, setIsTrackerView] = useState(true);
  const { data: session } = useSession();
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-48 px-10 py-8 bg-gray-100 min-h-screen">
        <header className="mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            Welcome, {session ? session?.user?.name : "User"}!
          </h1>

          {/* Enhanced Switch */}
          <div className="flex items-center">
            <div className="relative flex items-center">
              <span
                className={`text-sm font-medium mr-4 transition ${
                  isTrackerView ? "text-blue-500" : "text-gray-400"
                }`}
              >
                Tracker View
              </span>
              <button
                className="relative w-16 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 shadow-inner focus:outline-none"
                onClick={() => setIsTrackerView((prev) => !prev)}
              >
                <div
                  className={`absolute w-7 h-7 bg-white rounded-full shadow-md top-0.5 transition-transform transform ${
                    isTrackerView
                      ? "translate-x-0 bg-blue-500"
                      : "translate-x-8 bg-green-500"
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    isTrackerView
                      ? "bg-blue-300 bg-opacity-10"
                      : "bg-green-300 bg-opacity-10"
                  }`}
                ></div>
              </button>
              <span
                className={`text-sm font-medium ml-4 transition ${
                  isTrackerView ? "text-gray-400" : "text-green-500"
                }`}
              >
                Loan Guide
              </span>
            </div>
          </div>
        </header>

        {/* Conditional Rendering */}
        {isTrackerView ? <LoanSummaryPage /> : <LoanGuidePage />}
      </div>
    </>
  );
}
