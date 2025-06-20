import React, { useState } from "react";
import { Phone, Clock, MapPin, Menu, X } from "lucide-react";
import img from "../assets/logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Top contact bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop contact info */}
          <div className="hidden md:flex justify-end items-center text-sm gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mulund, New Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 9:00 AM to 06:00 PM</span>
            </div>
          </div>

          {/* Mobile contact info - simplified */}
          <div className="md:hidden flex justify-center items-center text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img src={img} alt="Logo" className="w-28" />

              <div className="text-center">
                <h5
                  className="textTypeAnimation"
                  style={{ cursor: "pointer" }}
                  onClick="window.location.href='tel:8450988560';"
                  data-text="For&nbsp;Support&nbsp;:&nbsp;+91&nbsp;8450988560"
                >
                  For Support : +91 8450988560
                </h5>
              </div>
            </div>

            {/* Desktop Navigation and CTA Button Group - NEW WRAPPER */}
            {/* This div groups the nav and CTA for better spacing control on desktop */}
            <div className="hidden lg:flex items-center gap-8 lg:gap-12">
              {" "}
              {/* Adjust gap-8/12 as desired */}
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => {
                    navigate("/aboutus");
                  }}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => {
                    navigate("/package");
                  }}
                >
                  Packages
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => {
                    navigate("/userconsent");
                  }}
                >
                  User Consent
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-700 font-medium transition-colors"
                  onClick={() => {
                    navigate("/contactus");
                  }}
                >
                  Contact Us
                </a>
              </nav>
              {/* Desktop CTA Button */}
              <button className="bg-green-700 text-white px-4 lg:px-6 py-2 rounded-md hover:bg-green-800 transition-colors font-medium text-sm lg:text-base">
                Request a free demo call now!
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              // Changed initial text color to green-700, added darker hover state
              className="lg:hidden p-2 rounded-md text-green-700 hover:text-green-800 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile navigation links */}
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Packages
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  User Content
                </a>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-green-700 font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile CTA button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-green-700 text-white px-4 py-3 rounded-md hover:bg-green-800 transition-colors font-medium">
                  Request a free demo call now!
                </button>
              </div>

              {/* Mobile contact info */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mulund, New Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 9:00 AM to 06:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
