import React from "react";
import ButtonPair from "../../1.molecules/button-pair";
import "./styles.css";

export default function SignInForm({ handleSignInChange }) {
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
        <input
          type="email"
          name="email"
          onChange={(e) => handleSignInChange(e, "email")}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          onChange={(e) => handleSignInChange(e, "password")}
        />

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
