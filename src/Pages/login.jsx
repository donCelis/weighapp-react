/* import { Link } from "react-router-dom"; */
import { Preloader, /* Form, */ FormFeature } from "../components";

const Login = () => (
  <>
    {/* <Link className="toHome fas fa-times" to="/" />
    <section className="login p-4">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-sm-12 col-md-8 col-lg-5">
          <Form />
        </div>
      </div>
    </section> */}
    <FormFeature />
    <Preloader />
  </>
);

export default Login;
