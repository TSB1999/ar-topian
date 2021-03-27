import React, { useContext, useState } from "react";
import Home from "../../5.elements/3.templates/home";
import { UserContext } from "../../0.stores/UserContext";
// import UserStore from "../../0.stores/UserStore";

export default function HOME__PAGE() {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div>
      <Home />
    </div>
  );
}
