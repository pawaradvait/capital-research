import React from "react";
import HomeForm from "./Home/HomeForm";
import BgHeadingImg from "./BgHeadingImg";
import AboutusContent from "./aboutus/AboutusContent";

const AboutUsBody = () => {
  return (
    <div>
      <BgHeadingImg heading="About Us" />
      <AboutusContent />
      <HomeForm />
    </div>
  );
};

export default AboutUsBody;
