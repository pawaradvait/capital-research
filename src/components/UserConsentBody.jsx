import React from "react";

import FormUser from "./userconsent/Form";
import UserConsentData from "./userconsent/UserConsentData";
import BgHeadingImg from "./BgHeadingImg";

const UserConsentBody = () => {
  return (
    <div>
      <BgHeadingImg heading={"User Consent"} />
      <UserConsentData />
      <FormUser />
    </div>
  );
};

export default UserConsentBody;
