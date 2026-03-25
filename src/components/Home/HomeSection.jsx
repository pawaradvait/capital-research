import React from "react";
import {
  Phone,
  FileText,
  CheckCircle,
  TrendingUp,
  BarChart3,
  PieChart,
} from "lucide-react";

export default function HomeSection() {
  const features = [
    {
      icon: Phone,
      title: "Complete Support on Daily Basis",
      description: "Get comprehensive daily support and guidance",
    },
    {
      icon: FileText,
      title: "SEBI Registered",
      description: "Fully registered and compliant with SEBI regulations",
    },
    {
      icon: CheckCircle,
      title: "Risk Managed Calls with Target and Stop Loss",
      description: "Professional risk management with clear targets",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Why Choose Capital Research?
          </h1>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-green-500 text-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <feature.icon className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Uncover Hidden Opportunities: Tap to the well researched services
            with proper guidance and support.
          </h2>
        </div>

        {/* Content Section with Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Person silhouette */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full relative">
                  {/* Simple person representation */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-500 to-gray-700"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-300 rounded-t-full"></div>
                </div>
              </div>

              {/* Floating Charts */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <BarChart3 className="w-8 h-8 text-blue-500" />
                <div className="mt-2 space-y-1">
                  <div className="w-12 h-2 bg-blue-200 rounded"></div>
                  <div className="w-8 h-2 bg-blue-300 rounded"></div>
                  <div className="w-10 h-2 bg-blue-400 rounded"></div>
                </div>
              </div>

              <div className="absolute top-6 right-4 bg-white p-3 rounded-lg shadow-md">
                <PieChart className="w-8 h-8 text-green-500" />
                <div className="mt-2 grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 bg-green-200 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-md">
                <TrendingUp className="w-8 h-8 text-orange-500" />
                <div className="mt-2 flex space-x-1">
                  <div className="w-2 h-6 bg-orange-200 rounded"></div>
                  <div className="w-2 h-8 bg-orange-300 rounded"></div>
                  <div className="w-2 h-4 bg-orange-400 rounded"></div>
                  <div className="w-2 h-10 bg-orange-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Invest Wisely with our Affordable Package Options for Maximum
              Trading Potential
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Explore our thoughtfully curated options, each offering a unique
              combination of features and benefits. Whether you're a beginner
              seeking guidance or an experienced trader, our packages are
              designed to cater to diverse needs. Choose the perfect package
              that aligns with your goals and dive into the world of trading
              with confidence.
            </p>

            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Explore Packages
              </button>
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                1000+
              </div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
