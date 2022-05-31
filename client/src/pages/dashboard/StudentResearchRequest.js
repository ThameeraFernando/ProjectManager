import React from "react";
import {
  StudentResearchReqContainer,
  SearchContainer,
  StudentResearchCoReqContanier,
  StudentPannelReqContainer,
} from "../../components";

const StudentResearchRequest = () => {
  return (
    <>
      <SearchContainer />
      <StudentResearchReqContainer />
      <StudentResearchCoReqContanier />
      <StudentPannelReqContainer />
    </>
  );
};

export default StudentResearchRequest;
