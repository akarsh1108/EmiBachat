"use client";

import Sidebar from "../../components/sidebar";
import LoanSummaryPage from "./components/loanSummary";
import LoanGuidePage from "./components/noLoan";

export default function TrackerPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-48 px-10 py-8 bg-gray-100 min-h-screen">
        <LoanGuidePage />
        <LoanSummaryPage />
      </div>
    </>
  );
}
