import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
// import { Link } from "react-router-dom";
const Uploaddocs = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [allFiles, setAllFiles] = useState([]);
  const [allDescriptions, setAllDescriptions] = useState([]);
  const [description, setDescription] = useState("Enter your description here");
  const [isLoading, setIsLoading] = useState(false);
  const { user, displaySuccessUpload } = useAppContext();

  const getAllFiles = async () => {
    try {
      const response = await axios.get("/api/v1/files");
      const res = await axios.get("/api/v1/files/docs");
      setAllFiles(response.data);
      setAllDescriptions(res.data.docs);
      console.log(response.data);
      console.log(res.data.docs);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem in the server.");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };
  useEffect(() => {
    getAllFiles();
  }, []);
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        `/api/v1/files/${description}/${user.type}`,
        formData,
        {
          headers: {
            "Content-Type": "mutipart/form-data",
          },
        }
      );
      console.log(res);
      getAllFiles();
      setIsLoading(false);
      if (res.status === 201) {
        // alert("success");
        displaySuccessUpload();
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem in the server.");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <center>
            <h4>We are uploading your file please wait.</h4>
          </center>
          <br />
          <Loading center />
        </Wrapper>
      ) : (
        <Wrapper>
          <Alert />
          <form onSubmit={onSubmit} className="form">
            <h4>Upload documents</h4>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
                required
              />
              <label className="custom-file-label" htmlFor="customFile">
                {fileName}
              </label>
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <input
              type="submit"
              value="upload"
              className="btn btn-primary btn-block mt-4"
              disabled={isLoading}
            />
          </form>
        </Wrapper>
      )}
    </>
  );
};

export default Uploaddocs;
