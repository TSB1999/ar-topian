import React from "react";
import "./styles.css";

export interface ContainerProps {
  display: "flex" | "grid";
  backgroundColor?: string;
  color?: string;
  height: string;
  width: string;
  margin?: string;
  padding?: string;
  noOfColumns?: number;
  noOfRows?: number;
  justifyContent?: string;
  alignItems?: string;
}

export const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        display: props.display,
        gridTemplateColumns: `repeat(${props.noOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${props.noOfRows}, 1fr)`,
        height: props.height,
        width: props.width,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        padding: props.padding,
        margin: props.margin,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
