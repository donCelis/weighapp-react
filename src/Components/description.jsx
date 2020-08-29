import React from "react";
import { Image } from "cloudinary-react";

const Description = () => {
  const logo =
    "assets/img/logo_jo6jmu.svg";
  return (
    <section id="inicio">
      <div className="description">
        <h2 className="description__logo">
          <div>
            <Image cloud_name={"weighappdzk6edcxp"} publicId={logo} alt="Weigh App"/>
          </div>
          <span className="txtBlanco">Weigh App</span>
        </h2>
        <div className="description__text">
          <span>Lo que usted necesita</span>
          <p className="description__text--lh-1">
            es tener un control y manejo de sus registros de pesaje
            automatizado.
          </p>
          <p>La solución está con nosotros.</p>
        </div>
      </div>
    </section>
  );
};

export default Description;
