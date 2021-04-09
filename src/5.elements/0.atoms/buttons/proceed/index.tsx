import React from "react";
import "./styles.css";

export interface ButtonProps {
  selected?: boolean;
  backgroundColor?: string;
  label: string;
  icon: string;
  onClick?: () => void;
}

export const ProceedButton: React.FC<ButtonProps> = ({
  selected = false,
  backgroundColor,
  label,
  icon,
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
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="proceed-button__label">
        <div>{label}</div>
      </div>
    </button>
  );
};

export default ProceedButton;
