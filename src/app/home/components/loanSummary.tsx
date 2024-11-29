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
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const loanData = [
  {
    id: 1,
    type: "Home Loan",
    bank: "HDFC Bank",
    principal: 1000000,
    emi: 8334,
    startDate: "2023-01-01",
    endDate: "2043-01-01",
    rateType: "Floating",
    underlineRate: 8,
    lastRevisionDate: "2023-07-01",
  },
  {
    id: 2,
    type: "Car Loan",
    bank: "ICICI Bank",
    principal: 500000,
    emi: 10834,
    startDate: "2022-01-01",
    endDate: "2027-01-01",
    rateType: "Floating",
    underlineRate: 9,
    lastRevisionDate: "2023-06-01",
  },
];

export default function LoanSummaryPage() {
  const [selectedLoan, setSelectedLoan] = useState<(typeof loanData)[0] | null>(
    null
  );
  const [newRate, setNewRate] = useState<number | null>(null);

  const calculateTotalInterest = (loan: (typeof loanData)[0]) => {
    const totalMonths =
      (new Date(loan.endDate).getTime() - new Date(loan.startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 30);
    return loan.emi * totalMonths - loan.principal;
  };

  const calculateAmountPaid = (loan: (typeof loanData)[0]) => {
    const monthsPaid =
      (new Date().getTime() - new Date(loan.startDate).getTime()) /
      (1000 * 60 * 60 * 24 * 30);
    return Math.min(monthsPaid * loan.emi, loan.emi * 240);
  };

  const calculateAmountYetToBePaid = (loan: (typeof loanData)[0]) => {
    return (
      loan.principal + calculateTotalInterest(loan) - calculateAmountPaid(loan)
    );
  };

  const totalLoanAmount = loanData.reduce(
    (acc, loan) => acc + loan.principal,
    0
  );

  const totalInterestAmount = loanData.reduce(
    (acc, loan) => acc + calculateTotalInterest(loan),
    0
  );

  const totalAmountPaid = loanData.reduce(
    (acc, loan) => acc + calculateAmountPaid(loan),
    0
  );

  const totalAmountYetToBePaid = loanData.reduce(
    (acc, loan) => acc + calculateAmountYetToBePaid(loan),
    0
  );

  const calculateNewEMI = (loan: (typeof loanData)[0], newRate: number) => {
    const remainingMonths =
      (new Date(loan.endDate).getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24 * 30);
    const r = newRate / 12 / 100; // Monthly interest rate
    const p = loan.principal;
    return (
      (p * r * Math.pow(1 + r, remainingMonths)) /
      (Math.pow(1 + r, remainingMonths) - 1)
    ).toFixed(2);
  };

  const generateGraphData = (): ChartData<
    "bar",
    (string | number)[],
    string
  > => {
    if (!selectedLoan || !newRate) return { labels: [], datasets: [] };

    const initialEMI = selectedLoan.emi;
    const revisedEMI = calculateNewEMI(selectedLoan, newRate);

    return {
      labels: ["Initial EMI", "Revised EMI"],
      datasets: [
        {
          label: "Monthly EMI (₹)",
          data: [initialEMI, revisedEMI],
          backgroundColor: ["#4caf50", "#ff9800"],
        },
      ],
    };
  };

  const graphData = generateGraphData();

  return (
    <div className="px-10 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Loan Summary</h1>

      {/* Total Loan Summary Section */}
      <section className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Total Loan Amount</h2>
            <p className="text-2xl font-bold text-gray-700">
              ₹{totalLoanAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Total Interest</h2>
            <p className="text-2xl font-bold text-gray-700">
              ₹{totalInterestAmount.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">Amount Paid Till Now</h2>
            <p className="text-2xl font-bold text-gray-700">
              ₹{totalAmountPaid.toLocaleString()}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4">
              Amount Yet to Be Paid
            </h2>
            <p className="text-2xl font-bold text-gray-700">
              ₹{totalAmountYetToBePaid.toLocaleString()}
            </p>
          </div>
        </div>
      </section>

      {/* Loan Selection Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Select a Loan</h2>
        <select
          className="w-full p-3 border rounded-md mb-6"
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

      {/* Loan Details Section */}
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

      {/* EMI Calculator Section */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">EMI Calculator</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-2 font-medium">
              Enter New Interest Rate (%)
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-md mb-4"
              placeholder="Enter new interest rate"
              onChange={(e) => setNewRate(Number(e.target.value))}
            />
            {newRate && (
              <p>
                <strong>Revised EMI:</strong> ₹
                {calculateNewEMI(selectedLoan, newRate).toLocaleString()}
              </p>
            )}
          </div>
        </section>
      )}

      {/* EMI Graph Section */}
      {graphData.labels && graphData.labels.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">EMI Comparison</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={graphData} options={{ responsive: true }} />
          </div>
        </section>
      )}
    </div>
  );
}
