import React from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.svg'
import userConsent from "../assets/userConsentlogo.svg"

const Footer = () => {
  const quickLinks = [
    'Home',
    'About Us',
    'Packages',
    'Refund Policy',
    'Privacy Policy',
    'Legal Disclaimer',
    'User Consent',
    'Registered Research Analyst',
    'Contact Us',
    'Investor Charter',
    'Do\'s & Don\'ts',
    'Advertisement Disclaimer',
    'Grievance Redressal Process',
    'Terms & Conditions'
  ];

  return (
    <footer className="bg-[#051309] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center">
            <div>
                <img src={logo} className='w-80' alt="MarketReasearchAdvisory" />
            </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center group cursor-pointer">
                  <ChevronRight className="w-4 h-4 text-gray-500 mr-2 group-hover:text-white transition-colors" />
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Mahape, Navi Mumbai</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Free Consultation</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Mon to Fri: 9:00 AM to 06:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 Market Research Advisory
            </p>
            <p className="text-gray-400 text-sm">
              Powered by <span className="text-green-400">Koloursyncc</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








