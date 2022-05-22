import React, { useState } from "react";
import { Alert, FormRow } from "../../components/index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import moment from "moment";
const UpdateUser = () => {
  const {
    showAlert,
    displayAlert,
    isLoading,
    isUpdate,
    updateUserAdmin,
    createdAt,
    name,
    type,
    email,
    updatedAt,
    isValidStaff,
  } = useAppContext();
  let newUPcreatedAt = moment(createdAt);
  newUPcreatedAt = newUPcreatedAt.format("MMM Do,YYYY");
  let newUPupdatedAt = moment(updatedAt);
  newUPupdatedAt = newUPupdatedAt.format("MMM Do,YYYY");
  const [UPname, setUPname] = useState(name);
  const [UPemail, setUPemail] = useState(email);
  const [UPtype, setUPtype] = useState(type);
  const [UPcreatedAt, setUPcreatedAt] = useState(newUPcreatedAt);
  const [UPupdatedAt, setUPupdatedAt] = useState(newUPupdatedAt);
  const [UPisValidStaff, setUPisValidStaff] = useState(isValidStaff);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!UPname || !UPemail) {
      displayAlert();
      return;
    }
    updateUserAdmin({
      UPisValidStaff,
      UPname,
      UPtype,
      UPemail,
    });
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>updateUser</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {isUpdate && (
            <>
              <FormRow
                type="text"
                name="name"
                value={UPname}
                handleChange={(e) => setUPname(e.target.value)}
              />
              <FormRow
                type="email"
                name="email"
                value={UPemail}
                handleChange={(e) => setUPemail(e.target.value)}
              />
              <div>
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <select
                  name="type"
                  value={UPtype}
                  onChange={(e) => setUPtype(e.target.value)}
                  className="form-input"
                >
                  <option value="Student">Student</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Panel Member">Panel Member</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <FormRow
                type="text"
                name="Created date"
                value={UPcreatedAt}
                handleChange={(e) => setUPcreatedAt(e.target.value)}
                isReadOnly={true}
              />
              <FormRow
                type="text"
                name="Last Updated date"
                value={UPupdatedAt}
                handleChange={(e) => setUPupdatedAt(e.target.value)}
                isReadOnly={true}
              />
              <div className="form-row">
                <label htmlFor="type" className="form-label">
                  Valid Staff member
                </label>
                <select
                  name="validStaff"
                  value={UPisValidStaff}
                  className="form-input"
                  onChange={(e) => setUPisValidStaff(e.target.value)}
                >
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            </>
          )}
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
  );
};

export default UpdateUser;
