import React, { useState } from "react";
import ImageComp from "./image";

const Gallery = () => {
  let [images] = useState("");

  images = [
    "assets/img/small/1_umwetq.png",
    "assets/img/small/2_jriefw.png",
    "assets/img/small/3_dkyxtm.png",
    "assets/img/small/4_h9w1hy.png",
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
