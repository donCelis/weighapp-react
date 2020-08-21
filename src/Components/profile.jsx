import React, { Fragment } from "react";
import photo from "../assets/img/danny.jpg";

const Profile = () => {
  return (
    <Fragment>
      <section className="row no-gutters mb-4">
        <div className="col">
          <div>
            <picture>
              <img
                className="img-fluid rounded-circle"
                src={photo}
                alt="Alexander Celis"
              />
            </picture>
            <h3 className="mt-4 profile">Alexander Celis</h3>
          </div>
        </div>
      </section>
      <section className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-4 mb-3">
          <div>
            <h3>Ubicación</h3>
            <p>Calle 54A No. 30 - 01<br/>Medellín - Colombia</p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4 mb-3">
          <div>
            <h3>Contacto</h3>
            <p>Celular: (+57) 300-875-4649<br/>Correo: contacto@weighapps.com</p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4 mb-3">
          <div>
            <h3>Redes Sociales</h3>
            <div className="row justify-content-center">
              <div className="col-2">
                <a rel="noopener noreferrer" href="https://www.facebook.com/d0nCelis" target="_blank"><i className="fab fa-facebook"></i></a>
              </div>
              <div className="col-2">
                <a rel="noopener noreferrer" href="https://web.whatsapp.com/"><i className="fab fa-whatsapp-square"></i></a>
              </div>
              <div className="col-2">
                <a rel="noopener noreferrer" href="https://www.instagram.com/d0nCelis/"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
