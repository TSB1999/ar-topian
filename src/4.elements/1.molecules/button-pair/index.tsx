import React from "react";
import "./styles.scss";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

export interface TextProps {
  handleRegistrationSubmit?: any;
  lightLabel: string;
  darkLabel: string;
  firstRoute: string;
  secondRoute: string;
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({
  handleRegistrationSubmit,
  firstRoute,
  lightLabel,
  darkLabel,
}) => {
  return (
    <div className="buttons">
      <div>
        <Link to={firstRoute}>
          <SubmitButton label={lightLabel} theme="light" />
        </Link>
      </div>
      <div>
        {/* <Link to={props.secondRoute}> */}
        <SubmitButton
          label={darkLabel}
          theme="dark"
          useSubmitRegistration={handleRegistrationSubmit}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ButtonPair;
