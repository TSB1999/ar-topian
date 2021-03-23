import React from "react";
import { Link } from "react-router-dom";

export function Search() {
  return (
    <div>
      <i class="options__search fas fa-search"></i>
    </div>
  );
}

export function Basket() {
  return (
    <div>
      <Link to="/checkout">
        <i class="options__basket fas fa-shopping-basket"></i>
      </Link>
    </div>
  );
}

export function Menu() {
  return (
    <div>
      <i class="options__menu fas fa-ellipsis-v"></i>
    </div>
  );
}
