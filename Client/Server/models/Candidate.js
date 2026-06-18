const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  fullName: String,
  party: String,
  age: Number,
  img: String,
  symbol: String,
  votes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Candidate", candidateSchema);