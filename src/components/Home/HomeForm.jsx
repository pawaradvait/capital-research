import React, { useState } from "react";
import { Check } from "lucide-react";

export default function HomeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentlyTrading: "",
    segment: "",
    investmentAmount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  // Replace with your actual Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.currentlyTrading ||
      !formData.segment ||
      !formData.investmentAmount
    ) {
      setSubmitStatus("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          currently_trading: formData.currentlyTrading,
          segment: formData.segment,
          investment_amount: formData.investmentAmount,
          subject: "Trading Demo Request",
          message: `Demo request from ${formData.firstName} ${formData.lastName}. Currently Trading: ${formData.currentlyTrading}, Segment: ${formData.segment}, Investment Amount: ${formData.investmentAmount}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          currentlyTrading: "",
          segment: "",
          investmentAmount: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      text: "Trusted Analyzer Firm: Known for reliability among traders.",
    },
    {
      text: "Services: Specializes in options trading.",
    },
    {
      text: "Comprehensive Market Coverage: Offers insights on Nifty, BankNifty, FinNifty, Midcap, Sensex, and Banknex.",
    },
    {
      text: "Professional Analysts: Provides researched recommendations across various market segments.",
    },
    {
      text: "Focused on Quality: Committed to delivering highly researched trading services and recommendations.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
            Request a Live demo call now!
          </h2>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Thank you! Your demo request has been submitted successfully.
              We'll contact you soon!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              Sorry, there was an error submitting your request. Please try
              again.
            </div>
          )}

          {submitStatus &&
            submitStatus !== "success" &&
            submitStatus !== "error" && (
              <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md">
                {submitStatus}
              </div>
            )}

          <div className="space-y-6">
            {/* Full Name Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Currently Trading */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you currently trading? *
              </label>
              <select
                name="currentlyTrading"
                value={formData.currentlyTrading}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Are you currently trading?</option>
                <option value="yes">Yes, I am currently trading</option>
                <option value="no">No, I am new to trading</option>
                <option value="occasionally">I trade occasionally</option>
              </select>
            </div>

            {/* Segment and Investment Amount Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Segment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Segment *
                </label>
                <select
                  name="segment"
                  value={formData.segment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Segment</option>
                  <option value="equity">Equity</option>
                  <option value="options">Options</option>
                  <option value="futures">Futures</option>
                  <option value="commodity">Commodity</option>
                  <option value="currency">Currency</option>
                </select>
              </div>

              {/* Investment Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount *
                </label>
                <select
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Investment Amount</option>
                  <option value="below-50k">Below ₹50,000</option>
                  <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                  <option value="1lakh-5lakh">₹1,00,000 - ₹5,00,000</option>
                  <option value="5lakh-10lakh">₹5,00,000 - ₹10,00,000</option>
                  <option value="above-10lakh">Above ₹10,00,000</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-green-700 hover:bg-green-800 disabled:bg-green-400 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
            Options trading with trusted Recommendations
          </h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
