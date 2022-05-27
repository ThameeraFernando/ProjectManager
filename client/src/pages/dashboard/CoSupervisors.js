import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import CoSupervisorContainer from "../../components/CoSupervisorContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const CoSupervisors = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainer />
      <CoSupervisorContainer />
    </>
  );
};

export default CoSupervisors;
