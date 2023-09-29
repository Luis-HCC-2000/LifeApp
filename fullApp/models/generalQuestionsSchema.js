const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const specificAssessmentSchema= require('../specificAssessmentsSchema')

let questions=[
  "Tell me about your early childhood memories. What was it like growing up in your family?",
  'What were your relationships like with your parents or caregivers when you were a child?',
  'How did your parents or caregivers respond to your emotional needs and expressions as a child?',
  'What things are currently hurting you? what do you wanna improve?',
  'What would it mean for you to heal, change or improve?'
]
const generalQuestions = new Schema(
  {
    
  },
  {
    toJSON: { virtuals: true },
    virtuals: {
    },
  }
);

module.exports = generalQuestions;