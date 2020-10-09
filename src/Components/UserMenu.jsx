import React from "react";

const UserMenu = () => {
  return (
    <div className="menu navbar-collapse collapse" id="mobile">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item text-center">
          <button className="btn d-inline-flex align-items-center text-light">
            <div className="mr-3"><img className="img-fluid rounded-circle" src="https://lh3.googleusercontent.com/a-/AAuE7mBd8R2eyFheqihFu1TV4QCs6pwbg369VlCjWctD-A=s96" alt="Alexander Celis"/></div>
            <p className="m-0">Alexander Celis</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
