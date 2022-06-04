import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import StudentResearchReqInfo from "./StudentResearchReqInfo";
import { Alert, FormRow } from "./index";

const StudentReqForCoSupervisor = ({
  _id,
  groupID,
  status,
  coSupervisorEmail,
  coSupervisorName,
  topic,
}) => {
  const { showAlert, rejectStudentCoGroupReq, acceptStudentCoGroupReq } =
    useAppContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const topic = newTopic;
  //   // editTopic({ groupID, topic });
  //   // console.log(groupID, topic);
  // };

  const handleAccept = (e) => {
    e.preventDefault();
    acceptStudentCoGroupReq(groupID, _id);
  };

  const handleReject = (e) => {
    rejectStudentCoGroupReq(_id);
  };

  return (
    <Wrapper>
      <form className="form">
        <br />
        <h5>Request</h5>
        {showAlert && <Alert />}

        <div className="form-center">
          {/*Group ID*/}
          <FormRow
            type="text"
            labelText="Group ID"
            name="groupID"
            value={groupID}
            isReadOnly={true}
          />

          {/*Topic*/}
          <FormRow
            type="text"
            labelText="Topic"
            name="topic"
            value={topic}
            isReadOnly={true}
          />

          {/*Status*/}
          <FormRow
            type="text"
            labelText="Status"
            name="status"
            value={status}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Supervisor name"
            name="coSupervisorName"
            value={coSupervisorName}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="supervisor email"
            name="coSupervisorEmail"
            value={coSupervisorEmail}
            isReadOnly={true}
          />

          <div className="btn-container">
            <button
              className="btn btn-block btn-success"
              type="submit"
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className="btn btn-block btn-danger"
              type="submit"
              onClick={handleReject}
            >
              Reject
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default StudentReqForCoSupervisor;
