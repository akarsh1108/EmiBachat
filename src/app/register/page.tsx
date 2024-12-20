"use client";

import Navbar from "@/components/navbar";
import RegisterForm from "./components/RegistrationForm";
import Footer from "@/components/footer";

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <div className="flex items-center mt-20 justify-center min-h-screen bg-gray-100">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}
