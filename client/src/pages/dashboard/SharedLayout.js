import React from "react";
import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-users">all users</Link>
        <Link to="profile">profile</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
