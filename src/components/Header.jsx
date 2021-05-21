import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active" exact>
        About
      </NavLink>
    </header>
  );
}

export default Header;
