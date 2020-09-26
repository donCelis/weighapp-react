import React from "react";
import { Image, CloudinaryContext } from "cloudinary-react";

const ImageComp = ({ id = "", path = "" }) => (
  <CloudinaryContext cloud_name={id}>
    <Image className="img-fluid" publicId={path} alt="Demo" />
  </CloudinaryContext>
);

export default ImageComp;
