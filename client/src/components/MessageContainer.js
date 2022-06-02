// import React, { useEffect } from "react";
// import { useAppContext } from "../context/appContext";
// import Loading from "./Loading";
// import Message from "./Message";
// import Wrapper from "../assets/wrappers/JobsContainer";

// const MessageContainer = () => {
//     const { isLoading, getMessages, messages, getSupervisorGroup, supervisorGroup, user } = useAppContext();

//     useEffect(() => {     
//         getSupervisorGroup(user.name);
//         getMessages(supervisorGroup.groupID);
//     }, []);

//     if (isLoading) {
//       return <Loading center />;
//     }
//     if (messages.length === 0) {
//       return (
//         <Wrapper>
//           <h2>No Messages to display.</h2>
//         </Wrapper>
//       );
//     }
//     return (
//       <Wrapper>
//         <div className="jobs">
//           {messages.map((message) => {
//             return <Message key={message._id} {...message} />;
//           })}
//         </div>
//       </Wrapper>
//     );
// }

// export default MessageContainer
