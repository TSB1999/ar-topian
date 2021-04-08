import React from "react";
import Register from "../../4.elements/3.templates/register";
import useRegister from "../../5.hooks/useRegister";

export default function REGISTER__PAGE() {
  const { ...props } = useRegister();
  return (
    <div>
      <Register {...props} />
    </div>
  );
}
