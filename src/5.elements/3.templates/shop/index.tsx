import React from "react";
import Sort from "../../1.molecules/sorting-filter";

export default function Shop() {
  return (
    <div
      style={{
        background: "#737373",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Shop
      <Sort setting="high to low" />
    </div>
  );
}
