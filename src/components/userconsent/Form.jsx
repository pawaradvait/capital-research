import React, { useState } from "react";
import { Form } from "react-router-dom";

// Main App component
const FormUser = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    agentName: "",
    panCard: null,
    aadharFront: null,
    aadharBack: null,
    consent: false,
  });

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // Store the file object
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send formData to a backend
    console.log("Form Data Submitted:", formData);
    // You can add logic here to send data to an API, show a success message, etc.
    alert(
      "Form submitted! Check console for data. (Note: File uploads are simulated.)"
    );
  };

  return (
    // Main container for the form, centered and with responsive padding
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Form Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
          User Consent
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Email Address Input */}
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Agent's Name Input */}
          <div>
            <label
              htmlFor="agentName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Agent's Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="agentName"
              name="agentName"
              value={formData.agentName}
              onChange={handleChange}
              placeholder="Agent's Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* File Uploads Section */}
          <div className="space-y-4">
            {/* Pan Card Upload */}
            <div>
              <label
                htmlFor="panCard"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Pan Card
              </label>
              <div className="flex items-center space-x-2">
                <label className="cursor-pointer bg-teal-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm">
                  Choose File
                  <input
                    type="file"
                    id="panCard"
                    name="panCard"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-gray-500 text-sm">
                  {formData.panCard ? formData.panCard.name : "No file chosen"}
                </span>
              </div>
            </div>

            {/* Aadhar Card Front Upload */}
            <div>
              <label
                htmlFor="aadharFront"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Aadhar Card Front
              </label>
              <div className="flex items-center space-x-2">
                <label className="cursor-pointer bg-teal-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm">
                  Choose File
                  <input
                    type="file"
                    id="aadharFront"
                    name="aadharFront"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-gray-500 text-sm">
                  {formData.aadharFront
                    ? formData.aadharFront.name
                    : "No file chosen"}
                </span>
              </div>
            </div>

            {/* Aadhar Card Back Upload */}
            <div>
              <label
                htmlFor="aadharBack"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Aadhar Card Back
              </label>
              <div className="flex items-center space-x-2">
                <label className="cursor-pointer bg-teal-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 text-sm">
                  Choose File
                  <input
                    type="file"
                    id="aadharBack"
                    name="aadharBack"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-gray-500 text-sm">
                  {formData.aadharBack
                    ? formData.aadharBack.name
                    : "No file chosen"}
                </span>
              </div>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
              required
            />
            <label
              htmlFor="consent"
              className="ml-2 block text-sm text-gray-900"
            >
              Yes, I agree with all the policies,{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
              .
            </label>
          </div>

          {/* Note about Research Alerts */}
          <p className="text-xs text-gray-600 mt-2">
            Note: Our Research alerts will be Provided only after successful
            acceptance of User Consent.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition ease-in-out duration-150 text-lg sm:text-base"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
