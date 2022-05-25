import React, { useState, useEffect } from "react";
import { Alert, FormRow } from "../../components/index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import SubmissionContainer from "../../components/SubmissionContainer";

const Submissions = () => {
  const {
    getALlSubmissions,
    showAlert,
    displayAlert,
    isLoading,
    CreateSubmission,
  } = useAppContext();

  return (
    <>
      <SubmissionContainer />
    </>
  );
};

export default Submissions;
