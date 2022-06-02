import React from 'react'
import Wrapper from "../assets/wrappers/Job";
import SupervisorInfo from "./SupervisorInfo";
import { MdEmail, MdUpdate } from "react-icons/md";
import { IoPerson, IoTime } from "react-icons/io5";


const Message = (props) => {
    const { sender, message } = props;
    
    return (
        <Wrapper>
            <div className="content">
                <div className="content-center">
                    <SupervisorInfo icon={<IoPerson />} text={sender} />
                    <SupervisorInfo icon={<MdEmail />} text={message} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Message
