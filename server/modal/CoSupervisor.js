const mongoose = require("mongoose");
const validator = require("validator");

const coSupervisorSchema =new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide name."],
      trim: true,
      maxlength: 20,
      minlength: 5,
    },
    email: {
      type: String,
      required: [true, "please provide email."],
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email address.",
      },
    },
    type: {
      type: String,
      enum: ['supervisor', 'co-supervisor'],
      default: 'co-supervisor',
    },
    field: {
        type: String,
        required: [true, "please provide research field."],
        trim: true,
    },
    availability: {
        type: String,
        enum: ['available', 'not-available'],
        default: 'available',
    },
    count: {
        type: Number,
        max:[1, 'Cannot supervise more than 1 groups'],
        default: 0,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user ID'],
    },
  },
  { timestamps: true }
);

//create a user model using userSchema and export
const CoSupervisor = mongoose.model("CoSupervisor", coSupervisorSchema);
module.exports = CoSupervisor;