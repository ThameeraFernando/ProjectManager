import React from "react";
import moment from "moment";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

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
  const { setDeleteUser, setUpdateUser } = useAppContext();
  let validStaff = "Not a valid staff member.";
  if (isValidStaff) {
    validStaff = "Valid staff member";
  }
  return (
    <Wrapper data-testid="test-2">
      <header>
        <div className="main-icon">{email.charAt(0)}</div>
        <div className="info">
          <h5>{type}</h5>
          <p data-testid="test-3">{name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<IoPerson />} text={name} />
          <UserInfo icon={<MdEmail />} text={email} />
          <UserInfo icon={<BsFillBagCheckFill />} text={type} />
          <UserInfo icon={<IoTime />} text={cRdate} />
          <UserInfo icon={<MdUpdate />} text={uPdate} />
          <UserInfo icon={<GrValidate />} text={validStaff} />
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/update-user"
              className="btn edit-btn"
              onClick={() => setUpdateUser(_id)}
            >
              Edit
            </Link>
            <Link
              to="/update-user"
              className="btn delete-btn"
              onClick={() => setDeleteUser(_id)}
            >
              Delete
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default User;
