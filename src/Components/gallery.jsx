import React from "react";
import Image from "./image";
import img1 from "../assets/img/small/1.png";
import img2 from "../assets/img/small/2.png";
import img3 from "../assets/img/small/3.png";
import img4 from "../assets/img/small/4.png";

const Gallery = () => {
  let images = [];
  images.push(img1, img2, img3, img4);
  return (
    <section className="row no-gutters">
      {images.map((img, index) => (
        <Image key={index} data={img} />
      ))}
    </section>
  );
};

export default Gallery;
