import React from "react";

const Header = (props) => {

  const addClass = (e) => {
    e.currentTarget.classList.toggle("is-active");
  }

  return (
    <header id="menu" className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <h1 className="navbar-brand header__logo">Weigh App</h1>
          <button
            onClick={addClass}
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
          {props.children}
        </nav>
      </div>
    </header>
  );
}

export default Header;
