import React from "react";
import "./styles.css";

export interface ButtonProps {
  selected: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const SizeButton: React.FC<ButtonProps> = ({
  selected,
  backgroundColor,
  label,
  onClick,
  ...props
}) => {
  const mode = selected ? "size-button--selected" : "size-button--unselected";
  return (
    <button
      type="button"
      className={["size-button", mode].join(" ")}
      onClick={onClick}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default SizeButton;
