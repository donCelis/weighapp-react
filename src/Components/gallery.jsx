import React from "react";
import ImageComp from "./image";

const Gallery = () => {
  let images = [
    "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1598388916/assets/img/small/1_umwetq.png",
    "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1598388916/assets/img/small/2_jriefw.png",
    "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1598388916/assets/img/small/3_dkyxtm.png",
    "https://res.cloudinary.com/weighappdzk6edcxp/image/upload/v1598388917/assets/img/small/4_h9w1hy.png",
  ];

  return (
    <section className="row no-gutters">
      {images.map((img, index) => (
        <ImageComp key={index} data={img} />
      ))}
    </section>
  );
};

export default Gallery;
