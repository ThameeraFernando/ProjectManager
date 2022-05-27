import React, { useState } from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import StudentResearchReqInfo from "./StudentResearchReqInfo";
import { Alert, FormRow } from "./index";

const StudentResearchReq = ({
  groupID,
  supervisorEmail,
  supervisorName,
  topic,
  status,
}) => {
  const {
    isLoading,
    showAlert,
    isEditing,
    displayAlert,
    user,
    supervisors,
    setEditTopic,
    editTopic,
  } = useAppContext();
  // const [statusText, setStatusText] = useState("");

  const [newTopic, setNewTopic] = useState("");

  let statusText = "";
  let isRejected;

  if (status === "pending") {
    isRejected = true;
    statusText = "** your supervisor request is still pending **";
  } else if (status === "accepted") {
    statusText = "your supervisor request accepted";
    isRejected = true;
  } else {
    statusText = "your requst is rejected try another topic";
    isRejected = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = newTopic;
    editTopic({ groupID, topic });
    console.log(groupID, topic);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <br />
        <h5>{statusText}</h5>
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

          {/*IT NUM 1*/}
          <FormRow
            type="text"
            labelText="Topic"
            name="itNumOne"
            value={topic}
            isReadOnly={true}
          />

          {/*IT NUM 2*/}
          <FormRow
            type="text"
            labelText="Status"
            name="itNumTwo"
            value={status}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Super name"
            name="itNumTwo"
            value={supervisorName}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="suoer email"
            name="itNumTwo"
            value={supervisorEmail}
            isReadOnly={true}
          />

          <FormRow
            type="text"
            labelText="Re-enter Topic"
            name="newTopic"
            value={newTopic}
            isHidden={isRejected}
            handleChange={(e) => setNewTopic(e.target.value)}
          />

          <div className="btn-container">
            <button className="btn btn-block" type="submit" hidden={isRejected}>
              Re-submit Topic
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default StudentResearchReq;
