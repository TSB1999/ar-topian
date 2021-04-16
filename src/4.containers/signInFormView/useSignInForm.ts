import React, { useState, useEffect, useContext } from "react";
import { logInUser } from "../../2.authentication";

import UserContext from "../../1.stores/UserContext";
import { useHistory } from "react-router-dom";

interface SignInProps {
  email: string | null;
  password: string | null;
}

export const useSignIn = () => {
  const [signInForm, setSignInForm] = useState<SignInProps>({
    email: null,
    password: null,
  });

  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    console.log(signInForm);
  }, [signInForm]);

  const history = useHistory();

  const handleSignInChange = (e, key) => {
    switch (key) {
      case "email":
        setSignInForm({
          ...signInForm,
          email: e.target.value,
        });
        break;
      case "password":
        setSignInForm({
          ...signInForm,
          password: e.target.value,
        });
        break;
      default:
    }
  };

  async function handleSignInSubmit() {
    // setUserData({
    //   ...userData,
    //   loading: true,
    // });
    const data = await logInUser(signInForm);
    if (data !== false) {
      setUserData({
        ...userData,
        loggedIn: true,
        // username: si.username,
      });
      history.push("/");
    } else {
      // alert("somethings wrong");
    }
  }

  return {
    handleSignInChange,
    handleSignInSubmit,
  };
};

export default useSignIn;
