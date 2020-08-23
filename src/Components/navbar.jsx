import React from "react";
import NavItem from "./navItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  let names = ["inicio", "galería", "nosotros"];

  return (
    <div className="menu navbar-collapse collapse" id="mobile">
      <ul className="navbar-nav ml-auto">
        {names.map((name, index) => (
          <NavItem key={index} data={name} />
        ))}
        <li className="nav-item">
          <Link className="nav-link menu--login fas fa-user-circle" to="/login" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
