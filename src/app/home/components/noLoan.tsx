"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoanGuidePage() {
  const loanGuide = [
    {
      title: "Steps to Take a Loan",
      content: [
        "Research different loan options and interest rates.",
        "Check your eligibility and credit score.",
        "Gather required documents (ID proof, income proof, etc.).",
        "Apply through a trusted financial institution.",
        "Understand the terms and conditions before signing.",
      ],
    },
    {
      title: "Benefits of Taking a Loan",
      content: [
        "Helps achieve financial goals (home, car, education).",
        "Allows you to pay in manageable installments.",
        "Improves credit score when paid on time.",
        "Provides quick access to large amounts of money.",
      ],
    },
    {
      title: "How EMI Works",
      content: [
        "EMI stands for Equated Monthly Installments.",
        "It's a fixed amount paid monthly towards loan repayment.",
        "EMI = Principal Amount + Interest.",
        "Longer tenure means smaller EMIs but more interest paid.",
        "Use EMI calculators to plan your budget.",
      ],
    },
    {
      title: "Consequences of Not Paying on Time",
      content: [
        "Negative impact on credit score.",
        "Additional late payment fees or penalties.",
        "Legal action from the lender.",
        "Difficulty getting future loans.",
        "Stress due to financial burden.",
      ],
    },
  ];

  return (
    <div className="px-10 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold  mb-8 text-gray-800">
        How to Take a Loan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loanGuide.map((section, index) => (
          <Card
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200 rounded-lg"
          >
            <CardHeader className="px-6 py-4 border-b border-gray-100 bg-gray-100 rounded-t-lg">
              <CardTitle className="text-xl font-semibold text-gray-800">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-4">
              <ul className="list-disc pl-5 text-gray-600">
                {section.content.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
