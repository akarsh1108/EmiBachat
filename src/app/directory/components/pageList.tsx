"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DirectoryPage() {
  const [formData, setFormData] = useState<{
    documentType: string;
    file: File | null;
  }>({
    documentType: "",
    file: null,
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadedDocuments, setUploadedDocuments] = useState<
    {
      documentType: string;
      fileName: string;
      file: File;
    }[]
  >([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.documentType && formData.file) {
      const file = formData.file;
      setUploadedDocuments((prev) => [
        ...prev,
        {
          documentType: formData.documentType,
          fileName: file.name,
          file: file,
        },
      ]);
      setFormData({ documentType: "", file: null });
      alert("Document uploaded successfully!");
    } else {
      alert("Please select a document type and upload a file.");
    }
  };

  const handleDownload = (file: File) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href); // Clean up the object URL after download
  };

  return (
    <div className="px-10 py-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Directory</h1>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex items-start gap-6 mb-8 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="flex flex-col space-y-4 w-3/4">
          {/* Dropdown for Document Type */}
          <div>
            <Label htmlFor="documentType" className="block mb-2">
              Document Type
            </Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, documentType: value }))
              }
              value={formData.documentType} // Bind the dropdown value to formData
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Document Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Loan Agreement">Loan Agreement</SelectItem>
                <SelectItem value="EMI Statement">EMI Statement</SelectItem>
                <SelectItem value="Loan Closure">Loan Closure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div>
            <Label htmlFor="file" className="block mb-2">
              Upload File
            </Label>
            <Input
              id="file"
              type="file"
              onChange={handleFileUpload}
              className="w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-end w-1/4">
          <Button
            type="submit"
            className="w-full bg-gray-800 text-white hover:bg-gray-700"
          >
            Submit
          </Button>
        </div>
      </form>

      {/* Confidentiality Notice */}
      <p className="text-sm text-gray-500 text-center mb-8">
        All documents uploaded here are fully confidential and not seen by
        anyone.
      </p>

      {/* Uploaded Documents Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Uploaded Documents</h2>

        {/* Dropdown for Filtering */}
        <div className="mb-6">
          <Label htmlFor="category" className="block mb-2">
            Filter by Category
          </Label>
          <Select
            onValueChange={(value) => setSelectedCategory(value)}
            value={selectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Loan Agreement">Loan Agreement</SelectItem>
              <SelectItem value="EMI Statement">EMI Statement</SelectItem>
              <SelectItem value="Loan Closure">Loan Closure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Full Document List */}
        <div>
          {uploadedDocuments.map((doc, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 mb-4 ${
                !selectedCategory || doc.documentType === selectedCategory
                  ? "bg-gray-100"
                  : "hidden"
              } rounded-md`}
            >
              <div>
                <p className="font-medium">{doc.fileName}</p>
                <p className="text-sm text-gray-500">({doc.documentType})</p>
              </div>
              <Button
                className="text-sm bg-red-500 text-white hover:bg-red-600"
                onClick={() => handleDownload(doc.file)}
              >
                Download
              </Button>
            </div>
          ))}
          {uploadedDocuments.length === 0 && (
            <p className="text-sm text-gray-500 text-center">
              No documents have been uploaded yet.
            </p>
          )}
          {selectedCategory &&
            uploadedDocuments.filter(
              (doc) => doc.documentType === selectedCategory
            ).length === 0 && (
              <p className="text-sm text-gray-500 text-center">
                No documents found for this category.
              </p>
            )}
        </div>
      </div>
    </div>
  );
}
