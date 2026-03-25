import { Check } from "lucide-react";

export default function AboutusContent() {
  const features = [
    "Are you overlooking the benefits of professional research services",
    "Fed up with reaching empty promises",
    "Searching for a trustworthy and user-friendly platform for trading in the Indian stock market",
    "Consider opting for Capital Research plans as your primary choice",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Trade with Capital Research
            <span className="block text-blue-600 mt-2">
              Like a Professional
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white stroke-2" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(2).map((feature, index) => (
              <div
                key={index + 2}
                className="flex items-start group hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-4 h-4 text-white stroke-2" />
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
            Get Started Today
          </button>
          <p className="text-gray-600 mt-4 text-sm">
            Join thousands of successful traders who trust our research
          </p>
        </div>
      </div>
    </div>
  );
}
