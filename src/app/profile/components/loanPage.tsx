"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoanPage() {
  const [loans, setLoans] = useState([
    {
      bank: "",
      otherBank: "",
      loanType: "",
      otherLoanType: "",
      loanStartDate: "",
      loanEndDate: "",
      loanAmount: "",
      rateType: "",
      underlineRate: "",
      emiAmount: "",
      lastRevisionDate: "",
    },
  ]);

  const banks = ["HDFC Bank", "ICICI Bank", "SBI", "Axis Bank", "Other"];
  const loanTypes = [
    "Home Loan",
    "Car Loan",
    "Education Loan",
    "Personal Loan",
    "Other",
  ];

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoans((prev) => {
      const updatedLoans = [...prev];
      updatedLoans[index] = { ...updatedLoans[index], [name]: value };
      return updatedLoans;
    });
  };

  const addLoan = () => {
    setLoans((prev) => [
      ...prev,
      {
        bank: "",
        otherBank: "",
        loanType: "",
        otherLoanType: "",
        loanStartDate: "",
        loanEndDate: "",
        loanAmount: "",
        rateType: "",
        underlineRate: "",
        emiAmount: "",
        lastRevisionDate: "",
      },
    ]);
  };

  const deleteLoan = (index: number) => {
    if (loans.length > 1) {
      setLoans((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", loans);
  };

  return (
    <div className="flex">
      <div className="flex-1 px-12 py-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Loan Details</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-lg space-y-6 border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-700">
                  Loan {index + 1}
                </h2>
                {loans.length > 1 && (
                  <Button
                    type="button"
                    onClick={() => deleteLoan(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </Button>
                )}
              </div>

              {/* Dropdown for Bank */}
              <div>
                <Label
                  htmlFor={`bank-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  1. Which Bank
                </Label>
                <select
                  id={`bank-${index}`}
                  name="bank"
                  value={loan.bank}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-50"
                >
                  <option value="" disabled>
                    Select a Bank
                  </option>
                  {banks.map((bank, i) => (
                    <option key={i} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
                {loan.bank === "Other" && (
                  <Input
                    id={`otherBank-${index}`}
                    name="otherBank"
                    placeholder="Enter the bank name"
                    value={loan.otherBank}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="w-full mt-4 p-3 border rounded-md bg-gray-50"
                  />
                )}
              </div>

              {/* Dropdown for Loan Type */}
              <div>
                <Label
                  htmlFor={`loanType-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  2. Which Type of Loan
                </Label>
                <select
                  id={`loanType-${index}`}
                  name="loanType"
                  value={loan.loanType}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-50"
                >
                  <option value="" disabled>
                    Select a Loan Type
                  </option>
                  {loanTypes.map((loanType, i) => (
                    <option key={i} value={loanType}>
                      {loanType}
                    </option>
                  ))}
                </select>
                {loan.loanType === "Other" && (
                  <Input
                    id={`otherLoanType-${index}`}
                    name="otherLoanType"
                    placeholder="Enter the loan type"
                    value={loan.otherLoanType}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="w-full mt-4 p-3 border rounded-md bg-gray-50"
                  />
                )}
              </div>

              {/* Loan Start and End Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor={`loanStartDate-${index}`}
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    3. Loan Start Date
                  </Label>
                  <Input
                    id={`loanStartDate-${index}`}
                    type="date"
                    name="loanStartDate"
                    value={loan.loanStartDate}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <Label
                    htmlFor={`loanEndDate-${index}`}
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Loan End Date
                  </Label>
                  <Input
                    id={`loanEndDate-${index}`}
                    type="date"
                    name="loanEndDate"
                    value={loan.loanEndDate}
                    onChange={(e) => handleInputChange(index, e)}
                    required
                    className="w-full p-3 border rounded-md bg-gray-50"
                  />
                </div>
              </div>

              {/* Loan Amount */}
              <div>
                <Label
                  htmlFor={`loanAmount-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  4. Amount of Loan
                </Label>
                <Input
                  id={`loanAmount-${index}`}
                  type="number"
                  name="loanAmount"
                  placeholder="Enter the loan amount"
                  value={loan.loanAmount}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full p-3 border rounded-md bg-gray-50"
                />
              </div>

              {/* Fixed vs Variable Rate of Interest */}
              <div>
                <Label className="block mb-2 text-sm font-medium text-gray-600">
                  5. Fixed vs Variable Rate of Interest
                </Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name={`rateType-${index}`}
                      value="Fixed"
                      checked={loan.rateType === "Fixed"}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                      className="form-radio"
                    />
                    Fixed
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name={`rateType-${index}`}
                      value="Variable"
                      checked={loan.rateType === "Variable"}
                      onChange={(e) => handleInputChange(index, e)}
                      required
                      className="form-radio"
                    />
                    Variable
                  </label>
                </div>
              </div>

              {/* EMI Amount */}
              <div>
                <Label
                  htmlFor={`emiAmount-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  7. EMI Amount
                </Label>
                <Input
                  id={`emiAmount-${index}`}
                  type="number"
                  name="emiAmount"
                  placeholder="Enter the EMI amount"
                  value={loan.emiAmount}
                  onChange={(e) => handleInputChange(index, e)}
                  required
                  className="w-full p-3 border rounded-md bg-gray-50"
                />
              </div>
            </div>
          ))}

          {/* Add Loan Button */}
          <Button
            type="button"
            onClick={addLoan}
            className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Add Loan
          </Button>

          {/* Submit Button */}
          <div className="flex justify-end mt-8">
            <Button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Submit All Loans
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
