import React from "react";
import { Link } from "react-router-dom";
import { Preloader } from "../components";

const Login = () => (
  <>
    <p>Login</p>
    <Link className="btn btn-danger" to="/">
      x
    </Link>

    <Preloader />
  </>
);

export default Login;
