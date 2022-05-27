import React from "react";
import { useAppContext } from "../../context/appContext";
import { useEffect } from "react";
import Loading from "../../components/Loading";
import StudentReqForSupervisor from "../../components/StudentReqForSupervisor";
import Wrapper from "../../assets/wrappers/JobsContainer";

const StudentRequestList = () => {

  const { getStudentGroupReq, isLoading, studentRequests } =
    useAppContext();

  useEffect(() => {
    getStudentGroupReq();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (studentRequests.length === 0) {
    return (
      <Wrapper>
        <h2>No Requestes to display...</h2>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="jobs">
        {studentRequests.map((request) => {
          return (
            <StudentReqForSupervisor key={request._id} {...request} />
          );
        })}
      </div>
    </>
  );
};

export default StudentRequestList