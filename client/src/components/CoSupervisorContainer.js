import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import CoSupervisor from "./CoSupervisor";
import Wrapper from "../assets/wrappers/JobsContainer";

const CoSupervisorContainer = () => {
  const { getAllCoSupervisor, totalCoSupervisors, isLoading, coSupervisors } =
    useAppContext();

  useEffect(() => {
    getAllCoSupervisor();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (coSupervisors.length === 0) {
    return (
      <Wrapper>
        <h2>No Users to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h4>
        {totalCoSupervisors} Co-Supervisor{coSupervisors.length > 1 && "s"}
      </h4>
      <div className="jobs">
        {coSupervisors.map((coSupervisorlk) => {
          return <CoSupervisor key={coSupervisorlk._id} {...coSupervisorlk} />;
        })}
      </div>
    </Wrapper>
  );
};

export default CoSupervisorContainer;
