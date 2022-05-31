import React, { useEffect } from "react";
import SearchContainerStudent from "../../components/SearchContainerStudent";
import CoSupervisorContainer from "../../components/CoSupervisorContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const CoSupervisors = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainerStudent />
      <CoSupervisorContainer />
    </>
  );
};

export default CoSupervisors;
