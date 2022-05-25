import React, { useEffect } from "react";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { Alert, FormRow } from "../../components/index";

const StudnetGroup = () => {
  const {
    isLoading,
    showAlert,
    isEditing,
    displayAlert,
    groupReg,
    getGroups,
    membergroupID,
    memberitNumOne,
    memberemailOne,
    memberitNumTwo,
    memberemailTwo,
    memberitNumThree,
    memberemailThree,
    memberitNumFour,
    memberemailFour,
    membersupervisor,
    membercoSupervisor,
    memberisRegister,
    memberTopic,
    user,
  } = useAppContext();

  const [groupID, setGroupID] = useState(membergroupID);
  const [itNumOne, setItNumOne] = useState(memberitNumOne);
  const [itNumTwo, setItNumTwo] = useState(memberitNumTwo);
  const [itNumThree, setItNumThree] = useState(memberitNumThree);
  const [itNumFour, setItNumFour] = useState(memberitNumFour);
  const [emailOne, setEmailOne] = useState(user.email);
  const [emailTwo, setEmailTwo] = useState(memberemailTwo);
  const [emailThree, setEmailThree] = useState(memberemailThree);
  const [emailFour, setEmailFour] = useState(memberemailFour);
  const [topic, setTopic] = useState(memberTopic);
  const [supervisor, setSupervisor] = useState("pending");
  const [coSupervisor, setCoSupervisor] = useState("pending");

  useEffect(() => {
    getGroups();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !groupID ||
      !itNumOne ||
      !itNumTwo ||
      !itNumThree ||
      !itNumFour ||
      !emailOne ||
      !emailTwo ||
      !emailThree ||
      !emailFour ||
      !supervisor ||
      !coSupervisor
    ) {
      displayAlert();
      return;
    }

    const isRegister = true;

    const groupDetails = {
      groupID,
      itNumOne,
      itNumTwo,
      itNumThree,
      itNumFour,
      emailOne,
      emailTwo,
      emailThree,
      emailFour,
      supervisor,
      coSupervisor,
      topic,
      isRegister,
    };

    groupReg({ groupDetails });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>
          {memberisRegister ? "Group Details" : "Resgister Student Group"}
        </h3>
        <br />
        <h5>You can submit your topic after the </h5>
        {showAlert && <Alert />}

        <div className="form-center">
          {/*Group ID*/}
          <FormRow
            type="text"
            labelText="Group ID"
            name="groupID"
            value={membergroupID || groupID}
            isReadOnly={memberisRegister}
            handleChange={(e) => setGroupID(e.target.value)}
          />

          {/*IT NUM 1*/}
          <FormRow
            type="text"
            labelText="member One IT Nummber"
            name="itNumOne"
            value={memberitNumOne || itNumOne}
            isReadOnly={memberisRegister}
            handleChange={(e) => setItNumOne(e.target.value)}
          />
          {/*Email 1*/}
          <FormRow
            type="email"
            labelText="member One Email"
            name="emailOne"
            value={memberemailOne || emailOne}
            isReadOnly={true}
            handleChange={(e) => setEmailOne(e.target.value)}
          />

          {/*IT NUM 2*/}
          <FormRow
            type="text"
            labelText="member Two IT Number"
            name="itNumTwo"
            value={memberitNumTwo || itNumTwo}
            isReadOnly={memberisRegister}
            handleChange={(e) => setItNumTwo(e.target.value)}
          />
          {/*Email 2*/}
          <FormRow
            type="email"
            labelText="member Two Email"
            name="emailTwo"
            value={memberemailTwo || emailTwo}
            iisReadOnly={memberisRegister}
            handleChange={(e) => setEmailTwo(e.target.value)}
          />

          {/*IT NUM 3*/}
          <FormRow
            type="text"
            labelText="member Three IT Number"
            name="itNumThree"
            value={memberitNumThree || itNumThree}
            isReadOnly={memberisRegister}
            handleChange={(e) => setItNumThree(e.target.value)}
          />
          {/*Email 3*/}
          <FormRow
            type="email"
            labelText="member Three Email"
            name="emailThree"
            value={memberemailThree || emailThree}
            isReadOnly={memberisRegister}
            handleChange={(e) => setEmailThree(e.target.value)}
          />

          {/*IT NUM 4*/}
          <FormRow
            type="text"
            labelText="member Four IT Number"
            name="itNumFour"
            isReadOnly={memberisRegister}
            value={memberitNumFour || itNumFour}
            handleChange={(e) => setItNumFour(e.target.value)}
          />
          {/*Email 4*/}
          <FormRow
            type="email"
            labelText="member Four Email"
            name="emailFour"
            isReadOnly={memberisRegister}
            value={memberemailFour || emailFour}
            handleChange={(e) => setEmailFour(e.target.value)}
          />

          <FormRow
            type="text"
            labelText="Research Topic"
            name="topic"
            isReadOnly={memberisRegister}
            value={memberTopic || topic}
            handleChange={(e) => setTopic(e.target.value)}
          />

          {/*Supervisor*/}
          <FormRow
            type="text"
            labelText="Supervisor"
            name="supervisor"
            isReadOnly={memberisRegister}
            value={supervisor}
            handleChange={(e) => setSupervisor(e.target.value)}
          />

          {/*Co-supervisorour*/}
          <FormRow
            type="text"
            labelText="Co-supervisorour"
            name="coSupervisor"
            isReadOnly={memberisRegister}
            value={coSupervisor}
            handleChange={(e) => setCoSupervisor(e.target.value)}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading || memberisRegister}
              hidden={memberisRegister}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              disabled={isLoading || memberisRegister}
              hidden={memberisRegister}
              onClick={(e) => {
                e.preventDefault();
                // clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default StudnetGroup;
