const mongoose = require("mongoose");
mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connection success."))
  .catch((error) => {
    console.log(error);
  });
// console.log(conn);

// const conn = mongoose.createConnection(process.env.dbURL);

// module.exports = conn;
