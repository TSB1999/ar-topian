import React from "react";

export interface FlexProps {
  flexDirection: any;
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  flex: number;
}

export const FlexContainer: React.FC<FlexProps> = ({
  flexDirection,
  backgroundColor,
  color,
  margin,
  padding,
  justifyContent,
  alignItems,
  children,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
