import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ ...props }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.3rem",
        height: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#1a1a1a",
          padding: "0.2rem",
          borderRadius: "0.4rem",
          minWidth: "4rem",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <text
            style={{
              color: "#fff",
              fontFamily: "Arial Rounded MT Bold",
              fontWeight: "bold",
              fontSize: "1.2rem",
              ...props,
            }}
          >
            AR
          </text>
        </Link>
      </div>
    </div>
  );
}
