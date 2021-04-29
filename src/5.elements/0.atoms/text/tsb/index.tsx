import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Options() {
  return (
    <div className="options">
      <div
        style={{
          display: "flex",
          // background: "#1a1a1a",
          padding: "0.2rem",
          borderRadius: "0.4rem",
          width: "100%",
          justifyContent: "space-between",
          color: "#1a1a1a",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        developed by TSB M3DIA
      </div>
    </div>
  );
}
