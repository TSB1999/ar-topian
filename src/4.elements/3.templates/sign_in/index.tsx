import React from "react";
import SignInElement from "../../2.organisms/sign_in";
import Heading from "../../0.atoms/text/heading";
import SubHeading from "../../0.atoms/text/subheading";

export default function SignIn() {
  return (
    <div className="registration">
      <div className="registration__top-panel"></div>
      <div>
        <Heading
          color="#0F0F0F"
          textShadow="none"
          label="Your next creation awaits you!"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <SignInElement /> / */}
      </div>

      <div>
        <SubHeading label="ALREADY HAVE AN ACCOUNT? REGISTER" />
      </div>

      <div className="registration__bottom-panel"></div>
    </div>
  );
}
