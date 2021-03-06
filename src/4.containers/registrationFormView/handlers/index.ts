import axios from "axios";

export const updateRegistrationState = (
  e,
  key,
  registration,
  setRegistration
) => {
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
};
