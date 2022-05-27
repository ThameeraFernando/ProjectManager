import React, { useEffect } from "react";
import moment from "moment";
import SupervisorInfo from "./SupervisorInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

const Supervisor = (props) => {
  const { name, type, email, availability, field } = props;
  const { requestSupervisor, getRequestSupervisor, requestGroups } =
    useAppContext();

  useEffect(() => {
    getRequestSupervisor();
  }, []);

  return (
    <Wrapper>
      <header>
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
        </div>

        <footer>
          {!requestGroups.length >= 1 && (
            <button
              type="button"
              className="btn edit-btn"
              onClick={() => requestSupervisor(email, name)}
            >
              Request
            </button>
          )}
        </footer>
      </div>
    </Wrapper>
  );
};

export default Supervisor;
