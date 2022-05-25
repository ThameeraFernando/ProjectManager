import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import StudentGroupContainer from "../../components/StudentGroupContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
const AllStudentGroups = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();

  return (
    <>
      <SearchContainer />
      <StudentGroupContainer />
    </>
  );
};

export default AllStudentGroups;
