import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import StudentPannelReq from "./StudentPannelReq";
import Wrapper from "../assets/wrappers/JobsContainer";

const StudentPannelReqContainer = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    groupReg,
    getGroups,
    membergroupID,
    memberPannelName,
    memberPannelEmail,
    memberPannelTopic,
  } = useAppContext();

  useEffect(() => {
    getGroups();
  }, []);

  if (memberPannelName === null) {
    return (
      <Wrapper>
        <h5>Pannel member not available </h5>
      </Wrapper>
    );
  }

  return (
    <>
      <div className="jobs">
        <StudentPannelReq
          key={membergroupID}
          membergroupID={membergroupID}
          memberPannelName={memberPannelName}
          memberPannelEmail={memberPannelEmail}
          memberPannelTopic={memberPannelTopic}
        />
      </div>
    </>
  );
};

export default StudentPannelReqContainer;
