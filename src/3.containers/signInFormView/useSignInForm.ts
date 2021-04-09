import React, { useState, useEffect } from "react";
interface SignInProps {
  email: string | null;
  password: string | null;
}

export const useSignIn = () => {
  const [signIn, setSignIn] = useState<SignInProps>({
    email: null,
    password: null,
  });

  useEffect(() => {
    console.log(signIn);
  }, [signIn]);

  // Registration here (firebase)

  return {
    signIn,
    handleSignInChange: (e, key) => {
      switch (key) {
        case "email":
          setSignIn({
            ...signIn,
            email: e.target.value,
          });
          break;
        case "password":
          setSignIn({
            ...signIn,
            password: e.target.value,
          });
          break;
        default:
      }
    },
  };
};

export default useSignIn;
