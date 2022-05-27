import React, { useEffect } from "react";
import moment from "moment";
import CoSupervisorInfo from "./CoSupervisorInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";

const CoSupervisor = (props) => {
  const { name, type, email, availability, field } = props;
  const {
    requestCoSupervisor,
    getRequestCoSupervisor,
    requestGroups,
    requestCoGroups,
    getRequestSupervisor,
  } = useAppContext();

  useEffect(() => {
    getRequestCoSupervisor();
    getRequestSupervisor();
  }, []);

  const status = requestGroups.map((group) => {
    return group.status;
  });

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
          {status[0] === "accepted" && (
            <>
              {!requestCoGroups.length >= 1 && (
                <button
                  type="button"
                  className="btn edit-btn"
                  onClick={() => requestCoSupervisor(email, name)}
                >
                  Request
                </button>
              )}
            </>
          )}
        </footer>
      </div>
    </Wrapper>
  );
};

export default CoSupervisor;
