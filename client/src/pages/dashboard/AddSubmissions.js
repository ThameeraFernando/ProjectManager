import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";
import { useLocation } from "react-router-dom";

const AddSubmissions = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [allFiles, setAllFiles] = useState([]);
  const [allDescriptions, setAllDescriptions] = useState([]);
  // const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppContext();
  const location = useLocation();
  const {
    _id,
    createdAt,
    description,
    dueDate,
    submittedBy,
    submittedTo,
    updatedAt,
  } = location.state;

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
        `/api/v1/files/${description}/${user.type}/${submittedTo}`,
        formData,
        {
          headers: {
            "Content-Type": "mutipart/form-data",
          },
        }
      );
      console.log(res);
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
      <h2>{description}</h2>
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

export default AddSubmissions;
