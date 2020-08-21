import React from "react";

const Navbar = (props) => {
  let names = ["inicio", "galería", "nosotros"];

  return (
    <div className="menu navbar-collapse collapse" id="mobile">
      <ul className="navbar-nav ml-auto">
        {names.map((name, index) => (
          <li key={index} className="nav-item">
            <a href={`#${name}`} className="nav-link" aria-label={name}>
              {name}
            </a>
          </li>
        ))}

        <li className="nav-item">
          <a href="#" className="nav-link menu--login fas fa-user-circle"></a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
