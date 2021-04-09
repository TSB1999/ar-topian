import React from "react";
import ButtonPair from "../../1.molecules/button-pair";
import "./styles.css";

import { registrationFormContent } from "./utilities";

interface RegistrationProps {
  handleRegistrationChange: any;
  useSubmitRegistration: any;
}

export const RegistrationForm: React.FC<RegistrationProps> = ({
  handleRegistrationChange,
  useSubmitRegistration,
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
        {registrationFormContent(handleRegistrationChange).map(
          (section, key) => {
            return (
              <div className="registration-form">
                <label>{section.label}</label>
                <input
                  type={section.type}
                  name={section.name}
                  onChange={section.onChange}
                />
              </div>
            );
          }
        )}

        <div className="registration-form__buttons">
          <ButtonPair
            firstRoute="/"
            secondRoute="/"
            lightLabel="BACK"
            darkLabel="REGISTER"
            useSubmitRegistration={useSubmitRegistration}
          />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
