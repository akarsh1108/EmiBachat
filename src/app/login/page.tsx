"use client";

import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import LoginForm from "./components/LoginForm";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center mt-20 justify-center min-h-screen bg-gray-100">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
}
