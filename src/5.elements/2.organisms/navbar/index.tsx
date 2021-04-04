import React from "react";
import Logo from "../../0.atoms/logos";
import Options from "../../1.molecules/options";

import "./styles.css";
export interface Navbar {}

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="navbar__options">
        <Options />
      </div>
    </div>
  );
}
