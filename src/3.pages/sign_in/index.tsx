import React from "react";
import SignInForm from "../../4.containers/signInFormView";
import Layout from "../../5.elements/0.atoms/containers/flex";
import Heading from "../../5.elements/0.atoms/text/heading";
import SubHeading from "../../5.elements/0.atoms/text/subheading";

export default function SIGNIN__PAGE() {
  return (
    <div style={{ padding: "1rem" }}>
      <Layout
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          color="#0F0F0F"
          textShadow="none"
          label="One step away from your experience!"
        />
        <SignInForm />
        <SubHeading label="DON'T HAVE AN ACCOUNT? REGISTER" />
      </Layout>
    </div>
  );
}
