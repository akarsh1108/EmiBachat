"use client";

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
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
    emiTrend: [8000, 8200, 8400, 8334],
    interestRateTrend: [7.5, 7.7, 7.9, 8.0],
    tenureMonths: 240,
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
    tenureMonths: 60,
    lastRevisionDate: "2023-06-01",
    emiTrend: [10000, 10500, 10700, 10834],
    interestRateTrend: [8.5, 8.7, 8.8, 9.0],
  },
];

const bankComparisonData = [
  {
    bank: "SBI",
    rate: 7.5,
    features: "Low processing fee, long tenure options.",
  },
  {
    bank: "Axis Bank",
    rate: 7.8,
    features: "Flexible repayment options.",
  },
  {
    bank: "Kotak Mahindra Bank",
    rate: 8.0,
    features: "Quick disbursal and cashback offers.",
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

  const calculateProjectedSavings = (loan: (typeof loanData)[0]) => {
    const fixedRate = 6; // Example fixed rate
    const savings =
      loan.totalInterest - (loan.principal * fixedRate * 20) / 100;
    return savings;
  };

  const calculateLoanTenureImpact = (loan: (typeof loanData)[0]) => {
    const prepaymentSavings = loan.totalInterest * 0.8; // Example impact
    const extendedInterest = loan.totalInterest * 1.2; // Example impact
    return { prepaymentSavings, extendedInterest };
  };

  const graphData = generateGraphData();

  const calculateRepaymentProgress = (loan: (typeof loanData)[0]) => {
    const totalAmount = loan.principal + loan.totalInterest;
    const progress = (loan.amountPaid / totalAmount) * 100;
    return Math.min(progress, 100).toFixed(2);
  };

  const generateEMITrendData = () => {
    if (!selectedLoan) return { labels: [], datasets: [] };
    return {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "EMI Trend (₹)",
          data: selectedLoan.emiTrend,
          borderColor: "#4caf50",
          backgroundColor: "#4caf50",
        },
      ],
    };
  };

  const generateInterestRateTrendData = () => {
    if (!selectedLoan) return { labels: [], datasets: [] };
    return {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Interest Rate Trend (%)",
          data: selectedLoan.interestRateTrend,
          borderColor: "#ff9800",
          backgroundColor: "#ff9800",
        },
      ],
    };
  };

  const emiTrendData = generateEMITrendData();
  const interestRateTrendData = generateInterestRateTrendData();

  // const [newRate, setNewRate] = useState<number | null>(null);
  const calculateFixedVsFloatingSavings = (currentRate: number) => {
    const fixedRate = 7.0; // Example fixed rate
    const savings = selectedLoan
      ? (currentRate - fixedRate) * 0.01 * selectedLoan.principal
      : 0;
    return savings?.toFixed(2);
  };

  const refinancingSavings = (newBankRate: number) => {
    if (!selectedLoan) return null;
    const difference = selectedLoan.underlineRate - newBankRate;
    return (
      ((difference * selectedLoan.principal) / 100) *
      (new Date(selectedLoan.endDate).getFullYear() -
        new Date(selectedLoan.startDate).getFullYear())
    ).toFixed(2);
  };

  const [prepayment, setPrepayment] = useState<number>(0);
  const [newEMI, setNewEMI] = useState<number | null>(null);

  // Prepayment Calculator Logic
  const calculatePrepaymentImpact = (loan: (typeof loanData)[0]) => {
    if (!loan || !prepayment) return null;

    const remainingPrincipal = loan.amountYetToBePaid;
    const reducedPrincipal = remainingPrincipal - prepayment;
    const reducedInterest =
      loan.totalInterest * (reducedPrincipal / loan.principal);

    return {
      remainingPrincipal: reducedPrincipal,
      reducedInterest: reducedInterest.toFixed(2),
    };
  };

  // Loan Optimization Advice Logic
  const optimizeLoan = (loan: (typeof loanData)[0]) => {
    if (!loan) return null;

    const increasedEMI = loan.emi * 1.2; // Example: Increase EMI by 20%
    const reducedTenure = loan.tenureMonths * 0.8; // Example: Reduce tenure by 20%
    const reducedInterest = loan.totalInterest * 0.8; // Example: Reduce interest by 20%
    return {
      increasedEMI: increasedEMI.toFixed(2),
      reducedTenure: reducedTenure.toFixed(0),
      reducedInterest: reducedInterest.toFixed(2),
    };
  };

  // EMI Restructuring Simulator Logic
  const calculateRestructuredEMI = (
    loan: (typeof loanData)[0],
    rate: number,
    tenure: number
  ) => {
    if (!loan) return null;

    const monthlyRate = rate / 12 / 100;
    const restructuredEMI = (
      (loan.principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    ).toFixed(2);

    return restructuredEMI;
  };

  const restructuringSimulation = () => {
    if (!selectedLoan || !newEMI) return null;

    return {
      emi: calculateRestructuredEMI(
        selectedLoan,
        selectedLoan.underlineRate,
        selectedLoan.tenureMonths
      ),
    };
  };

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
              <strong>Total Interest:</strong> ₹
              {selectedLoan.totalInterest.toLocaleString()}
            </p>
          </div>
        </section>
      )}

      {/* Projected Savings */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Projected Savings</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              Switching to a fixed rate could save you{" "}
              <span className="text-green-600 font-bold">
                ₹{calculateProjectedSavings(selectedLoan).toLocaleString()}
              </span>{" "}
              over the loan tenure.
            </p>
          </div>
        </section>
      )}
      {/* Loan Repayment Progress */}
      {selectedLoan && (
        <section className="mb-10 mt-5">
          <h2 className="text-xl font-semibold mb-4">
            Loan Repayment Progress
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium mb-4">
              Repayment Progress:{" "}
              <span className="text-green-600">
                {calculateRepaymentProgress(selectedLoan)}%
              </span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-6">
              <div
                className="bg-green-500 h-6 rounded-full"
                style={{
                  width: `${calculateRepaymentProgress(selectedLoan)}%`,
                }}
              ></div>
            </div>
          </div>
        </section>
      )}

      {/* Loan Tenure Impact */}

      {/* EMI Graph */}
      {graphData.labels && graphData.labels.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Loan Payment Breakdown</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Bar data={graphData} options={{ responsive: true }} />
          </div>
        </section>
      )}

      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Loan Tenure Impact</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold mb-2">After Prepayment</h3>
              <p>
                Total Interest:{" "}
                <span className="text-green-600 font-bold">
                  ₹
                  {calculateLoanTenureImpact(
                    selectedLoan
                  ).prepaymentSavings.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-sm font-semibold mb-2">
                With Tenure Extension
              </h3>
              <p>
                Total Interest:{" "}
                <span className="text-red-600 font-bold">
                  ₹
                  {calculateLoanTenureImpact(
                    selectedLoan
                  ).extendedInterest.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Loan Details */}
      {selectedLoan && (
        <>
          {/* EMI Trend */}
          <section className="mb-10 mt-5">
            <h2 className="text-xl font-semibold mb-4">EMI Trend</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Line data={emiTrendData} options={{ responsive: true }} />
            </div>
          </section>

          {/* Interest Rate Trend */}
          <section className="mb-10 mt-5">
            <h2 className="text-xl font-semibold mb-4">Interest Rate Trend</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Line
                data={interestRateTrendData}
                options={{ responsive: true }}
              />
            </div>
          </section>

          {/* Bank Comparison */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Bank Comparison</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bankComparisonData.map((bank, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-lg font-semibold">{bank.bank}</h3>
                  <p className="text-gray-500 text-sm">Rate: {bank.rate}%</p>
                  <p className="mt-2 text-gray-600 text-sm">{bank.features}</p>
                  {selectedLoan && (
                    <p className="mt-4 text-green-600">
                      Savings: ₹
                      {refinancingSavings(bank.rate)?.toLocaleString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Fixed vs Floating Simulation */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              Fixed vs Floating Simulation
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">
                Current Floating Rate:{" "}
                <strong>{selectedLoan.underlineRate}%</strong>
              </p>
              <p className="text-gray-700 mt-2">
                Fixed Rate: <strong>7%</strong>
              </p>
              <p className="mt-4 text-green-600">
                Potential Savings: ₹
                {calculateFixedVsFloatingSavings(selectedLoan.underlineRate)}
              </p>
            </div>
          </section>

          {/* Refinancing Benefits */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Refinancing Benefits</h2>
            <p className="text-gray-700 mb-4">
              Compare refinancing options and see how much you can save by
              switching to a different bank or plan.
            </p>
          </section>
        </>
      )}

      {/* Prepayment Calculator */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Prepayment Calculator</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-2 font-medium">
              Enter Prepayment Amount
            </label>
            <input
              type="number"
              className="w-full p-3 border rounded-md mb-4"
              placeholder="Enter prepayment amount"
              onChange={(e) => setPrepayment(Number(e.target.value))}
            />
            {prepayment > 0 && calculatePrepaymentImpact(selectedLoan) && (
              <div>
                New Principal:{" "}
                <span className="text-green-600">
                  ₹
                  {calculatePrepaymentImpact(
                    selectedLoan
                  )?.remainingPrincipal.toLocaleString()}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Loan Optimization Advice */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Loan Optimization Advice
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              Increasing EMI to{" "}
              <span className="text-green-600 font-bold">
                ₹{optimizeLoan(selectedLoan)?.increasedEMI}
              </span>{" "}
              can save you interest and reduce tenure to{" "}
              <span className="text-green-600 font-bold">
                {optimizeLoan(selectedLoan)?.reducedTenure} months
              </span>
              .
            </p>
          </div>
        </section>
      )}

      {/* EMI Restructuring Simulator */}
      {selectedLoan && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">
            EMI Restructuring Simulator
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-2 font-medium">Enter New EMI</label>
            <input
              type="number"
              className="w-full p-3 border rounded-md mb-4"
              placeholder="Enter new EMI"
              onChange={(e) => setNewEMI(Number(e.target.value))}
            />
            {newEMI && restructuringSimulation() && (
              <p>
                Restructured EMI:{" "}
                <span className="text-green-600">
                  ₹{restructuringSimulation()?.emi}
                </span>
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
