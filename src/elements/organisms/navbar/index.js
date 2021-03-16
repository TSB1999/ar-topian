import React from "react";
import Logo from "../../atoms/logos";
import Options from "../../molecules/options";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className = "navbar__logo">
        <Logo />
      </div>
      <div className = "navbar__options">
        <Options />
      </div>
    </div>
  );
}
