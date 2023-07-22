import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex">
      <NavLink to="" className="flex-initial p-3">
        Logo
      </NavLink>
      <div className="flex-auto"></div>
      <ul className="flex flex-none">
        <NavItem refa="" name="Page 1" />
        <NavItem refa="page2" name="Page 2" />
      </ul>
    </nav>
  );
}

// Componenete para reutilizar codigo
const NavItem = ({ refa = "", name = "Link" }) => {
  return (
    <li className="pt-3 flex-initial">
      <NavLink to={`/${refa}`} className="p-3">
        {name}
      </NavLink>
    </li>
  );
};

export default Navbar;
