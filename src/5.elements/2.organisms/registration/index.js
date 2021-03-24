import React from "react";
import StandardButton from "../../0.atoms/buttons/standard";
import { Link } from "react-router-dom";

export default function RegistrationElement() {
  return (
    <div>
      <form
        className="registration-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
        }}
      >
        <label for="name">FULL NAME</label>
        <input type="text" name="name" /**value */ />

        <label for="email">EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label for="password">PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <label for="confirm_password">CONFIRM PASSWORD</label>
        <input type="password" name="confirm_password" /**value */ />

        <div className="registration-form__buttons">
          <Link to="/">
            <StandardButton title="BACK" />
          </Link>
          <StandardButton title="REGISTER" background="#000" color="#fff" />
        </div>
      </form>
    </div>
  );
}
