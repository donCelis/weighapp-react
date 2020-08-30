import React from "react";
import { ImageComp } from "./";

const Gallery = () => {
  const images = [
    "assets/img/small/1_umwetq",
    "assets/img/small/2_jriefw",
    "assets/img/small/3_dkyxtm",
    "assets/img/small/4_h9w1hy",
  ];
  
  return (
    <section className="row no-gutters">
      {images.map((img, index) => (
        <ImageComp key={index} id={"weighappdzk6edcxp"} path={img}/>
      ))}
    </section>
  );
};

export default Gallery;
