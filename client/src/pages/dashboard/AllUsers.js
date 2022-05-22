import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import UserContainer from "../../components/UserContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
const AllUsers = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();
  useEffect(() => {
    // console.log(user.type);
    if (user.type !== "Admin") {
      navigator("/");
    }
  });
  return (
    <>
      <SearchContainer />
      <UserContainer />
    </>
  );
};

export default AllUsers;
