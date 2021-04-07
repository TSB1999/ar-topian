import React from "react";
import Register from "../../5.elements/3.templates/register";
import useRegister from "../../3.hooks/useRegister";

export default function REGISTER__PAGE() {
  const { ...props } = useRegister();
  return (
    <div>
      <Register {...props} />
    </div>
  );
}
