import React from "react";
import SignInForm from "../../5.elements/2.organisms/sign_in";
import useSignInForm from "./useSignInForm";

export default function SignInFormView() {
  const { ...props } = useSignInForm();
  return <SignInForm {...props} />;
}
