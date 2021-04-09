import React from "react";
import "./styles.css";

export interface ButtonProps {
  useSubmitRegistration?: any;
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
  useSubmitRegistration,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "submit-button",
        `submit-button--${size}`,
        `submit-button--${theme}`,
      ].join(" ")}
      style={{ backgroundColor }}
      onClick={useSubmitRegistration}
      {...props}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
