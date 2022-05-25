import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Supervisor from "./Supervisor";
import Wrapper from "../assets/wrappers/JobsContainer";

const SupervisorContainer = () => {
  const { getUsers, users, page, totalUsers, isLoading } = useAppContext();
  useEffect(() => {
    getUsers();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (users.length === 0) {
    return (
      <Wrapper>
        <h2>No Users to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>
        {totalUsers} Supervisor{users.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {users.map((user) => {
          if (user.type === "Supervisor") {
            return <Supervisor key={user._id} {...user} />;
          }
        })}
      </div>
    </Wrapper>
  );
};

export default SupervisorContainer;
