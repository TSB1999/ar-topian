import React, { useState, useEffect } from "react";
import { REGISTER_USER } from "../1.authentication";
interface RegistrationProps {
  name: string | null;
  email: string | null;
  password: string | null;
  confirm_password: string | null;
}

export const useRegister = () => {
  const [registration, setRegistration] = useState<RegistrationProps>({
    name: null,
    email: null,
    password: null,
    confirm_password: null,
  });

  useEffect(() => {
    console.log(registration);
  }, [registration]);

  // Registration here (firebase)

  return {
    registration,
    handleRegistrationChange: (e, key) => {
      switch (key) {
        case "name":
          setRegistration({
            ...registration,
            name: e.target.value,
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
            confirm_password: e.target.value,
          });
          break;
        default:
      }
    },
  };
};

export default useRegister;
