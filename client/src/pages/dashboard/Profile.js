import React, { useState } from "react";
import { Alert, FormRow } from "../../components/index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [type, setType] = useState(user?.type);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, email, type);
    if (!name || !email || !type) {
      displayAlert();
      return;
    }
    updateUser({ name, email, type });
  };
  return (
    <Wrapper data-testid="test-10">
      <form className="form">
        <h3>Profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="type"
            value={type}
            handleChange={(e) => setType(e.target.value)}
            isReadOnly={true}
          />
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

export default Profile;
