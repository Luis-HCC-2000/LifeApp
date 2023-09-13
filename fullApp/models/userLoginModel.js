const lifeTrapsAssessmentSchema= require('./lifeTrapsAssessmentSchema')
const userTextSchema = require("./userTextSchema")
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
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
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      lowercase: true // Convert email to lowercase before saving
    },
    password: {
      type: String,
      required: true
    },
    lifeTrapsAssessments:[lifeTrapsAssessmentSchema],
    userTexts:[userTextSchema]
  });



  // Create and export the User model
  userSchema.add(lifeTrapsAssessmentSchema)
  const User = mongoose.model('BetterLifeUser', userSchema);
  
  module.exports = User;
