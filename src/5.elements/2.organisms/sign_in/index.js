import React from "react";
import StandardButton from "../../0.atoms/buttons/standard";
import { Link } from "react-router-dom";

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
        <label for="email">EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label for="password">PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <div className="sign-in-form__buttons">
          <Link to="/">
            <StandardButton title="BACK" />
          </Link>
          <StandardButton title="SIGN IN" background="#000" color="#fff" />
        </div>
      </form>
    </div>
  );
}
