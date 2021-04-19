import React from "react";
import RegistrationForm from "../../4.containers/registrationFormView";
import Layout from "../../5.elements/0.atoms/containers/flex";
import Heading from "../../5.elements/0.atoms/text/heading";
import SubHeading from "../../5.elements/0.atoms/text/subheading";

export default function REGISTER__PAGE() {
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
        <RegistrationForm />
        <div style={{ marginTop: "1rem" }}>
          <SubHeading label="ALREADY HAVE AN ACCOUNT? SIGN IN" />
        </div>
      </Layout>
    </div>
  );
}
