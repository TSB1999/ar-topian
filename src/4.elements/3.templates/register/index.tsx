import React from "react";
import Registration from "../../2.organisms/registration";
import "./styles.scss";
import Heading from "../../0.atoms/text/heading";
import SubHeading from "../../0.atoms/text/subheading";

export default function Register({ handleRegistrationChange }) {
  return (
    <div className="registration">
      <div className="registration__top-panel"></div>
      <div>
        <Heading
          color="#0F0F0F"
          textShadow="none"
          label="One step away from your experience!"
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Registration handleRegistrationChange={handleRegistrationChange} />
      </div>

      <div>
        <SubHeading label="ALREADY HAVE AN ACCOUNT? SIGN IN" />
      </div>

      <div className="registration__bottom-panel"></div>
    </div>
  );
}
