import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Group from "./Group";
import Wrapper from "../assets/wrappers/JobsContainer";
const StudentGroupContainer = () => {
  const { getAllStudents, StudentGroups, isLoading } = useAppContext();
  useEffect(() => {
    getAllStudents();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (StudentGroups.length === 0) {
    return (
      <Wrapper>
        <h2>No Student Groups to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>
        {StudentGroups.length} Student Group{StudentGroups.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {StudentGroups.map((group) => {
          return <Group key={group._id} {...group} />;
        })}
      </div>
    </Wrapper>
  );
};

export default StudentGroupContainer;
