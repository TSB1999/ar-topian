import React from "react";

export interface GridProps {
  flexDirection: any;
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  noOfColumns?: number;
  noOfRows?: number;
  flex: number;
}

export const GridContainer: React.FC<GridProps> = ({
  flexDirection,
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
      }}
    >
      {children}
    </div>
  );
};

export default GridContainer;
