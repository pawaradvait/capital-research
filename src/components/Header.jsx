import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";
import img from "../assets/logo-removebg-preview.png";

export default function Header() {
  return (
    <div className="w-full">
      {/* Top contact bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        {/* Changed 'justify-between' to 'justify-end' */}
        {/* Consolidated all individual items into direct children of this flex container */}
        <div className="max-w-7xl mx-auto flex justify-end items-center text-sm gap-6">
          {" "}
          {/* Added gap-6 here */}
          {/* Mulund, New Mumbai */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Mulund, New Mumbai</span>
          </div>
          {/* Free Consultation */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Free Consultation</span>
          </div>
          {/* Mon-Sat: 9:00 AM to 06:00 PM */}
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Mon-Sat: 9:00 AM to 06:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img src={img} className="w-32  mr-2" />
              <div className="max-w-7xl mx-auto px-4">
                <p className="text-center text-green-700 font-semibold">
                  For Support: +91 8450988560
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Packages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                User Content
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-700 font-medium"
              >
                Contact Us
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors font-medium">
              Request a free demo call now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
