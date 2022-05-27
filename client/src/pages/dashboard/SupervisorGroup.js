import {React, useEffect} from "react";
import SupervisorInfo from "../../components/SupervisorInfo";
import Wrapper from "../../assets/wrappers/Job";
import { useAppContext } from "../../context/appContext";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Loading from "../../components/Loading";
import { GiTeacher } from "react-icons/gi";

const SupervisorGroup = () => {
    const { getSupervisorGroup, supervisorGroup, isLoading,user } = useAppContext();
  useEffect(() => {
    getSupervisorGroup(user.name); 
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  if(!supervisorGroup){
      return <div className="content-center">
        <h3>You dont have a group yet</h3>
      </div>
  }
  
return ( 
    <Wrapper>
      <header>
        <div className="main"><h4>Group ID :  {supervisorGroup.groupID}</h4></div>
        <div className="info">
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <SupervisorInfo icon={<IoPerson />} text={supervisorGroup.itNumOne} />
          <SupervisorInfo icon={<MdEmail />} text={supervisorGroup.emailOne} />
          <SupervisorInfo icon={<IoPerson />} text={supervisorGroup.itNumTwo} />
          <SupervisorInfo icon={<MdEmail />} text={supervisorGroup.emailTwo} />
          <SupervisorInfo icon={<IoPerson />} text={supervisorGroup.itNumThree} />
          <SupervisorInfo icon={<MdEmail />} text={supervisorGroup.emailThree} />
          <SupervisorInfo icon={<IoPerson />} text={supervisorGroup.itNumFour} />
          <SupervisorInfo icon={<MdEmail />} text={supervisorGroup.emailFour} />
          <SupervisorInfo icon={<GiTeacher />} text={supervisorGroup.supervisor} />
          <SupervisorInfo icon={<GiTeacher />} text={supervisorGroup.coSupervisor} />
        </div>
        <div className="content">
            <button className="btn btn-success">
                send message
            </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SupervisorGroup
