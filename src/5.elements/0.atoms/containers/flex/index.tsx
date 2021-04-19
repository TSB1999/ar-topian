import React from "react";

export interface FlexProps {
  flexDirection: any;
  backgroundColor?: string;
  color?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  flex?: number;
  height?: string;
}

export const FlexContainer: React.FC<FlexProps> = ({
  flexDirection,
  backgroundColor,
  color,
  margin,
  padding,
  justifyContent,
  alignItems,
  height,
  children,
  ...props
}) => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection,
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor,
        padding,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
