const mongoose = require("mongoose");
const validator = require("validator");

const requestSchema = new mongoose.Schema(
  {
    groupID: {
      type: String,
      required: [true, "please provide name."],
    },
    supervisorEmail: {
      type: String,
      required: [true, "please provide supervisor's email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    supervisorName: {
      type: String,
      required: [true, "please provide supervisor's Name."],
    },
    topic: {
      type: String,
      required: [true, "please provide research topic."],
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);
module.exports = Request;
