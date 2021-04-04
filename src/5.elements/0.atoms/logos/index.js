import React from "react";
import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "2.5rem",
        padding: "0.3rem",
      }}
    >
      {/* <Link to="/"> */}
      <h3 style={{ color: "#fff", fontFamily: "Helvetica" }}>ARtopian</h3>
      {/* </Link> */}
    </div>
  );
}
