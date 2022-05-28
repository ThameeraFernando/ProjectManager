import React, { useEffect } from "react";
import SearchContainer from "../../components/SearchContainer";
import StaffContainer from "../../components/StaffContainer";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
const StaffMembers = () => {
  const navigator = useNavigate();
  const { user } = useAppContext();
  useEffect(() => {
    // console.log(user.type);
    if (user.type !== "Admin") {
      navigator("/");
    }
  });
  return (
    <>
      <StaffContainer />
    </>
  );
};

export default StaffMembers;
