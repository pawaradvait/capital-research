import React, { useEffect } from "react";
import HomeForm from "./Home/HomeForm";
import HomeSection from "./Home/HomeSection";
import BgHeadingImg from "./BgHeadingImg";
import { scrollToTop } from "../helper/helper";

const Body = () => {
  useEffect(()=>{
    scrollToTop()
},[])
  return (
    <div>
      <BgHeadingImg heading="Home" />
      <HomeForm />
      <HomeSection />
    </div>
  );
};

export default Body;
