import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import SupervisorContainer from "../../components/SupervisorContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const Supervisors = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainer />
      <SupervisorContainer />
    </>
  );
};

export default Supervisors;
