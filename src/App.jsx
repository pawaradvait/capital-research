import { Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import All from "./components/All";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import UserConcentButton from "./components/UserConcentButton";
import WhatsAppButton from "./components/WhatsAppButton";
import PackageBody from "./components/PackageBody";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/package" element={<PackageBody />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<All />} />
      </Routes>
      <UserConcentButton />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
