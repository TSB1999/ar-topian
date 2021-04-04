import React from "react";
import "./styles.scss";
import SubmitButton, { ButtonProps } from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

export interface TextProps {
  lightLabel: string;
  darkLabel: string;
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({ ...props }) => {
  return (
    <div className="landing-buttons">
      <div>
        {/* <Link to="/register"> */}
        <SubmitButton label={props.lightLabel} theme="light" />
        {/* </Link> */}
      </div>
      <div>
        {/* <Link to="/sign-in"> */}
        <SubmitButton label={props.darkLabel} theme="dark" />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ButtonPair;
