import {React, useEffect, useState} from 'react'
import FormRow from "../../components/FormRow";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";
import Message from '../../components/Message';
import Wrapper from "../../assets/wrappers/Job";



const StudentMessage = () => {

    const [message, setMessage] = useState('');

    const { getGroups, membergroupID, isLoading ,user , getMessages, messages, sendMessage } = useAppContext();
    
    useEffect(() => {
        getGroups();
        getMessages(membergroupID); 
    }, []);
 
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    // console.log(user);
    const onSubmit = (e) => {
        e.preventDefault()
        sendMessage({sender:user.type, message:message, group:membergroupID});
        setMessage('')

    }

    if (isLoading) {
      return <Loading center />;
    }

  return (
    <div>
      <div>
      <div className='form-center'>
        <h4>Group Chat</h4>
      </div>
        {messages.length === 0 ? 'no messages yet...' :messages.map((message) => {
          if(message.sender==='Student'){
            message.sender='Group'
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

export default StudentMessage


