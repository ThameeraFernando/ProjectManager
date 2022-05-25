import React, { useState, useEffect } from "react";
import { Alert, FormRow } from "../../components/index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import SubmissionContainer from "../../components/SubmissionContainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CreateSubmission = () => {
  const {
    getALlSubmissions,
    showAlert,
    displayAlert,
    isLoading,
    CreateSubmission,
  } = useAppContext();
  useEffect(() => {
    getALlSubmissions();
  }, []);
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [submittedTo, setSubmittedTo] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
    setDueDate(startDate);
    if (!dueDate || !submittedBy || !submittedTo || !description) {
      displayAlert();
      return;
    }
    const newSub = { dueDate, submittedBy, submittedTo, description };
    CreateSubmission(newSub);
    // console.log(dueDate, submittedBy, submittedTo, description);
  };
  return (
    <>
      <Wrapper>
        <form className="form">
          <h3>Create Submission</h3>
          {showAlert && <Alert />}
          <div className="form-center">
            <FormRow
              type="text"
              name="description"
              value={description}
              handleChange={(e) => setDescription(e.target.value)}
            />
            <FormRow
              type="text"
              name="submittedTo"
              value={submittedTo}
              handleChange={(e) => setSubmittedTo(e.target.value)}
            />
            <FormRow
              type="text"
              name="submittedBy"
              value={submittedBy}
              handleChange={(e) => setSubmittedBy(e.target.value)}
            />{" "}
            <div className="form-row">
              <label htmlFor="date" className="form-label">
                Due Date
              </label>
              <DatePicker
                className="form-input"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <button
              className="btn btn-bloc"
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Please wait..." : "save changes"}
            </button>
          </div>
        </form>
      </Wrapper>
      <br />
      <br />
      <>
        <SubmissionContainer />
      </>
    </>
  );
};

export default CreateSubmission;
