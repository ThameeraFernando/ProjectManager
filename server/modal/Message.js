const mongoose = require("mongoose");
const validator = require("validator");

const messageSchema = new mongoose.Schema(
  {
    group: {
      type: String,
      required: [true, "please provide group id"],
    },
    
    sender: {
      type: String,
      required: [true, "please provide sender Name."],
    },
    message: {
      type: String,
      required: [true, "please enter a message."],
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
