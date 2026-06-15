const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  age: Number,
  address: String,
  skills: String,
  availability: String
});

module.exports = mongoose.model("Volunteer", volunteerSchema);