import React from "react";
import LandingButton from "../../molecules/landing-buttons";

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="landing__heading">Get your ARtopian merch now!</h1>
      <h3 className="landing__subheading">BRING YOUR ITEMS TO LIFE</h3>
      <div className="landing__buttons">
        <LandingButton />
      </div>
    </div>
  );
}
