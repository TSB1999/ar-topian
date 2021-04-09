import React from "react";
import RegistrationForm from "../../4.containers/registrationFormView";
import Layout from "../../5.elements/0.atoms/containers";
import Heading from "../../5.elements/0.atoms/text/heading";
import SubHeading from "../../5.elements/0.atoms/text/subheading";

export default function REGISTER__PAGE() {
  return (
    <Layout
      display="flex"
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
      <SubHeading label="ALREADY HAVE AN ACCOUNT? SIGN IN" />
    </Layout>
  );
}
