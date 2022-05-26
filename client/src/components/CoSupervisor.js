import React from "react";
import moment from "moment";
import CoSupervisorInfo from "./CoSupervisorInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

const CoSupervisor = ({ name, type, email, availability, field }) => {
  const { requestSupervisor } = useAppContext();

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
          <CoSupervisorInfo icon={<IoPerson />} text={name} topic="Name" />
          <CoSupervisorInfo icon={<MdEmail />} text={email} />
          <CoSupervisorInfo icon={<MdEmail />} text={availability} />
          <CoSupervisorInfo icon={<MdEmail />} text={field} />
          <CoSupervisorInfo icon={<BsFillBagCheckFill />} text={type} />
        </div>

        <footer>
          <button type="button" className="btn edit-btn">
            Request
          </button>
        </footer>
      </div>
    </Wrapper>
  );
};

export default CoSupervisor;
