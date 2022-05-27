const mongoose = require("mongoose");
const validator = require("validator");

const requestCoSchema = new mongoose.Schema(
  {
    groupID: {
      type: String,
      required: [true, "please provide name."],
    },
    coSupervisorEmail: {
      type: String,
      required: [true, "please provide supervisor's email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    coSupervisorName: {
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

const CoRequest = mongoose.model("CoRequest", requestCoSchema);
module.exports = CoRequest;
