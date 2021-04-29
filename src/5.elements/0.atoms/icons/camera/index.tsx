import React from "react";
import "./styles.css";

interface IconProps {
  size: "small" | "medium" | "large";
}

export const CameraIcon: React.FC<IconProps> = ({ ...props }) => {
  let size;
  switch (props.size) {
    case "small":
      size = "fa-1x";
      break;
    case "medium":
      size = "fa-2x";
      break;
    case "large":
      size = "fa-3x";
      break;
    default:
    // code block
  }
  return <i className={["camera", "fas fa-camera", size].join(" ")}></i>;
};

export default CameraIcon;
