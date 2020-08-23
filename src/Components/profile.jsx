import React, { Fragment } from "react";
import photo from "../assets/img/danny.jpg";
import InfoProfile from "./infoProfile";

const Profile = () => (
  <Fragment>
    <section className="row no-gutters mb-4">
      <div className="col">
        <div>
          <picture>
            <img
              className="img-fluid rounded-circle"
              src={photo}
              alt="Alexander Celis"
            />
          </picture>
          <h3 className="mt-4 profile">Alexander Celis</h3>
        </div>
      </div>
    </section>

    <InfoProfile />
  </Fragment>
);

export default Profile;
