import { Link } from "react-router-dom";
import image404 from "../assets/static/error-404.svg";
import { Preloader } from "../components";

const Error404 = () => {
  return (
    <>
      <section className="error404 py-5">
        <section className="container text-center">
          <div className="row no-gutters justify-content-center align-items-center">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="error404_element">
                <img className="img-fluid" src={image404} alt="Error 404"/>
                <h5 className="my-4 mb-0">Página no encontrada.</h5>
                <Link to="/" className="btn btn-info">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Preloader />
    </>
  );
};

export default Error404;
