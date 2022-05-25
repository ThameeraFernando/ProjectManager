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
  } = useAppContext();

  const [groupID, setGroupID] = useState(membergroupID);
  const [itNumOne, setItNumOne] = useState(memberitNumOne);
  const [itNumTwo, setItNumTwo] = useState(memberitNumTwo);
  const [itNumThree, setItNumThree] = useState(memberitNumThree);
  const [itNumFour, setItNumFour] = useState(memberitNumFour);
  const [emailOne, setEmailOne] = useState(memberemailOne);
  const [emailTwo, setEmailTwo] = useState(memberemailTwo);
  const [emailThree, setEmailThree] = useState(memberemailThree);
  const [emailFour, setEmailFour] = useState(memberemailFour);
  const [supervisor, setSupervisor] = useState(membersupervisor);
  const [coSupervisor, setCoSupervisor] = useState(membercoSupervisor);

  useEffect(() => {
    getGroups();
    console.log("HEllo");
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
      isRegister,
    };

    groupReg({ groupDetails });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "edit job" : "Resgister Student Group"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/*Group ID*/}
          <FormRow
            type="text"
            labelText="Group ID"
            name="groupID"
            value={groupID}
            handleChange={(e) => setGroupID(e.target.value)}
          />

          {/*IT NUM 1*/}
          <FormRow
            type="text"
            labelText="member One IT Nummber"
            name="itNumOne"
            value={itNumOne}
            handleChange={(e) => setItNumOne(e.target.value)}
          />
          {/*Email 1*/}
          <FormRow
            type="email"
            labelText="member One Email"
            name="emailOne"
            value={emailOne}
            handleChange={(e) => setEmailOne(e.target.value)}
          />

          {/*IT NUM 2*/}
          <FormRow
            type="text"
            labelText="member Two IT Number"
            name="itNumTwo"
            value={itNumTwo}
            handleChange={(e) => setItNumTwo(e.target.value)}
          />
          {/*Email 2*/}
          <FormRow
            type="email"
            labelText="member Two Email"
            name="emailTwo"
            value={emailTwo}
            handleChange={(e) => setEmailTwo(e.target.value)}
          />

          {/*IT NUM 3*/}
          <FormRow
            type="text"
            labelText="member Three IT Number"
            name="itNumThree"
            value={itNumThree}
            handleChange={(e) => setItNumThree(e.target.value)}
          />
          {/*Email 3*/}
          <FormRow
            type="email"
            labelText="member Three Email"
            name="emailThree"
            value={emailThree}
            handleChange={(e) => setEmailThree(e.target.value)}
          />

          {/*IT NUM 4*/}
          <FormRow
            type="text"
            labelText="member Four IT Number"
            name="itNumFour"
            value={itNumFour}
            handleChange={(e) => setItNumFour(e.target.value)}
          />
          {/*Email 4*/}
          <FormRow
            type="email"
            labelText="member Four Email"
            name="emailFour"
            value={emailFour}
            handleChange={(e) => setEmailFour(e.target.value)}
          />

          {/*Supervisor*/}
          <FormRow
            type="text"
            labelText="Supervisor"
            name="supervisor"
            isReadOnly={true}
            value={supervisor}
            handleChange={(e) => setSupervisor(e.target.value)}
          />

          {/*Co-supervisorour*/}
          <FormRow
            type="text"
            labelText="Co-supervisorour"
            name="coSupervisor"
            isReadOnly={true}
            value={coSupervisor}
            handleChange={(e) => setCoSupervisor(e.target.value)}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
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
