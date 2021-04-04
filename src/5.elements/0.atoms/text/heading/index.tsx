import React from "react";
import "./styles.css";

export interface TextProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Heading: React.FC<TextProps> = ({
  backgroundColor,
  label,
  ...props
}) => {
  return <h1 className="heading-text">{label}</h1>;
};

export default Heading;
