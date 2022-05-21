import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  type: "Student",
  isMember: true,
  showAlert: true,
};

function Register() {
  const navigate = useNavigate();
  //use global context
  const { isLoading, showAlert, displayAlert, registerUser, user } =
    useAppContext();
  //redirect to home page
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [navigate, user]);
  const [values, setValues] = useState(initialState);
  //handle change values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, type, isMember } = values;
    // console.log(values);
    if (isMember) {
      console.log("already a member");
    } else {
      //check for empty values
      if (!name || !email || !password || !type) {
        displayAlert();
        return;
      } else {
        const currentMember = { name, email, password, type };
        registerUser(currentMember);
      }
    }
  };
  //toggle Member
  const toggleMember = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {showAlert && <Alert />}
        {values.isMember ? <h3>Login</h3> : <h3>Register</h3>}

        <FormRow
          type="text"
          name="name"
          handleChange={handleChange}
          value={values.name}
        />
        <FormRow
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />
        <div className="form-row">
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <select
            name="type"
            value={values.type}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Student">Student</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Panel Member">Panel Member</option>
          </select>
        </div>
        <FormRow
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          Submit
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
