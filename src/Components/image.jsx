import React from "react";
import { Image } from "cloudinary-react";

const ImageComp = ({ data = "" }) => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
    <div>
      <Image className="img-fluid" src={data} alt="Demostración" />
    </div>
  </div>
);

export default ImageComp;
