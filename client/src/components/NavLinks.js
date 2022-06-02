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
    user.type === "Panel Member" ||
    user.type === "Co Supervisor"
  ) {
    NewLinks = NewLinks.filter((link) => {
      if (
        link.path !== "all-users" &&
        link.path !== "upload-docs" &&
        link.path !== "create-submissions" &&
        link.path !== "staff-members" 
      ) {
        return link;
      }
    });
  }

  //student links
  if (
    user.type === "Admin" ||
    user.type === "Supervisor" ||
    user.type === "Panel Member" ||
    user.type === "Co Supervisor"
  ) {

    NewLinks = NewLinks.filter((link) => {
      if (
        link.path !== "student-groups" &&
        link.path !== "supervisors" &&
        link.path !== "student-research-request" &&
        link.path !== "co-supervisors" &&
        link.path !== "all-student-groups" 
      ) {

        return link;
      }
    });
  }

  //supervisor
  if (
    user.type === "Student" ||
    user.type === "Admin" ||
    user.type === "Panel Member" ||
    user.type === "Co Supervisor"
  ) {
    NewLinks = NewLinks.filter((link) => {
      if (
        link.path !== "studentrequsets" &&
        link.path !== "reportsubmissions" &&
        link.path !== "supervisorhome" &&
        link.path !== "supervisorgroup" &&
        link.path !== "supervise" &&
        link.path !== "evaluationpanel"
      ) {
        return link;
      }
    });
  }

  //co supervisor
  if (
    user.type === "Student" ||
    user.type === "Admin" ||
    user.type === "Panel Member" ||
    user.type === "Supervisor" 
  ) {
    NewLinks = NewLinks.filter((link) => {
      if (
        link.path !== "cosupervisorgroup" &&
        link.path !== "cosupervise" &&
        link.path !== "studentcorequsets" &&
        link.path !== "cosupervisorgroup" &&
        link.path !== "cosupervisorhome"
      ) {
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
