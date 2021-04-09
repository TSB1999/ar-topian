import React, { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { REGISTER_USER } from "../../1.authentication";
import registration from "../../4.elements/2.organisms/registration";
interface RegistrationProps {
  username: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
}

const fetcher = (...args) => {
  axios
    .post(args[0], registration)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const useRegister = () => {
  const [registration, setRegistration] = useState<RegistrationProps>({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const { data, error } = useSWR(REGISTER_USER, fetcher);

  useEffect(() => {
    console.log(registration);
  }, [registration]);

  return {
    registration,
    handleRegistrationChange: (e, key) => {
      switch (key) {
        case "name":
          setRegistration({
            ...registration,
            username: e.target.value,
          });
          break;
        case "email":
          setRegistration({
            ...registration,
            email: e.target.value,
          });
          break;
        case "password":
          setRegistration({
            ...registration,
            password: e.target.value,
          });
          break;
        case "confirm_password":
          setRegistration({
            ...registration,
            confirmPassword: e.target.value,
          });
          break;
        default:
      }
    },
    useSubmitRegistration: () => console.log(data),
  };
};

export default useRegister;
