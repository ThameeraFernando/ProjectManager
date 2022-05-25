import React from "react";
import moment from "moment";
import UserInfo from "./UserInfo";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import { useAppContext } from "../context/appContext";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";
import { BsFillBagCheckFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";

const User = ({
  _id,
  createdAt,
  coSupervisor,
  supervisor,
  updatedAt,
  emailFour,
  emailOne,
  emailThree,
  emailTwo,
  groupID,
  isRegister,
  itNumFour,
  itNumOne,
  itNumThree,
  itNumTwo,
}) => {
  let cRdate = moment(createdAt);
  cRdate = cRdate.format("MMM Do, YYYY");
  let uPdate = moment(createdAt);
  uPdate = uPdate.format("MMM Do, YYYY");
  //   const { setDeleteUser, setUpdateUser } = useAppContext();

  return (
    <Wrapper>
      <header>
        <div className="main">{groupID}</div>
        <div className="info">
          {/* <h5>{type}</h5>
          <p>{}</p> */}
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <UserInfo icon={<IoPerson />} text={itNumOne} />
          <UserInfo icon={<MdEmail />} text={emailOne} />
          <UserInfo icon={<IoPerson />} text={itNumTwo} />
          <UserInfo icon={<MdEmail />} text={emailTwo} />
          <UserInfo icon={<IoPerson />} text={itNumThree} />
          <UserInfo icon={<MdEmail />} text={emailThree} />
          <UserInfo icon={<IoPerson />} text={itNumFour} />
          <UserInfo icon={<MdEmail />} text={emailFour} />
          <UserInfo icon={<GiTeacher />} text={supervisor} />
          <UserInfo icon={<GiTeacher />} text={coSupervisor} />
          <UserInfo icon={<IoTime />} text={cRdate} />
        </div>
      </div>
    </Wrapper>
  );
};

export default User;
