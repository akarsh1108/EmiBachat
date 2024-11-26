"use client";

import { useEffect, useState } from "react";
import { FaHome, FaFileAlt } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import Image from "next/image";

export default function Sidebar() {
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    // Set the current route using window.location
    setCurrentRoute(window.location.pathname);
  }, []);

  return (
    <div className="flex flex-col h-screen w-48 bg-gray-900 text-white fixed">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 px-4 py-6 space-y-4">
        <a
          href="/home"
          className={`flex items-center px-3 py-2 rounded-md ${
            currentRoute === "/home" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
        >
          <FaHome className="text-lg mr-3" />
          Tracker Page
        </a>
        <a
          href="/directory"
          className={`flex items-center px-3 py-2 rounded-md ${
            currentRoute === "/directory" ? "bg-gray-800" : "hover:bg-gray-800"
          }`}
        >
          <FaFileAlt className="text-lg mr-3" />
          Directory
        </a>
      </nav>

      {/* Profile Section */}
      <div className="px-4 py-6 border-t border-gray-700">
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center w-full px-2 py-2 text-left hover:bg-gray-800 rounded-md">
            <Image
              src="/images/avatar/confident.png"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">shadcn</p>
              <p className="text-xs text-gray-400">m@example.com</p>
            </div>
            <svg
              className="w-5 h-5 ml-auto text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Menu.Button>
          <Menu.Items className="absolute bottom-12 left-0 w-full bg-gray-800 shadow-lg rounded-md">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/profile"
                  className={`block px-4 py-2 ${
                    active ? "bg-gray-700 text-white" : "text-gray-300"
                  }`}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/logout"
                  className={`block px-4 py-2 ${
                    active ? "bg-gray-700 text-white" : "text-gray-300"
                  }`}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}
