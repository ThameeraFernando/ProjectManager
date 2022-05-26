import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const DownloadFile = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const deleteDownLoad = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(`/api/v1/files/docs/${id}`);
      console.log(response.data);
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Wrapper>
          <center>
            <h3>please wait your download will start in few moments...</h3>
          </center>
          <Loading center />
        </Wrapper>
      ) : (
        <Wrapper>
          <h3>Your download is ready.</h3>
          <h5>Click download to download your file.</h5>
          <h5>If file didn't work please try again.</h5>
          <a
            className="btn btn-primary mt-1 mb-1"
            id="gLink"
            href={`/FOC/${id}`}
            onClick={() => deleteDownLoad(id)}
            download
          >
            download
          </a>
        </Wrapper>
      )}
    </>
  );
};

export default DownloadFile;
