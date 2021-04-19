import React from "react";
import SearchIcon from "../../0.atoms/icons/search";
import BasketIcon from "../../0.atoms/icons/basket";
import MenuIcon from "../../0.atoms/icons/menu";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Options() {
  return (
    <div className="options">
      <SearchIcon size="small" />
      <Link to="/basket">
        <BasketIcon size="small" />
      </Link>
      <MenuIcon size="small" />
    </div>
  );
}
