import React, { useState } from "react";
import { Facebook, Instagram, Mail, Share2, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import UserConcentButton from "./UserConcentButton";

export default function BeforeFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log("Form submitted:", formData);
    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Main Banner */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" // Added bg-no-repeat for explicit control
          style={{
            backgroundImage: `url('https://th.bing.com/th/id/OIP.OWJyvId4gVk5auBsHT-Q2wHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain&cb=idpwebpc2')`,
          }}
        >
          {/* Optional: Add a semi-transparent overlay for better text readability */}
          {/* This helps the text and other elements stand out against the background image */}
          <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
          {/* Adjust opacity (e.g., 20, 30, 50, 60) as needed */}
          {/* Original gradient overlay (if you still want it over the image AND the black overlay) */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-30"></div> */}
          {/* Person with headset - using a placeholder div */}
          {/* Consider making this actual image or a more styled placeholder for better UX */}
          {/* I've added a stronger background to the placeholder for better visibility */}
        </div>

        {/* Dark overlay card (remains as is) */}
        <div className="absolute right-2 sm:right-4 md:right-8 lg:right-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-2xl w-72 sm:w-80 md:w-96 lg:w-[400px] z-10">
          {" "}
          {/* Added z-10 to ensure it's above background */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            Need a Live demo call?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
            We are here to provide personalized guidance and help you make
            informed trading decisions.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={openModal}
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-colors duration-200 text-sm sm:text-base"
            >
              Get Live Demo Call
            </button>

            <button className="border border-gray-400 hover:border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-colors duration-200 text-sm sm:text-base">
              View Pricing
            </button>
          </div>
        </div>

        {/* Social Media Icons - Bottom Left (remains as is) */}
        <div className="absolute bottom-4 left-4 flex gap-2 sm:gap-3 z-10">
          {" "}
          {/* Added z-10 */}
          <a
            href="#"
            className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors duration-200"
          >
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </a>
          <a
            href="#"
            className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-600 hover:bg-pink-700 rounded flex items-center justify-center transition-colors duration-200"
          >
            <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </a>
          <a
            href="#"
            className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 hover:bg-gray-700 rounded flex items-center justify-center transition-colors duration-200"
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </a>
          <a
            href="#"
            className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 hover:bg-blue-600 rounded flex items-center justify-center transition-colors duration-200"
          >
            <Share2 className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </a>
        </div>
      </div>

      {/* Modal Overlay (remains as is) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md sm:max-w-lg relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 pr-8">
                Request Live Demo Call
              </h3>

              {/* Form fields... */}
              <div className="mb-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Active email*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message*"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical min-h-[100px] text-sm sm:text-base"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200 text-sm sm:text-base"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}
      </>
  );
}
