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
      <div style={{ marginBottom: "1rem" }}>
        <Heading label="Get your ARtopian merch now!" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <SubHeading label="BRING YOUR ITEMS TO LIFE" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        {userData.loggedIn ? (
          <div className="landing__buttons">
            <div>
              <Link to="/ar-topian">
                <SubmitButton label="ARtopian" theme="light" type="other" />
              </Link>
            </div>
            <div>
              <Link to="/shop">
                <SubmitButton type="other" label="Shop" theme="dark" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="landing__buttons">
            <div>
              <Link to="/register">
                <SubmitButton label="Register" theme="light" type="other" />
              </Link>
            </div>
            <div>
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
