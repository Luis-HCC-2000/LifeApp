const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specificAssessmentSchema= require('../specificAssessmentsSchema');
const schemaEducation = require("./Schema Education");

const allSteps = new Schema(
  {
    'Assessment':[specificAssessmentSchema],
    'Schema Education':[schemaEducation],
    'Emotional Awareness':[],
    'Cognitive Restructuring':[],
    'Behavioral Experiments':[],
    'Emotion Regulation':[],
    'Limited  Re-parenting':[],
    'Imagery Work':[],
    'Homework and Skill Practice':[],
    'Relapse Prevention':[],
    'Termination and Follow-up':[],
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = allSteps;