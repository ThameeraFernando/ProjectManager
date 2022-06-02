import React, { useState } from "react";
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
    editTopicRequest,
  } = useAppContext();
  // const [statusText, setStatusText] = useState("");

  const [newTopic, setNewTopic] = useState("");

  let statusText = "";
  let isRejected;
  let colorlk;

  if (status === "pending") {
    isRejected = true;
    statusText = "Your supervisor request is still pending";
  } else if (status === "accepted") {
    statusText = "your supervisor request is accepted";
    isRejected = true;
  } else {
    statusText =
      "your requst is rejected by your supervisor, try another topic and re-submit it";
    isRejected = false;
    colorlk = "red";
  }

  const handleSubmit = (e) => {
    const topic = newTopic;
    editTopic({ groupID, topic });
    editTopicRequest({ groupID, topic });
    // console.log(groupID, topic);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <br />
        <h5 style={{ color: colorlk }}>{statusText} </h5>
        {/* {showAlert && <Alert />} */}

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
            name="topic"
            value={topic}
            isReadOnly={true}
          />

          {/*IT NUM 2*/}
          <FormRow
            type="text"
            labelText="Status"
            name="status"
            value={status}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Supervisor Name"
            name="supervisorName"
            value={supervisorName}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Supervisor Email"
            name="supervisorEmail"
            value={supervisorEmail}
            isReadOnly={true}
          />

          <FormRow
            type="text"
            labelText="Re-enter Topic"
            name="newTopic"
            value={newTopic}
            isHidden={isRejected}
            color="Red"
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
