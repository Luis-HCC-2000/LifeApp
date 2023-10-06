const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalInfo=require('./userSubSchemas/generalInfo')
const currentSchemas=require('./userSubSchemas/currentSchemas')
const allSchemas=require('./userSubSchemas/allSchemas')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true // Convert email to lowercase before saving
  },
    generalInfo:generalInfo,
    allSchemas:allSchemas,
    currentSchemas:currentSchemas
  },);

  const User = mongoose.model('test', userSchema);
  
  module.exports = User;
