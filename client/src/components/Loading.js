import React from "react";

const Loading = ({ center }) => {
  return <div data-testid="test-7" className={center ? "loading loading-center" : "loading"}></div>;
};

export default Loading;
