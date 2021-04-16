import React from "react";
import "./styles.css";

export interface ButtonProps {
  type: "register" | "sign in" | "other";
  handleRegistrationSubmit?: any;
  handleSignInSubmit?: any;
  theme: "light" | "dark";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const SubmitButton: React.FC<ButtonProps> = ({
  // primary = false,
  theme = "dark",
  size = "medium",
  backgroundColor,
  label,
  handleRegistrationSubmit,
  handleSignInSubmit,
  type,
  ...props
}) => {
  const mode =
    type === "register" ? handleRegistrationSubmit : handleSignInSubmit;
  return (
    <button
      type="button"
      className={[
        "submit-button",
        `submit-button--${size}`,
        `submit-button--${theme}`,
      ].join(" ")}
      style={{ backgroundColor }}
      onClick={mode}
      {...props}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
