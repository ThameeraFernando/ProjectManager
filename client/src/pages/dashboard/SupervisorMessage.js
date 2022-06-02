import {React, useEffect, useState} from 'react'
import FormRow from "../../components/FormRow";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";
import Message from '../../components/Message';
import Wrapper from "../../assets/wrappers/Job";



const SupervisorMessage = () => {

    const [message, setMessage] = useState('');

    const { getSupervisorGroup, supervisorGroup, isLoading ,user , getMessages, messages, sendMessage } = useAppContext();
    
    useEffect(() => {
      getSupervisorGroup(user.name);
      getMessages(supervisorGroup.groupID); 
    }, []);
 
    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        sendMessage({sender:user.type, message:message, group:supervisorGroup.groupID});
    }

    if (isLoading) {
      return <Loading center />;
    }

  return (
    <div>
      <div>
        {messages.length === 0 ? 'no messages yet...' :messages.map((message) => {
          if(message.sender==='Supervisor'){
            message.sender='You'
          }
          return <Message key={message._id} {...message} />;
        })}
      </div>
       <form className="form" onSubmit={onSubmit}>
       <div className='form-center'>
       <FormRow
            type="text"
            name="message"
            handleChange={handleChange}
            value={message}
        />
        <button type="submit" className="btn btn-block" > send </button>
        </div>
       </form>
    </div>
  )
}

export default SupervisorMessage


