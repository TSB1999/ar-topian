import React from "react";
import Heading from "../../0.atoms/text/heading";
import SubHeading from "../../0.atoms/text/subheading";
import ButtonPair from "../../1.molecules/button-pair";

import "./styles.css";
export interface LandingProps {
  // label: string;
}

export const Landing: React.FC<LandingProps> = ({ ...props }) => {
  return (
    <div className="landing">
      <div style={{ marginBottom: "1rem" }}>
        <Heading label="Get your ARtopian merch now!" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <SubHeading label="BRING YOUR ITEMS TO LIFE" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <ButtonPair
          firstRoute="/register"
          secondRoute="/sign-in"
          lightLabel="Register"
          darkLabel="Sign In"
        />
      </div>
    </div>
  );
};

export default Landing;
