const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const docSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "please provide name."],
    },
    docName: {
      type: String,
      required: [true, "please provide name."],
    },
    submittedBy: {
      type: String,
      default: "none",
    },
  },
  { timestamps: true }
);

//create a user model using docSchema and export
const Doc = mongoose.model("Doc", docSchema);
module.exports = Doc;
