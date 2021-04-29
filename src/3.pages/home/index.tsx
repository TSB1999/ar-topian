import React, { useContext } from "react";
import Landing from "../../5.elements/2.organisms/landing";
import { UserContext } from "../../1.stores/UserContext";
import { Link } from "react-router-dom";

export default function HOME__PAGE() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div style={{ minHeight: "100vh", background: "#000" }}>
      <Landing />
      <div style={{ background: "#292929", height: "20vh" }}></div>
      <div style={{ background: "#1a1a1a", height: "20vh" }}></div>
      <div style={{ background: "#000", height: "20vh" }}></div>
    </div>
  );
}
