import React from "react";
import Button from "../../0.atoms/buttons";
import { Link } from "react-router-dom";

export default function LandingButtons() {
  return (
    <div className="landing-buttons">
      <Link to="/register">
        <Button title="REGISTER" background="#fff" color="#000" />
      </Link>
      <Button title="SIGN IN" background="#000" color="#D8D8D8" />
    </div>
  );
}
