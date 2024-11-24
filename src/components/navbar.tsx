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
      <div className="flex flex-wrap justify-between items-center p-5">
        <div className="font-bold text-lg text-white">LOGO</div>
        <nav className="space-x-5 text-sm sm:text-base">
          <a href="#offering" className="hover:text-blue-500 text-white">
            Our Offering
          </a>
          <a href="#how-it-works" className="hover:text-blue-500 text-white">
            How it Works
          </a>
          <a href="#articles" className="hover:text-blue-500 text-white">
            Articles
          </a>
        </nav>
      </div>
    </header>
  );
}
