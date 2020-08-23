import React from "react";

const Image = ({ data = "" }) => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
    <div>
      <img className="img-fluid" src={data} alt="Demostración" />
    </div>
  </div>
);

export default Image;
