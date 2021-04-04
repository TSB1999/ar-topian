import React from "react";
import SubmitButton, { ButtonProps } from "../../0.atoms/buttons/submit/submit";
import { Link } from "react-router-dom";

export default function LandingButtons() {
  return (
    <div className="landing-buttons">
      <Link to="/register">
        <SubmitButton label="REGISTER" theme="light" />
      </Link>
      <Link to="/sign-in">
        <SubmitButton label="SIGN IN" theme="dark" />
      </Link>
    </div>
  );
}
