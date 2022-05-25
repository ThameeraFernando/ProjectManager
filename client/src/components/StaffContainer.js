import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import User from "./Staff";
import Wrapper from "../assets/wrappers/JobsContainer";
const UserContainer = () => {
  const { getUsers, users, page, totalUsers, isLoading } = useAppContext();
  useEffect(() => {
    getUsers();
  }, []);

  const staff = users.filter((user) => {
    if (user.type !== "Student") {
      return user;
    }
  });

  if (isLoading) {
    return <Loading center />;
  }
  if (staff.length === 0) {
    return (
      <Wrapper>
        <h2>No Users to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>
        {staff.length} Staff member{staff.length > 1 && "s"}
      </h4>
      <h3>Admin</h3>
      <div className="jobs">
        {users.map((user) => {
          if (user.type === "Admin") {
            return <User key={user._id} {...user} />;
          }
        })}
      </div>
      <br />
      <h4>Supervisor</h4>
      <div className="jobs">
        {users.map((user) => {
          if (user.type === "Supervisor") {
            return <User key={user._id} {...user} />;
          }
        })}
      </div>
      <br />
      <h4>Panel Member</h4>
      <div className="jobs">
        {users.map((user) => {
          if (user.type === "Panel Member") {
            return <User key={user._id} {...user} />;
          }
        })}
      </div>
    </Wrapper>
  );
};

export default UserContainer;
