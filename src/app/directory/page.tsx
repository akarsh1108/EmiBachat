"use client";

import Sidebar from "../../components/sidebar";
import DirectoryPage from "./components/pageList";

export default function TrackerPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-48 px-10 py-8 bg-gray-100 min-h-screen">
        <DirectoryPage />
      </div>
    </>
  );
}
