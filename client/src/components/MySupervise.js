import React from "react";
import moment from "moment";
import SupervisorInfo from "./SupervisorInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import Alert from "./Alert";


const MySupervise = ({_id, name, type, email, availability, field, count }) => {
  const { setEditSupervise, deleteSupervise, user, showAlert } = useAppContext();
  return (
    <Wrapper>
      <header>
        {showAlert && <Alert />}
        <div className="main-icon">{name.charAt(0)}</div>
        <div className="info">
          <h5>{type}</h5>
          <p>{name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <SupervisorInfo icon={<IoPerson />} text={name} topic="Name" />
          <SupervisorInfo icon={<MdEmail />} text={email} />
          <SupervisorInfo icon={<MdEmail />} text={availability} />
          <SupervisorInfo icon={<MdEmail />} text={field} />
          <SupervisorInfo icon={<BsFillBagCheckFill />} text={type} />
          <SupervisorInfo icon={<BsFillBagCheckFill />} text={count} />
        </div>

        <footer>
          <Link
            to='/supervise'
            className="btn edit-btn"
            onClick={() => {setEditSupervise({_id, name, type, email, availability, field, count }) }}
          >
            Edit
          </Link>

          <button
            type="button"
            className="btn delete-btn"
            onClick={() => deleteSupervise(_id,user._id)}
          >
            Delete
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default MySupervise;
