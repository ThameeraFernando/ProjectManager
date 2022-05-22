import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useAppContext } from "../context/appContext";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { showSideBar, toggleSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            <NavLinks toggleSideBar={toggleSideBar} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
