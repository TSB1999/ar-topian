import React from "react";
import Button from "../../0.atoms/buttons";

export default function Registration() {
  return (
    <div>
      <form
        className="registration"
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

        <div className="registration__buttons">
          <Button title="BACK" />
          <Button title="REGISTER" />
        </div>
      </form>
    </div>
  );
}
