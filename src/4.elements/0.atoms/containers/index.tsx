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
  noOfColumns,
  noOfRows,
  children,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        gridTemplateColumns: `repeat(${noOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfRows}, 1fr)`,
        ...props,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
