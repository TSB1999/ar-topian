import React from "react";
import SubmitButton from "../../0.atoms/buttons/submit";
import { Link } from "react-router-dom";
import "./styles.css";

interface RegistrationProps {
  handleSignInChange: any;
  handleSignInSubmit: any;
}

export const SignInForm: React.FC<RegistrationProps> = ({
  handleSignInChange,
  handleSignInSubmit,
}) => {
  return (
    <div>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hi");
        }}
      >
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          onChange={(e) => handleSignInChange(e, "email")}
        />

        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          onChange={(e) => handleSignInChange(e, "password")}
        />

        <div className="sign-in-form__buttons">
          <div>
            <Link to="/">
              <SubmitButton label="back" theme="light" type="other" />
            </Link>
          </div>
          <div>
            <SubmitButton
              type="sign in"
              label="Sign In"
              theme="dark"
              handleSignInSubmit={handleSignInSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
