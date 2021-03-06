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
  let colorpanel;

  if (memberPannelTopic === "pending") {
    isRejected = true;
    statusText = "your Panel member is still not allocated";
  } else if (memberPannelTopic === "accepted") {
    statusText = "your research topic is accepted by your Panel member";
    isRejected = true;
  } else {
    statusText =
      "your research topic is rejected by your Panel member, try another topic";
    isRejected = false;
    colorpanel = "red";
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
        <h5 style={{ color: colorpanel }}>{statusText}</h5>
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

          {/*Panel member Name*/}
          <FormRow
            type="text"
            labelText="Panel member Name"
            name="memberPannelName"
            value={memberPannelName}
            isReadOnly={true}
          />

          {/*Panel Member Email*/}
          <FormRow
            type="text"
            labelText="Panel Member Email"
            name="memberPannelEmail"
            value={memberPannelEmail}
            isReadOnly={true}
          />
          {/*Topic*/}
          <FormRow
            type="text"
            labelText="Topic"
            name="memberTopic"
            value={memberTopic}
            isReadOnly={true}
          />
          {/*Topic status*/}
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

export default StudentPannelReq;
