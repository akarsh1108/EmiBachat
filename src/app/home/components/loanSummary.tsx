"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Loan data fetched from JSON file
const loanData = [
  {
    id: 1,
    type: "Home Loan",
    bank: "HDFC Bank",
    principal: 1000000,
    emi: 8334,
    totalInterest: 1500000,
    amountPaid: 300000,
    amountYetToBePaid: 1200000,
    startDate: "2023-01-01",
    endDate: "2043-01-01",
    underlineRate: 8,
    lastRevisionDate: "2023-07-01",
  },
  {
    id: 2,
    type: "Car Loan",
    bank: "ICICI Bank",
    principal: 500000,
    emi: 10834,
    totalInterest: 200000,
    amountPaid: 150000,
    amountYetToBePaid: 550000,
    startDate: "2022-01-01",
    endDate: "2027-01-01",
    underlineRate: 9,
    lastRevisionDate: "2023-06-01",
  },
];

export default function LoanSummaryPage() {
  const [selectedLoan, setSelectedLoan] = useState<(typeof loanData)[0] | null>(
    null
  );

  const totalLoanAmount = loanData.reduce(
    (acc, loan) => acc + loan.principal,
    0
  );

  const totalInterestAmount = loanData.reduce(
    (acc, loan) => acc + loan.totalInterest,
    0
  );

  const totalAmountPaid = loanData.reduce(
    (acc, loan) => acc + loan.amountPaid,
    0
  );

  const totalAmountYetToBePaid = loanData.reduce(
    (acc, loan) => acc + loan.amountYetToBePaid,
    0
  );

  const generateGraphData = () => {
    if (!selectedLoan) return { labels: [], datasets: [] };

    return {
      labels: ["Amount Paid", "Amount Yet to Be Paid"],
      datasets: [
        {
          label: "₹ Amount",
          data: [selectedLoan.amountPaid, selectedLoan.amountYetToBePaid],
          backgroundColor: ["#4caf50", "#ff9800"],
        },
      ],
    };
  };

  const graphData = generateGraphData();

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <p className="text-gray-500 mt-2">
          Your next payment of <span className="text-black">₹10,834</span> is
          scheduled for{" "}
          <span className="text-black font-medium">Oct 30, 2023</span>.
        </p>
      </header>

      {/* Summary Cards */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500 mb-2">Total Loan Amount</h2>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{totalLoanAmount.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500 mb-2">Total Interest</h2>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{totalInterestAmount.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500 mb-2">Amount Paid</h2>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{totalAmountPaid.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-sm text-gray-500 mb-2">Amount Yet to Be Paid</h2>
          <p className="text-2xl font-semibold text-gray-800">
            ₹{totalAmountYetToBePaid.toLocaleString()}
          </p>
        </div>
      </section>

      {/* Loan Selection */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Select a Loan</h2>
        <select
          className="w-full p-3 border rounded-md"
          onChange={(e) =>
            setSelectedLoan(
              loanData.find((loan) => loan.id === Number(e.target.value)) ||
                null
            )
          }
        >
          <option value="">-- Select a Loan --</option>
          {loanData.map((loan) => (
            <option key={loan.id} value={loan.id}>
              {loan.type} ({loan.bank})
            </option>
          ))}
        </select>
      </section>

      {/* Loan Details */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
          <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
            <p>
              <strong>Type:</strong> {selectedLoan.type}
            </p>
            <p>
              <strong>Bank:</strong> {selectedLoan.bank}
            </p>
            <p>
              <strong>Principal:</strong> ₹
              {selectedLoan.principal.toLocaleString()}
            </p>
            <p>
              <strong>EMI:</strong> ₹{selectedLoan.emi.toLocaleString()}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedLoan.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {selectedLoan.endDate}
            </p>
            <p>
              <strong>Interest Rate:</strong> {selectedLoan.underlineRate}%
            </p>
            <p>
              <strong>Last Revision Date:</strong>{" "}
              {selectedLoan.lastRevisionDate}
            </p>
          </div>
        </section>
      )}

      {/* EMI Graph */}
      {graphData.labels && graphData.labels.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Loan Payment Breakdown</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={graphData} options={{ responsive: true }} />
          </div>
        </section>
      )}
    </div>
  );
}
