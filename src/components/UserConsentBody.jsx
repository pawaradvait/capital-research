import React, { useEffect } from "react";

import FormUser from "./userconsent/Form";
import UserConsentData from "./userconsent/UserConsentData";
import BgHeadingImg from "./BgHeadingImg";
import { scrollToTop } from "../helper/helper";

const UserConsentBody = () => {
  useEffect(()=>{
    scrollToTop()
})
  return (
    <div>
      <BgHeadingImg heading={"User Consent"} />
      <UserConsentData />
      <FormUser />
    </div>
  );
};

export default UserConsentBody;
