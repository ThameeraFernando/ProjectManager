const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema(
  {
    description: {
      type: String,
      default: "none",
    },
    submittedBy: {
      type: String,
      default: "none",
    },
    submittedTo: {
      type: String,
      default: "none",
    },
    dueDate: {
      type: String,
      default: "none",
    },
  },
  { timestamps: true }
);

//create a sub model using subSchema and export
const Sub = mongoose.model("Sub", subSchema);
module.exports = Sub;
