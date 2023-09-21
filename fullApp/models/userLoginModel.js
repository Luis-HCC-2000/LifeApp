const lifeTrapsAssessmentSchema= require('./lifeTrapsAssessmentSchema')
const userTextSchema = require("./userTextSchema")
const trapSchema= require('./userTraps/trapSchema')
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

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
    userTexts:[userTextSchema],
    trapSchemas:[trapSchema]
  },{
    toJSON:{virtuals:true},
    virtuals:{
    getMissingFields:{
      get(){
        let missingFields=[]
        if (this.lifeTrapsAssessments){
          missingFields.push('lifeTrapsAssessments')
        }
        if (this.userTexts){
          missingFields.push('userTexts')
        }
        if (this.trapSchemas){
          missingFields.push('trapSchemas')
        }
      }
    },
    getLastFirstAssessment:{
      get(){
        return this.lifeTrapsAssessments[this.lifeTrapsAssessments.length-1]
      }
    }
  }});

  const User = mongoose.model('BetterLifeUser', userSchema);
  
  module.exports = User;
