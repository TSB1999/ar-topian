import React from "react";

export interface GridProps {
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  noOfColumns?: number;
  noOfRows?: number;
}

export const GridContainer: React.FC<GridProps> = ({
  backgroundColor,
  color,
  margin,
  padding,
  justifyContent,
  alignItems,
  children,
  noOfColumns,
  noOfRows,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        display: "grid",
        height: "100%",
        width: "100%",
        gridTemplateColumns: `repeat(${noOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfRows}, 1fr)`,
        backgroundColor,
        padding,
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
