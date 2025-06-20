import React, { useEffect } from "react";
import UpperPackage from "./Packages/UpperPackage";
import BottomPackage from "./Packages/BottomPackage";
import HeadingTitle from "./HeadingTitle";
import BgHeadingImg from "./BgHeadingImg";

const PackageBody = () => {
  useEffect(()=>{
    scrollToTop()
})
  return (
    <div>
      <BgHeadingImg heading="Package"/>
      <UpperPackage />
      <BottomPackage />
    </div>
  );
};

export default PackageBody;
