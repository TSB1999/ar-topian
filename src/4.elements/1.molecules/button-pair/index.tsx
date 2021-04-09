import React from "react";
import "./styles.scss";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

export interface TextProps {
  useSubmitRegistration?: any;
  lightLabel: string;
  darkLabel: string;
  firstRoute: string;
  secondRoute: string;
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({
  useSubmitRegistration,
  ...props
}) => {
  return (
    <div className="buttons">
      <div>
        <Link to={props.firstRoute}>
          <SubmitButton label={props.lightLabel} theme="light" />
        </Link>
      </div>
      <div>
        {/* <Link to={props.secondRoute}> */}
        <SubmitButton
          label={props.darkLabel}
          theme="dark"
          useSubmitRegistration={useSubmitRegistration}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ButtonPair;
