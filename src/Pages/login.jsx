import React, { Fragment } from "react";
//import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Preloader } from "../components";

const Login = () => {
  return (
    <Fragment>
      {/* <Helmet>
        <title>Login - Weigh App</title>
      </Helmet> */}
      <p>Login</p>
      <Link className="btn btn-danger" to="/">
        x
      </Link>
      <Preloader />
    </Fragment>
  );
};

export default Login;
