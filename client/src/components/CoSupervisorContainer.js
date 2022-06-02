import React, { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import CoSupervisor from "./CoSupervisor";
import Alert from "./Alert";
import Wrapper from "../assets/wrappers/JobsContainer";

const CoSupervisorContainer = () => {
  const {
    getAllCoSupervisor,
    totalCoSupervisors,
    isLoading,
    coSupervisors,
    getRequestGroupDetails,
    showAlert,
    getRequestCoSupervisor,
    searchStudent,
    searchStatusStudent,
    sortStudent,
    getRequestSupervisor,
    requestCoGroups,
  } = useAppContext();

  useEffect(() => {
    getAllCoSupervisor();
    getRequestCoSupervisor();
    getRequestSupervisor();
    console.log(coSupervisors);
  }, [searchStudent, searchStatusStudent, sortStudent]);

  if (isLoading) {
    return <Loading center />;
  }
  if (coSupervisors.length === 0) {
    return (
      <Wrapper>
        <h2>No Co-supervisors to display.</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h4>
        {totalCoSupervisors} Co-Supervisor{coSupervisors.length > 1 && "s"}
      </h4>

      <h5 hidden={requestCoGroups.length >= 1}>
        Co-Supervisor requests are based on first come first serve
      </h5>
      {showAlert && <Alert />}
      <div className="jobs">
        {coSupervisors.map((coSupervisorlk) => {
          return (
            <CoSupervisor
              key={coSupervisorlk._id}
              name={coSupervisorlk.name}
              type={coSupervisorlk.type}
              email={coSupervisorlk.email}
              availability={coSupervisorlk.availability}
              field={coSupervisorlk.field}
              // reqNewStatus={reqStatus}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default CoSupervisorContainer;
