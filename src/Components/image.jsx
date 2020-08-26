import React from "react";
import { Image, CloudinaryContext } from "cloudinary-react";

const ImageComp = ({ id = "", path = "" }) => (
  <div className="col-lg-3 col-md-6 col-sm-6 col-6">
    <CloudinaryContext cloud_name={id}>
      <Image className="img-fluid" publicId={path} alt="Demo"/>
    </CloudinaryContext>
  </div>
);

export default ImageComp;
