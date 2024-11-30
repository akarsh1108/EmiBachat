"use client";

import { useState } from "react";
import Sidebar from "../../components/sidebar";
import EditProfile from "./components/editProfile";
import ProfileView from "./components/profileView";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-48 px-10 py-8 bg-gray-100 min-h-screen">
        <div className="flex flex-row items-center justify-between mb-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">
            Profile and Loan Details
          </h1>

          {/* Edit/Discard Button */}
          <button
            className={`px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-all shadow-md`}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Discard Changes" : "Edit Details"}
          </button>
        </div>

        {isEditing ? <EditProfile /> : <ProfileView />}
      </div>
    </div>
  );
}
