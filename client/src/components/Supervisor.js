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

const Supervisor = ({
  _id,
  createdAt,
  name,
  type,
  email,
  updatedAt,
  isValidStaff,
}) => {
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
          <SupervisorInfo icon={<IoPerson />} text={name} />
          <SupervisorInfo icon={<MdEmail />} text={email} />
          <SupervisorInfo icon={<BsFillBagCheckFill />} text={type} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Supervisor;
