// import React, { useState } from 'react';

// const ScrollTop = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleWhatsAppClick = () => {
//     // Replace with your WhatsApp number (include country code without + sign)
//     const phoneNumber = "919876543210"; // Example: India number
//     const message = "Hello! I'm interested in your services.";
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={handleWhatsAppClick}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`
//           flex items-center bg-green-200 hover:bg-green-600 text-white 
//           rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
//           ${isHovered ? 'px-3 py-1' : 'p-1'}
//           transform hover:scale-105 active:scale-95
//         `}
//       >
//         {/* WhatsApp Icon SVG */}
//         <img width="64" height="64" className='rotate-180' src="https://img.icons8.com/sf-black/64/12B886/long-arrow-down.png" alt="long-arrow-down"/>
        
//         {/* WhatsApp Text that appears on hover */}
//         <span className={`
//           font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
//           ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}
//         `}>
//           WhatsApp
//         </span>
//       </button>

//       {/* Pulse Animation Ring */}
//       <div className={`
//         absolute inset-0 rounded-full bg-green-400 animate-ping
//         ${isHovered ? 'opacity-0' : 'opacity-75'}
//         transition-opacity duration-300
//       `}></div>
//     </div>
//   );
// };

// export default ScrollTop;







import React, { useState, useEffect } from 'react';
import { scrollToTop } from '../helper/helper';

const ScrollTop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down more than 0 pixels
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Don't render anything if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50" onClick={scrollToTop}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center bg-green-100 hover:bg-green-600 text-white 
          rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out
          ${isHovered ? 'px-3 py-1' : 'p-1'}
          transform hover:scale-105 active:scale-95
        `}
      >
        {/* Scroll to Top Icon */}
        <img 
          width="48" 
          height="48" 
          className='rotate-180' 
          src="https://img.icons8.com/sf-black/64/00FF00/long-arrow-down.png" 
          alt="scroll to top"
        />
        
        {/* Text that appears on hover */}
        <span className={`
          font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
          ${isHovered ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}
        `}>
          Scroll to Top
        </span>
      </button>

      {/* Pulse Animation Ring */}
      <div className={`
        absolute inset-0 rounded-full bg-green-200 animate-ping
        ${isHovered ? 'opacity-0' : 'opacity-75'}
        transition-opacity duration-300
      `}></div>
    </div>
  );
};

export default ScrollTop;