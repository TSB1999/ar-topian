import React, { useContext } from "react";
import UserContext from "../../../1.stores/UserContext";
import CameraIcon from "../../0.atoms/icons/camera";
import BasketIcon from "../../0.atoms/icons/basket";
import SignInIcon from "../../0.atoms/icons/sign_in";
import SignOutIcon from "../../0.atoms/icons/sign_out";
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
      <div
        style={{
          background: "#1a1a1a",
          padding: "0.2rem",
          borderRadius: "0.4rem",
        }}
      >
        <Link to="/basket">
          <button style={{ background: "transparent", border: "none" }}>
            <CameraIcon size="small" />
          </button>
        </Link>

        <Link to="/basket">
          <button style={{ background: "transparent", border: "none" }}>
            <BasketIcon size="small" />
          </button>
        </Link>

        {userData.loggedIn ? (
          <button
            onClick={() => logout()}
            style={{ background: "transparent", border: "none" }}
          >
            <SignOutIcon size="small" />
          </button>
        ) : (
          <Link to="/sign-in">
            <button style={{ background: "transparent", border: "none" }}>
              <SignInIcon size="small" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
