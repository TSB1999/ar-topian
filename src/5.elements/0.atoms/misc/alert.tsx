import React from "react";

export default function alert() {
  return (
    <div
      style={{
        background: "#0F0F0F",
        color: "#737373",
        fontSize: "0.8rem",
        fontWeight: 600,
        padding: "0.5rem",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Arial Rounded MT Bold",
        textShadow: "0.1rem 0.1rem 0.2rem #07081f",
      }}
    >
      Next day delivery available!
    </div>
  );
}
