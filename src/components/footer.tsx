import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-5 bg-gray-800 shadow-md flex justify-between items-center">
      <p className="text-white">@2024</p>
      <div className="flex space-x-5 text-white">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaInstagram className="text-lg" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaFacebookF className="text-lg" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTwitter className="text-lg" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
