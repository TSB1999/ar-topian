import React from "react";
import "./styles.css";

export interface ContainerProps {
  display: "flex" | "grid";
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  flexDirection?: any;
  alignItems?: string;
  gridTemplateRows?: string;
  gridTemplateColumns?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div
      className="container"
      style={{
        height: "100%",
        width: "100%",
        ...props,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
