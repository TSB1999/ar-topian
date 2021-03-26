import React from "react";

export default function Search({ ...props }) {
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
}
