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
  const mode = selected ? "size-button--selected" : "size-button--unselected";
  return (
    <button
      type="button"
      className={["size-button", mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
