import React from "react";
import ButtonPair from "../../1.molecules/landing-buttons";
import "./styles.css";

interface RegistrationProps {
  handleRegistrationChange: any;
}

export const RegistrationElement: React.FC<RegistrationProps> = ({
  handleRegistrationChange,
  ...props
}) => {
  return (
    <div>
      <form
        className="registration-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
        }}
      >
        <label>FULL NAME</label>
        <input
          type="text"
          name="name"
          onChange={(e) => handleRegistrationChange(e, "name")}
        />

        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          onChange={(e) => handleRegistrationChange(e, "email")}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          onChange={(e) => handleRegistrationChange(e, "password")}
        />

        <label>CONFIRM PASSWORD</label>
        <input
          type="password"
          name="confirm_password"
          onChange={(e) => handleRegistrationChange(e, "confirm_password")}
        />

        <div className="registration-form__buttons">
          <ButtonPair
            firstRoute="/"
            secondRoute="/"
            lightLabel="BACK"
            darkLabel="REGISTER"
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationElement;
