import React from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import StudentResearchCoReqInfo from "./StudentResearchCoReqInfo";
import { Alert, FormRow } from "./index";

const StudentResearchCoReq = ({
  groupID,
  coSupervisorEmail,
  coSupervisorName,
  topic,
  status,
}) => {
  const { isLoading, showAlert, isEditing, displayAlert } = useAppContext();
  // const [statusText, setStatusText] = useState("");

  let statusText = "";
  let isRejected;

  if (status === "pending") {
    isRejected = false;
    statusText = "your co-supervisor request is still pending";
  } else if (status === "accepted") {
    statusText = "your co-supervisor request accpeted";
    isRejected = true;
  } else {
    statusText = "your co-supervisor request rejected";
    isRejected = false;
  }

  return (
    <Wrapper>
      <form className="form">
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
            labelText="Co-supervisor name"
            name="itNumTwo"
            value={coSupervisorName}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="Co-supervisor email"
            name="itNumTwo"
            value={coSupervisorEmail}
            isReadOnly={true}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default StudentResearchCoReq;
