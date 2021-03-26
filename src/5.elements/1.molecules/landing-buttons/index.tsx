import React from "react";
import StandardButton from "../../0.atoms/buttons/standard";
import { Link } from "react-router-dom";

export default function LandingButtons() {
  return (
    <div className="landing-buttons">
      <Link to="/register">
        <StandardButton title="REGISTER" theme="light" />
      </Link>
      <Link to="/sign-in">
        <StandardButton title="SIGN IN" theme="dark" />
      </Link>
    </div>
  );
}
