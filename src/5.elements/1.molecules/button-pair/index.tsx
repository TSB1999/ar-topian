import React from "react";
import "./styles.scss";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

export interface TextProps {
  lightLabel: string;
  darkLabel: string;
  firstRoute: string;
  secondRoute: string;
  onClick?: () => void;
}

export const ButtonPair: React.FC<TextProps> = ({ ...props }) => {
  return (
    <div className="buttons">
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
  );
};

export default ButtonPair;
