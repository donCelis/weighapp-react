import React, { Fragment } from "react";
import Preloader from "../Components/preloader"
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Fragment>
      <p>Login</p>
      <Link className="btn btn-danger" to="/"/>
      <Preloader/>
    </Fragment>
  );
};

export default Login;
