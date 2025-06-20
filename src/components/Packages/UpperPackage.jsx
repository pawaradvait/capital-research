import React, { useState } from "react";
import { ArrowRight, TrendingUp, Shield, Star, Zap } from "lucide-react";

const UpperPackage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Monthly Package",
      price: "₹125000",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      icon: <TrendingUp className="w-6 h-6" />,
      delay: "0ms",
    },
    {
      id: 2,
      title: "Quarterly Package",
      price: "₹325000",
      color: "from-amber-400 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-900",
      buttonColor: "bg-amber-600 hover:bg-amber-700",
      icon: <Shield className="w-6 h-6" />,
      delay: "100ms",
    },
    {
      id: 3,
      title: "Half Yearly Package",
      price: "₹750000",
      color: "from-teal-400 to-cyan-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-900",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      icon: <Star className="w-6 h-6" />,
      delay: "200ms",
    },
    {
      id: 4,
      title: "Yearly Package",
      price: "₹1499999",
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      icon: <Zap className="w-6 h-6" />,
      delay: "300ms",
      popular: true,
    },
  ];

  const features = [
    "One to Two research alert per day through WhatsApp broadcast.",
    "Get trade alert of Bank Nifty/Nifty/FinNifty Option per day.",
    "Get trade alert of Banknifty/Sensex/Midcap every week.",
    "Get Expiry Special research alerts on every weekly expiry and BTST.",
    "Get well researched targets and stop-loss on every research alert.",
    "Live Market customer support is available.",
    "Risk Level - High to Very High",
    "*all prices are inclusive of GST",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Index Option Premium Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your trading journey with our
            comprehensive NIFTY/BANK NIFTY/FIN NIFTY solutions
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${pkg.bgColor} rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden group`}
              style={{ animationDelay: pkg.delay }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-r ${pkg.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
                    {pkg.icon}
                  </div>
                </div>

                {/* Animated background shapes */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                <h3
                  className={`text-2xl font-bold ${pkg.textColor} mb-2 transition-colors duration-300`}
                >
                  {pkg.title}
                </h3>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-bold ${
                      pkg.textColor
                    } transition-all duration-300 ${
                      hoveredCard === pkg.id ? "scale-110" : ""
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start text-sm text-gray-700 transition-all duration-300 hover:text-gray-900"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${pkg.color} mt-2 mr-3 flex-shrink-0 transition-transform duration-300 hover:scale-125`}
                      ></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${pkg.buttonColor} text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95`}
                >
                  <span className="mr-2">Enquire Now</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default UpperPackage;
