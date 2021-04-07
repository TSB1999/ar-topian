import React from "react";
import Search from "../../0.atoms/icons/search";
import Basket from "../../0.atoms/icons/basket";
import Menu from "../../0.atoms/icons/menu";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Options() {
  return (
    <div className="options">
      <Search size="small" />
      <Link to="/checkout">
        <Basket size="small" />
      </Link>
      <Menu size="small" />
    </div>
  );
}
