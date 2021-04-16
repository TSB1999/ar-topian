import React from "react";
import SubmitButton from "../../0.atoms/buttons/submit";
import "./styles.css";
import { Link } from "react-router-dom";
import { registrationFormContent } from "./utilities";

interface RegistrationProps {
  handleRegistrationChange: any;
  handleRegistrationSubmit: any;
  registrationForm: any;
}

export const RegistrationForm: React.FC<RegistrationProps> = ({
  handleRegistrationChange,
  handleRegistrationSubmit,
  registrationForm,
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
              <div className="registration-form" key={key}>
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
          <div>
            <Link to="/">
              <SubmitButton label="Back" theme="light" type="other" />
            </Link>
          </div>
          <div>
            <SubmitButton
              type="register"
              label="Register"
              theme="dark"
              handleRegistrationSubmit={handleRegistrationSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
