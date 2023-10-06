const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  birthDate: {
    type: Date,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  },);
  
  module.exports = infoSchema;
