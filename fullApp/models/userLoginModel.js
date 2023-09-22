const lifeTrapsAssessmentSchema= require('./lifeTrapsAssessmentSchema');
const userTextSchema = require("./userTextSchema")
const specificAssessments= require('./specificAssessmentsSchema')
const trapSchema= require('./userTraps/trapSchema')
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
    lifeTrapsAssessments:[lifeTrapsAssessmentSchema],
    userTexts:[userTextSchema],
    trapSchemas:[trapSchema],
    specificAssessments:specificAssessments,
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
          // let specificAssessments=this.specificAssessments.getSumOfAnsweredSchemas
          let ans={}
        // for (let key in specificAssessments){
        //   ans[key]= specificAssessments[key]
        // }
        for (let key in notSpecificAssessments){
          if (ans[key]){
            continue
          }else{
            let link=
            ans[key]={urlLink:"/trapEvaluation/" +(encodeURIComponent(key)), schema:key, value:notSpecificAssessments[key]}
          }
        }
        return ans
        }
      }
      
    },
    // getsortedSchemas:{
    //   get(){
    //     let categorizedResult={low:[], medium:[], high:[]}
    //     let schemasSum=this.getSumOfAllSchemas
    //     for (const key in schemasSum) {
    //       const value = schemasSum[key];
    //       if (value < 7) {
    //         categorizedResult["low"].push({schema:key, value:value})
    //       } else if (value < 14) {
    //         categorizedResult["medium"].push({schema:key, value:value})
    //       } else {
    //         categorizedResult["high"].push({schema:key, value:value})
    //       }
    //     }
    //     return categorizedResult;
    //   }
    // }
  }});

  const User = mongoose.model('UsersInfo', userSchema);
  
  module.exports = User;
