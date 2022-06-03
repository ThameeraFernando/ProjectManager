import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div data-testid="test-1" className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  );
};

export default Alert;
