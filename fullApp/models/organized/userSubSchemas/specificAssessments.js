const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalInfo=require('./userSubSchemas/generalInfo')
const currentSchemas=require('./userSubSchemas/currentSchemas')
const basicAssessments=require('./userSubSchemas/basicAssessments')
const specificAssessments=require('./userSubSchemas/specificAssessments')
const allSchemas=require('./userSubSchemas/allSchemas')

const userSchema = new Schema({
    generalInfo:generalInfo,
    currentSchemas:currentSchemas,
    basicAssessments:basicAssessments,
    specificAssessments:specificAssessments,
    allSchemas:allSchemas
  },);

  const User = mongoose.model('test', userSchema);
  
  module.exports = User;
