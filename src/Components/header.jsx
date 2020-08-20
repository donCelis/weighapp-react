import React, { useEffect } from "react";
import Navbar from "./navbar";

function Header() {
  useEffect(() => {
    document.querySelector(".hamburger").addEventListener("click", function () {
      this.classList.toggle("is-active");
    });
  }, []);
  return (
    <header id="menu" className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <h1 className="navbar-brand header__logo">Weigh App</h1>
          <button
            className="hamburger hamburger--spin navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile"
            aria-expanded="false"
            aria-controls="mobile"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <Navbar />
        </nav>
      </div>
    </header>
  );
}

export default Header;
