import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const NavLinks = ({ toggleSideBar }) => {
  const navigator = useNavigate();
  const { user } = useAppContext();
  let NewLinks = links;
  if (
    user.type === "Student" ||
    user.type === "Supervisor" ||
    user.type === "Panel Member"
  ) {
    NewLinks = links.filter((link) => {
      if (link.path !== "all-users" && link.path !== "upload-docs") {
        return link;
      }
    });
  }

  //student links
  if (
    user.type === "Admin" ||
    user.type === "Supervisor" ||
    user.type === "Panel Member"
  ) {
    NewLinks = links.filter((link) => {
      if (link.path !== "student-groups" && link.path !== "supervisors") {
        return link;
      }
    });
  }

  if (
    user.type === "Student" ||
    user.type === "Admin" ||
    user.type === "Panel Member"
  ) {
    NewLinks = links.filter((link) => {
      if (link.path !== "studentrequsets" && link.path !== "reportsubmissions") {
        return link;
      }
    });
  }

  return (
    <div className="nav-links">
      {NewLinks.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            key={id}
            to={path}
            onClick={toggleSideBar}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
