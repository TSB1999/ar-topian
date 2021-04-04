import React from "react";
import ButtonPair from "../../1.molecules/landing-buttons";
import { Link } from "react-router-dom";
import "./styles.css";

export default function SignInElement() {
  return (
    <div>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
        }}
      >
        <label>EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label>PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <div className="sign-in-form__buttons">
          <ButtonPair
            firstRoute="/"
            secondRoute="/"
            lightLabel="BACK"
            darkLabel="SIGN IN"
          />
        </div>
      </form>
    </div>
  );
}
