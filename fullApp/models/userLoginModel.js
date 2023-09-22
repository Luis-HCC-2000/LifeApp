const lifeTrapsAssessmentSchema= require('./lifeTrapsAssessmentSchema');
const specificAssessmentSchema = require('./specificAssesmentSchema');
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
    trapSchemas:[trapSchema],
    specificAssessments:{
    "Emotional Deprivation": [specificAssessmentSchema],
    "Abandonment/Instability": [specificAssessmentSchema],
    "Mistrust/Abuse": [specificAssessmentSchema],
    "Social Isolation/Alienation": [specificAssessmentSchema],
    "Defectiveness/Shame": [specificAssessmentSchema],
    "Failure to Achieve": [specificAssessmentSchema],
    "Dependence/Incompetence": [specificAssessmentSchema],
    "Vulnerability to Harm or Illness": [specificAssessmentSchema],
    "Enmeshment/Undeveloped Self": [specificAssessmentSchema],
    Subjugation: [specificAssessmentSchema],
    "Self-Sacrifice": [specificAssessmentSchema],
    "Approval-Seeking/Recognition-Seeking": [specificAssessmentSchema],
    "Negativity/Pessimism": [specificAssessmentSchema],
    "Emotional Inhibition": [specificAssessmentSchema],
    "Unrelenting Standards/Hypercriticalness": [specificAssessmentSchema],
    "Entitlement/Grandiosity": [specificAssessmentSchema],
    "Insufficient Self-Control/Self-Discipline": [specificAssessmentSchema],
    "Other-Directedness": [specificAssessmentSchema],
    },
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
    },
    getSpecificLastAssessments:{
      get(){
        let answers=[]
        for (const key in this.specificAssessments) {
          if (this.specificAssessments[key].length > 0) {
            let obj={}
            obj[key]=this.specificAssessments[key][this.specificAssessments[key].length -1]
            answers.push(obj);
          }
        }
        return answers;
      }
    },
    getspecificAndNotSpecificAssessments:{
      get(){
        let specificAsessments=this.getSpecificLastAssessments
        let notSpecificAssessments= this.getLastFirstAssessment
        let answer={}
        for (let key in specificAsessments){
          answer[key]=specificAsessments[key]
        }
        for (let key in notSpecificAssessments){
          if (answer[key]){
            continue
          }else{
            answer[key]=notSpecificAssessments[key]
          }
        }
        return answer
      }
    }
  }});

  const User = mongoose.model('BetterLifeUser', userSchema);
  
  module.exports = User;
