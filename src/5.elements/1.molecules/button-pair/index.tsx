import React from "react";
import "./styles.scss";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

export interface TextProps {
  handleRegistrationSubmit?: any;
  handleSignInSubmit?: any;
  lightLabel: string;
  darkLabel: string;
  firstRoute: string;
  secondRoute: string;
  type: "register" | "sign in" | "other";
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({
  handleRegistrationSubmit,
  handleSignInSubmit,
  firstRoute,
  secondRoute,
  lightLabel,
  darkLabel,
  type,
}) => {
  return (
    <div className="buttons">
      <div>
        <Link to={firstRoute}>
          <SubmitButton label={lightLabel} theme="light" type={type} />
        </Link>
      </div>
      <div>
        <Link to={secondRoute}>
          <SubmitButton
            type={type}
            label={darkLabel}
            theme="dark"
            handleRegistrationSubmit={handleRegistrationSubmit}
            handleSignInSubmit={handleSignInSubmit}
          />
        </Link>
      </div>
    </div>
  );
};

export default ButtonPair;
