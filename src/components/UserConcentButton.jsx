import React, { useState } from 'react';
import userConsent from "../assets/userConsentlogo.svg"

const UserConcentButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number (include country code without + sign)
    const phoneNumber = "919876543210"; // Example: India number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 left-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center bg-green-500 hover:bg-green-600 text-white 
          rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
          ${isHovered ? 'px-3 py-1' : 'p-1'}
          transform hover:scale-105 active:scale-95
        `}
      >
        {/* WhatsApp Icon SVG */}
        <img src={userConsent} className='w-[45px]' alt="userConsent" />
        
        {/* WhatsApp Text that appears on hover */}
        <span className={`
          font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
          ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}
        `}>
          WhatsApp
        </span>
      </button>

      {/* Pulse Animation Ring */}
      <div className={`
        absolute inset-0 rounded-xl bg-green-400 animate-ping
        ${isHovered ? 'opacity-0' : 'opacity-75'}
        transition-opacity duration-300
      `}></div>
    </div>
  );
};

export default UserConcentButton;