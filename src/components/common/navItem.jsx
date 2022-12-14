import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ text, path, icon }) => {
  return (
    <li className="mr-3">
      <NavLink className="link-primary link-hover py-2 px-4" to={path}>
        {icon}
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
