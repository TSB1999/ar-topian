import React, { useContext } from "react";
import UserContext from "../../../1.stores/UserContext";
import SearchIcon from "../../0.atoms/icons/search";
import BasketIcon from "../../0.atoms/icons/basket";
import SignOutIcon from "../../0.atoms/icons/menu";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Options() {
  const { userData, setUserData } = useContext(UserContext);

  const logout = () => {
    setUserData({
      ...userData,
      loggedIn: false,
    });
  };
  return (
    <div className="options">
      <button style={{ background: "transparent", border: "none" }}>
        <SearchIcon size="small" />
      </button>
      <Link to="/basket">
        <button style={{ background: "transparent", border: "none" }}>
          <BasketIcon size="small" />
        </button>
      </Link>
      {userData.loggedIn ? (
        <text>test...</text>
      ) : (
        <button
          style={{ background: "transparent", border: "none" }}
          onClick={() => logout()}
        >
          <SignOutIcon size="small" />
        </button>
      )}
    </div>
  );
}
