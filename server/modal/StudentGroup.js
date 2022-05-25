const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const studentSchema = new Schema(
  {
    groupID: {
      type: String,
      required: [true, "please provide Group ID."],
      maxlength: 10,
      minlength: 3,
      unique: true,
    },

    itNumOne: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    emailOne: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    itNumTwo: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    emailTwo: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    itNumThree: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    emailThree: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    itNumFour: {
      type: String,
      required: [true, "please provide IT Number."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },

    emailFour: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
      unique: true,
    },

    supervisor: {
      type: String,
      default: "pending",
    },

    coSupervisor: {
      type: String,
      default: "pending",
    },

    isRegister: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//Student model export
const Groups = mongoose.model("Groups", studentSchema);
module.exports = Groups;
