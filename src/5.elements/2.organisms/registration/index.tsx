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
        <label>FULL NAME</label>
        <input type="text" name="name" /**value */ />

        <label>EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label>PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <label>CONFIRM PASSWORD</label>
        <input type="password" name="confirm_password" /**value */ />

        <div className="registration-form__buttons">
          <Link to="/">
            <StandardButton title="BACK" theme="light" />
          </Link>
          <StandardButton title="REGISTER" theme="dark" />
        </div>
      </form>
    </div>
  );
}
