import logo from "../assets/static/logo.svg";

const Description = () => (
  <section id="inicio">
    <div className="description">
      <h2 className="description__logo">
        <div>
          <img src={logo} alt="Weigh App" />
        </div>
        <span className="txtBlanco">Weigh App</span>
      </h2>
      <div className="description__text">
        <span>Lo que usted necesita</span>
        <p className="description__text--lh-1">
          es tener un control y manejo de sus registros de pesaje automatizado.
        </p>
        <p>La solución está con nosotros.</p>
      </div>
    </div>
  </section>
);

export default Description;
