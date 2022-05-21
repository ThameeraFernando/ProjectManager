import React from "react";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Oops</h3>
        <p>Page your Looking is not Found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
