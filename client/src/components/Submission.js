import React from "react";
import moment from "moment";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";

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
  const { removeSubmission, user } = useAppContext();
  const today = new Date();
  const endDate = new Date(dueDate);
  const days = parseInt((endDate - today) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(endDate - today) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt(
    (Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(endDate.getTime() - today.getTime()) / 1000) % 60
  );

  // console.log(days, hours, minutes, seconds);
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
          <UserInfo icon={<GiTeacher />} text={submittedTo} />
          <UserInfo
            icon={<AiOutlineClockCircle />}
            text={`${days} days ${hours} hours ${minutes} minutes`}
          />
        </div>
        <footer>
          <div className="actions">
            {user.type === "Admin" && (
              <button
                type="button"
                className="btn delete-btn mr-2"
                onClick={() => removeSubmission(_id)}
              >
                Remove Submission
              </button>
            )}
            {user.type === "Student" && (
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
            )}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Submission;
