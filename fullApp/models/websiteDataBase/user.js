const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Mail: String,
  Phone: String,
  FirstName: String,
  LastName: String,
  Password: String,
  DateOfRegistration:Date,
  DateOfBirth:Date,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
