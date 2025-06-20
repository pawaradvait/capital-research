import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import All from "./components/All";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import UserConcentButton from "./components/UserConcentButton";
import WhatsAppButton from "./components/WhatsAppButton";
import PackageBody from "./components/PackageBody";
import UserConsentBody from "./components/UserConsentBody";
import RefundedPolicy from "./components/RefundedPolicy";
import ScrollTop from "./components/ScrollTop";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LeagalDisclaimar from "./components/LeagalDisclaimar";
import AboutUsBody from "./components/AboutusBody";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/package" element={<PackageBody />} />
        <Route path="/contactus" element={<ContactUs />} />\
        <Route path="/aboutus" element={<AboutUsBody />} />
        <Route path="/userconsent" element={<UserConsentBody />} />
        <Route path="/refunded-policy" element={<RefundedPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-disclaimer" element={<LeagalDisclaimar />} />

        <Route path="*" element={<All />} />
      </Routes>
      <UserConcentButton />
      <WhatsAppButton />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
