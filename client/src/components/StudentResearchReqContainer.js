import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import StudentResearchReq from "./StudentResearchReq";
import Wrapper from "../assets/wrappers/JobsContainer";

const StudentResearchReqContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (StudentResearchReq.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <StudentResearchReq key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default StudentResearchReqContainer;
