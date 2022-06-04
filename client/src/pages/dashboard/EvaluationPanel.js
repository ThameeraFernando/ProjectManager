import {React, useEffect} from "react";
import SupervisorInfo from "../../components/SupervisorInfo";
import Wrapper from "../../assets/wrappers/Job";
import { useAppContext } from "../../context/appContext";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Loading from "../../components/Loading";
import { GiTeacher } from "react-icons/gi";
import { Alert } from "../../components/index";

const EvaluationPanel = () => {
  const { showAlert, getEvaluationGroup, evaluationGroup, isLoading, user, evaluate_AcceptTopic, evaluate_RejectTopic } = useAppContext();
  
  useEffect(() => {
    getEvaluationGroup(user.email); 
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  
  // console.log(evaluationGroup);


  if(!evaluationGroup){
      return <div className="content-center">
        <h3>You dont have a group yet</h3>
      </div>
  }

  const handleAccept = (e) => {
    e.preventDefault()
    evaluate_AcceptTopic(evaluationGroup.groupID,evaluationGroup.panelMemberEmail)
  }

  const handleReject =(e)  => {
    e.preventDefault()
    evaluate_RejectTopic(evaluationGroup.groupID,evaluationGroup.panelMemberEmail)
  }
  
return ( 
    <Wrapper>
      <div className="btn-container">
          {showAlert && <Alert />}    
        </div>
      <header>
        <div className="main"><h4>Group ID :  {evaluationGroup.groupID}</h4></div>
        <div className="info">
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <SupervisorInfo icon={<IoPerson />} text={evaluationGroup.itNumOne} />
          <SupervisorInfo icon={<MdEmail />} text={evaluationGroup.emailOne} />
          <SupervisorInfo icon={<IoPerson />} text={evaluationGroup.itNumTwo} />
          <SupervisorInfo icon={<MdEmail />} text={evaluationGroup.emailTwo} />
          <SupervisorInfo icon={<IoPerson />} text={evaluationGroup.itNumThree} />
          <SupervisorInfo icon={<MdEmail />} text={evaluationGroup.emailThree} />
          <SupervisorInfo icon={<IoPerson />} text={evaluationGroup.itNumFour} />
          <SupervisorInfo icon={<MdEmail />} text={evaluationGroup.emailFour} />
          <SupervisorInfo icon={<GiTeacher />} text={evaluationGroup.supervisor} />
          <SupervisorInfo icon={<GiTeacher />} text={evaluationGroup.coSupervisor} />
          <SupervisorInfo icon={<MdEmail />} text={evaluationGroup.panelMemberEmail} />
          <SupervisorInfo icon={<GiTeacher />} text={evaluationGroup.panelMemberName} />
          <SupervisorInfo icon={<GiTeacher />} text={evaluationGroup.panelTopicEvaluation} />

          
          
          
        </div>
        <div className="btn-container">
            <button className="btn btn-block btn-success" type="submit" onClick={handleAccept} >
              Accept
            </button>
            <button className="btn btn-block btn-danger" type="submit" onClick={handleReject}>
              Reject
            </button>
          </div>
      </div>
    </Wrapper>
  );
}

export default EvaluationPanel
