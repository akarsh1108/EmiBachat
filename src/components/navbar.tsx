"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-md" : "bg-gray-800 shadow-md"
      }`}
    >
      <div className="flex justify-between items-center p-5">
        {/* Left Section: Logo */}
        <div className="font-bold text-lg text-white flex-1">LOGO</div>

        {/* Center Section: Navigation */}
        <nav className="space-x-5 text-sm sm:text-base flex-1 text-center">
          <a href="#offering" className="hover:text-blue-500 text-white">
            Offering
          </a>
          <a href="#how-it-works" className="hover:text-blue-500 text-white">
            How?
          </a>
          <a href="#articles" className="hover:text-blue-500 text-white">
            Media
          </a>
        </nav>

        {/* Right Section: Buttons */}
        <div className="flex space-x-4 flex-1 justify-end">
          <a
            href="/login"
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all shadow-md"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all shadow-md"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
