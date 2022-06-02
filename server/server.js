const express = require("express");
const app = express();
require("express-async-errors");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");
const submissionRouter = require("./Routes/submissionRoute");
const requestRouter = require("./Routes/requestRoutes");

const supervisorRouter = require("./Routes/supervisorRoutes");
const coSupervisorRouter = require("./Routes/coSupervisorRoutes");

const studentRouter = require("./Routes/studentRoute");

const fileRouter = require("./Routes/docRoutes");

const coRequestRouter = require("./Routes/coRequestRoutes");
const messageRouter = require("./Routes/messageRoutes");

const dotenv = require("dotenv");
const morgan = require("morgan");
// const fileUpload = require("express-fileupload");

// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// app.use(fileUpload());

//use morgan middleware
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
dotenv.config();
//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//connect to DB
require("./db/connectDB");
//set port
const port = process.env.PORT || 5000;

//routes
//home route
app.get("/", (req, res) => {
  res.status(200).send({ msg: "home page" });
});
//authentication routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.use("/api/v1/supervisor", supervisorRouter);
app.use("/api/v1/cosupervisor", coSupervisorRouter);

app.use("/api/v1/files", fileRouter);
app.use("/api/v1/submissions", submissionRouter);
app.use("/api/v1/requests", requestRouter);
app.use("/api/v1/corequests", coRequestRouter);
app.use("/api/v1/message", messageRouter); //coSupervisor request

//student routes
app.use("/api/v1/students", studentRouter);

//setup not found middleware
app.use(notFound);
app.use(errorHandler);

//setup the listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
