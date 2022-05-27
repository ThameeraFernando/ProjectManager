import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import StudentResearchCoReq from "./Supervisor";
import Wrapper from "../assets/wrappers/JobsContainer";

const StudentResearchCoReqContanier = () => {
  const {
    getAllSupervisor,
    totalSupervisors,
    supervisors,
    totalUsers,
    isLoading,
    requestGroups,
  } = useAppContext();

  useEffect(() => {
    getAllSupervisor();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (supervisors.length === 0) {
    return (
      <Wrapper>
        <h2>No Users to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h4>
        {totalSupervisors} Supervisor{supervisors.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {supervisors.map((supervisor) => {
          return (
            <StudentResearchCoReq
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

export default StudentResearchCoReqContanier;
