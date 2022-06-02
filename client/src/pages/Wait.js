import React from "react";
import img from "../assets/images/undraw_raining_re_4b55.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

export const Wait = () => {
  const { toggleSideBar, user, logoutUser } = useAppContext();
  const navigator = useNavigate();
  if (!user) {
    navigator("/landing");
  }
  return (
    <Wrapper>
      <>
        <img src={img} alt="not found" />
        <h3>Please wait admin will verify you</h3>
        <button className="btn" onClick={logoutUser}>
          logout
        </button>
      </>
    </Wrapper>
  );
};
