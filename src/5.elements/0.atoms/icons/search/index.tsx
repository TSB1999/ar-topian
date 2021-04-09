import React from "react";
import "./styles.css";

interface IconProps {
  size: "small" | "medium" | "large";
}

export const SearchIcon: React.FC<IconProps> = ({ ...props }) => {
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
  return <i className={["search", "fas fa-search", size].join(" ")}></i>;
};

export default SearchIcon;
