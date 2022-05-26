import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import Supervisor from "../../components/MySupervise";
import Wrapper from "../../assets/wrappers/JobsContainer";
import Loading from "../../components/Loading";

const SupervisorHome = () => {

    const {
        getSupervise,
        specificSupervise,
        isLoading,
        user
      } = useAppContext();
    
      useEffect(() => {
        getSupervise(user._id);
      }, []);
      
      if (isLoading) {
        return <Loading center />;
      }
      if (specificSupervise.length === 0) {
        return (
          <Wrapper>
            <h2>No Users to display.</h2>
          </Wrapper>
        );
      }
      return (
        <Wrapper>
          <h4>
              You supervise 
          </h4>
          <div className="jobs">
            {specificSupervise.map((supervisor) => {
              return <Supervisor key={supervisor._id} {...supervisor} />;
            })}
          </div>
        </Wrapper>
      );
}

export default SupervisorHome
