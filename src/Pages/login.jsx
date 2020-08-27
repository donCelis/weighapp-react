import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../Components/preloader";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Login - Weigh App</title>
      </Helmet>
      <p>Login</p>
      <Link className="btn btn-danger" to="/" />
      <Preloader />
    </Fragment>
  );
};

export default Login;
