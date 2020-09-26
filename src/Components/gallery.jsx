import React, { useState } from "react";
import { ImageComp } from ".";

const Gallery = () => {
  const [data] = useState({
    images: [
      "assets/img/small/1_umwetq",
      "assets/img/small/2_jriefw",
      "assets/img/small/3_dkyxtm",
      "assets/img/small/4_h9w1hy",
    ]
  });

  return (
    <section className="row no-gutters">
      {data.images.map((img, index) => (
        <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
          <ImageComp id={"weighappdzk6edcxp"} path={img} />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
