import React from "react";
import "./styles.css";

export default function StandardButton({ title, theme, ...props }) {
  const mode = theme === "light" ? "button--light" : "button--dark";
  return (
    <button className={["button", mode].join(" ")}>
      <h1>{title}</h1>
    </button>
  );
}
