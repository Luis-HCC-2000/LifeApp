const lifeTrapsAssessmentSchema= require('./lifeTrapsAssessmentSchema');
const userTextSchema = require("./userTextSchema")
const specificAssessments= require('./specificAssessmentsSchema')
const trapSchema= require('./trapSchema')
const schemasToWorkOn= require('./schemasToWorkOn')
const mongoose = require("mongoose");
const { urlencoded } = require('express');


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
    specificAssessments:specificAssessments,
    lifeTrapsAssessments:[lifeTrapsAssessmentSchema],
    userTexts:[userTextSchema],
    allSchemas:[trapSchema],
    schemasToWorkOn:[schemasToWorkOn],
    
  },
    {
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
    getspecificAndNotSpecificAssessmentsWithUrl:{
      get(){
        if (this.lifeTrapsAssessments.length==0){
          return {}
        }else{
          let notSpecificAssessments= this.lifeTrapsAssessments[this.lifeTrapsAssessments.length-1].getSumOfAllSchemas
          let specificAssessments=this.specificAssessments.getSumOfAnsweredSchemas
          let ans={}
        for (let key in specificAssessments){
          ans[key]= {urlLink:"/trapEvaluation/" +(encodeURIComponent(key)), schema:key, value:specificAssessments[key], isSpecific:true}
        }
        for (let key in notSpecificAssessments){
          if (ans[key]){
            continue
          }else{
            ans[key]={urlLink:"/trapEvaluation/" +(encodeURIComponent(key)), schema:key, value:notSpecificAssessments[key], isSpecific:false}
          }
        }
        return ans
        }
      }
      
    },
    getSortedSchemas:{
      get(){
        let categorizedResult={low:{}, medium:{}, high:{}}
        let schemasSum=this.getspecificAndNotSpecificAssessmentsWithUrl
        for (const key in schemasSum) {
          const value = schemasSum[key]["value"];
          if (value < 7) {
            categorizedResult["low"][key]=schemasSum[key]
          } else if (value < 14) {
            categorizedResult["medium"][key]=schemasSum[key]
          } else {
            categorizedResult["high"][key]=schemasSum[key]
          }
        }
        return categorizedResult;
      }
    },
    hasFinishedSpecificEvaluations:{
      get(){
        let notSpecificAssessments= this.lifeTrapsAssessments[this.lifeTrapsAssessments.length-1].getSumOfAllSchemas
          let specificAssessments=this.specificAssessments.getSumOfAnsweredSchemas
        
      }
    },
    getListOfFeelings:{
      get(){
        let feelingsBySchema=this.specificAssessments.getFeelingsOfAnsweredSchemas
        return feelingsBySchema
      }
    }
  }});

  const User = mongoose.model('UsersInfo', userSchema);
  
  module.exports = User;
