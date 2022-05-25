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

const Submission = ({
  _id,
  createdAt,
  description,
  dueDate,
  submittedBy,
  submittedTo,
  updatedAt,
}) => {
  let cRdate = moment(createdAt);
  cRdate = cRdate.format("MMM Do, YYYY");
  let uPdate = moment(updatedAt);
  uPdate = uPdate.format("MMM Do, YYYY");
  const { removeSubmission } = useAppContext();
  return (
    <Wrapper>
      <header>
        <div className="info">
          <p>{description}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<IoPerson />} text={submittedBy} />
          <UserInfo icon={<IoPerson />} text={submittedTo} />
          <UserInfo icon={<IoPerson />} text={dueDate} />
        </div>
        <footer>
          <div className="actions">
            <button
              type="button"
              className="btn delete-btn mr-2"
              onClick={() => removeSubmission(_id)}
            >
              Remove Submission
            </button>
            <Link
              to="/student-submissions"
              className="btn edit-btn"
              state={{
                _id,
                createdAt,
                description,
                dueDate,
                submittedBy,
                submittedTo,
                updatedAt,
              }}
            >
              Add Submission
            </Link>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Submission;
