"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Call the API
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Registration successful");
    } else {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login to an Account
        </h1>

        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-700 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-gray-700 mb-2"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Login
        </Button>
        {/* More Options Section */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative text-center">
            <span className="bg-white px-4 text-gray-500">More Options</span>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <Button
          type="button"
          className="w-full py-3 text-white rounded-md  transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.14 0 5.65 1.08 7.43 2.85l5.56-5.56C33.31 3.85 28.94 2 24 2 14.82 2 7.17 7.91 4.26 15.91l6.95 5.41C12.44 14.52 17.78 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24c0-1.34-.13-2.64-.37-3.89H24v7.36h12.7c-.55 2.88-2.22 5.34-4.68 6.99l7.32 5.71C44.67 36.69 46.5 30.8 46.5 24z"
            />
            <path
              fill="#FBBC05"
              d="M11.21 28.45c-.42-1.25-.66-2.57-.66-3.95s.24-2.7.66-3.95l-6.95-5.41c-1.36 2.7-2.14 5.74-2.14 9.36s.78 6.66 2.14 9.36l6.95-5.41z"
            />
            <path
              fill="#34A853"
              d="M24 46c4.68 0 8.6-1.54 11.47-4.17l-7.32-5.71c-1.39.93-3.18 1.49-5.15 1.49-6.22 0-11.56-5.02-12.79-11.41l-6.95 5.41C7.17 40.09 14.82 46 24 46z"
            />
          </svg>
          Sign in with Google
        </Button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Don`&apos;`t have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
