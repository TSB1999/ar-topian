import React from "react";
import Registration from "../../2.organisms/registration";
import "./styles.scss";
import Heading from "../../0.atoms/text/heading";
import SubHeading from "../../0.atoms/text/subheading";

export default function Register() {
  return (
    <div className="registration">
      <div className="registration__top-panel"></div>
      <div>
        <Heading color="#f0f0f0" label="One step away from your experience!" />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Registration />
      </div>

      <div>
        <SubHeading label="ALREADY HAVE AN ACCOUNT? SIGN IN" />
      </div>

      <div className="registration__bottom-panel"></div>
    </div>
  );
}
