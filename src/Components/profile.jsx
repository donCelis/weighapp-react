import React from "react";
import { Image } from "cloudinary-react";

const Profile = () => (
  <section className="row no-gutters mb-4">
    <div className="col">
      <div>
        <picture>
          <Image
            className="img-fluid rounded-circle"
            cloud_name="weighappdzk6edcxp"
            publicId="assets/img/danny_lhdciw"
            alt="Alexander Celis"
          />
        </picture>
        <h3 className="mt-4 profile">Alexander Celis</h3>
      </div>
    </div>
  </section>
);

export default Profile;
