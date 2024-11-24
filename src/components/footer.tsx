import React from "react";

function Footer() {
  return (
    <footer className="p-5 bg-gray-800 shadow-md flex justify-between items-center">
      <p className="text-white">@2024</p>
      <div className="space-x-5">
        <a
          href="https://instagram.com"
          className="hover:text-blue-500 text-white"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          className="hover:text-blue-500 text-white"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          className="hover:text-blue-500 text-white"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
