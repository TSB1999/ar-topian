import React from "react";
import "./styles.css";

export default function Basket({ ...props }) {
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
  return <i class={["basket", "fas fa-shopping-basket", size].join(" ")}></i>;
}
