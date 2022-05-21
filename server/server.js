const express = require("express");
const app = express();
require("express-async-errors");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const authRouter = require("./Routes/authRoutes");
const userRouter = require("./Routes/userRoutes");
const dotenv = require("dotenv");
dotenv.config();
//middleware
app.use(express.json());
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

//setup not found middleware
app.use(notFound);
app.use(errorHandler);

//setup the listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
