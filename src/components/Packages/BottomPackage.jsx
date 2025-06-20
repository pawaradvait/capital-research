import React, { useState } from "react";
import { ArrowRight, Calendar, BarChart3, Target, Award } from "lucide-react";
import UpperPackage from "./UpperPackage";

const BottomPackage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const packages = [
    {
      id: 1,
      title: "Monthly Package",
      price: "₹69999",
      color: "from-slate-400 to-gray-600",
      bgColor: "bg-slate-50",
      textColor: "text-slate-800",
      buttonColor: "bg-slate-600 hover:bg-slate-700",
      borderColor: "border-slate-200",
      icon: <Calendar className="w-6 h-6" />,
      delay: "0ms",
    },
    {
      id: 2,
      title: "Quarterly Package",
      price: "₹149999",
      color: "from-orange-400 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      borderColor: "border-orange-200",
      icon: <BarChart3 className="w-6 h-6" />,
      delay: "100ms",
    },
    {
      id: 3,
      title: "Half Yearly Package",
      price: "₹279999",
      color: "from-cyan-400 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-900",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
      borderColor: "border-cyan-200",
      icon: <Target className="w-6 h-6" />,
      delay: "200ms",
    },
    {
      id: 4,
      title: "Yearly Package",
      price: "₹500000",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      borderColor: "border-yellow-200",
      icon: <Award className="w-6 h-6" />,
      delay: "300ms",
      popular: true,
    },
  ];

  const features = [
    "One research alert per day through WhatsApp broadcast.",
    "Every research alert with target and stop loss.",
    "Live Market customer support is available.",
    "Get Quality Research Alerts of Bank Nifty/Nifty Option per day.",
    "Risk Level: - High to Very High",
    "*all prices are inclusive of GST",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
            Index Option Standard Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your trading journey with our reliable NIFTY/BANK NIFTY/FIN
            NIFTY standard solutions
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            Quality Research • Proven Results • Expert Support
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 ${pkg.bgColor} rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group border-2 ${pkg.borderColor}`}
              style={{ animationDelay: pkg.delay }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                    Best Value
                  </div>
                </div>
              )}

              {/* Header Section */}
              <div
                className={`p-6 bg-gradient-to-r ${pkg.color} text-white relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      {pkg.icon}
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 bg-white/20 rounded-full ${
                        hoveredCard === pkg.id ? "animate-pulse" : ""
                      }`}
                    >
                      Standard
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-bold">{pkg.price}</div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-12 -translate-y-12 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-8 translate-y-8 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              </div>

              {/* Features Section */}
              <div className="p-6">
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start text-sm text-gray-700 transition-all duration-300 hover:text-gray-900 group/feature"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color} mt-2 mr-3 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-150`}
                      ></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full ${pkg.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group/btn shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95`}
                >
                  <span className="mr-2">Enquire Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our Standard Packages?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Accurate Research
              </h3>
              <p className="text-gray-600">
                Daily research alerts with precise target and stop-loss levels
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Support
              </h3>
              <p className="text-gray-600">
                Real-time market support and customer assistance
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Alerts
              </h3>
              <p className="text-gray-600">
                High-quality research alerts for Bank Nifty and Nifty options
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 shadow-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Trading Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of successful traders with reliable research
            alerts and professional market insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center justify-center group">
              <span className="mr-2">Choose Your Package</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:border-white/50 hover:bg-white/10 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BottomPackage;
