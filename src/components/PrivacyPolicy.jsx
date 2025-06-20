import React, { use, useEffect } from 'react';
import { Shield, Eye, Lock, Mail, Phone, AlertCircle } from 'lucide-react';
import { scrollToTop } from '../helper/helper';
import BgHeadingImg from './BgHeadingImg';

const PrivacyPolicy = () => {
    useEffect(()=>{
        scrollToTop()
    },[])
  return (
    <>
    <BgHeadingImg heading="Privacy Policy"/>
    <div className="min-h-screen bg-gradient-to-br from-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600">Market Research Advisory</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Market Research Advisory values and respect every individual's right to Privacy Policy. We are admitted by relationship as well as by becoming our customers we give promise to you that we shall always be loyal to our clients as well as non-clients and their information provided to use by them.
              </p>
            </div>

            {/* Policy Application */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Application</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                This Privacy Policy of the Market Research Advisory is applicable to both current as well as former clients. Below are detailed testimonials of our Policy:
              </p>
            </div>

            {/* Information Usage */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Information Usage</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                The information provided by you will only be used for offering you the services that you have subscribed for with our company and for which you have provided us the information. The information provided by you will act as your identity with us. If you make any sort of changes in any field of information that you have provided to us then make sure to inform us regarding that through a call or mail.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Other than providing service to you based on the information provided by you, we can also use that information for sending you emails, newsletters, contest information, survey, or information related to any kind of new services of our company that will be for your benefit and while subscribing for our services you also agree with this right of Market Research Advisory.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Data Security & Confidentiality</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The personal information collected by us from the client is kept confidential & gets saved in our privacy policy.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We may, if required by applicable law or regulations, disclose the identity of the client to the Issuer of Securities held as part of the Assets or to the agents of such Issuer upon request of such Issuer, or to any Government or Regulatory body, without further consent from the client.
                </p>
              </div>
            </div>

            {/* Client Rights */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                <span className="font-semibold">Market Research Advisory</span> respects and values the Right to privacy of each and every individual. We are esteemed by the relationship and by becoming our clients you have a promise to our clients and we shall remain loyal to all our clients and non-clients whose information resides with us. This Privacy Policy of <span className="font-semibold">Market Research Advisory</span> is to the current clients as well as former clients. Below are the word-by-word credentials of our Privacy Policy:
              </p>
            </div>

            {/* Mobile Registration */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Mobile Registration</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                By registering your mobile number on <span className="font-semibold">Market Research Advisory</span> you agree to be contacted by our personnel or to receive SMS and it shall be treated as 'opt Inn' in case the contact number you have registered with us is subscribed in the DND registry (Do Not Disturb). By registering for our services, you also agree to comply with our Private Policy and Terms & Conditions.
              </p>
            </div>

            {/* Communications */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Communications & Promotions</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Please be aware that you may receive calls related to services promotions and any sort of contests and polls organized by us.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  In case there are any changes in your contact information that we retain, please bring this to our knowledge either by call or email.
                </p>
              </div>
            </div>

            {/* Information Protection */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Information Protection</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Your information whether public or private will be sold, rented, exchanged, transferred, or given to any company or individual for any reason without your consent for the same.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  The only use we will be bringing to your information will be for providing the services to you for which you have subscribed to us for or which you gave us your information.
                </p>
              </div>
            </div>

            {/* Information Updates */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Updates</h3>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Your information given to us represents your identity with us. If any changes are brought in any of the fields in which you have provided us the information, you shall bring it to our notice by either calling us or dropping a mail to us.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  In addition to the service provided to you your information (Mobile Number, E-Mail ID, etc.) can be brought into use for sending you newsletters, surveys, contest information, or information about any new services of the Company which will be for your own good and while subscribing for our services you agree that <span className="font-semibold">Market Research Advisory</span> has the right to do so.
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Consent</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                By subscribing to our services, you consent to our Privacy Policy and Terms of Use.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Questions About Our Privacy Policy?</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              If you have any questions or concerns about our privacy practices, please contact us.
            </p>
            <a 
              href="https://marketresearchadvisory.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Visit Our Website
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Market Research Advisory. All rights reserved.</p>
          <p className="mt-2">Last updated: June 2025</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default PrivacyPolicy;