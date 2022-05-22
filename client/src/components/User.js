import React from "react";
import moment from "moment";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const User = ({
  _id,
  createdAt,
  name,
  type,
  email,
  updatedAt,
  isValidStaff,
}) => {
  let cRdate = moment(createdAt);
  cRdate = cRdate.format("MMM Do, YYYY");
  let uPdate = moment(createdAt);
  uPdate = uPdate.format("MMM Do, YYYY");
  const { deleteUser, setUpdateUser } = useAppContext();
  let validStaff = "Not a valid staff member.";
  if (isValidStaff) {
    validStaff = "Valid staff member";
  }
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{email.charAt(0)}</div>
        <div className="info">
          <h5>{type}</h5>
          <p>{name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<FaLocationArrow />} text={name} />
          <UserInfo icon={<FaLocationArrow />} text={email} />
          <UserInfo icon={<FaLocationArrow />} text={type} />
          <UserInfo icon={<FaLocationArrow />} text={cRdate} />
          <UserInfo icon={<FaLocationArrow />} text={uPdate} />
          <UserInfo icon={<FaLocationArrow />} text={validStaff} />
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/profile"
              className="btn edit-btn"
              onClick={() => setUpdateUser(_id)}
            >
              Edit
            </Link>
            <button
              onClick={() => deleteUser(_id)}
              type="button"
              className="btn delete-btn"
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default User;
