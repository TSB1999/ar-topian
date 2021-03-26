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
        <label>EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label>PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <div className="sign-in-form__buttons">
          <Link to="/">
            <StandardButton title="BACK" theme="light" />
          </Link>
          <StandardButton title="SIGN IN" theme="dark" />
        </div>
      </form>
    </div>
  );
}
