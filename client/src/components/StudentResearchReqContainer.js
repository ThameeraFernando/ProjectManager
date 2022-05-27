import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import StudentResearchReq from "./StudentResearchReq";
import Wrapper from "../assets/wrappers/JobsContainer";

const StudentResearchReqContainer = () => {
  const { getRequestSupervisor, requestGroups, isLoading } = useAppContext();

  useEffect(() => {
    getRequestSupervisor();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (requestGroups.length === 0) {
    return (
      <Wrapper>
        <h5>No Supervisor Requestes to display...</h5>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="jobs">
        {requestGroups.map((requestGroup) => {
          return (
            <StudentResearchReq key={requestGroup._id} {...requestGroup} />
          );
        })}
      </div>
    </>
  );
};

export default StudentResearchReqContainer;
