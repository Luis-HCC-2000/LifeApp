const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allSteps = new Schema(
  {
    'Assessment':[],
    'Schema Education':[],
    'Identification of Triggering Events':[],
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

module.exports = feeling;