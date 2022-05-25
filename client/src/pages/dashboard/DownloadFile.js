import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const DownloadFile = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <h3>Your download is ready.</h3>
      <h5>Click download to download your file.</h5>
      <a
        className="btn btn-primary mt-1 mb-1"
        id="gLink"
        href={`/FOC/${id}`}
        download
      >
        download
      </a>
    </Wrapper>
  );
};

export default DownloadFile;
