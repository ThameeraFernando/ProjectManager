import React from "react";
import { Link, Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";
import { NavBar, SmallSideBar, BigSideBar } from "../../components";
import { useAppContext } from "../../context/appContext";

const SharedLayout = () => {
  const { user } = useAppContext();
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
