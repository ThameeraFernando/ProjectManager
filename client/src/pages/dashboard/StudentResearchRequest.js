import React from "react";
import {
  StudentResearchReqContainer,
  SearchContainer,
  StudentResearchCoReqContanier,
  StudentPannelReqContainer,
  Alert,
} from "../../components";
import { useAppContext } from "../../context/appContext";

const StudentResearchRequest = () => {
  const { showAlert } = useAppContext();
  return (
    <>
      {showAlert && <Alert />}
      <StudentResearchReqContainer />
      <StudentResearchCoReqContanier />
      <StudentPannelReqContainer />
    </>
  );
};

export default StudentResearchRequest;
