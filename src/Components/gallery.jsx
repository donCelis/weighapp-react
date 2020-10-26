import React from "react";
import small_1 from "../assets/static/small/small_1.png";
import small_2 from "../assets/static/small/small_2.png";
import small_3 from "../assets/static/small/small_3.png";
import small_4 from "../assets/static/small/small_4.png";

const Gallery = () => {
  const images = [small_1, small_2, small_3, small_4];

  return (
    <section className="row no-gutters">
      {images.map((img, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
          <img className="img-fluid" src={img} alt="Gallery" />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
