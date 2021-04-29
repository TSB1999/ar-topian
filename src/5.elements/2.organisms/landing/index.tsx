import React, { useContext } from "react";
import UserContext from "../../../1.stores/UserContext";
import Heading from "../../0.atoms/text/heading";
import SubHeading from "../../0.atoms/text/subheading";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";

import "./styles.css";
export interface LandingProps {}

export const Landing: React.FC<LandingProps> = ({ ...props }) => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div className="landing">
      <div style={{ marginBottom: "1rem", padding: "0 1rem" }}>
        <Heading
          label="Bring it to life with ARtopian..."
          textShadow="0.5rem 0.4rem 0.3rem #000"
          fontFamily="Arial Rounded MT Bold"
        />
      </div>
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542810205-0a5b379f9c52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80"
          style={{
            height: "70%",
            width: "70%",
            borderRadius: "0.4rem",
            boxShadow: "0.5rem 0.5rem 0.3rem #292929",
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        {userData.loggedIn ? (
          <div className="landing__buttons">
            <div style={{ margin: "1rem" }}>
              <Link to="/ar-topian">
                <SubmitButton label="ARtopian" theme="light" type="other" />
              </Link>
            </div>
            <div style={{ margin: "1rem" }}>
              <Link to="/shop">
                <SubmitButton type="other" label="Shop" theme="dark" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="landing__buttons">
            <div style={{ margin: "1rem" }}>
              <Link to="/register">
                <SubmitButton label="Register" theme="light" type="other" />
              </Link>
            </div>
            <div style={{ margin: "1rem" }}>
              <Link to="/sign-in">
                <SubmitButton type="other" label="Sign In" theme="dark" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
