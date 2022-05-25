import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import UserContainer from "../../components/UserContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const Supervisors = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainer />
      <UserContainer />
    </>
  );
};

export default Supervisors;
