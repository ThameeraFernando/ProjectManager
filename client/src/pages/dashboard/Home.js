import React, { useState, useEffect } from "react";
import Wrapper from "../../assets/wrappers/JobsContainer";
import ItemWrapper from "../../assets/wrappers/Job";
import { useAppContext } from "../../context/appContext";
import axios from "axios";
// import { Link } from "react-router-dom";
const Home = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [allFiles, setAllFiles] = useState([]);
  const [allDescriptions, setAllDescriptions] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppContext();
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

  const download = async ({ e, filename }) => {
    e.preventDefault();
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
      <div className="jobs">
        {allFiles &&
          allFiles.map((file) => {
            const { filename, _id } = file;

            return (
              <ItemWrapper>
                <div key={file._id}>
                  <header>
                    <h4>{file.filename}</h4>
                    <br />
                    {allDescriptions.map((des) => {
                      const { description } = des;
                      if (des.docName == filename) {
                        return <h4>{description}</h4>;
                      }
                    })}
                  </header>
                  <div className="content">
                    <div className="content-center">
                      <footer>
                        <div className="actions">
                          <button
                            type="submit"
                            onClick={(e) => download({ e, filename })}
                            className="btn btn-primary mr-1"
                            disabled={isLoading}
                          >
                            Get the file
                          </button>
                          {user.type === "Admin" && (
                            <button
                              type="submit"
                              onClick={(e) => Delete({ e, filename })}
                              className="btn btn-primary mr-1"
                              disabled={isLoading}
                            >
                              Delete
                            </button>
                          )}
                          <a
                            className="btn btn-primary mt-1 mb-1"
                            id="gLink"
                            href={`/FOC/${file.filename}`}
                            download
                          >
                            download
                          </a>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
              </ItemWrapper>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default Home;
