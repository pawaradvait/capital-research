import React, { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Phone,
  Mail,
  User,
} from "lucide-react";

const UserConsentData = () => {
  const [agreed, setAgreed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAgree = () => {
    setAgreed(true);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <TrendingUp className="w-12 h-12 text-blue-300" />
            <div>
              <h1 className="text-4xl font-bold">Capital Research</h1>
              <p className="text-blue-200 text-lg">
                Professional Trading Research Services
              </p>
            </div>
          </div>
          <div className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-6 border border-blue-700/30">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-3">
              <FileText className="w-6 h-6" />
              Terms & Conditions
            </h2>
            <p className="text-blue-100 leading-relaxed">
              Please read these terms and conditions carefully before
              subscribing to our research services. By accessing our website and
              making payment, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Risk Disclosure
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Trading involves significant risk of loss. Past performance does
              not guarantee future results. You may lose partial or complete
              capital.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Research Service
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We provide research recommendations only. Final trading decisions
              and responsibility for outcomes rest entirely with you.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800">
                Client Responsibility
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              You must trade with your own capital, assess risks independently,
              and manage your trading account responsibly.
            </p>
          </div>
        </div>

        {/* Detailed Terms */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Detailed Terms & Conditions
            </h2>
            <p className="text-gray-600">
              Complete terms governing our research services
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Agreement Section */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Service Agreement
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  By visiting, using, or accessing our website{" "}
                  <strong>https://capitalresearch.com/</strong> and
                  making payment for subscription to our research services, you
                  agree to be bound by these terms and conditions, legal
                  disclaimers, disclosures, policies, and user consent.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Your
                  continued use of our services constitutes acceptance of any
                  modified terms. Please review our terms regularly for updates.
                </p>
                <p>
                  You declare that all information provided during subscription
                  is true and accurate, and you will inform us of any changes.
                  False or misleading information may result in liability.
                </p>
              </div>
            </section>

            {/* Risk Disclosure */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                Risk Disclosure & Trading Responsibility
              </h3>
              <div className="bg-orange-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed border border-orange-200">
                <p className="font-medium text-orange-800">
                  <strong>Important:</strong> Trading is a high-risk activity
                  that may result in partial or complete loss of capital.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      No guarantee of profits or returns from our research
                      services
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      All trading decisions are entirely your responsibility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      You accept full responsibility for gains or losses from
                      trading activities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Trade quantities and investment amounts are solely your
                      decision
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Service Nature */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                Nature of Service
              </h3>
              <div className="bg-blue-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed border border-blue-200">
                <p>
                  Capital Research provides{" "}
                  <strong>research and analysis services only</strong>. We are
                  not an investment advisory service. Our recommendations are
                  based on technical analysis and market research, representing
                  the opinion of our research analysts based on prevailing
                  market conditions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">
                      What We Provide:
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Technical analysis research</li>
                      <li>• Market trend analysis</li>
                      <li>• Trading recommendations</li>
                      <li>• Clear targets and stop-loss levels</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-2">
                      What We Don't Provide:
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Investment advice</li>
                      <li>• Guaranteed returns</li>
                      <li>• Order execution services</li>
                      <li>• Account management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Accuracy & Performance */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                Accuracy & Performance Disclaimer
              </h3>
              <div className="bg-purple-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed border border-purple-200">
                <p>
                  We do not provide any assurance or guarantee of accuracy or
                  consistency of our research alerts. Any accuracy levels
                  communicated are for indicative purposes only and may vary
                  over time.
                </p>
                <p>
                  <strong>
                    Past performance does not indicate future performance.
                  </strong>{" "}
                  Research alerts may not always be profitable as market
                  movements may change from predicted trends. You are
                  responsible for assessing the risk of each trade
                  independently.
                </p>
              </div>
            </section>

            {/* Client Obligations */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-500" />
                Client Obligations & Confirmations
              </h3>
              <div className="bg-indigo-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed border border-indigo-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      You Confirm That:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          You will trade with your own personal capital only
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>You will not trade with borrowed money</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>You understand all trading risks involved</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                          Your account credentials remain confidential
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-3">
                      You Agree That:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>No guaranteed returns have been promised</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>You cannot claim against losses incurred</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Fees paid are for research services only</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>All terms are understood and accepted</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Communication & Security */}
            <section>
              <h3 className="text-xl font-semibent text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                Official Communication Channels
              </h3>
              <div className="bg-green-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed border border-green-200">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                  <p className="text-red-800 font-medium">
                    <strong>Security Alert:</strong> We will never ask for your
                    Demat/Trading account login credentials. Do not entertain
                    calls from personal numbers claiming to be Capital
                    Research asking for personal details or fund transfers.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">
                      Official Channels:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-500" />
                        <span>
                          Email: capitalresearch.com domain only
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        <span>Compliance: 9833972053</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-purple-500" />
                        <span>WhatsApp: Official broadcast messages only</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">
                      Available Packages:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Index Option (Standard Package)</li>
                      <li>• Index Option (Premium Package)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal & Dispute Resolution */}
            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" />
                Legal Framework & Dispute Resolution
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Both parties agree to engage in online conciliation and/or
                  arbitration through the ODR Portal, or by adhering to the
                  dispute resolution process outlined in SEBI circular no.
                  SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023.
                </p>
                <p>
                  For fraud prevention, identity verification, and regulatory
                  compliance, we may obtain basic KYC documents from Authorized
                  KRA (KYC Registration Agency) for official purposes and
                  records.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              Agreement Confirmation
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              By clicking "Yes I Agree" below, you confirm that you have read,
              understood, and agree to all terms and conditions, disclaimers,
              policies, and risk disclosures mentioned above and on our official
              website.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={handleAgree}
                disabled={agreed}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  agreed
                    ? "bg-green-500 text-white cursor-not-allowed"
                    : "bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 shadow-lg"
                }`}
              >
                {agreed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Terms Accepted
                  </span>
                ) : (
                  "Yes I Agree"
                )}
              </button>

              {showConfirmation && (
                <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-green-100">
                    Agreement confirmed successfully!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            <strong>Capital Research</strong> | Professional Trading
            Research Services
          </p>
          <p className="text-sm">
            Website:{" "}
            <a
              href="https://capitalresearch.com/"
              className="text-blue-600 hover:underline"
            >
              https://capitalresearch.com/
            </a>{" "}
            | Compliance: 9833972053
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserConsentData;
