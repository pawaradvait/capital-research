import React, { useEffect } from 'react';
import { AlertTriangle, FileText, Shield, Gavel, TrendingUp, Users } from 'lucide-react';
import { scrollToTop } from '../helper/helper';
import BgHeadingImg from './BgHeadingImg';

const LeagalDisclaimar = () => {
    useEffect(()=>{
        scrollToTop()
    },[])
  return (
    <>
    <BgHeadingImg heading="Leagal Disclaimar"/>
    <div className="min-h-screen bg-gradient-to-br from-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-12 h-12 text-red-600 mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Disclaimer
            </h1>
          </div>
          <p className="text-lg text-gray-600">Capital Research</p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* Information Responsibility */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Information Responsibility</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Capital Research is not responsible for the information and conclusions of the analysis available on it. Although all the information on the Web site is presented with utmost care, we do not hold any responsibility for the information provided. Customers and visitors should not depend on analysis for making an investment; the analysis should be considered as a first step to further their awareness of the subject. They must consult a financial advisor. None of our expert analyst should be relied upon as Financial advisor. Visitors to Web site must go through Terms and Conditions and Disclaimer before making any serious investment-related decisions. Capital Research is not responsible for the errors and omissions on the page. We do not endorse opinions of experts which may be their own personal views. Web site and management is not to be considered responsible for content of the Web site.
              </p>
            </div>

            {/* Terms of Use Agreement */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Gavel className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Terms of Use Agreement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                You agree and understand that use of Capital Research is at your risk. Capital Research is not liable to any direct, indirect, incidental, consequential, or exemplary damages. Failures in the hardware, software, and internet connection can delay the delivery of SMS which is not the responsibility of Capital Research. SMS of Capital Research is not supposed to be forwarded directly to any individual or firm to send suggestions. This can invite serious legal actions. Any dispute will be solved in the territory of India only at Thane, Navi Mumbai. Capital Research reserves the right to modify Terms and Conditions and Privacy Policy. All the information, analysis, reports, and articles on the Web site are only to inform the customer and should be used at owns risk.
              </p>
            </div>

            {/* Chat Room Service */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Virtual Chat Room Service</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Capital Research provides a virtual chat room for the conversation. However, the visitor is solely responsible for his decisions in case of loss or benefit. We reserve the right to deny the chat room service without giving an explanation. Any opinion, comment, experience, advice, and offer available on the site is just a piece of information nothing else. We presume that all the visitors to the site have thoroughly gone through the disclaimer and terms and conditions.
              </p>
            </div>

            {/* Standard Disclosure */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 uppercase tracking-wide">Standard Disclosure/Disclaimer</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Capital Research does not receive any consideration by way of remuneration or compensation or in any other form whatsoever, by us or any of our associates or subsidiaries for any distribution or execution services in respect of the products or securities for which the research service is provided to the client. Capital Research does not provide any order execution services to any user/subscriber. If any person offers an order execution service in the name of Capital Research, the user should immediately deny such services and report to us about the same. If the user/subscriber accepts such services, then Capital Research or its promoter's, employees, representatives, and/or stakeholders are not responsible for any losses/gains or any outcome that may arise due to any such activities. The user/subscriber agrees to indemnify Capital Research or its promoter's, employees, representatives, and/or stakeholders from any losses or damages that the user may incur from any such execution services activities agreed upon by the user on his/her/their own accord. The user agrees that he/she/they have used services offered by Capital Research or any of its subsidiaries only after having read and accepted the terms and conditions of services provided by us.
                </p>
              </div>
            </div>

            {/* Stock/Commodity Broker Recommendations */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Stock/Commodity Broker Recommendations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Capital Research does not recommend a stock/commodity broker. If any stock/commodity broker is recommended by any of our representatives, we do not receive any consideration by way of remuneration or compensation or in any other form whatsoever from the stock/commodity broker or any other intermediary so recommended to the client.
              </p>
            </div>

            {/* SEBI Compliance */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-indigo-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">SEBI Compliance</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  To ensure compliance with the <span className="font-semibold">SEBI (Research Analysts) Regulations, 2014</span>, we have resolved that the research analyst and all its representatives will not make any trades in the market in the securities/instruments covered in our research services. We are not associated in any manner with any issuer of products/ securities, this ensures that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on of our research providing services is not compromised. Investment in stock/commodity markets is subject to market risk, though best attempts are made for predicting markets, no surety of return or accuracy of any kind is guaranteed, while the performance sheet of various products is available but should not be considered as a guarantee for future performance of the products/services. Clients are suggested to consider all the research reports as just an opinion and make investment decisions of their own accord.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  In case of clients seeking research on any specific positions already made by the client, we will be able to suggest the best possible action considering our view on the security or product. Such a suggestion under any circumstances shall be considered as an opinion (not advice) from our organization and we suggest the client consider our opinion and not constrain to make his/her final decision. We are not liable for any losses whatsoever the client may incur in accepting this opinion.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  It is also suggested that the Client should only trade if our research calls suit his/her/their current risk profile and risk-bearing capacity; all such research calls shall be considered as a view or opinion and the client shall on his/her/their discretion decide actual trades.
                </p>
              </div>
            </div>

            {/* Intermediaries */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Intermediaries</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We are not associated with any intermediaries and do not recommend the services of any specific intermediaries.
              </p>
            </div>

            {/* Legal Actions */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Actions</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                No litigations have been filed against us since the incorporation.
              </p>
            </div>

            {/* Communication Policy */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Policy</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                All the research services which are suggested by us are communicated in written, non-verbal communication by any of our executives or otherwise under any circumstances shall be considered as research services by our organization.
              </p>
            </div>

            {/* Standard Disclaimer */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 italic">Standard Disclaimer:</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Capital Research is an independent SEBI (Securities and Exchange Board of India) registered equity research providing firm operating under the license of it's proprietor. Capital Research or its promoter, employees, directors & stakeholders may have had or may have in future positions in the stocks/instruments covered under research or may be providing or may provide investment banking or other advisory services to the companies covered under research. Clients are advised to make their independent judgment for investment decisions and are advised to consult their advisors for any queries. We are not responsible for any of the investment decisions made by the clients and any of the profit or loss incurred thereof. This document is distributed to you solely for information and is not to be used or considered as an offer or invitation to sell or the solicitation of an offer or invitation to purchase or subscribe for any securities. Investment in the capital market is subject to market risks. You are expected to make your own investment decisions without relying on our research. We do not assure or guarantee the performance of the securities. All information provided herein is on an "as is" basis and we do not guarantee the accuracy or completeness of the information.
              </p>
            </div>

            {/* Website Reference */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                For more information and updates, please visit our website at{' '}
                <a 
                  href="https://capitalresearch.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 underline"
                >
                  https://capitalresearch.com/
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Important Notice</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Please read all terms and conditions carefully before using our services.
            </p>
            <a 
              href="https://capitalresearch.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Visit Capital Research
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Capital Research. All rights reserved.</p>
          <p className="mt-2">Last updated: June 2025</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default LeagalDisclaimar;