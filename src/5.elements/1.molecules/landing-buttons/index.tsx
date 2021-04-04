import React from "react";
import "./styles.scss";
import SubmitButton, { ButtonProps } from "../../0.atoms/buttons/submit";
import { BrowserRouter as Router, Link } from "react-router-dom";

export interface TextProps {
  lightLabel: string;
  darkLabel: string;
  firstRoute: string;
  secondRoute: string;
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({ ...props }) => {
  return (
    // <Router>
    <div className="landing-buttons">
      <div>
        <Link to={props.firstRoute}>
          <SubmitButton label={props.lightLabel} theme="light" />
        </Link>
      </div>
      <div>
        <Link to={props.secondRoute}>
          <SubmitButton label={props.darkLabel} theme="dark" />
        </Link>
      </div>
    </div>
    // </Router>
  );
};

export default ButtonPair;
