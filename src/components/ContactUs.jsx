import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">Address</h3>
                <h2 className="text-2xl font-bold text-gray-900">
                  Mbp Mahape Ghansoli
                </h2>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">
                  Get in touch
                </h3>
                <p className="text-xl font-semibold text-blue-600">
                  8450988560 (For Support)
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-600">
                  Email us at
                </h3>
                <p className="text-lg text-blue-600 break-all">
                  Marketresearchadvisory22@gmail.com
                </p>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">
                  Monday to Friday
                </span>
                <span className="text-gray-600">09:00 to 06:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Saturday</span>
                <span className="text-gray-600">09:30 to 04:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-red-600">Sunday</span>
                <span className="text-red-600">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get in touch
            </h1>

            <div id="contactForm" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 md:invisible"
                  >
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <a
            href="https://wa.me/918450988560"
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="WhatsApp" className="text-xl">
              💬
            </span>
          </a>
          <a
            href="tel:+918450988560"
            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
          >
            <span role="img" aria-label="Phone" className="text-xl">
              📞
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
