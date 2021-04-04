import React from "react";
import Landing from "../../2.organisms/landing";

export default function Home() {
  return (
    <div>
      <div
        style={{
          background: "#0F0F0F",
          color: "#fff",
          fontWeight: "bold",
          padding: "0.2rem",
          textAlign: "center",
        }}
      >
        Home
      </div>
      <Landing />
    </div>
  );
}
