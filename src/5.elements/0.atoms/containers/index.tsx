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

export const Container: React.FC<ContainerProps> = ({
  display,
  backgroundColor,
  color,
  height,
  width,
  noOfColumns,
  noOfRows,
  padding,
  justifyContent,
  alignItems,
  margin,
  children,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: backgroundColor,
        color: color,
        display: display,
        gridTemplateColumns: `repeat(${noOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfRows}, 1fr)`,
        height: height,
        width: width,
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
