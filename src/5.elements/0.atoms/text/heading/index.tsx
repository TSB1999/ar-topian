import React from "react";
import "./styles.css";

export interface TextProps {
  backgroundColor?: string;
  color?: string;
  textShadow?: string;
  label: string;
  onClick?: () => void;
}

export const Heading: React.FC<TextProps> = ({
  color,
  textShadow,
  label,
  ...props
}) => {
  return (
    <h1 className="heading-text" style={{ color, textShadow }}>
      {label}
    </h1>
  );
};

export default Heading;
