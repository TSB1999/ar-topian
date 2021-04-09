import React, { useState, useEffect, useContext } from "react";
import { REGISTER_ROUTE } from "../../0.api";
import { updateRegistrationState } from "./handlers";
import { createUser } from "../../2.authentication";
import UserContext from "../../1.stores/UserContext";

interface RegistrationState {
  username: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

export const useRegister = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [registrationForm, setRegistrationForm] = useState<RegistrationState>({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(registrationForm);
  }, [registrationForm]);

  const handleRegistrationChange = (e, key) =>
    updateRegistrationState(e, key, registrationForm, setRegistrationForm);

  const handleRegistrationSubmit = () => {
    setUserData({
      ...userData,
      loading: true,
    });
    createUser(REGISTER_ROUTE, registrationForm);
    setUserData({
      ...userData,
      loggedIn: true,
      username: registrationForm.username,
    });
  };

  return {
    handleRegistrationChange,
    handleRegistrationSubmit,
  };
};

export default useRegister;
