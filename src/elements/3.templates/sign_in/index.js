import React from "react";
import SignInElement from "../../2.organisms/sign_in";

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__top-panel"></div>
      <div className="sign-in__title">
        <h1>Your next creation awaits you!</h1>
      </div>
      <div className="sign-in__form">
        <SignInElement />
      </div>
      <div className="sign-in__sublink">
        <h3>DONT'T HAVE AN ACCOUNT? REGISTER</h3>
      </div>
      <div className="sign-in__bottom-panel"></div>
    </div>
  );
}
