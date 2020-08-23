import React from "react";

const Socials = () => (
  <div>
    <h3>Redes Sociales</h3>
    <div className="row justify-content-center">
      <div className="col-2">
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/d0nCelis"
          target="_blank"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="col-2">
        <a rel="noopener noreferrer" href="https://web.whatsapp.com/">
          <i className="fab fa-whatsapp-square"></i>
        </a>
      </div>
      <div className="col-2">
        <a rel="noopener noreferrer" href="https://www.instagram.com/d0nCelis/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Socials;
