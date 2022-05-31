import React from "react";
import SearchContainerStudentSupervisor from "../../components/SearchContainerStudentSupervisor";
import SupervisorContainer from "../../components/SupervisorContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";

const Supervisors = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainerStudentSupervisor />
      <SupervisorContainer />
    </>
  );
};

export default Supervisors;
