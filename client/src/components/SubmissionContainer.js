import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Submission from "./Submission";
import Wrapper from "../assets/wrappers/JobsContainer";
const SubmissionContainer = () => {
  const { isLoading, getALlSubmissions, submissions } = useAppContext();
  useEffect(() => {
    getALlSubmissions();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (submissions.length === 0) {
    return (
      <Wrapper>
        <h2>No Submissions to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>
        {submissions.length} submission{submissions.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {submissions.map((submission) => {
          return <Submission key={submission._id} {...submission} />;
        })}
      </div>
    </Wrapper>
  );
};

export default SubmissionContainer;
