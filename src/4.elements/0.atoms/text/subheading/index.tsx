import React from "react";
import "./styles.css";

export interface TextProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const SubHeading: React.FC<TextProps> = ({
  backgroundColor,
  label,
  ...props
}) => {
  return <h1 className="subheading-text">{label}</h1>;
};

export default SubHeading;
