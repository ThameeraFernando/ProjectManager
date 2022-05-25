// import React from "react";
// import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useAppContext } from "../context/appContext";
// import Wrapper from "../assets/wrappers/Job";
// import SupervisorInfo from "./SupervisorInfo";

// const Supervisor = ({
//   _id,
//   position,
//   company,
//   jobLocation,
//   jobType,
//   createdAt,
//   status,
// }) => {
//   const { setEdit, deleteJob } = useAppContext();
//   return (
//     <Wrapper>
//       <header>
//         <div className="main-icon">{company.charAt(0)}</div>
//         <div className="info">
//           <h5>{position}</h5>
//           <p>{company}</p>
//         </div>
//       </header>
//       <div className="content">
//         <div className="content-center">
//           <SupervisorInfo icon={<FaLocationArrow />} text={jobLocation} />
//           <SupervisorInfo icon={<FaCalendarAlt />} />
//           <SupervisorInfo icon={<FaBriefcase />} text={jobType} />
//           <div className={`status ${status}`}>{status}</div>
//         </div>

//         <footer>
//           <div className="actions">
//             <Link
//               to="/add-job"
//               className="btn edit-btn"
//               onClick={() => setEdit(_id)}
//             >
//               Edit
//             </Link>
//             <button
//               type="button"
//               className="btn delete-btn"
//               onClick={() => deleteJob(_id)}
//             >
//               Delete
//             </button>
//           </div>
//         </footer>
//       </div>
//     </Wrapper>
//   );
// };

// export default Supervisor;
