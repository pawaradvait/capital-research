import React from "react";
import HomeForm from "./Home/HomeForm";
import HomeSection from "./Home/HomeSection";
import BgHeadingImg from "./BgHeadingImg";

const Body = () => {
  return (
    <div>
      <BgHeadingImg heading="Home" />
      <HomeForm />
      <HomeSection />
    </div>
  );
};

export default Body;
