import React from "react";
import "./styles.css";

export interface ButtonProps {
  selected: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  // primary = false,
  selected = false,
  //   size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={["proceed-button"].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <div className="proceed-button__icon">
        <i className="fas fa-calendar-week "></i>
      </div>
      <div className="proceed-button__label">
        <div>{label}</div>
      </div>
    </button>
  );
};
