import React, { useContext } from "react";
import RegistrationForm from "../../5.elements/2.organisms/registration";
import useRegistrationForm from "./useRegistrationForm";

export default function RegistrationFormView() {
  const { ...props } = useRegistrationForm();
  return <RegistrationForm {...props} />;
}
