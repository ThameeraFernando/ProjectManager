import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import StudentResearchReqInfo from "./StudentResearchReqInfo";
import { Alert, FormRow } from "./index";

const StudentReqForSupervisor = ({
_id,
groupID,
status,
supervisorEmail,
supervisorName,
topic,
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
    rejectStudentGroupReq,
    acceptStudentGroupReq,

  } = useAppContext();

  // const [isAccepted, setIsAccepted] = useState(false);
  // const [isRejected, setIsRejected] = useState(false);
  
  // useEffect(() => {
  //   if(status==='accepted'){
  //     setIsAccepted(true)
  //   }
  //   if(status==='declined'){
  //     setIsRejected(true)
  //   }
  // }, []);
  
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const topic = newTopic;
  //   // editTopic({ groupID, topic });
  //   // console.log(groupID, topic);
  // };

  const handleAccept = (e) => {
    e.preventDefault()
    acceptStudentGroupReq(groupID,_id)
  }

  const handleReject =(e)  => {
    rejectStudentGroupReq(_id)
  }


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
            labelText="Supervisor name"
            name="itNumTwo"
            value={supervisorName}
            isReadOnly={true}
          />
          <FormRow
            type="text"
            labelText="supervisor email"
            name="itNumTwo"
            value={supervisorEmail}
            isReadOnly={true}
          />

          <div className="btn-container">
            <button className="btn btn-block btn-success" type="submit" onClick={handleAccept} >
              Accept
            </button>
            <button className="btn btn-block btn-danger" type="submit" onClick={handleReject} >
              Reject
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default StudentReqForSupervisor;
