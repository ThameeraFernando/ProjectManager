import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

// import { Link } from "react-router-dom";
const Uploaddocs = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [allFiles, setAllFiles] = useState([]);
  const [allDescriptions, setAllDescriptions] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      const res = await axios.post(`/api/v1/files/${description}`, formData, {
        headers: {
          "Content-Type": "mutipart/form-data",
        },
      });
      console.log(res);
      getAllFiles();
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem in the server.");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };
  const download = async (filename) => {
    // e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/v1/files/${filename}`);

      const { fileName, filePath } = res.data;
      console.log(res);
      setUploadedFile({ fileName, filePath });
      console.log(uploadedFile);
      // document.getElementById("gLink").click();
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem in the server.");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };
  const Delete = async ({ e, filename }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.delete(`/api/v1/files/${filename}`);
      console.log(res);
      getAllFiles();
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 500) {
        console.log("There was a problem in the server.");
      } else {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit} className="form">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
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
  );
};

export default Uploaddocs;
