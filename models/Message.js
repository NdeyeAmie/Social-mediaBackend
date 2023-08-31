const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
    readAt:{
      type: Date,
    },
    date_added:{
      type: Date,
      default: Date.now
    }
  },
  
);

module.exports = mongoose.model("Message", MessageSchema);