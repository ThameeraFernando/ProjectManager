import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import User from "./User";
import Wrapper from "../assets/wrappers/JobsContainer";
const UserContainer = () => {
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
        <h2>No Jobs to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>
        {totalUsers} user{users.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {users.map((user) => {
          return <User key={user._id} {...user} />;
        })}
      </div>
    </Wrapper>
  );
};

export default UserContainer;
