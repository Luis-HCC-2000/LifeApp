const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specificAssessmentSchema = require("./specificAssesmentSchema");

const specificAssessmentsSchema = new Schema(
  {
    "Emotional Deprivation": [specificAssessmentSchema],
    "Abandonment/Instability": [specificAssessmentSchema],
    "Mistrust/Abuse": [specificAssessmentSchema],
    "Social Isolation/Alienation": [specificAssessmentSchema],
    "Defectiveness/Shame": [specificAssessmentSchema],
    "Failure to Achieve": [specificAssessmentSchema],
    "Dependence/Incompetence": [specificAssessmentSchema],
    "Vulnerability to Harm or Illness": [specificAssessmentSchema],
    "Enmeshment/Undeveloped Self": [specificAssessmentSchema],
    "Subjugation": [specificAssessmentSchema],
    "Self-Sacrifice": [specificAssessmentSchema],
    "Approval-Seeking/Recognition-Seeking": [specificAssessmentSchema],
    "Negativity/Pessimism": [specificAssessmentSchema],
    "Emotional Inhibition": [specificAssessmentSchema],
    "Unrelenting Standards/Hypercriticalness": [specificAssessmentSchema],
    "Entitlement/Grandiosity": [specificAssessmentSchema],
    "Insufficient Self-Control/Self-Discipline": [specificAssessmentSchema],
    "Other-Directedness": [specificAssessmentSchema],
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
      getAnsweredSchemas: {
        get() {
          let answeredSchemas = {};
          if(this["Emotional Deprivation"][this["Emotional Deprivation"].length-1]["answers"].length>0){answeredSchemas["Emotional Deprivation"]= this["Emotional Deprivation"][this["Emotional Deprivation"].length -1]}
    if(this["Abandonment/Instability"][this["Abandonment/Instability"].length-1]["answers"].length>0){answeredSchemas["Abandonment/Instability"]= this["Abandonment/Instability"][this["Abandonment/Instability"].length -1]}
    if(this["Mistrust/Abuse"][this["Mistrust/Abuse"].length-1]["answers"].length>0){answeredSchemas["Mistrust/Abuse"]= this["Mistrust/Abuse"][this["Mistrust/Abuse"].length -1]}
    if(this["Social Isolation/Alienation"][this["Social Isolation/Alienation"].length-1]["answers"].length>0){answeredSchemas["Social Isolation/Alienation"]= this["Social Isolation/Alienation"][this["Social Isolation/Alienation"].length -1]}
    if(this["Defectiveness/Shame"][this["Defectiveness/Shame"].length-1]["answers"].length>0){answeredSchemas["Defectiveness/Shame"]= this["Defectiveness/Shame"][this["Defectiveness/Shame"].length -1]}
    if(this["Failure to Achieve"][this["Failure to Achieve"].length-1]["answers"].length>0){answeredSchemas["Failure to Achieve"]= this["Failure to Achieve"][this["Failure to Achieve"].length -1]}
    if(this["Dependence/Incompetence"][this["Dependence/Incompetence"].length-1]["answers"].length>0){answeredSchemas["Dependence/Incompetence"]= this["Dependence/Incompetence"][this["Dependence/Incompetence"].length -1]}
    if(this["Vulnerability to Harm or Illness"][this["Vulnerability to Harm or Illness"].length-1]["answers"].length>0){answeredSchemas["Vulnerability to Harm or Illness"]= this["Vulnerability to Harm or Illness"][this["Vulnerability to Harm or Illness"].length -1]}
    if(this["Enmeshment/Undeveloped Self"][this["Enmeshment/Undeveloped Self"].length-1]["answers"].length>0){answeredSchemas["Enmeshment/Undeveloped Self"]= this["Enmeshment/Undeveloped Self"][this["Enmeshment/Undeveloped Self"].length -1]}
    if(this["Subjugation"][this["Subjugation"].length-1]["answers"].length>0){answeredSchemas["Subjugation"]= this["Subjugation"][this["Subjugation"].length -1]}
    if(this["Self-Sacrifice"][this["Self-Sacrifice"].length-1]["answers"].length>0){answeredSchemas["Self-Sacrifice"]= this["Self-Sacrifice"][this["Self-Sacrifice"].length -1]}
    if(this["Approval-Seeking/Recognition-Seeking"][this["Approval-Seeking/Recognition-Seeking"].length-1]["answers"].length>0){answeredSchemas["Approval-Seeking/Recognition-Seeking"]= this["Approval-Seeking/Recognition-Seeking"][this["Approval-Seeking/Recognition-Seeking"].length -1]}
    if(this["Negativity/Pessimism"][this["Negativity/Pessimism"].length-1]["answers"].length>0){answeredSchemas["Negativity/Pessimism"]= this["Negativity/Pessimism"][this["Negativity/Pessimism"].length -1]}
    if(this["Emotional Inhibition"][this["Emotional Inhibition"].length-1]["answers"].length>0){answeredSchemas["Emotional Inhibition"]= this["Emotional Inhibition"][this["Emotional Inhibition"].length -1]}
    if(this["Unrelenting Standards/Hypercriticalness"][this["Unrelenting Standards/Hypercriticalness"].length-1]["answers"].length>0){answeredSchemas["Unrelenting Standards/Hypercriticalness"]= this["Unrelenting Standards/Hypercriticalness"][this["Unrelenting Standards/Hypercriticalness"].length -1]}
    if(this["Entitlement/Grandiosity"][this["Entitlement/Grandiosity"].length-1]["answers"].length>0){answeredSchemas["Entitlement/Grandiosity"]= this["Entitlement/Grandiosity"][this["Entitlement/Grandiosity"].length -1]}
    if(this["Insufficient Self-Control/Self-Discipline"][this["Insufficient Self-Control/Self-Discipline"].length-1]["answers"].length>0){answeredSchemas["Insufficient Self-Control/Self-Discipline"]= this["Insufficient Self-Control/Self-Discipline"][this["Insufficient Self-Control/Self-Discipline"].length -1]}
    if(this["Other-Directedness"][this["Other-Directedness"].length-1]["answers"].length>0){answeredSchemas["Other-Directedness"]= this["Other-Directedness"][this["Other-Directedness"].length -1]}
          for (let key in Object.keys(this.toObject)) {
            if (this[key].length > 0) {
              let lastValue = this[key][this[key].length - 1];
              answeredSchemas[key] = lastValue;
            }
          }
          return answeredSchemas
        },
      },
      getSumOfAnsweredSchemas: {
        get() {
          let answer = {};
          let answeredSchemas = this.getAnsweredSchemas;
          for (let key in answeredSchemas) {
            answer[key] = answeredSchemas[key]["answers"].reduce((accumulator, currentValue) => {
              return accumulator + currentValue;
            }, 0);
          }
          return answer;
        },
      },
      getFeelingsOfAnsweredSchemas:{
        get(){
          let answer={}
          let answeredSchemas= this.getAnsweredSchemas
          for (let key in answeredSchemas ){
            answer[key]=answeredSchemas[key]['feelings']
          }
          return answer
        }
      }
    },
  }
);

module.exports = specificAssessmentsSchema;
