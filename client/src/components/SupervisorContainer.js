import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Supervisor from "./Supervisor";
import Alert from "./Alert";
import Wrapper from "../assets/wrappers/JobsContainer";

const SupervisorContainer = () => {
  const {
    getAllSupervisor,
    totalSupervisors,
    supervisors,
    totalUsers,
    isLoading,
    requestGroups,
    showAlert,
    getRequestSupervisor,
    searchStudentsupervisor,
    searchStatusStudentsupervisor,
    sortStudentsupervisor,
  } = useAppContext();

  useEffect(() => {
    getRequestSupervisor();
    getAllSupervisor();
  }, [
    searchStudentsupervisor,
    searchStatusStudentsupervisor,
    sortStudentsupervisor,
  ]);

  if (isLoading) {
    return <Loading center />;
  }
  if (supervisors.length === 0) {
    return (
      <Wrapper>
        <h2>No Supervisors to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h4>
        {totalSupervisors} Supervisor{supervisors.length > 1 && "s"}
      </h4>
      <h5 hidden={requestGroups.length >= 1}>
        Supervisor requests are based on first come first serve
      </h5>
      {showAlert && <Alert />}
      <div className="jobs">
        {supervisors.map((supervisor) => {
          return (
            <Supervisor
              key={supervisors._id}
              name={supervisor.name}
              type={supervisor.type}
              email={supervisor.email}
              availability={supervisor.availability}
              field={supervisor.field}
              status={requestGroups.status}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SupervisorContainer;
