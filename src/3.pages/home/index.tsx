import React, { useContext } from "react";
import Landing from "../../5.elements/2.organisms/landing";
import { UserContext } from "../../1.stores/UserContext";
import { Link } from "react-router-dom";

export default function HOME__PAGE() {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div style={{ padding: "1rem", background: "#737373" }}>
      <Landing />
      <Link to="/admin">ce</Link>
    </div>
  );
}
