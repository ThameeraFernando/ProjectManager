import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  type: "",
  isMember: true,
  showAlert: true,
};

function Register() {
  //use global context
  const { isLoading, showAlert, displayAlert } = useAppContext();
  const [values, setValues] = useState(initialState);
  //handle change values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, type, isMember } = values;
    if (!name || !email || !password || !type || !isMember) {
      displayAlert();
      return;
    }
    console.log(values);
  };
  //toggle Member
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {showAlert && <Alert />}
        <h3>Login</h3>

        <FormRow
          type="text"
          name="name"
          handleChange={handleChange}
          value={values.name}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not yet a member" : "Already a member"}
          <button type="btn" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
