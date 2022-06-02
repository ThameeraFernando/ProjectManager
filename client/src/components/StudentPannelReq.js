import React, { useState } from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import StudentPannelReqInfo from "./StudentPannelReqInfo";
import { Alert, FormRow } from "./index";

const StudentPannelReq = ({
  membergroupID,
  memberPannelName,
  memberPannelEmail,
  memberPannelTopic,
}) => {
  const {
    isLoading,
    showAlert,
    isEditing,
    displayAlert,
    editTopic,
    editTopicPannel,
    editTopicPannelCo,
    memberTopic,
  } = useAppContext();

  const [newTopic, setNewTopic] = useState("");

  let statusText = "";
  let isRejected;

  if (memberPannelTopic === "pending") {
    isRejected = true;
    statusText = "your Pannel member request is still pending";
  } else if (memberPannelTopic === "accepted") {
    statusText = "your Pannel member request accepted";
    isRejected = true;
  } else {
    statusText = "your requst is rejected try another topic";
    isRejected = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const topic = newTopic;
    const groupID = membergroupID;
    editTopic({ groupID, topic });
    editTopicPannel({ groupID, topic });
    editTopicPannelCo({ groupID, topic });

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
            value={membergroupID}
            isReadOnly={true}
          />

          {/*IT NUM 1*/}
          <FormRow
            type="text"
            labelText="Pannel member Name"
            name="memberPannelName"
            value={memberPannelName}
            isReadOnly={true}
          />

          {/*IT NUM 2*/}
          <FormRow
            type="text"
            labelText="Pannel Member Email"
            name="memberPannelEmail"
            value={memberPannelEmail}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Topic"
            name="memberTopic"
            value={memberTopic}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Topic status"
            name="memberPannelTopic"
            value={memberPannelTopic}
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

export default StudentPannelReq;
