import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import image from "../assets/error-404.svg";
import { Image } from "cloudinary-react";
import Preloader from "../Components/preloader";

const Error404 = () => {
  return (
    <Fragment>
      <Helmet>
        <title>404 Error!</title>
      </Helmet>
      <section className="error404">
        <section className="container text-center">
          <div className="row no-gutters justify-content-center align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="error404_element">
                <Image className="img-fluid" src={image} />
                <h5 className="mt-4 mb-0">Página no encontrada.</h5>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Preloader />
    </Fragment>
  );
};

export default Error404;
