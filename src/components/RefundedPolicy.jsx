// import React from 'react'

// const RefundedPolicy = () => {
//   return (
//     <div>RefundedPolicy</div>
//   )
// }

// export default RefundedPolicy




import React from 'react';
import { MessageCircle } from 'lucide-react';
import BgHeadingImg from './BgHeadingImg';

const RefundedPolicy = () => {
  return (
    <>
    <BgHeadingImg heading="Refunded Policy"/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Market Research Advisory
          </h1>
          <p className="text-lg text-gray-600">Refunded Policy</p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Risk and Rewards Disclaimer */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Market Research Advisory takes all the necessary measures related to risk and rewards involved in markets before delivering any recommendations to clients. Once the client has paid for the services there will be <span className="font-semibold text-red-600">NO REFUNDS, CANCELLATIONS or TRANSFERS</span>. We appeal to our visitors not to offer or allow anyone else even your family members, children, and friend to use any electronic modes of payments or your personal accounts for taking subscription without your prior permission.
              </p>
            </div>

            {/* Payment Agreement */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Once you have made any payment for subscription to our site or in the bank account as mentioned in the payment option. We believe that you have read and agreed to the Refund Policy of Market Research Advisory that <span className="font-semibold text-red-600">NO REFUNDS, CANCELLATIONS, or TRANSFERS</span> are done in any case.
              </p>
            </div>

            {/* Double Payment Policy */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                If any new client paid twice for one transaction, the one transaction amount will be refunded via the same source within 07 to 10 working days (only if the payment is made through the same portal & for the same client has given written intimation on same day notifying the concern).
              </p>
            </div>

            {/* Chat Room Service */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Market Research Advisory provides a virtual chat room for the conversation. However, the visitor is solely responsible for his decisions in case of loss or benefit. We reserve the right to deny the chat room service without giving an explanation. Any opinion, comment, experience, advice, and offer available on the site is just a piece of information nothing else. We presume that all the visitors to the site have thoroughly gone through the disclaimer and terms and conditions.
              </p>
            </div>

            {/* Strong Recommendation Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border-l-4 border-blue-500">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                We strongly recommend that before making a payment, our visitors and potential clients, please:
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Read all information about our services and the support given to our clients.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Read our <span className="font-semibold text-blue-600">Terms and Conditions</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Read our <span className="font-semibold text-blue-600">Privacy Policy</span> and <span className="font-semibold text-blue-600">Refund Policy</span>.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 text-sm sm:text-base font-semibold">
                    There is no refund possible in any case whatsoever.
                  </span>
                </li>
              </ul>
            </div>

            {/* Final Payment Instructions */}
            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                Kindly make the payment after reading all <span className="font-bold">terms and conditions, disclaimers, and refund policy</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Need Help?</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              For any questions or concerns, please visit our website
            </p>
            <a 
              href="https://marketresearchadvisory.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Visit Market Research Advisory
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray- 500 text-sm">
          <p>&copy; 2025 Market Research Advisory. All rights reserved.</p>
        </div>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
    </>
  );
}

export default RefundedPolicy