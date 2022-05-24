const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const studentSchema = new Schema(
  {
    memberOneITNum: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    memberOneEmail: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    memberTwoITNum: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    memberTwoEmail: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    memberThreeITNum: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    memberThreeEmail: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    memberFourITNum: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    memberFourEmail: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },
  },
  { timestamps: true }
);

//Student model export
const groups = mongoose.model("Groups", studentSchema);
module.exports = groups;
