import React from "react";
import Search from "../../0.atoms/icons/search";
import Basket from "../../0.atoms/icons/basket";
import Menu from "../../0.atoms/icons/menu";
import { Link } from "react-router-dom";

export default function Options() {
  return (
    <div className="options">
      <Search size="medium" />
      {/* <Link to="/checkout"> */}
      <Basket size="medium" />
      {/* </Link> */}
      <Menu size="medium" />
    </div>
  );
}
