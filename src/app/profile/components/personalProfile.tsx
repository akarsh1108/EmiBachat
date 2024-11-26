"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function PersonalProfilePage() {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    dob: "",
    pincode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safely access the first file
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex">
      <div className="flex-1 px-10 py-8 bg-gray-100">
        <h3 className="text-3xl font-bold mb-8">Profile Page</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo Upload */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32">
              <img
                src={
                  formData.profilePhoto ||
                  "https://via.placeholder.com/150/000000/FFFFFF/?text=Upload"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border border-gray-300"
              />
              <label
                htmlFor="profilePhoto"
                className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
              >
                +
              </label>
              <input
                id="profilePhoto"
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
            <Label htmlFor="profilePhoto" className="text-sm text-gray-600">
              Upload Profile Photo
            </Label>
          </div>

          {/* Row 1: First Name, Middle Name, Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="firstName" className="block mb-2">
                First Name
              </Label>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="middleName" className="block mb-2">
                Middle Name
              </Label>
              <Input
                id="middleName"
                type="text"
                name="middleName"
                placeholder="Enter your middle name"
                value={formData.middleName}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="block mb-2">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <Label htmlFor="phone" className="block mb-2">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
              required
              className="w-full"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <Label htmlFor="dob" className="block mb-2">
              Date of Birth
            </Label>
            <Input
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          {/* Pincode */}
          <div>
            <Label htmlFor="pincode" className="block mb-2">
              Pincode
            </Label>
            <Input
              id="pincode"
              type="text"
              name="pincode"
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              pattern="[0-9]{6}"
              required
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
