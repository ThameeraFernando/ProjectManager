import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <Link to="/register" className="btn btn-hero">
      login-register
    </Link>
  );
};

export default Landing;
