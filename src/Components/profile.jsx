import user from "../assets/static/team_1.jpg";

const Profile = () => (
  <section className="row no-gutters mb-4">
    <div className="col">
      <div>
        <picture>
          <img
            className="img-fluid rounded-circle"
            src={user}
            alt="Alexander Celis"
          />
        </picture>
        <h3 className="mt-4 profile">Alexander Celis</h3>
      </div>
    </div>
  </section>
);

export default Profile;
