import React from "react";

function Navbar() {
  return (
    <div className="menu navbar-collapse collapse" id="mobile">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#inicio" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="#galeria" className="nav-link">
            Galería
          </a>
        </li>
        <li className="nav-item">
          <a href="#nosotros" className="nav-link">
            Nosotros
          </a>
        </li>
        <li className="nav-item">
          <a href="#contacto" className="nav-link">
            Contacto
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link menu--login fas fa-user-circle"></a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
