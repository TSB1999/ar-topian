import React from "react";
import Button from "../../0.atoms/buttons";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <form
        className="sign-in"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
        }}
      >
        <label for="email">EMAIL</label>
        <input type="email" name="email" /**value */ />

        <label for="password">PASSWORD</label>
        <input type="password" name="password" /**value */ />

        <div className="sign-in__buttons">
          <Link to="/">
            <Button title="BACK" />
          </Link>
          <Button title="SIGN IN" />
        </div>
      </form>
    </div>
  );
}
