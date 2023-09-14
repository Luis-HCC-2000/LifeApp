const mongoose = require("mongoose");
const Schema = mongoose.Schema

const therapistSchema = new Schema({
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
})

  // Create and export the User model
  const therapist = mongoose.model('therapist', therapistSchema);

module.exports = therapist