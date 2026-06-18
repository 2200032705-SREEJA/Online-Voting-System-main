const mongoose = require("mongoose");

const voterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  voted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Voter", voterSchema);