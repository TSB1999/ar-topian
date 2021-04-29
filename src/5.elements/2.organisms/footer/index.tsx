import React from "react";
import Logo from "../../0.atoms/logos";
import TSB from "../../0.atoms/text/tsb";

import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Logo color="black" />
      </div>
      <div className="footer__options">
        <TSB />
      </div>
    </div>
  );
}
