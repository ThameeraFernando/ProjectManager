// import React from "react";
// import { useAppContext } from "../context/appContext";
// import { useEffect } from "react";
// import Loading from "./Loading";
// import Supervisor from "./Supervisor";
// import Wrapper from "../assets/wrappers/JobsContainer";

// const SupervisorContainer = () => {
//   const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

//   useEffect(() => {
//     getJobs();
//   }, []);

//   if (isLoading) {
//     return <Loading center />;
//   }

//   if (jobs.length === 0) {
//     return (
//       <Wrapper>
//         <h2>No Jobs to display...</h2>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <h5>
//         {totalJobs} job{jobs.length > 1 && "s"} found
//       </h5>
//       <div className="jobs">
//         {jobs.map((job) => {
//           return <Supervisor key={job._id} {...job} />;
//         })}
//       </div>
//     </Wrapper>
//   );
// };

// export default SupervisorContainer;
