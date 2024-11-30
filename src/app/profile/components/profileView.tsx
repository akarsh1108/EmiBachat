"use client";
import { Label } from "@/components/ui/label";

export default function ProfileView() {
  // Example prefilled data for profile and loans
  const profileData = {
    profilePhoto: "https://via.placeholder.com/150/000000/FFFFFF/?text=Profile",
    firstName: "John",
    middleName: "A.",
    lastName: "Doe",
    phone: "9876543210",
    dob: "1990-01-01",
    pincode: "123456",
  };

  const loans = [
    {
      bank: "HDFC Bank",
      loanType: "Home Loan",
      loanStartDate: "2023-01-01",
      loanEndDate: "2043-01-01",
      loanAmount: "1000000",
      rateType: "Fixed",
      underlineRate: "7.5",
      emiAmount: "8334",
      lastRevisionDate: "2023-07-01",
    },
    {
      bank: "ICICI Bank",
      loanType: "Car Loan",
      loanStartDate: "2022-01-01",
      loanEndDate: "2027-01-01",
      loanAmount: "500000",
      rateType: "Variable",
      underlineRate: "8.5",
      emiAmount: "10834",
      lastRevisionDate: "2023-06-01",
    },
  ];

  return (
    <div className="pb-10 px-10 bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Personal Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src={profileData.profilePhoto}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border border-gray-300 mr-6"
          />
          <div>
            <p>
              <Label className="font-bold">Name:</Label> {profileData.firstName}{" "}
              {profileData.middleName} {profileData.lastName}
            </p>
            <p>
              <Label className="font-bold">Phone:</Label> {profileData.phone}
            </p>
            <p>
              <Label className="font-bold">Date of Birth:</Label>{" "}
              {profileData.dob}
            </p>
            <p>
              <Label className="font-bold">Pincode:</Label>{" "}
              {profileData.pincode}
            </p>
          </div>
        </div>
      </section>

      {/* Loan Details Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Loan Details</h2>

        {loans.map((loan, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md"
          >
            <h3 className="text-lg font-bold mb-4">Loan {index + 1}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p>
                <Label className="font-bold">Bank:</Label> {loan.bank}
              </p>
              <p>
                <Label className="font-bold">Loan Type:</Label> {loan.loanType}
              </p>
              <p>
                <Label className="font-bold">Loan Start Date:</Label>{" "}
                {loan.loanStartDate}
              </p>
              <p>
                <Label className="font-bold">Loan End Date:</Label>{" "}
                {loan.loanEndDate}
              </p>
              <p>
                <Label className="font-bold">Loan Amount:</Label> ₹
                {loan.loanAmount.toLocaleString()}
              </p>
              <p>
                <Label className="font-bold">Rate Type:</Label> {loan.rateType}
              </p>
              <p>
                <Label className="font-bold">Underline Rate:</Label>{" "}
                {loan.underlineRate}%
              </p>
              <p>
                <Label className="font-bold">EMI Amount:</Label> ₹
                {loan.emiAmount.toLocaleString()}
              </p>
              <p>
                <Label className="font-bold">Last Revision Date:</Label>{" "}
                {loan.lastRevisionDate}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
