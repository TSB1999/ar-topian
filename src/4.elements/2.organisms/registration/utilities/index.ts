export const registrationFormContent = (handleRegistrationChange) => [
  {
    label: "USERNAME",
    type: "text",
    name: "name",
    onChange: (e) => handleRegistrationChange(e, "name"),
  },
  {
    label: "EMAIL",
    type: "email",
    name: "email",
    onChange: (e) => handleRegistrationChange(e, "email"),
  },
  {
    label: "PASSWORD",
    type: "password",
    name: "password",
    onChange: (e) => handleRegistrationChange(e, "password"),
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
    name: "confirm_password",
    onChange: (e) => handleRegistrationChange(e, "confirm_password"),
  },
];
