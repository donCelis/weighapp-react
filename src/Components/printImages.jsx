import React from "react";
import img1 from "../assets/img/small/1.png";
import img2 from "../assets/img/small/2.png";
import img3 from "../assets/img/small/3.png";
import img4 from "../assets/img/small/4.png";

const PrintImages = () => {
  let images = [];
  images.push(img1, img2, img3, img4);
  return (
    <section className="row no-gutters">
      {
        images.map((img, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div>
              <img className="img-fluid" src={img} alt="Demostración" />
            </div>
          </div>
        ))
      }
    </section>
  )
};

export default PrintImages;
