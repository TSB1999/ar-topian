import React, { useState, useEffect } from "react";
import { REGISTER_ROUTE } from "../../1.authentication";
import { createUser, updateRegistrationState } from "./handlers";
interface RegistrationState {
  username: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

export const useRegister = () => {
  const [registrationForm, setRegistrationForm] = useState<RegistrationState>({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const handleRegistrationSubmit = () =>
    createUser(REGISTER_ROUTE, registrationForm);

  const handleRegistrationChange = (e, key) =>
    updateRegistrationState(e, key, registrationForm, setRegistrationForm);

  useEffect(() => {
    console.log(registrationForm);
  }, [registrationForm]);

  return {
    handleRegistrationChange,
    handleRegistrationSubmit,
  };
};

export default useRegister;
