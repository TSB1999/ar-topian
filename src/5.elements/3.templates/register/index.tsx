import React from "react";
import Registration from "../../2.organisms/registration";

export default function Register() {
  return (
    <div className="registration">
      <div className="registration__top-panel"></div>
      <div className="registration__title">
        <h1>One step away from your experience!</h1>
      </div>

      <div className="registration__form">
        <Registration />
      </div>

      <div className="registration__sublink">
        <h3>ALREADY HAVE AN ACCOUNT? SIGN IN</h3>
      </div>

      <div className="registration__bottom-panel"></div>
    </div>
  );
}
