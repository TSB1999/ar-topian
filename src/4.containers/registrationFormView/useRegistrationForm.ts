import React, { useState, useEffect, useContext } from "react";
import { REGISTER_ROUTE } from "../../0.api";
import { updateRegistrationState } from "./handlers";
import { createUser } from "../../2.authentication";
import UserContext from "../../1.stores/UserContext";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();

  const handleRegistrationChange = (e, key) =>
    updateRegistrationState(e, key, registrationForm, setRegistrationForm);

  async function handleRegistrationSubmit() {
    setUserData({
      ...userData,
      loading: true,
    });
    const data = await createUser(REGISTER_ROUTE, registrationForm);
    if (data !== false) {
      setUserData({
        ...userData,
        loggedIn: true,
        username: registrationForm.username,
      });

      history.push("/");
    } else {
      // alert("somethings wrong");
    }
  }

  return {
    handleRegistrationChange,
    handleRegistrationSubmit,
  };
};

export default useRegister;
