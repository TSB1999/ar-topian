import React from "react";
import "./styles.css";

export interface ContainerProps {
  display: "flex" | "grid";
  backgroundColor?: string;
  height: string;
  width: string;
  noOfColumns?: number;
  justifyContent?: string;
  alignItems?: string;
}

export const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.backgroundColor,
        display: props.display,
        gridTemplateColumns: `repeat(${props.noOfColumns}, 1fr)`,
        height: props.height,
        width: props.width,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
